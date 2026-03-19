export const migrateExistingAltNames = async () => {
  if (!user) {
    alert("Сначала войдите в систему");
    return;
  }

  try {
    // Собираем все альт. названия из текущего пользователя
    const altNamesMap = new Map();

    userTarification.forEach((item) => {
      if (
        item.altNaming &&
        Array.isArray(item.altNaming) &&
        item.altNaming.length > 0
      ) {
        const lessonName = item.lesson;
        if (!altNamesMap.has(lessonName)) {
          altNamesMap.set(lessonName, new Set());
        }
        item.altNaming.forEach((alt) => altNamesMap.get(lessonName).add(alt));
      }
    });

    if (altNamesMap.size === 0) {
      alert("У вас нет альтернативных названий для миграции");
      return;
    }

    // Преобразуем в формат для сохранения
    const newAltNamings = Array.from(altNamesMap.entries()).map(
      ([lessonName, altSet]) => ({
        lessonName,
        altNaming: Array.from(altSet),
      }),
    );

    // Сохраняем в отдельный узел
    await set(ref(db, "commonAltNamings"), newAltNamings);

    // Очищаем altNaming у текущего пользователя
    const updatedTarification = userTarification.map((item) => {
      const { altNaming, ...rest } = item;
      return rest;
    });

    setUserTarification(updatedTarification);
    await saveUserTarification(updatedTarification);

    alert(
      `✅ Миграция завершена! Перенесено ${newAltNamings.length} уроков с альтернативными названиями`,
    );
    console.log("Сохраненные данные:", newAltNamings);
  } catch (error) {
    console.error("Ошибка миграции:", error);
    alert("Ошибка: " + error.message);
  }
};
