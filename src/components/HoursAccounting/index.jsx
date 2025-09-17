import React, { useState, useMemo, useEffect } from "react";
import { FormButton } from "../App/styled";
import { set, ref, update, push } from "firebase/database";
import { db, auth } from "../../firebaseConfig/firebase";

import Modal from "../Modal";

// Преобразование Date в строку формата "dd-mm-yyyy"
function formatDateToDDMMYYYY(date) {
  if (!(date instanceof Date) || isNaN(date)) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // месяцы с 0
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

// Парсит "dd-mm-yyyy" → Date
function parseDateString(ds) {
  const [dd, mm, yyyy] = ds.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
}

// Генерация уникального ID для занятия в рамках дня
function generateLessonId(items) {
  if (!items || items.length === 0) return 1;
  const maxId = items.reduce((max, item) => Math.max(max, item.id || 0), 0);
  return maxId + 1;
}

export const ScheduleTable = ({
  rawData, // Пропс с данными расписания
  onRawDataChange, // Функция для изменения rawData в родительском компоненте
  userTarification, // НОВЫЙ ПРОПС: список всех предметов+групп
}) => {
  // календарь
  const [currentMonth, setCurrentMonth] = useState(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  // для модалки
  const [modalActive, setModalActive] = useState(false);
  const [addNewDateModal, setAddNewDayModal] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [modalInfo, setModalInfo] = useState({
    date: "",
    lessonName: "",
    groupName: "",
    total: 0,
  });
  const [modalItems, setModalItems] = useState([]);
  const [newItem, setNewItem] = useState({ isLab: false, cabinet: "" });

  // useMemo для пересборки таблицы
  const { datesInMonth, rows, totalsByDate, grandTotal } = useMemo(() => {
    // 1) даты
    const allRawDataDates = Object.keys(rawData).map((ds) => ({
      ds,
      date: parseDateString(ds),
    }));
    const datesInMonth = allRawDataDates
      .filter(
        ({ date }) =>
          date.getFullYear() === currentMonth.getFullYear() &&
          date.getMonth() === currentMonth.getMonth()
      )
      .sort((a, b) => a.date - b.date)
      .map((o) => o.ds);

    // 2) ключи предметов/групп: теперь берем из userTarification
    const groupKeys = new Set();
    userTarification.forEach((item) => {
      groupKeys.add(`${item.lesson}|||${item.groupName}`); // Используем item.lesson и item.groupName из userTarification
    });
    // Дополнительно можно добавить ключи из rawData, чтобы учесть те, которых, возможно, нет в userTarification
    Object.values(rawData)
      .flat()
      .forEach((item) => {
        if (item && item.lessonName && item.groupName) {
          groupKeys.add(`${item.lessonName}|||${item.groupName}`);
        }
      });

    // 3) строим строки: для каждой даты храним { labs, lectures, total }
    const rows = Array.from(groupKeys).map((key) => {
      const [lessonName, groupName] = key.split("|||");
      const cells = {};
      let sum = 0;

      datesInMonth.forEach((ds) => {
        // Убедимся, что rawData[ds] - массив. Если нет данных за этот день, itemsForDate будет пустым.
        const itemsForDate = Array.isArray(rawData[ds]) ? rawData[ds] : [];
        const items = itemsForDate.filter(
          (it) => it.lessonName === lessonName && it.groupName === groupName
        );
        const labsCount = items.filter((it) => it.isLab).length;
        const lecturesCount = items.filter((it) => !it.isLab).length;
        const total = labsCount + lecturesCount;
        cells[ds] = { labs: labsCount, lectures: lecturesCount, total };
        sum += total;
      });

      return { lessonName, groupName, cells, sum };
    });

    // 4) итоги
    const totalsByDate = {};
    let grandTotal = 0;
    datesInMonth.forEach((ds) => {
      const daySum = rows.reduce(
        (acc, r) => acc + (r.cells[ds]?.total || 0),
        0
      );
      totalsByDate[ds] = daySum;
      grandTotal += daySum;
    });

    return { datesInMonth, rows, totalsByDate, grandTotal };
  }, [rawData, currentMonth, userTarification]); // userTarification добавлен в зависимости

  // переход по месяцам
  const prevMonth = () =>
    setCurrentMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  // фон ячеек
  const getBg = ({ labs, lectures }) => {
    if (labs > 0 && lectures > 0)
      return "linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)";
    if (labs > 0) return "rgb(255,122,92)";
    if (lectures > 0) return "rgb(102,153,204)";
    return "transparent";
  };

  // стили липкой колонки
  const stickyStyle = {
    position: "sticky",
    left: 0,
    background: "#efefef",
    zIndex: 2,
    width: 200,
    border: "2px solid #999",
  };
  const stickyHeaderStyle = { ...stickyStyle, zIndex: 3, textAlign: "left" };

  // открытие модалки
  const openModal = (ds, lessonName, groupName, sum) => {
    const items = Array.isArray(rawData[ds])
      ? rawData[ds].filter(
          (it) => it.lessonName === lessonName && it.groupName === groupName
        )
      : [];

    setModalInfo({ date: ds, lessonName, groupName, total: sum });
    setModalItems(items);
    setNewItem({ isLab: false, cabinet: "" });
    setModalActive(true);
  };

  // --- Firebase операции ---

  // Функция для добавления урока
  const handleCreateLesson = async (lessonData) => {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("Пользователь не авторизован.");
      alert("Пожалуйста, авторизуйтесь.");
      return;
    }

    const { date, lessonName, groupName, isLab, cabinet } = lessonData;

    // Генерируем уникальный ID для урока в рамках дня
    const currentDayLessons = rawData[date] || [];
    const newId = generateLessonId(currentDayLessons);

    const newLesson = {
      id: newId, // используем сгенерированный ID
      lessonName,
      groupName,
      isLab,
      cabinet,
    };

    const newDayData = [...currentDayLessons, newLesson];

    // Обновляем родительский rawData через пропс
    onRawDataChange((prev) => ({
      ...prev,
      [date]: newDayData,
    }));

    // Отправляем весь массив занятий на эту дату в Firebase
    const path = `users/${userId}/hours/${date}`;
    try {
      await set(ref(db, path), newDayData);
      console.log(`Урок ${newLesson.id} добавлен на ${date} и отправлен в DB.`);
      // Обновляем modalItems, чтобы модалка отображала новый урок
      if (modalActive && modalInfo.date === date) {
        setModalItems((prev) => [...prev, newLesson]);
      }
    } catch (error) {
      console.error("Ошибка при добавлении урока в Firebase:", error);
      alert("Ошибка при добавлении урока.");
      // Откатываем локальное изменение, если ошибка (через onRawDataChange)
      onRawDataChange((prev) => ({ ...prev, [date]: currentDayLessons }));
    }
  };

  // Функция для обновления урока
  const handleUpdateLesson = async (lessonId, updates) => {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("Пользователь не авторизован.");
      alert("Пожалуйста, авторизуйтесь.");
      return;
    }

    const { date } = modalInfo; // Берем дату из открытой модалки
    if (!date || !Array.isArray(rawData[date])) return;

    const currentDayLessons = rawData[date];
    const updatedDayLessons = currentDayLessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, ...updates } : lesson
    );

    // Обновляем родительский rawData через пропс
    onRawDataChange((prev) => ({
      ...prev,
      [date]: updatedDayLessons,
    }));

    // Отправляем весь массив занятий на эту дату в Firebase
    const path = `users/${userId}/hours/${date}`;
    try {
      await set(ref(db, path), updatedDayLessons);
      console.log(`Урок ${lessonId} на ${date} обновлен в DB.`);
      // Обновляем modalItems
      setModalItems((prev) =>
        prev.map((item) =>
          item.id === lessonId ? { ...item, ...updates } : item
        )
      );
    } catch (error) {
      console.error("Ошибка при обновлении урока в Firebase:", error);
      alert("Ошибка при обновлении урока.");
      // Откатываем локальное изменение
      onRawDataChange((prev) => ({ ...prev, [date]: currentDayLessons }));
    }
  };

  // Функция для удаления урока
  const handleDeleteLesson = async (lessonId) => {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("Пользователь не авторизован.");
      alert("Пожалуйста, авторизуйтесь.");
      return;
    }

    const { date } = modalInfo; // Берем дату из открытой модалки
    if (!date || !Array.isArray(rawData[date])) return;

    const currentDayLessons = rawData[date];
    const filteredDayLessons = currentDayLessons.filter(
      (lesson) => lesson.id !== lessonId
    );

    // Обновляем родительский rawData через пропс
    onRawDataChange((prev) => ({
      ...prev,
      [date]: filteredDayLessons,
    }));

    // Отправляем обновленный (без удаленного урока) массив занятий на эту дату в Firebase
    const path = `users/${userId}/hours/${date}`;
    try {
      // Если уроков не осталось, можно удалить весь узел даты из DB
      if (filteredDayLessons.length === 0) {
        await set(ref(db, path), null); // Удалит узел
      } else {
        await set(ref(db, path), filteredDayLessons);
      }
      console.log(`Урок ${lessonId} на ${date} удален из DB.`);
      // Обновляем modalItems
      setModalItems((prev) => prev.filter((item) => item.id !== lessonId));
      // Если после удаления уроков не осталось, можно закрыть модалку
      if (filteredDayLessons.length === 0) {
        setModalActive(false);
      }
    } catch (error) {
      console.error("Ошибка при удалении урока из Firebase:", error);
      alert("Ошибка при удалении урока.");
      // Откатываем локальное изменение
      onRawDataChange((prev) => ({ ...prev, [date]: currentDayLessons }));
    }
  };

  // хендлеры модалки, теперь вызывающие Firebase-функции
  const handleItemChange = (idx, field, val) => {
    const copy = [...modalItems];
    copy[idx] = { ...copy[idx], [field]: val };
    setModalItems(copy);
  };

  const handleSaveItem = (item) =>
    handleUpdateLesson(item.id, { isLab: item.isLab, cabinet: item.cabinet });
  const handleDeleteItem = (item) => handleDeleteLesson(item.id);
  const handleAddNew = () => {
    handleCreateLesson({
      date: modalInfo.date,
      lessonName: modalInfo.lessonName,
      groupName: modalInfo.groupName,
      isLab: newItem.isLab,
      cabinet: newItem.cabinet,
    });
    setNewItem({ isLab: false, cabinet: "" });
  };

  // --- Функция handleAddDay (локальное добавление даты) ---
  const handleAddDay = () => {
    if (!selectDate) {
      alert("Пожалуйста, выберите дату.");
      return;
    }

    // Проверяем, есть ли уже эта дата локально
    if (Object.keys(rawData).includes(selectDate)) {
      alert("Дата уже существует в таблице.");
      return;
    }

    // Добавляем пустой массив для этой даты в локальный rawData через onRawDataChange
    onRawDataChange((prev) => ({
      ...prev,
      [selectDate]: [], // Инициализируем пустым массивом для новой даты
    }));

    setAddNewDayModal(false); // Закрываем модалку после добавления даты
    console.log(`Дата ${selectDate} добавлена локально.`);
    // На сервер отправится, когда в эту дату будет добавлен первый урок через handleCreateLesson.
  };

  return (
    <div
      style={{
        width: 800,
        height: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <FormButton onClick={prevMonth}>&larr; Пред. месяц</FormButton>
        <h2>
          Расписание за{" "}
          {currentMonth.toLocaleString("ru-RU", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <FormButton onClick={nextMonth}>След. месяц &rarr;</FormButton>
        <FormButton
          onClick={() => {
            setAddNewDayModal(true);
            setSelectDate(""); // Сбрасываем выбранную дату
          }}
        >
          Добавить дату
        </FormButton>
      </div>

      <div style={{ width: "100%", overflowX: "auto", marginTop: 12 }}>
        <table
          border={1}
          cellPadding={4}
          style={{ borderCollapse: "collapse", width: "max-content" }}
        >
          <thead>
            <tr>
              <th style={stickyHeaderStyle}>Предмет / Группа</th>
              {datesInMonth.map((ds) => (
                <th key={ds} style={{ width: 55 }}>
                  {ds}
                </th>
              ))}
              <th>Итого</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ lessonName, groupName, cells, sum }) => (
              <tr key={`${lessonName}|||${groupName}`}>
                <td style={stickyStyle}>
                  {lessonName}
                  <br />
                  <small>({groupName})</small>
                </td>
                {datesInMonth.map((ds) => {
                  const { labs, lectures, total } = cells[ds];
                  return (
                    <td
                      key={ds}
                      onClick={() =>
                        openModal(ds, lessonName, groupName, totalsByDate[ds])
                      }
                      style={{
                        cursor: "pointer",
                        textAlign: "center",
                        background: getBg({ labs, lectures }),
                      }}
                    >
                      {total || ""}
                    </td>
                  );
                })}
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  {sum}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ ...stickyStyle, fontWeight: "bold" }}>
                Всего по дням:
              </td>
              {datesInMonth.map((ds) => (
                <td
                  key={ds}
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {totalsByDate[ds]}
                </td>
              ))}
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {grandTotal}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Модальное окно редактирования/добавления уроков */}
      <Modal active={modalActive} setActive={setModalActive}>
        <h3>
          {modalInfo.lessonName} ({modalInfo.groupName})<br />
          Дата: {modalInfo.date}
        </h3>

        {/* Список существующих занятий */}
        {modalItems.length > 0 ? (
          modalItems.map((it, idx) => (
            <div
              key={it.id}
              style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}
            >
              <label>
                Тип:
                <select
                  value={it.isLab ? "lab" : "lec"}
                  onChange={(e) =>
                    handleItemChange(idx, "isLab", e.target.value === "lab")
                  }
                >
                  <option value="lec">Лекция</option>
                  <option value="lab">Лабораторная</option>
                </select>
              </label>
              <label style={{ marginLeft: 16 }}>
                Кабинет:
                <input
                  type="text"
                  value={it.cabinet || ""}
                  onChange={(e) =>
                    handleItemChange(idx, "cabinet", e.target.value)
                  }
                />
              </label>
              <button
                style={{ marginLeft: 16 }}
                onClick={() => handleSaveItem(modalItems[idx])}
              >
                Сохранить
              </button>
              <button
                style={{ marginLeft: 8, color: "red" }}
                onClick={() => handleDeleteItem(it)} // Передаем весь item, чтобы получить id
              >
                Удалить
              </button>
            </div>
          ))
        ) : (
          <p>Пока нет занятий по этому предмету и группе на эту дату.</p>
        )}

        {/* Форма добавления нового занятия */}
        <div
          style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: "2px solid #000",
          }}
        >
          <h4>Добавить занятие</h4>
          <label>
            Тип:
            <select
              value={newItem.isLab ? "lab" : "lec"}
              onChange={(e) =>
                setNewItem((n) => ({
                  ...n,
                  isLab: e.target.value === "lab",
                }))
              }
            >
              <option value="lec">Лекция</option>
              <option value="lab">Лабораторная</option>
            </select>
          </label>
          <label style={{ marginLeft: 16 }}>
            Кабинет:
            <input
              type="text"
              value={newItem.cabinet}
              onChange={(e) =>
                setNewItem((n) => ({
                  ...n,
                  cabinet: e.target.value,
                }))
              }
            />
          </label>
          <button style={{ marginLeft: 16 }} onClick={handleAddNew}>
            Добавить
          </button>
        </div>

        <div style={{ marginTop: 24, textAlign: "right" }}>
          <button onClick={() => setModalActive(false)}>Закрыть</button>
        </div>
      </Modal>

      {/* Модальное окно для выбора новой даты */}
      <Modal active={addNewDateModal} setActive={setAddNewDayModal}>
        <h3>Выберите дату для добавления</h3>
        <input
          type="date"
          onChange={(e) => {
            const selected = e.target.valueAsDate;
            if (selected) {
              setSelectDate(formatDateToDDMMYYYY(selected));
            } else {
              setSelectDate("");
            }
          }}
        />
        <FormButton
          onClick={() => {
            handleAddDay();
          }}
          disabled={!selectDate} // Делаем кнопку неактивной, пока дата не выбрана
        >
          Добавить
        </FormButton>
        <button onClick={() => setAddNewDayModal(false)}>Отмена</button>
      </Modal>
    </div>
  );
};
