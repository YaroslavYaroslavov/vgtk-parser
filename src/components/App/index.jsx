import { parseDateLabelToDDMMYYYY } from "../../helpers/parseDateLabelToDDMMYYYY";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { CustomInput } from "../Inputs";
import { CustomSelect } from "../Selects";
import { Checkbox } from "../Checkboxes";
import { ThemeSwitcher } from "../ThemeSwitcher";
import gerb from "../../assets/gerb.png";
import inco from "../../assets/inco.png";
import Modal from "../Modal";
import { useTheme } from "../../hooks/use-theme";
import { v4 as uuidv4 } from "uuid";
import { lessonsTime } from "../../consts/timeSchedule";
import {
  ImageLogo,
  TarificationWrapper,
  AddPanel,
  LessonWrapper,
  LessonName,
  Tarification,
  AppWrapper,
  GroupName,
  CheckboxWrapper,
  FormButton,
  FormButtonDelete,
  DateSchedule,
  MyCabinetInput,
  MyCabinetInputWrapper,
  HeaderSchedule,
  CabinetNumber,
  SetCabinetNumber,
  Head,
  ScheduleWrapper,
  ViewToggleWrapper,
  ViewToggleButton,
  DateNavigationWrapper,
  NavButton,
  DatePickerContainer,
  DatePickerHeader,
  DatePickerWeekday,
  DatePickerGrid,
  DatePickerDay,
  DatePickerDayButton,
  AvailableDateBadge,
} from "./styled";
import { ToggleButton } from "../ToggleButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig/firebase";
import { onValue, ref, set, get, update } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { ScheduleTable } from "../HoursAccounting";
import { AllGroupsSchedule } from "../AllGroupsSchedule";
import TelegramLink from "../TelegramLink";
import AutoHoursAccounting from "../AutoHoursAccounting";

const provider = new GoogleAuthProvider();
const ALT_NAMINGS_DB_KEY = "commonAltNamings";

// ---- Утилиты вне компонента (стабильные ссылки) ----
const normalize = (s) => (s || "").toLowerCase().trim();

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}-${date.getFullYear()}`;
};

const formatDisplayDate = (date) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const weekdays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года (${weekdays[date.getDay()].toUpperCase()})`;
};

const getDaysInMonth = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = [];
  const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  for (let i = 0; i < offset; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
  return days;
};

const WEEKDAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

// ---- Firebase helpers ----
const getScheduleByDate = async (dateKey) => {
  try {
    const snap = await get(ref(db, `schedules_by_date/${dateKey}`));
    return snap.exists() ? snap.val() : null;
  } catch (e) {
    console.error("Ошибка getScheduleByDate:", e);
    return null;
  }
};

