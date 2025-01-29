export const CopyTarification = () => {
  const myCabinet = localStorage.getItem("userCabinet") || null;

  const userTarification = localStorage.getItem("userTarification") || [];

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Текст скопирован в буфер обмена:", text);
      })
      .catch((err) => {
        console.error("Ошибка при копировании текста в буфер обмена:", err);
      });
  }
  async function getClipboardData() {
    try {
      const text = await navigator.clipboard.readText();
      const tarif = JSON.parse(text) || {};
      if (
        Object.prototype.hasOwnProperty.call(tarif, "cabinet") &&
        Object.prototype.hasOwnProperty.call(tarif, "tarification")
      ) {
        // КОСТЫЛЬ ПЕРЕДЕЛАТЬ
        localStorage.setItem("userTarification", tarif.tarification);
        localStorage.setItem("userCabinet", tarif.cabinet);

        console.log(
          "Данные из буфера обмена:",
          JSON.parse(JSON.parse(text).tarification)
        );
        location.reload();
      } else {
        throw new Error("Некорректные данные");
      }
    } catch (err) {
      console.error("Не удалось получить данные из буфера обмена: ", err);
    }
  }

  const objectToStringify = JSON.stringify({
    cabinet: myCabinet,
    tarification: userTarification,
  });

  return (
    <div>
      <button
        onClick={() => {
          copyToClipboard(objectToStringify);
        }}
      >
        Экспорт
      </button>
      <button
        onClick={() => {
          getClipboardData();
        }}
      >
        Импорт
      </button>
    </div>
  );
};
