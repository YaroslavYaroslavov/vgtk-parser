import { getVGTK } from "../../helpers/getVGTK";
import { parseDateLabelToDDMMYYYY } from "../../helpers/parseDateLabelToDDMMYYYY";
import { useEffect, useState } from "react";
import { urlToday, urlTommorow } from "../../consts/url";
import { CustomInput } from "../Inputs";
import { CustomSelect } from "../Selects";
import { Checkbox } from "../Checkboxes";
import { ThemeSwitcher } from "../ThemeSwitcher";
import gerb from "../../assets/gerb.png";
import inco from "../../assets/inco.png";

import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

import Modal from "../Modal";
import { useTheme } from "../../hooks/use-theme";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import { lessonsTime } from "../../consts/timeSchedule";
// import { CopyTarification } from "../CopyTarification";
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
} from "./styled";
import { ToggleButton } from "../ToggleButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import { onValue, ref, set, get, update } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { db } from "../../firebaseConfig/firebase";
import { ScheduleTable } from "../HoursAccounting";
const provider = new GoogleAuthProvider();

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [advancedModalActive, setAdvancedModalActive] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [mySchedule, setMySchedule] = useState([]);
  const [myCabinetLectures, setMyCabinetLectures] = useState([]);
  const [dateSchedule, setDateSchedule] = useState("Пожалуйста подождите");
  const [inputLessonValue, setInputLessonValue] = useState("");
  const [selectGroupValue, setSelectGroupValue] = useState("");
  const [checkboxLect, setCheckboxLect] = useState(false);
  const [accountingHoursModal, setAccountingHoursModal] = useState(false);
  const [checkboxLab, setCheckboxLab] = useState(false);
  const [loadHours, setLoadHours] = useState(0);
  const [fetchedHours, setFetchedHours] = useState(0);
  const [userTarification, setUserTarification] = useState(
    JSON.parse(localStorage.getItem("userTarification")) || []
  );
  const [showTarification, setShowTarification] = useState(false);
  // const [isGuestMode, setIsGuestMode] = useState(true);
  const [isAddingFromModal, setIsAddingFromModal] = useState(false);
  const [isUrlToday, setIsUrlToday] = useState(false);
  const [isCabinetMode, setIsCabinetMode] = useState(false);
  const [cabinetInputValue, setCabinetInputValue] = useState("");
  const [currentGroupModal, setCurrentGroupModal] = useState("");
  const [currentLessonModal, setCurrentLessonModal] = useState("");
  const [altLessonNameInputValue, setAltLessonNameInputValue] = useState("");
  const [myCabinet, setMyCabinet] = useState(
    localStorage.getItem("userCabinet") || null
  );
  const [currentLessonNameFromModal, setCurrentLessonNameFromModal] =
    useState("");

  const [user, loading] = useAuthState(auth);

  // const  (user?.auth.currentUser.uid);

  const { theme, setTheme } = useTheme();

  // const dbUserReference = auth ? ref(db, `user/${auth?.currentUser?.uid}`) : "";

  const saveUserTarification = (userTarification) => {
    if (!user) {
      console.log("Нет пользователя");
      localStorage.setItem(
        "userTarification",
        JSON.stringify(userTarification)
      );
    } else {
      // console.log('есть польз')
      set(
        ref(db, `users/${auth?.currentUser?.uid}/tarification`),
        userTarification
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
  const handleOpenAdvancedModal = useCallback(
    (lessonId) => {
      setAdvancedModalActive(true);
      setCurrentLessonModal(userTarification.find((el) => el.id === lessonId));
    },
    [userTarification]
  );

  // const handleCaptureClick = async () => {
  //   const canvas = await html2canvas(
  //     document.querySelector(".scheduleWrapper")
  //   );
  //   const nameScreenshot = dateSchedule + ".png";
  //   const dataURL = canvas.toDataURL("image/png");
  //   downloadjs(dataURL, nameScreenshot, "image/png");
  // };

  const handleCheckboxLab = () => {
    setCheckboxLab((prev) => !prev);
  };
  const handleCheckboxLect = () => {
    setCheckboxLect((prev) => !prev);
  };
  // console.log(user);
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
    // console.log(lesson);
    return userTarification.some(
      (group) =>
        group.groupName.toLowerCase().trim() ===
          lesson.groupName.toLowerCase().trim() &&
        group.lesson.toLowerCase().trim() ===
          lesson.lessonName.toLowerCase().trim()
    );
  };

  const addAlternativeName = (currentLessonModal, altName) => {
    // if ((userTarification.find((el) => el.id === currentLessonModal))?.altNaming.some((el)=> el === altLessonNameInputValue) {alert('Ошибка')}}
    // console.log(currentLessonModal.altNaming.some(el=> el === altLessonNameInputValue))

    if (currentLessonModal.altNaming.some((el) => el === altName)) {
      alert("Название уже существует");
    } else {
      currentLessonModal.altNaming.push(altName);
      // setUserTarification((prev) => [...prev, currentLessonModal]);
      // localStorage.setItem(
      //   "userTarification",
      //   JSON.stringify([...userTarification, currentLessonModal])
      // );
      saveUserTarification(userTarification);
      filterSchedule();
    }

    // currentLessonModal.altNaming.push(altLessonNameInputValue)
  };
  const addGroupFromModal = (lesson) => {
    if (isDuplicateLesson(lesson)) {
      alert(
        'Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.'
      );
    } else {
      console.log("УРОК ИЗ МОДАЛКИ", lesson);
      setCurrentLessonNameFromModal(lesson.lessonName);
      // setCurrentGroupNameFromModal(lesson.groupName);
      setIsAddingFromModal(true);
      // console.log(123);
      // console.log("нажат урок ", lesson.name);/
      // const newGroup = {
      //   id: uuidv4(),
      //   groupName: lesson.groupName,
      //   lesson: lesson.lessonName,
      //   lecture: !lesson.isLab,
      //   labs: lesson.isLab,
      //   altNaming: [],
      // };
      // setUserTarification((prev) => [...prev, newGroup]);
      // saveUserTarification([...userTarification, newGroup]);
      // filterSchedule();
    }
  };

  const getHours = () => {
    get(ref(db, `users/${auth?.currentUser?.uid}/hours`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
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
          inputLessonValue.toLowerCase().trim()
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
        altNaming: [],
      };

      setUserTarification((prev) => [...prev, newGroup]);

      // localStorage.setItem(
      //   "userTarification",
      //   JSON.stringify([...userTarification, newGroup])
      // );
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
    let idCounter = 0; // локальный счётчик уникальных id для уроков
    // Предварительная нормализация входных данных для ускорения сравнения
    const normalize = (s) => (s || "").toLowerCase().trim();
    // const normalize = (s) => console.log(s);
    // индексируем schedule по группе для быстрого доступа
    const scheduleByGroup = new Map(
      schedule.map((s) => [(s.groupName ?? "").toLowerCase().trim(), s])
    );
    userTarification.forEach((item) => {
      const { groupName, lesson, labs, lecture, altNaming } = item;
      const groupKey = normalize(groupName);
      const scheduleItem = scheduleByGroup.get(groupKey);
      if (!scheduleItem) return;
      // Ищем подходящие уроки внутри записи группы
      scheduleItem.lessons.forEach((l) => {
        const lessonNameNorm = normalize(l?.lessonName);
        const matchesMainLesson = lessonNameNorm === normalize(lesson);
        const matchesAltNaming =
          Array.isArray(altNaming) &&
          altNaming.some((alt) => lessonNameNorm === normalize(alt));
        const isLab = !!l.isLab;
        // Выбор по типу занятия: лабораторная только если указано labs, иначе лекция
        const typeMatches = (labs && isLab) || (!isLab && lecture);
        if ((matchesMainLesson || matchesAltNaming) && typeMatches) {
          // Создаем копию объекта урока и добавляем уникальный id
          const lessonToAdd = { ...l, lessonName: lesson };
          lessonToAdd.id = `${++idCounter}`;
          newSchedule.push(lessonToAdd);
        }
      });
    });
    // Убеждаемся, что сортировка корректна (если нужен другой порядок, можно поменять)
    newSchedule.sort((a, b) => {
      // Дополнительно можно стабилизировать порядок по времени начала, если есть
      const na = parseFloat(a?.lessonNumber) || 0;
      const nb = parseFloat(b?.lessonNumber) || 0;
      if (na !== nb) return na - nb;
      // fallback: по id
      return (a?.id || "").localeCompare(b?.id || "");
    });
    setMySchedule(newSchedule);
  }, [schedule, userTarification]);

  const handleAddHoursClick = () => {
    const refDate = parseDateLabelToDDMMYYYY(dateSchedule);

    const writeData = () => {
      setLoadHours(1);
      set(
        ref(db, `users/${auth?.currentUser?.uid}/hours/${refDate}`),
        mySchedule
      )
        .then(() => {
          alert("Сохранено");
          setLoadHours(1);
          setTimeout(() => {
            setLoadHours(0);
          }, 5000);
          getHours();

          // Data saved successfully!
        })
        .catch((error) => {
          console.log(error);
          setLoadHours(2);
          setTimeout(() => {
            setLoadHours(0);
          }, 5000);
          // The write failed...
        });
    };

    // console.log(mySchedule.length < 9);
    if (mySchedule.length < 9) {
      if (
        confirm(
          "Вы пытаетесь добавить в тарификацию меньше, чем 9 занятий, продолжить?"
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
      .then(() => {
        // if()
        // set(
        //   ref(db, `users/${auth?.currentUser?.uid}/tarification`),
        //   userTarification
        // );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        console.log("error ", errorCode, errorMessage);
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  const handleLogOutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  if (auth) {
    // handleSignInClick();
  }
  const handleDeleteByID = (id) => {
    const updatedTarification = userTarification.filter((el) => el.id !== id);
    setUserTarification(updatedTarification);
    // localStorage.setItem(
    //   "userTarification",
    //   JSON.stringify(updatedTarification)
    // );

    saveUserTarification(updatedTarification);

    filterSchedule();
  };

  const handleDeleteByLesson = () => {
    // console.log("didnt complete");
    // const updatedTarification = userTarification.filter((el) => el.id !== id);
    // setUserTarification(updatedTarification);
    // localStorage.setItem(
    //   "userTarification",
    //   JSON.stringify(updatedTarification)
    // );
    // filterSchedule();
  };

  const handleSetMyCabinet = () => {
    setMyCabinet(cabinetInputValue);
    setCabinetInputValue("");
    // localStorage.setItem("userCabinet", cabinetInputValue);
    saveUserCabinet(cabinetInputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedSchedule, fetchedMyCabinetLectures, dateSchedule] =
        await getVGTK(isUrlToday ? urlToday : urlTommorow, myCabinet);
      setSchedule(fetchedSchedule);
      // console.log(fetchedSchedule);
      // setSchedule([]);
      setMyCabinetLectures(fetchedMyCabinetLectures);
      setDateSchedule(dateSchedule);
    };

    fetchData();
  }, [isUrlToday, myCabinet]);

  useEffect(() => {
    filterSchedule();
    getHours();
    // dbUserReference && set(ref(db, dbUserReference), "set");
  }, [
    schedule,
    myCabinetLectures,
    userTarification,
    filterSchedule,
    // dbUserReference,
  ]);

  useEffect(() => {
    // console.log("dateSchedule изменился");
  }, [dateSchedule]);
  // console.log(user);

  useEffect(() => {
    console.log("USER ИЗМЕНИЛСЯ");
    if (user) {
      get(ref(db, `users/${auth?.currentUser?.uid}/tarification`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            setUserTarification(snapshot.val());
          } else {
            if (localStorage.getItem("userTarification")) {
              set(
                ref(db, `users/${auth?.currentUser?.uid}/tarification`),
                JSON.parse(localStorage.getItem("userTarification") || [])
              );
              // console.log("localStorage To DB");
            } else {
              // console.log("No tarification yet");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setUserTarification(
        JSON.parse(localStorage.getItem("userTarification")) || []
      );
    }
    if (user) {
      get(ref(db, `users/${auth?.currentUser?.uid}/userInfo`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
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
          // console.log(snapshot.val());
          setFetchedHours(snapshot.val());
        } else {
          console.log("No data available");
          setFetchedHours(null); // или []
        }
      },
      (error) => {
        console.error(error);
      }
    );
    // Очистка подписки при размонтировании
    return () => unsubscribe();
  }, []);
  console.log(mySchedule);
  return (
    <AppWrapper>
      <Head>
        <a href="https://www.vgtk.by">
          <ImageLogo src={gerb} alt="" />
        </a>
        {user ? <ImageLogo src={user.photoURL} /> : <ImageLogo src={inco} />}
        <DateSchedule
          onClick={() => {
            setIsUrlToday((prev) => !prev);
          }}
        >
          {dateSchedule}
        </DateSchedule>
        {!user ? (
          <FormButton onClick={handleSignInClick}>Войти</FormButton>
        ) : (
          <FormButton onClick={handleLogOutClick}>Выйти</FormButton>
        )}
        <ThemeSwitcher handleChangeTheme={handleChangeTheme} theme={theme} />
      </Head>
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
          ></CustomInput>
          <CustomSelect handleSelectChange={handleSelectGroup}></CustomSelect>
          <CheckboxWrapper>
            <Checkbox
              label={"Лабораторные"}
              handleCheckBoxChange={handleCheckboxLab}
            ></Checkbox>

            <Checkbox
              label={"Лекции"}
              handleCheckBoxChange={handleCheckboxLect}
            ></Checkbox>
          </CheckboxWrapper>
          {/* {schedule.map((el, index) => (
        <div key={index}>{el.groupName}</div>
      ))} */}
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
            {/* <CopyTarification /> */}
            {/* <ToggleButton
              displayName={"Продвинутый режим"}
              displayNameAlt={"Обычный режим"}
              handleClick={() => {
                setAdvancedMode((prev) => !prev);
              }}
            ></ToggleButton> */}
            Ваша тарификация:
            {userTarification.map((el) => (
              <TarificationWrapper
                // style={{ display: "flex", gap: "20px" }}
                key={el.id}
              >
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
                {/* <button>Редактировать</button> */}
                {/* {!advancedMode ? (
                  <FormButtonDelete onClick={() => handleDeleteByID(el.id)}>
                    Удалить
                  </FormButtonDelete>
                ) : (
                  <FormButton
                    onClick={() => {
                      handleOpenAdvancedModal(el.id);
                    }}
                  >
                    Добавить названия
                  </FormButton>
                )} */}
              </TarificationWrapper>
            ))}
          </>
        )}
      </Tarification>
      <div>
        <HeaderSchedule>
          <MyCabinetInputWrapper>
            <MyCabinetInput
              onChange={handleCabinetInputChange}
              value={cabinetInputValue}
              type="text"
              placeholder={`Ваш кабинет: ${myCabinet}`}
            />
            <SetCabinetNumber onClick={handleSetMyCabinet}>+</SetCabinetNumber>
          </MyCabinetInputWrapper>
          <div>
            <ToggleButton
              displayName={"Ваш кабинет"}
              displayNameAlt={"Ваше расписание"}
              handleClick={() => {
                setIsCabinetMode((prev) => !prev);
              }}
            ></ToggleButton>
            {/* <SwitchBtn></SwitchBtn> */}
          </div>
        </HeaderSchedule>

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
            myCabinetLectures.map((el) => (
              <LessonWrapper key={`${el.lessonName + el.lessonNumber}`}>
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
          {/* <FormButton onClick={handleCaptureClick}>
            Сохранить как изображение
          </FormButton> */}
          {user && (
            <>
              <FormButton handleState={loadHours} onClick={handleAddHoursClick}>
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
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>Расписание группы {currentGroupModal}</div>
        <div>
          {schedule
            .find(
              (obj) =>
                obj.groupName.toLowerCase().trim() ===
                currentGroupModal.toLowerCase().trim()
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
                  <FormButton onClick={() => handleDeleteByLesson(lesson)}>
                    Удалить
                  </FormButton>
                )}
              </LessonWrapper>
            ))}
        </div>
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
            });
          }}
          action=""
        >
          <CustomInput
            handleInputChange={onAltLessonNameInputChange}
            inputValue={altLessonNameInputValue}
          ></CustomInput>
          <FormButton type="submit">Добавить</FormButton>
        </AddPanel>
        <div>Альтернативные названия:</div>
        {currentLessonModal &&
          currentLessonModal.altNaming &&
          currentLessonModal.altNaming.map((el) => {
            return <p key={el}>{el}</p>;
          })}
      </Modal>
      <Modal active={accountingHoursModal} setActive={setAccountingHoursModal}>
        <ScheduleTable
          rawData={fetchedHours}
          onRawDataChange={(data) => {
            setFetchedHours(data);
          }}
          userTarification={userTarification}
        ></ScheduleTable>
      </Modal>
      <Modal active={isAddingFromModal} setActive={setIsAddingFromModal}>
        {userTarification.map(
          (el) =>
            el.groupName === currentGroupModal && (
              <TarificationWrapper
                // style={{ display: "flex", gap: "20px" }}
                key={el.id}
              >
                <LessonName>{el.lesson}</LessonName>
                <GroupName>{el.groupName}</GroupName>
                {/* <p>Лаб. {el.labs ? "Есть" : "Нет"}</p> */}
                {/* <p>Лекции {el.lecture ? "Есть" : "Нет"}</p> */}
                <FormButton
                  onClick={() => {
                    addAlternativeName(el, currentLessonNameFromModal);
                    // handleOpenAdvancedModal(el.id);
                    setIsAddingFromModal(false);
                    // console.log("ЭЛЕМЕНТ", el);
                    // console.log(el.altNaming);
                  }}
                >
                  Добавить названия
                </FormButton>
                {/* <FormButtonDelete onClick={() => handleDeleteByID(el.id)}> */}
                {/* Удалить */}
                {/* </FormBusttonDelete> */}
                {/* <button>Редактировать</button> */}
                {/* {!advancedMode ? (
                  <FormButtonDelete onClick={() => handleDeleteByID(el.id)}>
                    Удалить
                  </FormButtonDelete>
                ) : (
                  <FormButton
                    onClick={() => {
                      handleOpenAdvancedModal(el.id);
                    }}
                  >
                    Добавить названия
                  </FormButton>
                )} */}
              </TarificationWrapper>
            )
        )}
      </Modal>
    </AppWrapper>
  );
}

export default App;