function App() {
  // ---- UI state ----
  const [modalActive, setModalActive] = useState(false);
  const [advancedModalActive, setAdvancedModalActive] = useState(false);
  const [accountingHoursModal, setAccountingHoursModal] = useState(false);
  const [autoHoursModal, setAutoHoursModal] = useState(false); // 🆕
  const [telegramLinkModal, setTelegramLinkModal] = useState(false);
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [isAddingFromModal, setIsAddingFromModal] = useState(false);
  const [showTarification, setShowTarification] = useState(false);
  const [isCabinetMode, setIsCabinetMode] = useState(false);
  const [viewMode, setViewMode] = useState("my");

  // ---- Schedule state ----
  const [schedule, setSchedule] = useState([]);
  const [dateSchedule, setDateSchedule] = useState("Пожалуйста подождите");
  const [dateKey, setDateKey] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  // ---- Form state ----
  const [inputLessonValue, setInputLessonValue] = useState("");
  const [selectGroupValue, setSelectGroupValue] = useState("");
  const [checkboxLect, setCheckboxLect] = useState(false);
  const [checkboxLab, setCheckboxLab] = useState(false);
  const [cabinetInputValue, setCabinetInputValue] = useState("");
  const [altLessonNameInputValue, setAltLessonNameInputValue] = useState("");

  // ---- Domain state ----
  const [userTarification, setUserTarification] = useState(
    () => JSON.parse(localStorage.getItem("userTarification")) || [],
  );
  const [commonAltNamings, setCommonAltNamings] = useState([]);
  const [myCabinet, setMyCabinet] = useState(
    () => localStorage.getItem("userCabinet") || null,
  );
  const [fetchedHours, setFetchedHours] = useState(0);
  const [loadHours, setLoadHours] = useState(0);

  // ---- Modal context state ----
  const [currentGroupModal, setCurrentGroupModal] = useState("");
  const [currentLessonModal, setCurrentLessonModal] = useState("");
  const [currentLessonNameFromModal, setCurrentLessonNameFromModal] =
    useState("");

  const [user] = useAuthState(auth);
  const { theme, setTheme } = useTheme();

  // ============================================================
  //  ЗАГРУЗКА РАСПИСАНИЯ ПО ДАТЕ
  // ============================================================
  const loadScheduleByDate = useCallback(
    async (targetDate, isUserSelected = false) => {
      setIsLoading(true);
      try {
        const dKey = formatDate(targetDate);
        const data = await getScheduleByDate(dKey);
        if (data && data.schedule) {
          setSchedule(data.schedule);
          setDateSchedule(data.date || formatDisplayDate(targetDate));
          setDateKey(dKey);
          setCurrentDate(targetDate);
          if (isUserSelected) localStorage.setItem("lastSelectedDate", dKey);
        } else {
          setSchedule([]);
          setDateSchedule(`Нет расписания на ${formatDisplayDate(targetDate)}`);
          setDateKey(null);
        }
      } catch (e) {
        console.error("Ошибка загрузки расписания:", e);
        setSchedule([]);
        setDateSchedule("Ошибка загрузки расписания");
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  // Подписка на список доступных дат (реактивно при появлении новых)
  useEffect(() => {
    const refDates = ref(db, "schedules_by_date");
    const unsub = onValue(refDates, (snap) => {
      const dates = snap.exists() ? Object.keys(snap.val()).sort() : [];
      setAvailableDates(dates);

      // первичный выбор даты при первом получении
      setDateKey((curKey) => {
        if (curKey) return curKey; // уже выбрана — не трогаем
        const last = localStorage.getItem("lastSelectedDate");
        let pick = null;
        if (last && dates.includes(last)) pick = last;
        else if (dates.length > 0) pick = dates[0];
        if (pick) {
          const [d, m, y] = pick.split("-");
          loadScheduleByDate(new Date(y, m - 1, d), Boolean(last));
        } else {
          setDateSchedule("Нет доступного расписания");
        }
        return curKey;
      });
    });
    return () => unsub();
  }, [loadScheduleByDate]);

  // Слушатель изменений выбранного дня
  useEffect(() => {
    if (!dateKey) return;
    const unsub = onValue(ref(db, `schedules_by_date/${dateKey}`), (snap) => {
      if (snap.exists() && snap.val().schedule)
        setSchedule(snap.val().schedule);
    });
    return () => unsub();
  }, [dateKey]);

  // Навигация по дням
  const navigateDay = useCallback(
    (direction) => {
      if (availableDates.length === 0) {
        alert("Нет доступных дат с расписанием");
        return;
      }
      const baseDate = dateKey
        ? (() => {
            const [d, m, y] = dateKey.split("-");
            return new Date(y, m - 1, d);
          })()
        : new Date();

      for (let step = 1; step <= 30; step++) {
        const candidate = new Date(baseDate);
        candidate.setDate(baseDate.getDate() + direction * step);
        const cKey = formatDate(candidate);
        if (availableDates.includes(cKey)) {
          loadScheduleByDate(candidate, true);
          return;
        }
      }
      alert(
        `Нет расписания ${direction === 1 ? "вперёд" : "назад"} в ближайшие 30 дней`,
      );
    },
    [availableDates, dateKey, loadScheduleByDate],
  );

  const selectDate = useCallback(
    (date) => {
      const dKey = formatDate(date);
      if (availableDates.includes(dKey)) {
        loadScheduleByDate(date, true);
        setDatePickerModal(false);
      } else {
        alert(`Расписание на ${formatDisplayDate(date)} не опубликовано`);
      }
    },
    [availableDates, loadScheduleByDate],
  );

  const changeMonth = useCallback((delta) => {
    setCurrentDate((d) => {
      const nd = new Date(d);
      nd.setMonth(d.getMonth() + delta);
      return nd;
    });
  }, []);

  // Дни календаря
  const daysInMonth = useMemo(
    () => getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()),
    [currentDate],
  );

  // ============================================================
  //  ALT NAMINGS
  // ============================================================
  const saveCommonAltNamings = useCallback(
    async (altNamings) => {
      if (!user) {
        localStorage.setItem(ALT_NAMINGS_DB_KEY, JSON.stringify(altNamings));
      } else {
        try {
          await set(ref(db, ALT_NAMINGS_DB_KEY), altNamings);
        } catch (e) {
          console.error("Ошибка сохранения altNamings:", e);
        }
      }
      setCommonAltNamings(altNamings);
    },
    [user],
  );

  useEffect(() => {
    const load = async () => {
      if (user) {
        try {
          const snap = await get(ref(db, ALT_NAMINGS_DB_KEY));
          if (snap.exists()) setCommonAltNamings(snap.val());
          else {
            const local =
              JSON.parse(localStorage.getItem(ALT_NAMINGS_DB_KEY)) || [];
            if (local.length > 0) await saveCommonAltNamings(local);
            else setCommonAltNamings([]);
          }
        } catch (e) {
          console.error("Ошибка загрузки altNamings:", e);
        }
      } else {
        setCommonAltNamings(
          JSON.parse(localStorage.getItem(ALT_NAMINGS_DB_KEY)) || [],
        );
      }
    };
    load();
  }, [user, saveCommonAltNamings]);

  // мемоизированная функция получения альт. названий
  const getAltNamingsForLesson = useCallback(
    (lessonName) => {
      const target = normalize(lessonName);
      return commonAltNamings
        .filter((it) => normalize(it.lessonName) === target)
        .flatMap((it) => it.altNaming);
    },
    [commonAltNamings],
  );

  // ============================================================
  //  TARIFICATION & USER INFO
  // ============================================================
  const saveUserTarification = useCallback(
    (tarif) => {
      if (!user) {
        localStorage.setItem("userTarification", JSON.stringify(tarif));
      } else {
        set(ref(db, `users/${auth?.currentUser?.uid}/tarification`), tarif);
      }
    },
    [user],
  );

  const saveUserCabinet = useCallback(
    (cab) => {
      if (!user) localStorage.setItem("userCabinet", cab);
      else
        update(ref(db, `users/${auth?.currentUser?.uid}/userInfo`), {
          cabinet: cab,
        });
    },
    [user],
  );

  // Загрузка тарификации и кабинета
  useEffect(() => {
    if (!user) {
      setUserTarification(
        JSON.parse(localStorage.getItem("userTarification")) || [],
      );
      return;
    }
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    get(ref(db, `users/${uid}/tarification`))
      .then((snap) => {
        if (snap.exists()) setUserTarification(snap.val());
        else {
          const local = JSON.parse(
            localStorage.getItem("userTarification") || "[]",
          );
          if (local.length) set(ref(db, `users/${uid}/tarification`), local);
        }
      })
      .catch(console.error);

    get(ref(db, `users/${uid}/userInfo`))
      .then((snap) => {
        if (snap.exists()) setMyCabinet(snap.val().cabinet);
        else if (localStorage.getItem("userCabinet"))
          set(ref(db, `users/${uid}/userInfo`), {
            cabinet: localStorage.getItem("userCabinet"),
          });
      })
      .catch(console.error);
  }, [user]);

  // Слушатель часов
  useEffect(() => {
    const uid = auth?.currentUser?.uid;
    if (!uid) return;
    const unsub = onValue(ref(db, `users/${uid}/hours`), (snap) => {
      setFetchedHours(snap.exists() ? snap.val() : null);
    });
    return () => unsub();
  }, [user]);

  // ============================================================
  //  ВЫЧИСЛЕНИЕ mySchedule (вместо useState + ручных вызовов)
  // ============================================================
  const mySchedule = useMemo(() => {
    if (!schedule || schedule.length === 0) return [];
    const out = [];
    let idCounter = 0;

    const scheduleByGroup = new Map(
      schedule.map((s) => [normalize(s.groupName || ""), s]),
    );

    userTarification.forEach((item) => {
      const sched = scheduleByGroup.get(normalize(item.groupName));
      if (!sched) return;
      const altList = getAltNamingsForLesson(item.lesson);
      const mainNorm = normalize(item.lesson);

      sched.lessons.forEach((l) => {
        const lessonNameNorm = normalize(l?.lessonName);
        const isLab = !!l.isLab;
        const nameOk =
          lessonNameNorm === mainNorm ||
          altList.some((a) => normalize(a) === lessonNameNorm);
        const typeOk = (item.labs && isLab) || (!isLab && item.lecture);
        if (nameOk && typeOk) {
          out.push({ ...l, lessonName: item.lesson, id: `${++idCounter}` });
        }
      });
    });

    out.sort((a, b) => {
      const na = parseFloat(a?.lessonNumber) || 0;
      const nb = parseFloat(b?.lessonNumber) || 0;
      if (na !== nb) return na - nb;
      return (a?.id || "").localeCompare(b?.id || "");
    });

    return out;
  }, [schedule, userTarification, getAltNamingsForLesson]);

  // ============================================================
  //  CABINET LECTURES
  // ============================================================
  const myCabinetLectures = useMemo(() => {
    if (!myCabinet || schedule.length === 0) return [];
    const out = [];
    schedule.forEach((g) => {
      g.lessons.forEach((l) => {
        if (l.cabinet && l.cabinet.includes(myCabinet)) {
          out.push({ ...l, groupName: g.groupName });
        }
      });
    });
    out.sort(
      (a, b) =>
        (parseFloat(a?.lessonNumber) || 0) - (parseFloat(b?.lessonNumber) || 0),
    );
    return out;
  }, [schedule, myCabinet]);

  // ============================================================
  //  HANDLERS
  // ============================================================
  const handleOpenModal = useCallback((groupName) => {
    setCurrentGroupModal(groupName);
    setModalActive(true);
  }, []);

  const handleOpenLinkModal = useCallback(() => setTelegramLinkModal(true), []);

  const handleOpenAdvancedModal = useCallback(
    (lessonId) => {
      setCurrentLessonModal(userTarification.find((el) => el.id === lessonId));
      setAdvancedModalActive(true);
    },
    [userTarification],
  );

  const handleChangeTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  const isDuplicateLesson = useCallback(
    (lesson) =>
      userTarification.some(
        (g) =>
          normalize(g.groupName) === normalize(lesson.groupName) &&
          normalize(g.lesson) === normalize(lesson.lessonName),
      ),
    [userTarification],
  );

  const addAlternativeName = async (lessonModal, altName) => {
    const lessonName = lessonModal.lesson;
    const lnNorm = normalize(lessonName);
    const altNorm = normalize(altName);
    const existing = commonAltNamings.find(
      (it) => normalize(it.lessonName) === lnNorm,
    );

    let updated;
    if (existing) {
      if (existing.altNaming.some((el) => normalize(el) === altNorm)) {
        alert("Название уже существует");
        return;
      }
      updated = commonAltNamings.map((it) =>
        normalize(it.lessonName) === lnNorm
          ? { ...it, altNaming: [...it.altNaming, altName] }
          : it,
      );
    } else {
      updated = [...commonAltNamings, { lessonName, altNaming: [altName] }];
    }
    await saveCommonAltNamings(updated);
  };

  const addGroup = () => {
    const dup = userTarification.some(
      (g) =>
        normalize(g.groupName) === normalize(selectGroupValue) &&
        normalize(g.lesson) === normalize(inputLessonValue),
    );
    if (dup) {
      console.log("Дубликат");
      return;
    }
    const newGroup = {
      id: uuidv4(),
      groupName: selectGroupValue,
      lesson: inputLessonValue,
      lecture: checkboxLect,
      labs: checkboxLab,
    };
    const updated = [...userTarification, newGroup];
    setUserTarification(updated);
    saveUserTarification(updated);
  };

  const addGroupFromModal = (lesson) => {
    if (isDuplicateLesson(lesson)) {
      alert(
        'Группа с таким занятием уже существует. Удалите её в "Редактировать" и внесите вручную.',
      );
      return;
    }
    setCurrentLessonNameFromModal(lesson.lessonName);
    setIsAddingFromModal(true);
  };

  const handleAddHoursClick = () => {
    const refDate = dateKey || parseDateLabelToDDMMYYYY(dateSchedule);
    const writeData = () => {
      setLoadHours(1);
      set(
        ref(db, `users/${auth?.currentUser?.uid}/hours/${refDate}`),
        mySchedule,
      )
        .then(() => {
          alert("Сохранено");
          setLoadHours(1);
          setTimeout(() => setLoadHours(0), 5000);
        })
        .catch((e) => {
          console.log(e);
          setLoadHours(2);
          setTimeout(() => setLoadHours(0), 5000);
        });
    };
    if (mySchedule.length < 9) {
      if (confirm("Вы пытаетесь добавить меньше 9 занятий, продолжить?"))
        writeData();
    } else writeData();
  };

  const handleSignInClick = () =>
    signInWithPopup(auth, provider).catch((e) =>
      console.log("error", e.code, e.message),
    );
  const handleLogOutClick = () => signOut(auth).catch(console.log);

  const handleDeleteByID = (id) => {
    const updated = userTarification.filter((el) => el.id !== id);
    setUserTarification(updated);
    saveUserTarification(updated);
  };

  const handleSetMyCabinet = () => {
    setMyCabinet(cabinetInputValue);
    saveUserCabinet(cabinetInputValue);
    setCabinetInputValue("");
  };

  const handleFormSubmit = (e, cb) => {
    e.preventDefault();
    cb();
  };

  // ============================================================
  //  RENDER
  // ============================================================
  return (
    <AppWrapper>
      <Head>
        <a href="https://www.vgtk.by">
          <ImageLogo src={gerb} alt="" />
        </a>
        {user ? <ImageLogo src={user.photoURL} /> : <ImageLogo src={inco} />}

        <DateNavigationWrapper>
          <NavButton onClick={() => navigateDay(-1)} theme={theme}>
            ◀
          </NavButton>
          <DateSchedule
            onClick={() => setDatePickerModal(true)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {isLoading ? "Загрузка..." : dateSchedule}
          </DateSchedule>
          <NavButton onClick={() => navigateDay(1)} theme={theme}>
            ▶
          </NavButton>
        </DateNavigationWrapper>

        {!user ? (
          <FormButton onClick={handleSignInClick}>Войти</FormButton>
        ) : (
          <>
            <FormButton onClick={handleLogOutClick}>Выйти</FormButton>
            <FormButton onClick={handleOpenLinkModal}>
              Настройки профиля
            </FormButton>
          </>
        )}
        <ThemeSwitcher handleChangeTheme={handleChangeTheme} theme={theme} />
      </Head>

      {/* Календарь */}
      <Modal active={datePickerModal} setActive={setDatePickerModal}>
        <DatePickerContainer theme={theme}>
          <DatePickerHeader theme={theme}>
            <NavButton onClick={() => changeMonth(-1)} theme={theme}>
              ◀
            </NavButton>
            <h3>
              {currentDate.toLocaleString("ru", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <NavButton onClick={() => changeMonth(1)} theme={theme}>
              ▶
            </NavButton>
          </DatePickerHeader>
          <DatePickerGrid>
            {WEEKDAYS.map((d) => (
              <DatePickerWeekday key={d} theme={theme}>
                {d}
              </DatePickerWeekday>
            ))}
            {daysInMonth.map((date, idx) => {
              if (!date) return <DatePickerDay key={`empty-${idx}`} />;
              const dKey = formatDate(date);
              const isAvailable = availableDates.includes(dKey);
              const isToday = formatDate(new Date()) === dKey;
              return (
                <DatePickerDayButton
                  key={dKey}
                  isAvailable={isAvailable}
                  isToday={isToday}
                  onClick={() => isAvailable && selectDate(date)}
                  theme={theme}
                  disabled={!isAvailable}
                >
                  {date.getDate()}
                  {isAvailable && <AvailableDateBadge theme={theme} />}
                </DatePickerDayButton>
              );
            })}
          </DatePickerGrid>
          <div style={{ marginTop: 15, fontSize: 12, opacity: 0.7 }}>
            💡 Доступные даты отмечены точкой
          </div>
        </DatePickerContainer>
      </Modal>

      <Tarification>
        <AddPanel onSubmit={(e) => handleFormSubmit(e, addGroup)} action="">
          <CustomInput
            handleInputChange={(e) => setInputLessonValue(e.target.value)}
            inputValue={inputLessonValue}
            placeholder="Название предмета"
          />
          <CustomSelect
            handleSelectChange={(e) => setSelectGroupValue(e.target.value)}
          />
          <CheckboxWrapper>
            <Checkbox
              label={"Лабораторные"}
              handleCheckBoxChange={() => setCheckboxLab((p) => !p)}
            />
            <Checkbox
              label={"Лекции"}
              handleCheckBoxChange={() => setCheckboxLect((p) => !p)}
            />
          </CheckboxWrapper>
          <FormButton type="submit">Добавить</FormButton>
          <FormButton
            onClick={() => setShowTarification((p) => !p)}
            type="button"
          >
            Редактировать
          </FormButton>
        </AddPanel>

        {showTarification && (
          <>
            Ваша тарификация:
            {userTarification.map((el) => (
              <TarificationWrapper key={el.id}>
                <LessonName>{el.lesson}</LessonName>
                <GroupName>{el.groupName}</GroupName>
                <p>Лаб. {el.labs ? "Есть" : "Нет"}</p>
                <p>Лекции {el.lecture ? "Есть" : "Нет"}</p>
                <FormButton onClick={() => handleOpenAdvancedModal(el.id)}>
                  Добавить названия
                </FormButton>
                <FormButtonDelete onClick={() => handleDeleteByID(el.id)}>
                  Удалить
                </FormButtonDelete>
              </TarificationWrapper>
            ))}
          </>
        )}
      </Tarification>

      <div>
        <HeaderSchedule>
          <ViewToggleWrapper>
            <ViewToggleButton
              active={viewMode === "my"}
              onClick={() => setViewMode("my")}
              theme={theme}
            >
              📋 Моё расписание
            </ViewToggleButton>
            <ViewToggleButton
              active={viewMode === "all"}
              onClick={() => setViewMode("all")}
              theme={theme}
            >
              🏫 Все группы
            </ViewToggleButton>
          </ViewToggleWrapper>

          {viewMode === "my" && (
            <>
              <MyCabinetInputWrapper>
                <MyCabinetInput
                  onChange={(e) => setCabinetInputValue(e.target.value)}
                  value={cabinetInputValue}
                  type="text"
                  placeholder={`Ваш кабинет: ${myCabinet || "не указан"}`}
                />
                <SetCabinetNumber onClick={handleSetMyCabinet}>
                  +
                </SetCabinetNumber>
              </MyCabinetInputWrapper>
              <ToggleButton
                displayName={"Ваш кабинет"}
                displayNameAlt={"Ваше расписание"}
                handleClick={() => setIsCabinetMode((p) => !p)}
              />
            </>
          )}
        </HeaderSchedule>

        {viewMode === "my" ? (
          <>
            <ScheduleWrapper>
              {(isCabinetMode ? myCabinetLectures : mySchedule).map(
                (el, index) => (
                  <LessonWrapper
                    key={
                      isCabinetMode
                        ? `${el.lessonName}${el.lessonNumber}${index}`
                        : el.id
                    }
                  >
                    <CabinetNumber>{el.lessonNumber}</CabinetNumber>
                    <LessonName>{lessonsTime[el.lessonNumber]}</LessonName>
                    <LessonName>{el.lessonName}</LessonName>
                    <GroupName onClick={() => handleOpenModal(el.groupName)}>
                      {el.groupName}
                    </GroupName>
                    <CabinetNumber>{el.cabinet}</CabinetNumber>
                  </LessonWrapper>
                ),
              )}
            </ScheduleWrapper>
            <HeaderSchedule>
              {user && (
                <>
                  <FormButton
                    handleState={loadHours}
                    onClick={handleAddHoursClick}
                  >
                    Добавить в учет часов
                  </FormButton>
                  <FormButton onClick={() => setAccountingHoursModal(true)}>
                    Открыть учет часов
                  </FormButton>
                  {/* 🆕 Новая кнопка автоматического учёта */}
                  <FormButton onClick={() => setAutoHoursModal(true)}>
                    Открыть АВТОМАТИЧЕСКИЙ учет часов
                  </FormButton>
                </>
              )}
            </HeaderSchedule>
          </>
        ) : (
          <AllGroupsSchedule
            schedule={schedule}
            dateSchedule={dateSchedule}
            theme={theme}
          />
        )}
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div>Расписание группы {currentGroupModal}</div>
        <div>
          {schedule
            .find(
              (obj) =>
                normalize(obj.groupName) === normalize(currentGroupModal),
            )
            ?.lessons.map((lesson) => (
              <LessonWrapper key={lesson.lessonNumber}>
                <CabinetNumber>{lesson.lessonNumber}</CabinetNumber>
                <LessonName>{lessonsTime[lesson.lessonNumber]}</LessonName>
                <LessonName>{lesson.lessonName}</LessonName>
                <CabinetNumber>{lesson.cabinet}</CabinetNumber>
                {(!isDuplicateLesson(lesson) && lesson.cabinet && (
                  <FormButton onClick={() => addGroupFromModal(lesson)}>
                    Добавить
                  </FormButton>
                )) || (
                  <FormButton onClick={() => handleDeleteByID(lesson.id)}>
                    Удалить
                  </FormButton>
                )}
              </LessonWrapper>
            ))}
        </div>
      </Modal>

      <Modal active={telegramLinkModal} setActive={setTelegramLinkModal}>
        <TelegramLink />
      </Modal>

      <Modal active={advancedModalActive} setActive={setAdvancedModalActive}>
        <div>
          Введите альтернативные названия для предмета <br />
          {currentLessonModal?.lesson}
        </div>
        <AddPanel
          onSubmit={(e) =>
            handleFormSubmit(e, () => {
              addAlternativeName(currentLessonModal, altLessonNameInputValue);
              setAltLessonNameInputValue("");
            })
          }
          action=""
        >
          <CustomInput
            handleInputChange={(e) =>
              setAltLessonNameInputValue(e.target.value)
            }
            inputValue={altLessonNameInputValue}
            placeholder="Альтернативное название"
          />
          <FormButton type="submit">Добавить</FormButton>
        </AddPanel>
        <div>Альтернативные названия:</div>
        {currentLessonModal &&
          getAltNamingsForLesson(currentLessonModal.lesson).map((el) => (
            <p key={el}>{el}</p>
          ))}
      </Modal>

      {/* Старый учёт часов */}
      <Modal active={accountingHoursModal} setActive={setAccountingHoursModal}>
        <ScheduleTable
          rawData={fetchedHours}
          onRawDataChange={(data) => setFetchedHours(data)}
          userTarification={userTarification}
        />
      </Modal>

      {/* 🆕 Автоматический учёт часов (логика 1:1 с сервером) */}
      <Modal active={autoHoursModal} setActive={setAutoHoursModal}>
        <AutoHoursAccounting
          userTarification={userTarification}
          commonAltNamings={commonAltNamings}
        />
      </Modal>

      <Modal active={isAddingFromModal} setActive={setIsAddingFromModal}>
        {userTarification.map(
          (el) =>
            el.groupName === currentGroupModal && (
              <TarificationWrapper key={el.id}>
                <LessonName>{el.lesson}</LessonName>
                <GroupName>{el.groupName}</GroupName>
                <FormButton
                  onClick={() => {
                    addAlternativeName(el, currentLessonNameFromModal);
                    setIsAddingFromModal(false);
                  }}
                >
                  Добавить названия
                </FormButton>
              </TarificationWrapper>
            ),
        )}
      </Modal>
    </AppWrapper>
  );
}

export default App;
