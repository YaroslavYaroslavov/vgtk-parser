import { useState, useMemo } from "react";

// Парсит "dd-mm-yyyy" → Date
function parseDateString(ds) {
  const [dd, mm, yyyy] = ds.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
}

export const ScheduleTable = ({ rawData }) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  // Собираем даты, строки и данные ячеек
  const { datesInMonth, rows, totalsByDate, grandTotal } = useMemo(() => {
    if (!rawData) {
      return { datesInMonth: [], rows: [], totalsByDate: {}, grandTotal: 0 };
    }

    // 1) фильтруем даты текущего месяца
    const datesInMonth = Object.keys(rawData)
      .map((ds) => ({ ds, date: parseDateString(ds) }))
      .filter(
        ({ date }) =>
          date.getFullYear() === currentMonth.getFullYear() &&
          date.getMonth() === currentMonth.getMonth()
      )
      .sort((a, b) => a.date - b.date)
      .map((o) => o.ds);

    // 2) группируем по subject+group
    // key = lessonName + '|||' + groupName
    const groupKeys = new Set();
    datesInMonth.forEach((ds) => {
      rawData[ds].forEach((item) => {
        groupKeys.add(`${item.lessonName}|||${item.groupName}`);
      });
    });

    // 3) строим массив строк
    const rows = Array.from(groupKeys).map((key) => {
      const [lessonName, groupName] = key.split("|||");
      const cells = {};
      let sum = 0;

      datesInMonth.forEach((ds) => {
        const cnt = rawData[ds].filter(
          (item) =>
            item.lessonName === lessonName && item.groupName === groupName
        ).length;
        cells[ds] = cnt;
        sum += cnt;
      });

      return { lessonName, groupName, cells, sum };
    });

    // 4) считаем totalsByDate и grandTotal
    const totalsByDate = {};
    let grandTotal = 0;

    datesInMonth.forEach((ds) => {
      const daySum = rows.reduce((acc, row) => acc + row.cells[ds], 0);
      totalsByDate[ds] = daySum;
      grandTotal += daySum;
    });

    return { datesInMonth, rows, totalsByDate, grandTotal };
  }, [rawData, currentMonth]);

  // Навигация по месяцам
  const prevMonth = () =>
    setCurrentMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  return (
    <div>
      <h2>
        Расписание за{" "}
        {currentMonth.toLocaleString("ru-RU", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button onClick={prevMonth}>&larr; Пред. месяц</button>
      <button onClick={nextMonth}>След. месяц &rarr;</button>

      <table
        border="1"
        cellPadding="4"
        style={{ borderCollapse: "collapse", marginTop: 12 }}
      >
        <thead>
          <tr>
            <th>Предмет / Группа</th>
            {datesInMonth.map((ds) => (
              <th key={ds}>{ds}</th>
            ))}
            <th>Итого</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ lessonName, groupName, cells, sum }) => (
            <tr key={`${lessonName}|||${groupName}`}>
              <td>
                {lessonName} <br />
                <small>({groupName})</small>
              </td>
              {datesInMonth.map((ds) => (
                <td key={ds} style={{ textAlign: "center" }}>
                  {cells[ds] || ""}
                </td>
              ))}
              <td style={{ textAlign: "center", fontWeight: "bold" }}>{sum}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ fontWeight: "bold" }}>Всего по дням:</td>
            {datesInMonth.map((ds) => (
              <td key={ds} style={{ textAlign: "center", fontWeight: "bold" }}>
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
  );
};
