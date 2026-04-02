import { getVGTK } from "../../helpers/getVGTK";
import { parseDateLabelToDDMMYYYY } from "../../helpers/parseDateLabelToDDMMYYYY";
import { useEffect, useState, useCallback, useRef } from "react";
import { urlToday, urlTommorow } from "../../consts/url";
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
  DatePickerDay,
  DatePickerWeekday,
  DatePickerGrid,
  DatePickerDayButton,
  AvailableDateBadge,
} from "./styled";
import { ToggleButton } from "../ToggleButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import { onValue, ref, set, get, update } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { db } from "../../firebaseConfig/firebase";
import { ScheduleTable } from "../HoursAccounting";
import { AllGroupsSchedule } from "../AllGroupsSchedule";
import TelegramLink from "../TelegramLink";

const provider = new GoogleAuthProvider();

// Ключ для хранения общих альтернативных названий в БД
const ALT_NAMINGS_DB_KEY = "commonAltNamings";

// Функция для форматирования даты
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Функция для форматирования отображаемой даты
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

// Функция для получения списка доступных дат из Firebase
const getAvailableDates = async () => {
  try {
    const schedulesRef = ref(db, "schedules_by_date");
    const snapshot = await get(schedulesRef);

    if (snapshot.exists()) {
      const dates = Object.keys(snapshot.val());
      return dates.sort(); // Сортируем по возрастанию
    }
    return [];
  } catch (error) {
    console.error("Ошибка получения доступных дат:", error);
    return [];
  }
};

