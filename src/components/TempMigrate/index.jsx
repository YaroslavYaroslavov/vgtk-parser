// TempMigrate.js - временный компонент для запуска миграции
import { useEffect } from "react";
import { migrateExistingAltNames } from "../../helpers/migrateAltNames";

function TempMigrate() {
  useEffect(() => {
    const runMigration = async () => {
      const confirm = window.confirm(
        "Запустить миграцию альтернативных названий? " +
          "Это действие нельзя отменить!",
      );

      if (confirm) {
        await migrateExistingAltNames();
        alert("Миграция завершена! Можно удалять этот компонент.");
      }
    };

    runMigration();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Миграция альтернативных названий</h2>
      <p>Проверьте консоль для отслеживания прогресса...</p>
    </div>
  );
}

export default TempMigrate;
