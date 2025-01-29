import { QRCodeSVG } from "qrcode.react";

export const QRCodeComponent = () => {
  const myCabinet = localStorage.getItem("userCabinet") || null;

  const userTarification =
    JSON.parse(localStorage.getItem("userTarification")) || [];

  const objectToStringify = {
    cabinet: myCabinet,
    tarification: userTarification,
  };

  return (
    <div>
      <h2>QR-код для объекта:</h2>
      <QRCodeSVG
        // value={"/"}
        value={JSON.stringify(objectToStringify)}
        size={800} // Размер QR-кода
        // fgColor="#000000" // Цвет QR-кода
        // bgColor="#ffffff" // Цвет фона
        level="L" // Уровень коррекции ошибок
      />
    </div>
  );
};
