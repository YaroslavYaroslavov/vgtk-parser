// parseGroups.js

// Функция для парсинга групп с сайта
export const fetchAllGroups = async () => {
  try {
    const response = await fetch(
      "https://www.vgtk.by/schedule/lessons/day-today.php",
    );
    const data = await response.text();

    const tempElement = document.createElement("div");
    tempElement.innerHTML = data;
    const tableElement = tempElement.querySelector("table");

    // Функция для обработки rowspan (если нужно)
    const splitRowspan2TD = (tableElement) => {
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
                }
              }
            }
          }
        }
      }
    };

    splitRowspan2TD(tableElement);

    const groups = new Set();
    const departmentsMap = new Map(); // Для хранения групп по отделениям

    // Регулярка для групп: 1-3 буквы, тире, 2-3 цифры
    const groupRegex = /^[А-Я]{1,3}-\d{2,3}$/;

    // Регулярка для отделений (заглавные буквы, пробелы, точки)
    const departmentRegex = /^[А-Я\s.]+$/;

    let currentDepartment = null;

    // Проходим по всем строкам таблицы
    for (let i = 0; i < tableElement.rows.length; i++) {
      const row = tableElement.rows[i];

      // Проверяем первую ячейку строки на наличие отделения
      const firstCell = row.cells[0];
      if (firstCell) {
        const firstCellValue = firstCell.innerText.trim();

        // Если ячейка содержит название отделения (заглавные буквы)
        if (departmentRegex.test(firstCellValue) && firstCellValue.length > 5) {
          currentDepartment = firstCellValue;

          // Инициализируем массив для отделения, если его еще нет
          if (!departmentsMap.has(currentDepartment)) {
            departmentsMap.set(currentDepartment, []);
          }
        }
      }

      // Проходим по всем ячейкам текущей строки для поиска групп
      Array.from(row.cells).forEach((cell) => {
        const cellValue = cell.innerText.trim();

        if (groupRegex.test(cellValue) && currentDepartment) {
          groups.add(cellValue);

          // Добавляем группу в соответствующее отделение
          const departmentGroups = departmentsMap.get(currentDepartment);
          if (departmentGroups && !departmentGroups.includes(cellValue)) {
            departmentGroups.push(cellValue);
          }
        }
      });
    }

    // Сортируем группы в каждом отделении
    departmentsMap.forEach((groups, department) => {
      departmentsMap.set(department, groups.sort());
    });

    // Преобразуем Map в объект для удобства использования
    const groupsByDepartment = Object.fromEntries(departmentsMap);

    return {
      allGroups: Array.from(groups).sort(),
      groupsByDepartment,
    };
  } catch (error) {
    console.error("Ошибка при парсинге групп:", error);
    return { allGroups: [], groupsByDepartment: {} };
  }
};

// Создаем переменные и экспортируем их
export let allGroups = [];
export let groupsByDepartment = {};

// Функция для инициализации данных
export const initGroups = async () => {
  const data = await fetchAllGroups();
  allGroups = data.allGroups;
  groupsByDepartment = data.groupsByDepartment;

  console.log("Загружены группы:", allGroups);
  console.log("Группы по отделениям:", groupsByDepartment);

  return { allGroups, groupsByDepartment };
};

// Автоматическая инициализация при импорте
initGroups();
