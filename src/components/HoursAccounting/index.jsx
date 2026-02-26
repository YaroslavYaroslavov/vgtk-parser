import { useState, useMemo } from "react";
import { FormButton } from "../App/styled";
import { set, ref } from "firebase/database";
import { db, auth } from "../../firebaseConfig/firebase";
import Modal from "../Modal";
import * as S from "./styled";

// Преобразование Date в строку формата "dd-mm-yyyy"
function formatDateToDDMMYYYY(date) {
  if (!(date instanceof Date) || isNaN(date)) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

// Парсит "dd-mm-yyyy" → Date
function parseDateString(ds) {
  const [dd, mm, yyyy] = ds.split("-").map(Number);
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
  rawData,
  onRawDataChange,
  userTarification,
}) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

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

  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const { datesInMonth, rows, totalsByDate, grandTotal } = useMemo(() => {
    const allDateKeys = Object.keys(rawData || {});
    const allDatesSorted = sortDateKeysAsc(allDateKeys);

    const datesInMonth = allDatesSorted
      .map((ds) => ({ ds, date: parseDateString(ds) }))
      .filter(
        ({ date }) =>
          date.getFullYear() === currentMonth.getFullYear() &&
          date.getMonth() === currentMonth.getMonth(),
      )
      .map((o) => o.ds);

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

    const rows = Array.from(groupKeys).map((key) => {
      const [lessonName, groupName] = key.split("|||");
      const isPTO = isPTOGroup(groupName);

      const allHoursForGroup = [];
      allDatesSorted.forEach((ds) => {
        const itemsForDate = Array.isArray(rawData[ds]) ? rawData[ds] : [];
        itemsForDate
          .filter(
            (it) => it.lessonName === lessonName && it.groupName === groupName,
          )
          .sort((a, b) => (a.id || 0) - (b.id || 0))
          .forEach((item) => allHoursForGroup.push({ item, ds }));
      });

      const hourToLessonIndexMap = new Map();
      let currentLessonIndex = 0;
      let ssoHourCountForCurrentLesson = 0;

      allHoursForGroup.forEach(({ item, ds }, i) => {
        if (isPTO) {
          currentLessonIndex += 1;
          hourToLessonIndexMap.set(`${ds}-${item.id}`, currentLessonIndex);
        } else {
          ssoHourCountForCurrentLesson += 1;
          if (ssoHourCountForCurrentLesson === 1) {
            currentLessonIndex += 1;
          }
          hourToLessonIndexMap.set(`${ds}-${item.id}`, currentLessonIndex);

          if (ssoHourCountForCurrentLesson === 2) {
            ssoHourCountForCurrentLesson = 0;
          }
        }
      });

      const cells = {};
      let sumLessons = currentLessonIndex;

      datesInMonth.forEach((ds) => {
        const itemsForDate = Array.isArray(rawData[ds]) ? rawData[ds] : [];
        const filteredItemsForDate = itemsForDate.filter(
          (it) => it.lessonName === lessonName && it.groupName === groupName,
        );

        const labsCount = filteredItemsForDate.filter((it) => it.isLab).length;
        const lecturesCount = filteredItemsForDate.filter(
          (it) => !it.isLab,
        ).length;
        const total = labsCount + lecturesCount;

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

      return { lessonName, groupName, cells, sum: sumLessons };
    });

    const totalsByDate = {};
    let grandTotal = 0;
    datesInMonth.forEach((ds) => {
      const daySum = rows.reduce(
        (acc, r) => acc + (r.cells[ds]?.total || 0),
        0,
      );
      totalsByDate[ds] = daySum;
      grandTotal += daySum;
    });

    return { datesInMonth, rows, totalsByDate, grandTotal };
  }, [rawData, currentMonth, userTarification]);

  const prevMonth = () =>
    setCurrentMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  const getBg = ({ labs, lectures }) => {
    if (labs > 0 && lectures > 0)
      return "linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)";
    if (labs > 0) return "rgb(255,122,92)";
    if (lectures > 0) return "rgb(102,153,204)";
    return "transparent";
  };

  const highlightColor = "rgba(199, 18, 18, 0.301)";

  const getCombinedBgStyle = (cellData, ds, rowKey) => {
    const originalBg = getBg(cellData);
    const isCellHovered = hoveredColumn === ds || hoveredRow === rowKey;

    if (isCellHovered) {
      return {
        background: originalBg,
        boxShadow: `inset 0 0 0 1000px ${highlightColor}`,
      };
    }
    return { background: originalBg };
  };

  const openModal = (ds, lessonName, groupName, sum) => {
    const items = Array.isArray(rawData[ds])
      ? rawData[ds].filter(
          (it) => it.lessonName === lessonName && it.groupName === groupName,
        )
      : [];
    setModalInfo({ date: ds, lessonName, groupName, total: sum });
    setModalItems(items);
    setNewItem({ isLab: false, cabinet: "" });
    setModalActive(true);
  };

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
      lesson.id === lessonId ? { ...lesson, ...updates } : lesson,
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
          item.id === lessonId ? { ...item, ...updates } : item,
        ),
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
      (lesson) => lesson.id !== lessonId,
    );
    onRawDataChange((prev) => ({
      ...prev,
      [date]: filteredDayLessons,
    }));
    const path = `users/${userId}/hours/${date}`;
    try {
      if (filteredDayLessons.length === 0) {
        await set(ref(db, path), null);
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
      [selectDate]: [],
    }));
    setAddNewDayModal(false);
    console.log(`Дата ${selectDate} добавлена локально.`);
  };

  return (
    <S.ScheduleContainer>
      <S.NavigationContainer>
        <FormButton onClick={prevMonth}>&larr; Пред. месяц</FormButton>
        <S.MonthTitle>
          Расписание за{" "}
          {currentMonth.toLocaleString("ru-RU", {
            month: "long",
            year: "numeric",
          })}
        </S.MonthTitle>
        <FormButton onClick={nextMonth}>След. месяц &rarr;</FormButton>
        <FormButton
          onClick={() => {
            setAddNewDayModal(true);
            setSelectDate("");
          }}
        >
          Добавить дату
        </FormButton>
      </S.NavigationContainer>

      <S.TableWrapper>
        <S.StyledTable>
          <thead>
            <tr>
              <S.StickyHeaderCell
                $isHovered={hoveredRow === "header-row-key"}
                onMouseEnter={() => setHoveredRow("header-row-key")}
                onMouseLeave={() => setHoveredRow(null)}
              >
                Предмет / Группа
              </S.StickyHeaderCell>
              {datesInMonth.map((ds) => (
                <S.DateHeaderCell
                  key={ds}
                  $isHovered={hoveredColumn === ds}
                  onMouseEnter={() => setHoveredColumn(ds)}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  {ds}
                </S.DateHeaderCell>
              ))}
              <S.DateHeaderCell
                $isHovered={hoveredRow === "header-row-key"}
                onMouseEnter={() => setHoveredRow("header-row-key")}
                onMouseLeave={() => setHoveredRow(null)}
              >
                Итого (занятий)
              </S.DateHeaderCell>
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
                  <S.StickyCell $isHovered={hoveredRow === rowKey}>
                    {lessonName}
                    <br />
                    <small>({groupName})</small>
                  </S.StickyCell>
                  {datesInMonth.map((ds) => {
                    const { labs, lectures, total, indices } = cells[ds] || {
                      labs: 0,
                      lectures: 0,
                      total: 0,
                      indices: [],
                    };
                    return (
                      <S.DataCell
                        key={ds}
                        onClick={() =>
                          openModal(ds, lessonName, groupName, totalsByDate[ds])
                        }
                        style={getCombinedBgStyle(
                          { labs, lectures },
                          ds,
                          rowKey,
                        )}
                        onMouseEnter={() => {
                          setHoveredColumn(ds);
                          setHoveredRow(rowKey);
                        }}
                        onMouseLeave={() => {
                          setHoveredColumn(null);
                          setHoveredRow(null);
                        }}
                      >
                        <S.CellHours>{total || ""}</S.CellHours>
                        {indices && indices.length > 0 && (
                          <S.CellIndices>{indices.join(",")}</S.CellIndices>
                        )}
                      </S.DataCell>
                    );
                  })}
                  <S.TotalCell $isHovered={hoveredRow === rowKey}>
                    {sum}
                  </S.TotalCell>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr
              onMouseEnter={() => setHoveredRow("footer-row-key")}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <S.FooterStickyCell $isHovered={hoveredRow === "footer-row-key"}>
                Всего часов по дням:
              </S.FooterStickyCell>
              {datesInMonth.map((ds) => (
                <S.TotalCell
                  key={ds}
                  $isHovered={
                    hoveredColumn === ds || hoveredRow === "footer-row-key"
                  }
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
                </S.TotalCell>
              ))}
              <S.TotalCell $isHovered={hoveredRow === "footer-row-key"}>
                {grandTotal}
              </S.TotalCell>
            </tr>
          </tfoot>
        </S.StyledTable>
      </S.TableWrapper>

      <Modal active={modalActive} setActive={setModalActive}>
        <S.ModalContent>
          <S.ModalTitle>
            {modalInfo.lessonName} ({modalInfo.groupName})<br />
            Дата: {modalInfo.date}
          </S.ModalTitle>

          {modalItems.length > 0 ? (
            modalItems.map((it, idx) => (
              <S.LessonItem key={it.id}>
                <S.LessonControls>
                  <S.SelectInput
                    value={it.isLab ? "lab" : "lec"}
                    onChange={(e) =>
                      handleItemChange(idx, "isLab", e.target.value === "lab")
                    }
                  >
                    <option value="lec">Лекция</option>
                    <option value="lab">Лабораторная</option>
                  </S.SelectInput>
                  <S.TextInput
                    type="text"
                    value={it.cabinet || ""}
                    onChange={(e) =>
                      handleItemChange(idx, "cabinet", e.target.value)
                    }
                    placeholder="Кабинет"
                  />
                </S.LessonControls>
                <S.LessonControls>
                  <S.ActionButton
                    $variant="primary"
                    onClick={() => handleSaveItem(modalItems[idx])}
                  >
                    Сохранить
                  </S.ActionButton>
                  <S.ActionButton
                    $variant="danger"
                    onClick={() => handleDeleteItem(it)}
                  >
                    Удалить
                  </S.ActionButton>
                </S.LessonControls>
              </S.LessonItem>
            ))
          ) : (
            <p>Пока нет занятий по этому предмету и группе на эту дату.</p>
          )}

          <S.AddLessonSection>
            <S.SectionTitle>Добавить занятие</S.SectionTitle>
            <S.LessonControls>
              <S.SelectInput
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
              </S.SelectInput>
              <S.TextInput
                type="text"
                value={newItem.cabinet}
                onChange={(e) =>
                  setNewItem((n) => ({
                    ...n,
                    cabinet: e.target.value,
                  }))
                }
                placeholder="Кабинет"
              />
            </S.LessonControls>
            <S.ActionButton $variant="success" onClick={handleAddNew}>
              Добавить
            </S.ActionButton>
          </S.AddLessonSection>

          <S.ModalFooter>
            <S.ActionButton onClick={() => setModalActive(false)}>
              Закрыть
            </S.ActionButton>
          </S.ModalFooter>
        </S.ModalContent>
      </Modal>

      <Modal active={addNewDateModal} setActive={setAddNewDayModal}>
        <S.DatePickerContainer>
          <S.ModalTitle>Выберите дату для добавления</S.ModalTitle>
          <S.DateInput
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
          <S.ButtonGroup>
            <S.ActionButton
              $variant="success"
              onClick={handleAddDay}
              disabled={!selectDate}
            >
              Добавить
            </S.ActionButton>
            <S.ActionButton onClick={() => setAddNewDayModal(false)}>
              Отмена
            </S.ActionButton>
          </S.ButtonGroup>
        </S.DatePickerContainer>
      </Modal>
    </S.ScheduleContainer>
  );
};
