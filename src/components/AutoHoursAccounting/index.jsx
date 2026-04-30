// components/AutoHoursAccounting/AutoHoursAccounting.jsx
import { useEffect, useMemo, useState } from "react";
import { get, ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig/firebase";

const DATE_KEY_REGEX = /^schedule_(\d{2}-\d{2}-\d{4})$/;
const MONTHS = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const normalize = (s) => (s || "").toLowerCase().trim();

const compareDateKeys = (a, b) => {
  const [da, ma, ya] = a.split("-").map(Number);
  const [dbb, mb, yb] = b.split("-").map(Number);
  return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, dbb);
};

// Карта альтернативных названий: norm(name) -> Set<norm(all related names)>
const buildAltMap = (commonAltNamings) => {
  const map = new Map();
  const ensure = (key) => {
    if (!map.has(key)) map.set(key, new Set([key]));
    return map.get(key);
  };
  for (const item of commonAltNamings || []) {
    const main = normalize(item.lessonName);
    const alts = (item.altNaming || []).map(normalize);
    const set = ensure(main);
    alts.forEach((a) => set.add(a));
    // объединяем кластеры
    for (const a of alts) {
      const aset = ensure(a);
      for (const v of set) aset.add(v);
      for (const v of aset) set.add(v);
    }
  }
  return map;
};

const getAltNamesNorm = (lesson, altMap) => {
  const key = normalize(lesson);
  const set = altMap.get(key);
  return set ? Array.from(set) : [key];
};

// Стили (минимальные inline, чтобы не плодить styled-components)
const styles = {
  container: { padding: 16, maxHeight: "80vh", overflow: "auto" },
  header: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
    alignItems: "center",
  },
  monthBtn: (active) => ({
    padding: "6px 12px",
    borderRadius: 6,
    border: "1px solid #888",
    background: active ? "#4a90e2" : "transparent",
    color: active ? "#fff" : "inherit",
    cursor: "pointer",
    fontSize: 13,
  }),
  tableWrap: { overflowX: "auto", border: "1px solid #444", borderRadius: 6 },
  table: { borderCollapse: "collapse", width: "100%", fontSize: 13 },
  th: {
    border: "1px solid #555",
    padding: "6px 8px",
    background: "#2a2a2a",
    color: "#eee",
    position: "sticky",
    top: 0,
    whiteSpace: "nowrap",
  },
  td: {
    border: "1px solid #444",
    padding: "4px 8px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  tdName: {
    border: "1px solid #444",
    padding: "4px 8px",
    textAlign: "left",
    minWidth: 280,
  },
  tdTotal: {
    border: "1px solid #444",
    padding: "4px 8px",
    textAlign: "center",
    fontWeight: "bold",
    background: "#3a3a3a",
    color: "#fff",
  },
  empty: { color: "#888" },
  info: { fontSize: 12, opacity: 0.8, margin: "8px 0" },
  loading: { padding: 30, textAlign: "center" },
};