// Функция для получения расписания по дате
const getScheduleByDate = async (dateKey) => {
  try {
    const scheduleRef = ref(db, `schedules_by_date/${dateKey}`);
    const snapshot = await get(scheduleRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error("Ошибка получения расписания по дате:", error);
    return null;
  }
};

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [advancedModalActive, setAdvancedModalActive] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [mySchedule, setMySchedule] = useState([]);
  const [myCabinetLectures, setMyCabinetLectures] = useState([]);
  const [dateSchedule, setDateSchedule] = useState("Пожалуйста подождите");
  const [dateKey, setDateKey] = useState(null);
  const [inputLessonValue, setInputLessonValue] = useState("");
  const [selectGroupValue, setSelectGroupValue] = useState("");
  const [checkboxLect, setCheckboxLect] = useState(false);
  const [accountingHoursModal, setAccountingHoursModal] = useState(false);
  const [checkboxLab, setCheckboxLab] = useState(false);
  const [loadHours, setLoadHours] = useState(0);
  const [fetchedHours, setFetchedHours] = useState(0);
  const [userTarification, setUserTarification] = useState(
    JSON.parse(localStorage.getItem("userTarification")) || [],
  );
  const [commonAltNamings, setCommonAltNamings] = useState([]);
  const [showTarification, setShowTarification] = useState(false);
  const [isAddingFromModal, setIsAddingFromModal] = useState(false);
  const [isCabinetMode, setIsCabinetMode] = useState(false);
  const [cabinetInputValue, setCabinetInputValue] = useState("");
  const [currentGroupModal, setCurrentGroupModal] = useState("");
  const [currentLessonModal, setCurrentLessonModal] = useState("");
  const [telegramLinkModal, setTelegramLinkModal] = useState("");
  const [altLessonNameInputValue, setAltLessonNameInputValue] = useState("");
  const [myCabinet, setMyCabinet] = useState(
    localStorage.getItem("userCabinet") || null,
  );
  const [currentLessonNameFromModal, setCurrentLessonNameFromModal] =
    useState("");
  const [viewMode, setViewMode] = useState("my");
  const [isLoading, setIsLoading] = useState(false);
  const [availableDates, setAvailableDates] = useState([]);
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hasUsedDatePicker, setHasUsedDatePicker] = useState(false);

  const longPressTimer = useRef(null);
  const isLongPress = useRef(false);

  const [user, loading] = useAuthState(auth);
  const { theme, setTheme } = useTheme();

  // Функция для загрузки расписания по дате
  const loadScheduleByDate = useCallback(
    async (targetDate, isUserSelected = false) => {
      setIsLoading(true);
      try {
        const dateKey = formatDate(targetDate);
        const scheduleData = await getScheduleByDate(dateKey);

        if (scheduleData && scheduleData.schedule) {
          setSchedule(scheduleData.schedule);
          setDateSchedule(scheduleData.date || formatDisplayDate(targetDate));
          setDateKey(dateKey);
          console.log(
            `✅ Расписание на ${dateKey} загружено, групп: ${scheduleData.schedule.length}`,
          );

          if (isUserSelected) {
            setHasUsedDatePicker(true);
            localStorage.setItem("lastSelectedDate", dateKey);
          }
        } else {
          console.log(`❌ Расписание на ${dateKey} не найдено`);
          setSchedule([]);
          setDateSchedule(`Нет расписания на ${formatDisplayDate(targetDate)}`);
          setDateKey(null);
        }
      } catch (error) {
        console.error("Ошибка при загрузке расписания:", error);
        setSchedule([]);
        setDateSchedule("Ошибка загрузки расписания");
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  // Функция для загрузки текущего расписания (сегодня/завтра)
  const loadCurrentSchedule = useCallback(async (type = "today") => {
    setIsLoading(true);
    try {
      const today = new Date();
      const targetDate = type === "today" ? today : new Date(today);
      if (type === "tomorrow") targetDate.setDate(today.getDate() + 1);

      const dateKey = formatDate(targetDate);
      const scheduleData = await getScheduleByDate(dateKey);

      if (scheduleData && scheduleData.schedule) {
        setSchedule(scheduleData.schedule);
        setDateSchedule(scheduleData.date || formatDisplayDate(targetDate));
        setDateKey(dateKey);
        console.log(
          `✅ Расписание на ${type} загружено, групп: ${scheduleData.schedule.length}`,
        );
      } else {
        console.log(`❌ Расписание на ${type} не найдено`);
        setSchedule([]);
        setDateSchedule(
          type === "today"
            ? "Расписание на сегодня не опубликовано"
            : "Расписание на завтра не опубликовано",
        );
        setDateKey(null);
      }
    } catch (error) {
      console.error("Ошибка при загрузке расписания:", error);
      setSchedule([]);
      setDateSchedule("Ошибка загрузки расписания");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Загрузка доступных дат
  useEffect(() => {
    const loadAvailableDates = async () => {
      const dates = await getAvailableDates();
      setAvailableDates(dates);

      // Проверяем, была ли сохранена последняя выбранная дата
      const lastSelectedDate = localStorage.getItem("lastSelectedDate");
      if (lastSelectedDate && dates.includes(lastSelectedDate)) {
        const [day, month, year] = lastSelectedDate.split("-");
        const date = new Date(year, month - 1, day);
        loadScheduleByDate(date, true);
        setCurrentDate(date);
      }
    };

    loadAvailableDates();
  }, [loadScheduleByDate]);

  // Обработчики нажатия на дату
  const handleDatePressStart = () => {
    isLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true;
      setDatePickerModal(true);
    }, 500); // 500ms для определения долгого нажатия
  };

  const handleDatePressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }

    if (!isLongPress.current) {
      // Короткое нажатие - переключение сегодня/завтра
      const today = new Date();
      const currentDateKey = dateKey ? dateKey.split("-") : null;

      if (currentDateKey) {
        const [day, month, year] = currentDateKey;
        const currentDateObj = new Date(year, month - 1, day);
        const todayDateObj = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        );

        if (currentDateObj.getTime() === todayDateObj.getTime()) {
          // Если сейчас сегодня, переключаем на завтра
          loadCurrentSchedule("tomorrow");
        } else {
          // Иначе переключаем на сегодня
          loadCurrentSchedule("today");
        }
      } else {
        loadCurrentSchedule("today");
      }
    }

    isLongPress.current = false;
  };

  // Навигация по дням
  const navigateDay = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);

    const newDateKey = formatDate(newDate);

    // Если на следующий/предыдущий день есть расписание
    if (availableDates.includes(newDateKey)) {
      loadScheduleByDate(newDate, true);
      setCurrentDate(newDate);
      return;
    }

    // Если нет, ищем ближайший доступный день в этом направлении
    let searchDate = new Date(newDate);
    let found = false;
    let steps = 1;
    const maxSteps = 30; // Максимальное количество дней для поиска

    while (steps <= maxSteps && !found) {
      searchDate.setDate(currentDate.getDate() + direction * steps);
      const searchDateKey = formatDate(searchDate);

      if (availableDates.includes(searchDateKey)) {
        loadScheduleByDate(searchDate, true);
        setCurrentDate(searchDate);
        found = true;
        break;
      }
      steps++;
    }

    // Если ничего не найдено в пределах maxSteps дней
    if (!found) {
      const directionText = direction === 1 ? "вперед" : "назад";
      alert(
        `Нет доступного расписания ${directionText} в ближайшие ${maxSteps} дней`,
      );
    }
  };

  // Выбор даты из календаря
  const selectDate = (date) => {
    const dateKey = formatDate(date);
    if (availableDates.includes(dateKey)) {
      loadScheduleByDate(date, true);
      setCurrentDate(date);
      setDatePickerModal(false);
    } else {
      alert(`Расписание на ${formatDisplayDate(date)} не опубликовано`);
    }
  };

  // Получение дней для календаря
  const getDaysInMonth = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    // Добавляем пустые дни для выравнивания
    for (
      let i = 0;
      i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);
      i++
    ) {
      days.push(null);
    }

    // Добавляем дни месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  // Слушаем изменения в расписании в реальном времени
  useEffect(() => {
    if (!dateKey) return;

    const dateRef = ref(db, `schedules_by_date/${dateKey}`);
    const unsubscribe = onValue(
      dateRef,
      (snapshot) => {
        if (snapshot.exists() && snapshot.val().schedule) {
          console.log(
            `🔄 Расписание на дату ${dateKey} обновилось в реальном времени`,
          );
          setSchedule(snapshot.val().schedule);
        }
      },
      (error) => {
        console.error("Ошибка при подписке на обновления расписания:", error);
      },
    );

    return () => unsubscribe();
  }, [dateKey]);

  // Фильтрация расписания по кабинету
  const filterScheduleByCabinet = useCallback((scheduleData, cabinet) => {
    const cabinetLessons = [];

    scheduleData.forEach((group) => {
      group.lessons.forEach((lesson) => {
        if (lesson.cabinet && lesson.cabinet.includes(cabinet)) {
          cabinetLessons.push({
            ...lesson,
            groupName: group.groupName,
          });
        }
      });
    });

    cabinetLessons.sort((a, b) => {
      const na = parseFloat(a?.lessonNumber) || 0;
      const nb = parseFloat(b?.lessonNumber) || 0;
      return na - nb;
    });

    return cabinetLessons;
  }, []);

  // Обновляем расписание по кабинету
  useEffect(() => {
    if (myCabinet && schedule.length > 0) {
      const filtered = filterScheduleByCabinet(schedule, myCabinet);
      setMyCabinetLectures(filtered);
    }
  }, [schedule, myCabinet, filterScheduleByCabinet]);

  // Остальные функции (saveCommonAltNamings, etc.) остаются без изменений
  const saveCommonAltNamings = async (altNamings) => {
    if (!user) {
      localStorage.setItem(ALT_NAMINGS_DB_KEY, JSON.stringify(altNamings));
    } else {
      try {
        await set(ref(db, `${ALT_NAMINGS_DB_KEY}`), altNamings);
      } catch (error) {
        console.error(
          "Ошибка сохранения общих альтернативных названий:",
          error,
        );
      }
    }
    setCommonAltNamings(altNamings);
  };

  // Загрузка общих альтернативных названий
  useEffect(() => {
    const loadCommonAltNamings = async () => {
      if (user) {
        try {
          const snapshot = await get(ref(db, `${ALT_NAMINGS_DB_KEY}`));
          if (snapshot.exists()) {
            setCommonAltNamings(snapshot.val());
          } else {
            const localAltNamings =
              JSON.parse(localStorage.getItem(ALT_NAMINGS_DB_KEY)) || [];
            if (localAltNamings.length > 0) {
              await saveCommonAltNamings(localAltNamings);
            } else {
              setCommonAltNamings([]);
            }
          }
        } catch (error) {
          console.error(
            "Ошибка загрузки общих альтернативных названий:",
            error,
          );
        }
      } else {
        const localAltNamings =
          JSON.parse(localStorage.getItem(ALT_NAMINGS_DB_KEY)) || [];
        setCommonAltNamings(localAltNamings);
      }
    };
    loadCommonAltNamings();
  }, [user]);

  const saveUserTarification = (userTarification) => {
    if (!user) {
      localStorage.setItem(
        "userTarification",
        JSON.stringify(userTarification),
      );
    } else {
      set(
        ref(db, `users/${auth?.currentUser?.uid}/tarification`),
        userTarification,
      );
    }
  };

  const saveUserCabinet = (userCabinet) => {
    if (!user) {
      localStorage.setItem("userCabinet", userCabinet);
    } else {
      update(ref(db, `users/${auth?.currentUser?.uid}/userInfo`), {
        cabinet: userCabinet,
      });
    }
  };

  const onLessonInputChange = (event) => {
    setInputLessonValue(event.target.value);
  };

  const onAltLessonNameInputChange = (event) => {
    setAltLessonNameInputValue(event.target.value);
  };

  const handleOpenModal = useCallback((groupName) => {
    setModalActive(true);
    setCurrentGroupModal(groupName);
  }, []);

  const handleOpenLinkModal = useCallback(() => {
    setTelegramLinkModal(true);
  }, []);

  const handleOpenAdvancedModal = useCallback(
    (lessonId) => {
      setAdvancedModalActive(true);
      setCurrentLessonModal(userTarification.find((el) => el.id === lessonId));
    },
    [userTarification],
  );

  const handleCheckboxLab = () => {
    setCheckboxLab((prev) => !prev);
  };

  const handleCheckboxLect = () => {
    setCheckboxLect((prev) => !prev);
  };

  const handleSelectGroup = (event) => {
    setSelectGroupValue(event.target.value);
  };

  const handleCabinetInputChange = (event) => {
    setCabinetInputValue(event.target.value);
  };

  const handleChangeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [setTheme, theme]);

  const isDuplicateLesson = (lesson) => {
    return userTarification.some(
      (group) =>
        group.groupName.toLowerCase().trim() ===
          lesson.groupName.toLowerCase().trim() &&
        group.lesson.toLowerCase().trim() ===
          lesson.lessonName.toLowerCase().trim(),
    );
  };

  const getAltNamingsForLesson = (lessonName) => {
    return commonAltNamings
      .filter(
        (item) =>
          item.lessonName.toLowerCase().trim() ===
          lessonName.toLowerCase().trim(),
      )
      .flatMap((item) => item.altNaming);
  };

  const addAlternativeName = async (currentLessonModal, altName) => {
    const lessonName = currentLessonModal.lesson;
    const existingEntry = commonAltNamings.find(
      (item) =>
        item.lessonName.toLowerCase().trim() ===
        lessonName.toLowerCase().trim(),
    );

    let updatedAltNamings;
    if (existingEntry) {
      if (
        existingEntry.altNaming.some(
          (el) => el.toLowerCase().trim() === altName.toLowerCase().trim(),
        )
      ) {
        alert("Название уже существует");
        return;
      }
      updatedAltNamings = commonAltNamings.map((item) =>
        item.lessonName.toLowerCase().trim() === lessonName.toLowerCase().trim()
          ? { ...item, altNaming: [...item.altNaming, altName] }
          : item,
      );
    } else {
      updatedAltNamings = [
        ...commonAltNamings,
        {
          lessonName: lessonName,
          altNaming: [altName],
        },
      ];
    }

    await saveCommonAltNamings(updatedAltNamings);
    filterSchedule();
  };

  const addGroupFromModal = (lesson) => {
    if (isDuplicateLesson(lesson)) {
      alert(
        'Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.',
      );
    } else {
      setCurrentLessonNameFromModal(lesson.lessonName);
      setIsAddingFromModal(true);
    }
  };

  const getHours = () => {
    get(ref(db, `users/${auth?.currentUser?.uid}/hours`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFetchedHours(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addGroup = () => {
    const isDuplicateLesson = userTarification.some(
      (group) =>
        group.groupName.toLowerCase().trim() ===
          selectGroupValue.toLowerCase().trim() &&
        group.lesson.toLowerCase().trim() ===
          inputLessonValue.toLowerCase().trim(),
    );

    if (isDuplicateLesson) {
      console.log("Группа с таким названием и уроком уже существует!");
    } else {
      const newGroup = {
        id: uuidv4(),
        groupName: selectGroupValue,
        lesson: inputLessonValue,
        lecture: checkboxLect,
        labs: checkboxLab,
      };

      setUserTarification((prev) => [...prev, newGroup]);
      saveUserTarification([...userTarification, newGroup]);
      filterSchedule();
    }
  };

  const handleFormSubmit = (event, callback) => {
    event.preventDefault();
    callback();
  };

  const filterSchedule = useCallback(() => {
    const newSchedule = [];
    let idCounter = 0;

    const normalize = (s) => (s || "").toLowerCase().trim();

    const scheduleByGroup = new Map(
      schedule.map((s) => [normalize(s.groupName || ""), s]),
    );

    userTarification.forEach((item) => {
      const { groupName, lesson, labs, lecture } = item;
      const groupKey = normalize(groupName);
      const scheduleItem = scheduleByGroup.get(groupKey);
      if (!scheduleItem) return;

      const altNamesForLesson = getAltNamingsForLesson(lesson);

      scheduleItem.lessons.forEach((l) => {
        const lessonNameNorm = normalize(l?.lessonName);
        const matchesMainLesson = lessonNameNorm === normalize(lesson);
        const matchesAltNaming = altNamesForLesson.some(
          (alt) => lessonNameNorm === normalize(alt),
        );
        const isLab = !!l.isLab;
        const typeMatches = (labs && isLab) || (!isLab && lecture);

        if ((matchesMainLesson || matchesAltNaming) && typeMatches) {
          const lessonToAdd = { ...l, lessonName: lesson };
          lessonToAdd.id = `${++idCounter}`;
          newSchedule.push(lessonToAdd);
        }
      });
    });

    newSchedule.sort((a, b) => {
      const na = parseFloat(a?.lessonNumber) || 0;
      const nb = parseFloat(b?.lessonNumber) || 0;
      if (na !== nb) return na - nb;
      return (a?.id || "").localeCompare(b?.id || "");
    });

    setMySchedule(newSchedule);
  }, [schedule, userTarification, commonAltNamings]);

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
          setTimeout(() => {
            setLoadHours(0);
          }, 5000);
          getHours();
        })
        .catch((error) => {
          console.log(error);
          setLoadHours(2);
          setTimeout(() => {
            setLoadHours(0);
          }, 5000);
        });
    };

    if (mySchedule.length < 9) {
      if (
        confirm(
          "Вы пытаетесь добавить в тарификацию меньше, чем 9 занятий, продолжить?",
        )
      ) {
        writeData();
      }
    } else {
      writeData();
    }
  };

  const handleSignInClick = () =>
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error ", errorCode, errorMessage);
      });

  const handleLogOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteByID = (id) => {
    const updatedTarification = userTarification.filter((el) => el.id !== id);
    setUserTarification(updatedTarification);
    saveUserTarification(updatedTarification);
    filterSchedule();
  };

  const handleSetMyCabinet = () => {
    setMyCabinet(cabinetInputValue);
    setCabinetInputValue("");
    saveUserCabinet(cabinetInputValue);
  };

  useEffect(() => {
    filterSchedule();
    getHours();
  }, [schedule, userTarification, commonAltNamings, filterSchedule]);

  useEffect(() => {
    if (user) {
      get(ref(db, `users/${auth?.currentUser?.uid}/tarification`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserTarification(snapshot.val());
          } else {
            if (localStorage.getItem("userTarification")) {
              set(
                ref(db, `users/${auth?.currentUser?.uid}/tarification`),
                JSON.parse(localStorage.getItem("userTarification") || []),
              );
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setUserTarification(
        JSON.parse(localStorage.getItem("userTarification")) || [],
      );
    }

    if (user) {
      get(ref(db, `users/${auth?.currentUser?.uid}/userInfo`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setMyCabinet(snapshot.val().cabinet);
          } else {
            if (localStorage.getItem("userCabinet")) {
              set(ref(db, `users/${auth?.currentUser?.uid}/userInfo`), {
                cabinet: localStorage.getItem("userCabinet"),
              });
              console.log("localStorage To DB");
            } else {
              console.log("No cabinet yet");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    const userId = auth?.currentUser?.uid;
    if (!userId) return;
    const hoursRef = ref(db, `users/${userId}/hours`);
    const unsubscribe = onValue(
      hoursRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setFetchedHours(snapshot.val());
        } else {
          console.log("No data available");
          setFetchedHours(null);
        }
      },
      (error) => {
        console.error(error);
      },
    );
    return () => unsubscribe();
  }, []);

  // Получаем дни для календаря
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );
  const weekdays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  return (
    <AppWrapper>
      <Head>
        <a href="https://www.vgtk.by">
          <ImageLogo src={gerb} alt="" />
        </a>
        {user ? <ImageLogo src={user.photoURL} /> : <ImageLogo src={inco} />}

        <DateNavigationWrapper>
          {hasUsedDatePicker && (
            <NavButton onClick={() => navigateDay(-1)} theme={theme}>
              ◀
            </NavButton>
          )}

          <DateSchedule
            onMouseDown={handleDatePressStart}
            onMouseUp={handleDatePressEnd}
            onTouchStart={handleDatePressStart}
            onTouchEnd={handleDatePressEnd}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {isLoading ? "Загрузка..." : dateSchedule}
          </DateSchedule>

          {hasUsedDatePicker && (
            <NavButton onClick={() => navigateDay(1)} theme={theme}>
              ▶
            </NavButton>
          )}
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

      {/* Модальное окно выбора даты */}
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
            {weekdays.map((day) => (
              <DatePickerWeekday key={day} theme={theme}>
                {day}
              </DatePickerWeekday>
            ))}

            {daysInMonth.map((date, index) => {
              if (!date) {
                return <DatePickerDay key={`empty-${index}`} />;
              }

              const dateKey = formatDate(date);
              const isAvailable = availableDates.includes(dateKey);
              const isToday = formatDate(new Date()) === dateKey;

              return (
                <DatePickerDayButton
                  key={dateKey}
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

          <div style={{ marginTop: "15px", fontSize: "12px", opacity: 0.7 }}>
            💡 Доступные даты отмечены точкой
          </div>
        </DatePickerContainer>
      </Modal>

      <Tarification>
        <AddPanel
          onSubmit={(e) => {
            handleFormSubmit(e, addGroup);
          }}
          action=""
        >
          <CustomInput
            handleInputChange={onLessonInputChange}
            inputValue={inputLessonValue}
            placeholder="Название предмета"
          />
          <CustomSelect handleSelectChange={handleSelectGroup} />
          <CheckboxWrapper>
            <Checkbox
              label={"Лабораторные"}
              handleCheckBoxChange={handleCheckboxLab}
            />
            <Checkbox
              label={"Лекции"}
              handleCheckBoxChange={handleCheckboxLect}
            />
          </CheckboxWrapper>
          <FormButton type="submit">Добавить</FormButton>
          <FormButton
            onClick={() => {
              setShowTarification((prev) => !prev);
            }}
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
                <FormButton
                  onClick={() => {
                    handleOpenAdvancedModal(el.id);
                  }}
                >
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
                  onChange={handleCabinetInputChange}
                  value={cabinetInputValue}
                  type="text"
                  placeholder={`Ваш кабинет: ${myCabinet || "не указан"}`}
                />
                <SetCabinetNumber onClick={handleSetMyCabinet}>
                  +
                </SetCabinetNumber>
              </MyCabinetInputWrapper>
              <div>
                <ToggleButton
                  displayName={"Ваш кабинет"}
                  displayNameAlt={"Ваше расписание"}
                  handleClick={() => {
                    setIsCabinetMode((prev) => !prev);
                  }}
                />
              </div>
            </>
          )}
        </HeaderSchedule>

        {viewMode === "my" ? (
          <>
            <ScheduleWrapper>
              {!isCabinetMode &&
                mySchedule.map((el) => (
                  <LessonWrapper key={el.id}>
                    <CabinetNumber>{el.lessonNumber}</CabinetNumber>
                    <LessonName>{lessonsTime[el.lessonNumber]}</LessonName>
                    <LessonName>{el.lessonName}</LessonName>
                    <GroupName
                      onClick={() => {
                        handleOpenModal(el.groupName);
                      }}
                    >
                      {el.groupName}
                    </GroupName>
                    <CabinetNumber>{el.cabinet}</CabinetNumber>
                  </LessonWrapper>
                ))}
              {isCabinetMode &&
                myCabinetLectures.map((el, index) => (
                  <LessonWrapper
                    key={`${el.lessonName + el.lessonNumber + index}`}
                  >
                    <CabinetNumber>{el.lessonNumber}</CabinetNumber>
                    <LessonName>{lessonsTime[el.lessonNumber]}</LessonName>
                    <LessonName>{el.lessonName}</LessonName>
                    <GroupName
                      onClick={() => {
                        handleOpenModal(el.groupName);
                      }}
                    >
                      {el.groupName}
                    </GroupName>
                    <CabinetNumber>{el.cabinet}</CabinetNumber>
                  </LessonWrapper>
                ))}
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
                  <FormButton
                    onClick={() => {
                      setAccountingHoursModal(true);
                    }}
                  >
                    Открыть учет часов
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
                obj.groupName.toLowerCase().trim() ===
                currentGroupModal.toLowerCase().trim(),
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
          Введите альтернативные названия для предмета <br />{" "}
          {currentLessonModal?.lesson}
        </div>
        <AddPanel
          onSubmit={(e) => {
            handleFormSubmit(e, () => {
              addAlternativeName(currentLessonModal, altLessonNameInputValue);
              setAltLessonNameInputValue("");
            });
          }}
          action=""
        >
          <CustomInput
            handleInputChange={onAltLessonNameInputChange}
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

      <Modal active={accountingHoursModal} setActive={setAccountingHoursModal}>
        <ScheduleTable
          rawData={fetchedHours}
          onRawDataChange={(data) => {
            setFetchedHours(data);
          }}
          userTarification={userTarification}
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
