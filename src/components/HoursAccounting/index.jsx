import { useState, useMemo } from "react";
import { FormButton } from "../App/styled";
import { set, ref } from "firebase/database";
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
  // Используем UTC для New Date, чтобы избежать проблем с часовыми поясами
  // и всегда получать 1-й день месяца
  return new Date(Date.UTC(yyyy, mm - 1, dd));
}

// Генерация уникального ID для занятия в рамках дня
function generateLessonId(items) {
  if (!items || items.length === 0) return 1;
  const maxId = items.reduce((max, item) => Math.max(max, item.id || 0), 0);
  return maxId + 1;
}

// Определить тип группы (ПТО или ССО)
function isPTOGroup(groupName = "") {
  return typeof groupName === "string" && groupName.trim().startsWith("П");
}

// Отсортировать ключи дат "dd-mm-yyyy"
function sortDateKeysAsc(dateKeys) {
  return [...dateKeys].sort((a, b) => parseDateString(a) - parseDateString(b));
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

  // >>> NEW: State для отслеживания наведения мыши
  const [hoveredColumn, setHoveredColumn] = useState(null); // ds hovered column
  const [hoveredRow, setHoveredRow] = useState(null); // lessonName|||groupName hovered row

  // useMemo для пересборки таблицы
  const { datesInMonth, rows, totalsByDate, grandTotal } = useMemo(() => {
    // 1) Все даты во всём rawData, отсортированные
    const allDateKeys = Object.keys(rawData || {});
    const allDatesSorted = sortDateKeysAsc(allDateKeys);

    // 2) Даты только текущего месяца для отображения колонок
    const datesInMonth = allDatesSorted
      .map((ds) => ({ ds, date: parseDateString(ds) }))
      .filter(
        ({ date }) =>
          date.getFullYear() === currentMonth.getFullYear() &&
          date.getMonth() === currentMonth.getMonth()
      )
      .map((o) => o.ds);

    // 3) Ключи предметов/групп: теперь берем из userTarification + из rawData
    const groupKeys = new Set();
    (userTarification || []).forEach((item) => {
      if (!item) return;
      groupKeys.add(`${item.lesson}|||${item.groupName}`);
    });

    Object.values(rawData || {})
      .flat()
      .forEach((item) => {
        if (item && item.lessonName && item.groupName) {
          groupKeys.add(`${item.lessonName}|||${item.groupName}`);
        }
      });

    // 4) Строим строки: для каждой даты храним { labs, lectures, total, indices }
    const rows = Array.from(groupKeys).map((key) => {
      const [lessonName, groupName] = key.split("|||");
      const isPTO = isPTOGroup(groupName);

      // Собираем все часы для данной комбинации lessonName + groupName,
      // отсортированные по дате и затем по id внутри дня (для стабильности)
      const allHoursForGroup = [];
      allDatesSorted.forEach((ds) => {
        const itemsForDate = Array.isArray(rawData[ds]) ? rawData[ds] : [];
        itemsForDate
          .filter(
            (it) => it.lessonName === lessonName && it.groupName === groupName
          )
          .sort((a, b) => (a.id || 0) - (b.id || 0)) // Сортируем по id, чтобы индексация была стабильной
          .forEach((item) => allHoursForGroup.push({ item, ds }));
      });

      // Присваиваем индексы занятиям
      const hourToLessonIndexMap = new Map(); // Карта { item.id в день + ds -> index занятия }
      let currentLessonIndex = 0;
      let ssoHourCountForCurrentLesson = 0; // Для ССО: сколько часов уже в текущем занятии

      allHoursForGroup.forEach(({ item, ds }, i) => {
        if (isPTO) {
          currentLessonIndex += 1;
          hourToLessonIndexMap.set(`${ds}-${item.id}`, currentLessonIndex);
        } else {
          // ССО
          ssoHourCountForCurrentLesson += 1;
          if (ssoHourCountForCurrentLesson === 1) {
            // Первый час нового занятия или нечетный час
            currentLessonIndex += 1;
          }
          hourToLessonIndexMap.set(`${ds}-${item.id}`, currentLessonIndex);

          // Если набрали 2 часа, сбрасываем счетчик для следующего занятия
          if (ssoHourCountForCurrentLesson === 2) {
            ssoHourCountForCurrentLesson = 0;
          }
        }
      });

      // Теперь формируем `cells` только для дат текущего месяца
      const cells = {};
      let sumLessons = currentLessonIndex; // Общее количество занятий по этой строке

      datesInMonth.forEach((ds) => {
        const itemsForDate = Array.isArray(rawData[ds]) ? rawData[ds] : [];
        const filteredItemsForDate = itemsForDate.filter(
          (it) => it.lessonName === lessonName && it.groupName === groupName
        );

        const labsCount = filteredItemsForDate.filter((it) => it.isLab).length;
        const lecturesCount = filteredItemsForDate.filter(
          (it) => !it.isLab
        ).length;
        const total = labsCount + lecturesCount;

        // Собираем уникальные индексы занятий для этой даты
        const indicesForDay = new Set();
        filteredItemsForDate.forEach((item) => {
          const index = hourToLessonIndexMap.get(`${ds}-${item.id}`);
          if (index) {
            indicesForDay.add(index);
          }
        });

        cells[ds] = {
          labs: labsCount,
          lectures: lecturesCount,
          total,
          indices: Array.from(indicesForDay).sort((a, b) => a - b),
        };
      });

      return { lessonName, groupName, cells, sum: sumLessons }; // sum теперь — это общее количество занятий
    });

    // 5) Итоги по дням текущего месяца (суммарное кол-во часов)
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
  }, [rawData, currentMonth, userTarification]);

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

  // >>> NEW: Стили для подсветки при наведении
  const highlightColor = "rgba(199, 18, 18, 0.301)"; // Очень легкая полупрозрачная подсветка

  // Функция для создания стиля фона, который не перекрывает getBg, но добавляет подсветку
  const getCombinedBgStyle = (cellData, ds, rowKey) => {
    const originalBg = getBg(cellData);
    const isCellHovered = hoveredColumn === ds || hoveredRow === rowKey;

    if (isCellHovered) {
      // Если ячейка hovered, смешиваем оригинальный фон с highlightColor
      // Это работает для solid цветов и градиентов, делая их чуть светлее/темнее
      return {
        background: originalBg,
        boxShadow: `inset 0 0 0 1000px ${highlightColor}`, // накладываем полупрозрачный слой
      };
    }
    return { background: originalBg };
  };

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

  // --- Firebase операции (без изменений) ---
  const handleCreateLesson = async (lessonData) => {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("Пользователь не авторизован.");
      alert("Пожалуйста, авторизуйтесь.");
      return;
    }
    const { date, lessonName, groupName, isLab, cabinet } = lessonData;
    const currentDayLessons = rawData[date] || [];
    const newId = generateLessonId(currentDayLessons);
    const newLesson = {
      id: newId,
      lessonName,
      groupName,
      isLab,
      cabinet,
    };
    const newDayData = [...currentDayLessons, newLesson];
    onRawDataChange((prev) => ({
      ...prev,
      [date]: newDayData,
    }));
    const path = `users/${userId}/hours/${date}`;
    try {
      await set(ref(db, path), newDayData);
      console.log(`Урок ${newLesson.id} добавлен на ${date} и отправлен в DB.`);
      if (modalActive && modalInfo.date === date) {
        setModalItems((prev) => [...prev, newLesson]);
      }
    } catch (error) {
      console.error("Ошибка при добавлении урока в Firebase:", error);
      alert("Ошибка при добавлении урока.");
      onRawDataChange((prev) => ({ ...prev, [date]: currentDayLessons }));
    }
  };

  const handleUpdateLesson = async (lessonId, updates) => {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("Пользователь не авторизован.");
      alert("Пожалуйста, авторизуйтесь.");
      return;
    }
    const { date } = modalInfo;
    if (!date || !Array.isArray(rawData[date])) return;
    const currentDayLessons = rawData[date];
    const updatedDayLessons = currentDayLessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, ...updates } : lesson
    );
    onRawDataChange((prev) => ({
      ...prev,
      [date]: updatedDayLessons,
    }));
    const path = `users/${userId}/hours/${date}`;
    try {
      await set(ref(db, path), updatedDayLessons);
      console.log(`Урок ${lessonId} на ${date} обновлен в DB.`);
      setModalItems((prev) =>
        prev.map((item) =>
          item.id === lessonId ? { ...item, ...updates } : item
        )
      );
    } catch (error) {
      console.error("Ошибка при обновлении урока в Firebase:", error);
      alert("Ошибка при обновлении урока.");
      onRawDataChange((prev) => ({ ...prev, [date]: currentDayLessons }));
    }
  };

  const handleDeleteLesson = async (lessonId) => {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("Пользователь не авторизован.");
      alert("Пожалуйста, авторизуйтесь.");
      return;
    }
    const { date } = modalInfo;
    if (!date || !Array.isArray(rawData[date])) return;
    const currentDayLessons = rawData[date];
    const filteredDayLessons = currentDayLessons.filter(
      (lesson) => lesson.id !== lessonId
    );
    onRawDataChange((prev) => ({
      ...prev,
      [date]: filteredDayLessons,
    }));
    const path = `users/${userId}/hours/${date}`;
    try {
      if (filteredDayLessons.length === 0) {
        await set(ref(db, path), null); // Удалит узел
      } else {
        await set(ref(db, path), filteredDayLessons);
      }
      console.log(`Урок ${lessonId} на ${date} удален из DB.`);
      setModalItems((prev) => prev.filter((item) => item.id !== lessonId));
      if (filteredDayLessons.length === 0) {
        setModalActive(false);
      }
    } catch (error) {
      console.error("Ошибка при удалении урока из Firebase:", error);
      alert("Ошибка при удалении урока.");
      onRawDataChange((prev) => ({ ...prev, [date]: currentDayLessons }));
    }
  };

  // хендлеры модалки
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
    if (Object.keys(rawData).includes(selectDate)) {
      alert("Дата уже существует в таблице.");
      return;
    }
    onRawDataChange((prev) => ({
      ...prev,
      [selectDate]: [], // Инициализируем пустым массивом для новой даты
    }));
    setAddNewDayModal(false); // Закрываем модалку после добавления даты
    console.log(`Дата ${selectDate} добавлена локально.`);
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
              <th
                style={{
                  ...stickyHeaderStyle,
                  background:
                    hoveredRow === "header-row-key"
                      ? `#efefef ${highlightColor}`
                      : "#efefef", // Подсветка для sticky-заголовка
                }}
                onMouseEnter={() => setHoveredRow("header-row-key")}
                onMouseLeave={() => setHoveredRow(null)}
              >
                Предмет / Группа
              </th>
              {datesInMonth.map((ds) => (
                <th
                  key={ds}
                  style={{
                    width: 55,
                    background:
                      hoveredColumn === ds ? highlightColor : "transparent", // подсветка столбца
                  }}
                  onMouseEnter={() => setHoveredColumn(ds)}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  {ds}
                </th>
              ))}
              <th
                style={{
                  background:
                    hoveredRow === "header-row-key"
                      ? highlightColor
                      : "transparent", // Подсветка "Итого"
                }}
                onMouseEnter={() => setHoveredRow("header-row-key")}
                onMouseLeave={() => setHoveredRow(null)}
              >
                Итого (занятий)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ lessonName, groupName, cells, sum }) => {
              const rowKey = `${lessonName}|||${groupName}`;
              return (
                <tr
                  key={rowKey}
                  onMouseEnter={() => setHoveredRow(rowKey)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td
                    style={{
                      ...stickyStyle,
                      background:
                        hoveredRow === rowKey
                          ? `#efefef ${highlightColor}`
                          : "#efefef", // Подсветка для sticky-ячейки строки
                    }}
                  >
                    {lessonName}
                    <br />
                    <small>({groupName})</small>
                  </td>
                  {datesInMonth.map((ds) => {
                    const { labs, lectures, total, indices } = cells[ds] || {
                      labs: 0,
                      lectures: 0,
                      total: 0,
                      indices: [],
                    };
                    return (
                      <td
                        key={ds}
                        onClick={() =>
                          openModal(
                            ds,
                            lessonName,
                            groupName,
                            totalsByDate[ds] // передаем общую сумму часов за день в модалку
                          )
                        }
                        style={{
                          cursor: "pointer",
                          textAlign: "left",
                          ...getCombinedBgStyle({ labs, lectures }, ds, rowKey), // Используем объединенный стиль фона
                          position: "relative",
                          padding: "4px",
                          fontSize: "12px",
                        }}
                        onMouseEnter={() => {
                          setHoveredColumn(ds);
                          setHoveredRow(rowKey);
                        }}
                        onMouseLeave={() => {
                          setHoveredColumn(null);
                          setHoveredRow(null);
                        }}
                      >
                        {/* Кол-во часов по-прежнему крупнее */}
                        <div style={{ fontWeight: "bold" }}>{total || ""}</div>
                        {/* Индексы занятий — справа-снизу меньшим шрифтом */}
                        {indices && indices.length > 0 && (
                          <div
                            style={{
                              position: "absolute",
                              right: 2,
                              bottom: 2,
                              fontSize: "10px",
                              opacity: 0.8,
                              textAlign: "right",
                            }}
                          >
                            {indices.join(",")}
                          </div>
                        )}
                      </td>
                    );
                  })}
                  <td
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      background:
                        hoveredRow === rowKey ? highlightColor : "transparent", // Подсветка для итогов строки
                    }}
                  >
                    {sum}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr
              onMouseEnter={() => setHoveredRow("footer-row-key")}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td
                style={{
                  ...stickyStyle,
                  fontWeight: "bold",
                  background:
                    hoveredRow === "footer-row-key"
                      ? `#efefef ${highlightColor}`
                      : "#efefef", // Подсветка для sticky-ячейки футера
                }}
              >
                Всего часов по дням:
              </td>
              {datesInMonth.map((ds) => (
                <td
                  key={ds}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    background:
                      hoveredColumn === ds || hoveredRow === "footer-row-key"
                        ? highlightColor
                        : "transparent",
                  }}
                  onMouseEnter={() => {
                    setHoveredColumn(ds);
                    setHoveredRow("footer-row-key");
                  }}
                  onMouseLeave={() => {
                    setHoveredColumn(null);
                    setHoveredRow(null);
                  }}
                >
                  {totalsByDate[ds]}
                </td>
              ))}
              <td
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  background:
                    hoveredRow === "footer-row-key"
                      ? highlightColor
                      : "transparent",
                }}
              >
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