export const AutoHoursAccounting = ({ userTarification, commonAltNamings }) => {
  const [groupsData, setGroupsData] = useState({}); // groupName -> firebase node
  const [loading, setLoading] = useState(true);
  const [monthFilter, setMonthFilter] = useState(null); // 1..12 или null = все

  const altMap = useMemo(
    () => buildAltMap(commonAltNamings),
    [commonAltNamings],
  );

  const uniqueGroups = useMemo(
    () => [...new Set((userTarification || []).map((t) => t.groupName))],
    [userTarification],
  );

  // Загружаем данные групп + подписываемся на их обновления
  useEffect(() => {
    if (uniqueGroups.length === 0) {
      setGroupsData({});
      setLoading(false);
      return;
    }
    setLoading(true);
    const unsubs = [];
    let pending = uniqueGroups.length;

    uniqueGroups.forEach((groupName) => {
      const groupRef = ref(db, `groups/${groupName}`);
      const unsub = onValue(
        groupRef,
        (snapshot) => {
          setGroupsData((prev) => ({
            ...prev,
            [groupName]: snapshot.val() || {},
          }));
          if (pending > 0) {
            pending -= 1;
            if (pending === 0) setLoading(false);
          }
        },
        (err) => {
          console.error("Ошибка подписки на группу", groupName, err);
          if (pending > 0) {
            pending -= 1;
            if (pending === 0) setLoading(false);
          }
        },
      );
      unsubs.push(unsub);
    });

    return () => unsubs.forEach((u) => u && u());
  }, [uniqueGroups.join("|")]);

  // Все доступные даты
  const allDates = useMemo(() => {
    const set = new Set();
    for (const groupName of uniqueGroups) {
      const data = groupsData[groupName] || {};
      Object.keys(data).forEach((k) => {
        const m = k.match(DATE_KEY_REGEX);
        if (m) set.add(m[1]);
      });
    }
    return Array.from(set).sort(compareDateKeys);
  }, [groupsData, uniqueGroups]);

  // Доступные месяцы (для табов)
  const availableMonths = useMemo(() => {
    const set = new Set();
    for (const d of allDates) {
      const m = parseInt(d.split("-")[1], 10);
      if (!Number.isNaN(m)) set.add(m);
    }
    return Array.from(set).sort((a, b) => a - b);
  }, [allDates]);

  // Отфильтрованные по месяцу даты
  const datesToUse = useMemo(() => {
    if (!monthFilter) return allDates;
    return allDates.filter(
      (d) => parseInt(d.split("-")[1], 10) === monthFilter,
    );
  }, [allDates, monthFilter]);

  // Вычисление часов: rows[i] = { tarif, displayName, cells: {date: n}, total }
  const rows = useMemo(() => {
    const out = [];
    for (const tarif of userTarification || []) {
      if (!tarif.lecture && !tarif.labs) continue;

      const possibleNames = getAltNamesNorm(tarif.lesson, altMap);
      const groupNode = groupsData[tarif.groupName] || {};

      const cells = {};
      let total = 0;

      for (const date of datesToUse) {
        const daySchedule = groupNode[`schedule_${date}`] || [];
        let count = 0;
        for (const l of daySchedule) {
          const nameNorm = normalize(l?.lessonName);
          if (!possibleNames.includes(nameNorm)) continue;
          const isLab = !!l.isLab;
          if ((tarif.labs && isLab) || (tarif.lecture && !isLab)) count += 1;
        }
        cells[date] = count;
        total += count;
      }

      if (total > 0) {
        const typeLbl =
          tarif.labs && tarif.lecture ? "" : tarif.labs ? " — Лаб" : " — Лек";
        out.push({
          id: tarif.id,
          displayName: `${tarif.lesson} (${tarif.groupName})${typeLbl}`,
          cells,
          total,
        });
      }
    }
    out.sort((a, b) => a.displayName.localeCompare(b.displayName));
    return out;
  }, [userTarification, datesToUse, groupsData, altMap]);

  // Сумма по дням
  const dayTotals = useMemo(() => {
    const tot = {};
    let grand = 0;
    for (const date of datesToUse) {
      let s = 0;
      for (const row of rows) s += row.cells[date] || 0;
      tot[date] = s;
      grand += s;
    }
    return { perDay: tot, grand };
  }, [rows, datesToUse]);

  // Экспорт в CSV (без зависимости от xlsx на клиенте; .xlsx — на сервере)
  const exportCSV = () => {
    const sep = ";";
    const escape = (v) => {
      const s = String(v ?? "");
      return /[;"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [];
    lines.push(["Дисциплина", ...datesToUse, "Итого"].map(escape).join(sep));
    for (const r of rows) {
      const arr = [
        r.displayName,
        ...datesToUse.map((d) => r.cells[d] || ""),
        r.total,
      ];
      lines.push(arr.map(escape).join(sep));
    }
    const totalLine = [
      "Всего часов по дням:",
      ...datesToUse.map((d) => dayTotals.perDay[d] || ""),
      dayTotals.grand,
    ];
    lines.push(totalLine.map(escape).join(sep));

    const csv = "\uFEFF" + lines.join("\n"); // BOM для Excel
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const today = new Date().toISOString().slice(0, 10);
    link.download = monthFilter
      ? `auto_hours_${MONTHS[monthFilter - 1]}_${today}.csv`
      : `auto_hours_full_${today}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div style={styles.loading}>⏳ Загрузка истории расписаний...</div>;
  }

  if (uniqueGroups.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.empty}>Добавьте предметы в тарификацию.</div>
      </div>
    );
  }

  if (allDates.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.empty}>
          Пока нет накопленной истории расписаний. Сервер начинает копить дни
          автоматически.
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3 style={{ marginTop: 0 }}>📊 Автоматический учёт часов</h3>
      <div style={styles.info}>
        Часы рассчитываются автоматически по сохранённой истории расписания.
        Учитываются альтернативные названия и тип занятий (лек/лаб).
      </div>

      <div style={styles.header}>
        <button
          style={styles.monthBtn(monthFilter === null)}
          onClick={() => setMonthFilter(null)}
        >
          Все ({allDates.length} дн.)
        </button>
        {availableMonths.map((m) => (
          <button
            key={m}
            style={styles.monthBtn(monthFilter === m)}
            onClick={() => setMonthFilter(m)}
          >
            {MONTHS[m - 1]}
          </button>
        ))}
        <span style={{ flex: 1 }} />
        <button style={styles.monthBtn(false)} onClick={exportCSV}>
          ⬇ CSV
        </button>
      </div>

      {rows.length === 0 ? (
        <div style={styles.empty}>За выбранный период занятий не найдено.</div>
      ) : (
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Дисциплина</th>
                {datesToUse.map((d) => (
                  <th key={d} style={styles.th}>
                    {d}
                  </th>
                ))}
                <th style={styles.th}>Итого</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td style={styles.tdName}>{row.displayName}</td>
                  {datesToUse.map((d) => (
                    <td key={d} style={styles.td}>
                      {row.cells[d] > 0 ? row.cells[d] : ""}
                    </td>
                  ))}
                  <td style={styles.tdTotal}>{row.total}</td>
                </tr>
              ))}
              <tr>
                <td
                  style={{
                    ...styles.tdName,
                    fontWeight: "bold",
                    background: "#3a3a3a",
                    color: "#fff",
                  }}
                >
                  Всего часов по дням:
                </td>
                {datesToUse.map((d) => (
                  <td key={d} style={styles.tdTotal}>
                    {dayTotals.perDay[d] || ""}
                  </td>
                ))}
                <td style={styles.tdTotal}>{dayTotals.grand}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div style={styles.info}>
        📚 Дисциплин: {rows.length} &nbsp;•&nbsp; 📅 Дней: {datesToUse.length}{" "}
        &nbsp;•&nbsp; 📖 Всего: <strong>{dayTotals.grand}</strong> ч.
      </div>
    </div>
  );
};

export default AutoHoursAccounting;
