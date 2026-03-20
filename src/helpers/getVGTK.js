import { db } from "../firebaseConfig/firebase"; // предполагаем, что у вас есть экспортированный db
import { ref,get } from "firebase/database";

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

export const getVGTK = async (url, myCabinet) => {
  let SCHEDULE = [];
  let MYCABINETLECTURES = [];

  try {
    // Определяем тип расписания по URL
    const isTomorrow = url && url.includes("day-tomorrow.php");
    const scheduleType = isTomorrow ? "tomorrow" : "today";
    
    // Путь в Firebase
    const schedulePath = isTomorrow 
      ? "schedules/latest_tomorrow" 
      : "schedules/latest";
    
    console.log(`📡 Получаем расписание (${scheduleType}) из Firebase...`);
    
    // Получаем данные из Firebase
    const scheduleRef = ref(db, schedulePath);
    const snapshot = await get(scheduleRef);
    const data = snapshot.val();

    if (!data || !data.schedule) {
      console.error("❌ Расписание не найдено в Firebase");
      return [[], [], ""];
    }

    const { schedule, date } = data;
    console.log(`✅ Получено расписание на ${date}, групп: ${schedule.length}`);
    
    // Преобразуем данные в нужный формат
    SCHEDULE = schedule.map(group => ({
      groupName: group.groupName,
      lessons: group.lessons.map(lesson => ({
        lessonName: lesson.lessonName,
        cabinet: lesson.cabinet,
        lessonNumber: lesson.lessonNumber,
        groupName: group.groupName,
        isLab: lesson.isLab || (lesson.cabinet && lesson.cabinet.includes("/"))
      }))
    }));

    // Фильтруем по кабинету если указан
    if (myCabinet) {
      SCHEDULE.forEach(group => {
        group.lessons.forEach(lesson => {
          if (lesson.cabinet && lesson.cabinet.split("/").includes(myCabinet)) {
            MYCABINETLECTURES.push({
              ...lesson,
              groupName: group.groupName
            });
          }
        });
      });
      console.log(`🏢 Найдено уроков в кабинете ${myCabinet}: ${MYCABINETLECTURES.length}`);
    }

    return [SCHEDULE, MYCABINETLECTURES, date || ""];
    
  } catch (error) {
    console.error("❌ Ошибка при получении данных из Firebase:", error);
    return [[], [], ""];
  }
};

// Дополнительная функция для получения конкретной группы
export const getGroupSchedule = async (groupName, type = "today") => {
  try {
    const isTomorrow = type === "tomorrow";
    const path = isTomorrow ? "tomorrow" : "today";
    
    const groupRef = ref(db, `groups/${groupName}/schedule_${path}`);
    const snapshot = await get(groupRef);
    const schedule = snapshot.val();
    
    if (!schedule) {
      console.error(`❌ Расписание для группы ${groupName} не найдено`);
      return [];
    }
    
    return schedule;
  } catch (error) {
    console.error("Ошибка при получении расписания группы:", error);
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