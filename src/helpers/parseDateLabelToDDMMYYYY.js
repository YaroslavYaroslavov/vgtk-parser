export function parseDateLabelToDDMMYYYY(label) {
  // Пример input: "на 9 сентября 2025 года  (ВТОРНИК)"
  // Шаг 1: выделяем текст даты без дня недели
  const datePartMatch = label.match(/на\s+(.+?)\s+года/i);
  if (!datePartMatch) return null;

  const datePart = datePartMatch[1].trim(); // "9 сентября 2025"

  // Шаг 2: попытка корректного парсинга через локаль
  // Создаём дату на основе gettext-формата. Если прямой конструктор не работает,
  // fallback на ручной разбор по именам месяцев на русском.
  let d = new Date(datePart);
  if (isNaN(d)) {
    // ручной разбор
    const parts = datePart.split(/\s+/); // [day, monthName, year]
    const dayNum = parseInt(parts[0], 10);
    const monthName = parts[1]?.toLowerCase();
    const yearNum = parseInt(parts[2], 10);

    const months = {
      января: 0,
      февраля: 1,
      марта: 2,
      апреля: 3,
      мая: 4,
      июня: 5,
      июля: 6,
      августа: 7,
      сентября: 8,
      октября: 9,
      ноября: 10,
      декабря: 11,
    };

    const m = months[monthName];
    if (m != null) {
      d = new Date(yearNum, m, dayNum);
    }
  }

  if (!d || isNaN(d)) return null;

  // Шаг 3: формат dd-mm-yyyy
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0"); // месяцы 0-11
  const yyyy = d.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}

// Пример использования:
const label = "на 9 сентября 2025 года  (ВТОРНИК)";
const tomorrowLabelDate = parseDateLabelToDDMMYYYY(label);
console.log(tomorrowLabelDate); // "09-09-2025" (или другая дата)
