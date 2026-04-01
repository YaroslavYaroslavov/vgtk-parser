import { db } from "../firebaseConfig/firebase";
import { ref, get } from "firebase/database";

export const splitRowspan2TD = (tableElement) => {
  for (let i = 0; i < tableElement.rows.length; i++) {
    let row = tableElement.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      let cell = row.cells[j];
      let rowspan = parseInt(cell.getAttribute("rowspan"));

      if (cell.hasAttribute("rowspan") && rowspan > 1) {
        let newCell = cell.cloneNode(true);
        cell.removeAttribute("rowspan");

        for (let k = 1; k < rowspan; k++) {
          let nextRow = tableElement.rows[i + k];
          if (nextRow) {
            if (j <= nextRow.cells.length) {
              let nextCell = nextRow.insertCell(j);
              nextCell.innerHTML = newCell.innerHTML;
            } else {
              console.warn(`Недопустимый индекс: ${j} для строки ${i + k}`);
            }
          }
        }
      }
    }
  }
};

// Функция для форматирования даты в DD-MM-YYYY
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Функция для получения расписания по конкретной дате
const getScheduleByDateKey = async (dateKey) => {
  try {
    const scheduleRef = ref(db, `schedules_by_date/${dateKey}`);
    const snapshot = await get(scheduleRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error("Ошибка при получении расписания по дате:", error);
    return null;
  }
};

// Функция для получения текущего расписания (сегодня/завтра)
const getCurrentSchedule = async (type = "today") => {
  try {
    // Сначала пытаемся получить из schedules/currentToday/Tomorrow
    const currentPath = `schedules/current${type === "today" ? "Today" : "Tomorrow"}`;
    const currentRef = ref(db, currentPath);
    const currentSnapshot = await get(currentRef);

    if (currentSnapshot.exists()) {
      const currentData = currentSnapshot.val();
      // Проверяем, актуальны ли данные (не старше 24 часов)
      const isRecent =
        Date.now() - (currentData.updatedAt || 0) < 24 * 60 * 60 * 1000;

      if (isRecent && currentData.schedule && currentData.schedule.length > 0) {
        console.log(`✅ Используем актуальное расписание из ${currentPath}`);
        return {
          schedule: currentData.schedule,
          dateKey: currentData.dateKey,
          date: currentData.date,
        };
      }
    }

    // Если нет актуальных данных в current, получаем по дате
    const today = new Date();
    const targetDate = type === "today" ? today : new Date(today);
    if (type === "tomorrow") targetDate.setDate(today.getDate() + 1);

    const dateKey = formatDate(targetDate);
    const scheduleByDate = await getScheduleByDateKey(dateKey);

    if (scheduleByDate && scheduleByDate.schedule) {
      console.log(`✅ Используем расписание из schedules_by_date/${dateKey}`);
      return {
        schedule: scheduleByDate.schedule,
        dateKey: scheduleByDate.dateKey,
        date: scheduleByDate.date,
      };
    }

    console.log(`❌ Расписание на ${type} не найдено`);
    return { schedule: [], dateKey: null, date: null };
  } catch (error) {
    console.error("Ошибка при получении текущего расписания:", error);
    return { schedule: [], dateKey: null, date: null };
  }
};

// Основная функция получения расписания
export const getVGTK = async (url, myCabinet) => {
  let SCHEDULE = [];
  let MYCABINETLECTURES = [];

  try {
    // Определяем тип расписания по URL
    const isTomorrow = url && url.includes("day-tomorrow.php");
    const scheduleType = isTomorrow ? "tomorrow" : "today";

    console.log(`📡 Получаем расписание (${scheduleType}) из Firebase...`);

    // Получаем расписание из Firebase
    const scheduleData = await getCurrentSchedule(scheduleType);

    if (!scheduleData.schedule || scheduleData.schedule.length === 0) {
      console.error("❌ Расписание не найдено в Firebase");
      return [[], [], `Расписание на ${scheduleType} не опубликовано`];
    }

    const { schedule, date } = scheduleData;
    console.log(`✅ Получено расписание на ${date}, групп: ${schedule.length}`);

    // Преобразуем данные в нужный формат
    SCHEDULE = schedule.map((group) => ({
      groupName: group.groupName,
      lessons: group.lessons.map((lesson) => ({
        lessonName: lesson.lessonName,
        cabinet: lesson.cabinet,
        lessonNumber: lesson.lessonNumber,
        groupName: group.groupName,
        isLab: lesson.isLab || (lesson.cabinet && lesson.cabinet.includes("/")),
      })),
    }));

    // Фильтруем по кабинету если указан
    if (myCabinet) {
      SCHEDULE.forEach((group) => {
        group.lessons.forEach((lesson) => {
          // Проверяем, содержит ли кабинет указанный номер
          if (lesson.cabinet && lesson.cabinet.includes(myCabinet)) {
            MYCABINETLECTURES.push({
              ...lesson,
              groupName: group.groupName,
            });
          }
        });
      });

      // Сортируем по номеру пары
      MYCABINETLECTURES.sort((a, b) => {
        const na = parseFloat(a?.lessonNumber) || 0;
        const nb = parseFloat(b?.lessonNumber) || 0;
        return na - nb;
      });

      console.log(
        `🏢 Найдено уроков в кабинете ${myCabinet}: ${MYCABINETLECTURES.length}`,
      );
    }

    return [
      SCHEDULE,
      MYCABINETLECTURES,
      date || `Расписание на ${scheduleType}`,
    ];
  } catch (error) {
    console.error("❌ Ошибка при получении данных из Firebase:", error);
    return [[], [], "Ошибка загрузки расписания"];
  }
};

// Функция для получения расписания конкретной группы по дате
export const getGroupSchedule = async (groupName, type = "today") => {
  try {
    // Получаем текущее расписание
    const scheduleData = await getCurrentSchedule(type);

    if (!scheduleData.schedule) {
      console.error(`❌ Расписание на ${type} не найдено`);
      return [];
    }

    // Ищем группу в расписании
    const group = scheduleData.schedule.find(
      (g) =>
        g.groupName.toLowerCase().trim() === groupName.toLowerCase().trim(),
    );

    if (!group) {
      console.error(
        `❌ Группа ${groupName} не найдена в расписании на ${type}`,
      );
      return [];
    }

    return group.lessons;
  } catch (error) {
    console.error("Ошибка при получении расписания группы:", error);
    return [];
  }
};

// Функция для получения расписания группы по конкретной дате
export const getGroupScheduleByDate = async (groupName, dateKey) => {
  try {
    const scheduleData = await getScheduleByDateKey(dateKey);

    if (!scheduleData || !scheduleData.schedule) {
      console.error(`❌ Расписание на дату ${dateKey} не найдено`);
      return [];
    }

    // Ищем группу в расписании
    const group = scheduleData.schedule.find(
      (g) =>
        g.groupName.toLowerCase().trim() === groupName.toLowerCase().trim(),
    );

    if (!group) {
      console.error(
        `❌ Группа ${groupName} не найдена в расписании на ${dateKey}`,
      );
      return [];
    }

    return group.lessons;
  } catch (error) {
    console.error("Ошибка при получении расписания группы по дате:", error);
    return [];
  }
};

// Функция для получения списка всех групп
export const getAllGroups = async () => {
  try {
    const groupsRef = ref(db, "metadata/groups");
    const snapshot = await get(groupsRef);
    const data = snapshot.val();

    return data || { allGroups: [], groupsByDepartment: {} };
  } catch (error) {
    console.error("Ошибка при получении списка групп:", error);
    return { allGroups: [], groupsByDepartment: {} };
  }
};

// Функция для получения расписания по дате (для исторических данных)
export const getScheduleByDate = async (dateKey) => {
  try {
    const scheduleData = await getScheduleByDateKey(dateKey);

    if (!scheduleData || !scheduleData.schedule) {
      console.error(`❌ Расписание на дату ${dateKey} не найдено`);
      return { schedule: [], date: null };
    }

    return {
      schedule: scheduleData.schedule,
      date: scheduleData.date,
      dateKey: scheduleData.dateKey,
    };
  } catch (error) {
    console.error("Ошибка при получении расписания по дате:", error);
    return { schedule: [], date: null };
  }
};

// Функция для получения расписания на сегодня
export const getTodaySchedule = async () => {
  return await getCurrentSchedule("today");
};

// Функция для получения расписания на завтра
export const getTomorrowSchedule = async () => {
  return await getCurrentSchedule("tomorrow");
};
