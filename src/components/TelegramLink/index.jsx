import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  equalTo,
  get,
  update,
  remove,
} from "firebase/database";

const TelegramLink = () => {
  const [loading, setLoading] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLinked, setIsLinked] = useState(false);
  const [telegramInfo, setTelegramInfo] = useState(null);

  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();

  // Проверка статуса привязки при загрузке
  useEffect(() => {
    if (user) {
      checkLinkStatus();
    }
  }, [user]);

  const checkLinkStatus = async () => {
    if (!user) return;

    try {
      const userRef = ref(db, `users/${user.uid}/telegram`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        setIsLinked(true);
        setTelegramInfo(snapshot.val());
      }
    } catch (error) {
      console.error("Ошибка при проверке статуса:", error);
    }
  };

  const handleSubmitCode = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Необходимо войти в систему");
      return;
    }

    const formattedCode = inputCode.toUpperCase().trim();
    if (!formattedCode || formattedCode.length !== 6) {
      setError("Введите корректный 6-значный код");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // 1. Ищем код в Firebase по всем tempLinks
      const tempLinksRef = ref(db, "tempLinks");
      const snapshot = await get(tempLinksRef);

      if (!snapshot.exists()) {
        setError("Код не найден");
        setLoading(false);
        return;
      }

      const tempLinks = snapshot.val();
      let foundTelegramId = null;
      let foundData = null;

      // Перебираем все tempLinks в поисках нашего кода
      for (const [telegramId, data] of Object.entries(tempLinks)) {
        if (data.code === formattedCode && !data.used) {
          if (data.expiresAt > Date.now()) {
            foundTelegramId = telegramId;
            foundData = data;
            break;
          }
        }
      }

      if (!foundTelegramId) {
        setError("Код не найден или истек");
        setLoading(false);
        return;
      }

      // 2. Проверяем, не привязан ли уже этот Telegram
      const telegramLinkRef = ref(db, `telegramLinks/${foundTelegramId}`);
      const telegramLinkSnapshot = await get(telegramLinkRef);

      if (telegramLinkSnapshot.exists()) {
        setError("Этот Telegram уже привязан к другому аккаунту");
        setLoading(false);
        return;
      }

      // 3. Проверяем, не привязан ли уже этот аккаунт
      const userTelegramRef = ref(db, `users/${user.uid}/telegram`);
      const userTelegramSnapshot = await get(userTelegramRef);

      if (userTelegramSnapshot.exists()) {
        setError("К этому аккаунту уже привязан Telegram");
        setLoading(false);
        return;
      }

      // 4. Помечаем код как использованный
      await update(ref(db, `tempLinks/${foundTelegramId}`), { used: true });

      // 5. Создаем связь
      const updates = {};

      // Связь Telegram -> Firebase
      updates[`telegramLinks/${foundTelegramId}`] = {
        firebaseUid: user.uid,
        linkedAt: Date.now(),
        telegramInfo: foundData.telegramInfo,
      };

      // Связь Firebase -> Telegram
      updates[`users/${user.uid}/telegram`] = {
        telegramId: Number(foundTelegramId),
        linkedAt: Date.now(),
        telegramInfo: foundData.telegramInfo,
      };

      await update(ref(db), updates);

      // 6. Удаляем использованный код через 5 минут (опционально)
      setTimeout(
        async () => {
          try {
            await remove(ref(db, `tempLinks/${foundTelegramId}`));
          } catch (error) {
            console.error("Ошибка при удалении временного кода:", error);
          }
        },
        5 * 60 * 1000,
      );

      setSuccess("Telegram успешно привязан!");
      setInputCode("");
      checkLinkStatus(); // Обновляем статус
    } catch (error) {
      console.error("Ошибка при привязке:", error);
      setError("Ошибка при привязке Telegram");
    } finally {
      setLoading(false);
    }
  };

  const unlinkTelegram = async () => {
    if (!user || !telegramInfo) return;

    if (!window.confirm("Вы уверены, что хотите отвязать Telegram?")) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const updates = {};
      updates[`users/${user.uid}/telegram`] = null;
      updates[`telegramLinks/${telegramInfo.telegramId}`] = null;

      await update(ref(db), updates);

      setIsLinked(false);
      setTelegramInfo(null);
      setSuccess("Telegram успешно отвязан");
    } catch (error) {
      console.error("Ошибка при отвязке:", error);
      setError("Ошибка при отвязке Telegram");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="telegram-link-container">
        <div className="alert alert-warning">
          ⚠️ Необходимо войти в систему для привязки Telegram
        </div>
      </div>
    );
  }

  return (
    <div className="telegram-link-container">
      <h3>📱 Привязка Telegram</h3>

      {error && <div className="alert alert-error">❌ {error}</div>}

      {success && <div className="alert alert-success">✅ {success}</div>}

      {isLinked ? (
        <div className="telegram-linked">
          <div className="telegram-info">
            <div className="info-icon">✅</div>
            <div className="info-text">
              <strong>Telegram привязан</strong>
              {telegramInfo?.telegramInfo?.username && (
                <div>@{telegramInfo.telegramInfo.username}</div>
              )}
              {telegramInfo?.telegramInfo?.first_name && (
                <div>
                  {telegramInfo.telegramInfo.first_name}{" "}
                  {telegramInfo.telegramInfo.last_name}
                </div>
              )}
              <div className="linked-date">
                Привязан: {new Date(telegramInfo.linkedAt).toLocaleString()}
              </div>
            </div>
          </div>

          <button
            onClick={unlinkTelegram}
            disabled={loading}
            className="btn btn-danger"
          >
            {loading ? "Отвязка..." : "Отвязать Telegram"}
          </button>
        </div>
      ) : (
        <div className="telegram-unlinked">
          <div className="instruction-box">
            <h4>Как привязать Telegram:</h4>
            <ol>
              <li>
                Откройте Telegram бота <strong>@vgtk_schedule_bot</strong>
              </li>
              <li>
                Нажмите кнопку <strong>"🔗 Привязать аккаунт"</strong> или
                отправьте команду <strong>/link</strong>
              </li>
              <li>Бот пришлет вам 6-значный код</li>
              <li>Введите этот код в поле ниже</li>
            </ol>
          </div>

          <form onSubmit={handleSubmitCode} className="code-form">
            <div className="form-group">
              <label htmlFor="telegram-code">Код из Telegram:</label>
              <input
                type="text"
                id="telegram-code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                placeholder="Например: A1B2C3"
                maxLength="6"
                className="code-input"
                disabled={loading}
                autoComplete="off"
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={loading || inputCode.length !== 6}
              className="btn btn-primary"
            >
              {loading ? "Проверка..." : "Привязать Telegram"}
            </button>
          </form>

          <div className="note">
            <small>⏰ Код действителен 15 минут</small>
          </div>
        </div>
      )}

      <style jsx>{`
        .telegram-link-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h3 {
          margin: 0 0 20px 0;
          color: #333;
          font-size: 1.5rem;
        }

        .alert {
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .alert-error {
          background: #fee;
          color: #c00;
          border: 1px solid #fcc;
        }

        .alert-success {
          background: #efe;
          color: #0a0;
          border: 1px solid #cfc;
        }

        .alert-warning {
          background: #fff3cd;
          color: #856404;
          border: 1px solid #ffeeba;
        }

        .instruction-box {
          background: #f0f7ff;
          padding: 20px;
          border-radius: 6px;
          margin-bottom: 25px;
          border-left: 4px solid #2196f3;
        }

        .instruction-box h4 {
          margin: 0 0 15px 0;
          color: #1976d2;
        }

        .instruction-box ol {
          margin: 0;
          padding-left: 20px;
        }

        .instruction-box li {
          margin-bottom: 10px;
          color: #333;
          line-height: 1.5;
        }

        .code-form {
          margin-bottom: 15px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #555;
          font-weight: 500;
        }

        .code-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 20px;
          text-align: center;
          letter-spacing: 6px;
          font-family: monospace;
          border: 2px solid #ddd;
          border-radius: 6px;
          transition: border-color 0.3s;
        }

        .code-input:focus {
          outline: none;
          border-color: #2196f3;
          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
        }

        .code-input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          font-weight: 500;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
        }

        .btn-danger {
          background: #f44336;
          color: white;
        }

        .btn-danger:hover:not(:disabled) {
          background: #d32f2f;
        }

        .note {
          text-align: center;
          color: #666;
        }

        .telegram-info {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f5f5f5;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .info-icon {
          font-size: 2rem;
        }

        .info-text {
          font-size: 14px;
        }

        .info-text strong {
          display: block;
          margin-bottom: 5px;
          font-size: 16px;
        }

        .linked-date {
          margin-top: 5px;
          color: #666;
          font-size: 12px;
        }

        @media (max-width: 600px) {
          .telegram-link-container {
            padding: 15px;
            margin: 10px;
          }

          .code-input {
            font-size: 18px;
            letter-spacing: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default TelegramLink;
