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
  ViewToggleWrapper,
  ViewToggleButton,
} from "./styled";
import { ToggleButton } from "../ToggleButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import { onValue, ref, set, get, update } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { db } from "../../firebaseConfig/firebase";
import { ScheduleTable } from "../HoursAccounting";
import { AllGroupsSchedule } from "../AllGroupsSchedule";

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
    JSON.parse(localStorage.getItem("userTarification")) || [],
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
    localStorage.getItem("userCabinet") || null,
  );
  const [currentLessonNameFromModal, setCurrentLessonNameFromModal] =
    useState("");
  const [viewMode, setViewMode] = useState("my"); // 'my' - мое расписание, 'all' - все группы
  const [showAllGroups, setShowAllGroups] = useState(false);

  const [user, loading] = useAuthState(auth);

  const { theme, setTheme } = useTheme();

  const saveUserTarification = (userTarification) => {
    if (!user) {
      console.log("Нет пользователя");
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

  const addAlternativeName = (currentLessonModal, altName) => {
    if (currentLessonModal.altNaming.some((el) => el === altName)) {
      alert("Название уже существует");
    } else {
      currentLessonModal.altNaming.push(altName);
      saveUserTarification(userTarification);
      filterSchedule();
    }
  };

  const addGroupFromModal = (lesson) => {
    if (isDuplicateLesson(lesson)) {
      alert(
        'Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.',
      );
    } else {
      console.log("УРОК ИЗ МОДАЛКИ", lesson);
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
        altNaming: [],
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
      schedule.map((s) => [(s.groupName ?? "").toLowerCase().trim(), s]),
    );

    userTarification.forEach((item) => {
      const { groupName, lesson, labs, lecture, altNaming } = item;
      const groupKey = normalize(groupName);
      const scheduleItem = scheduleByGroup.get(groupKey);
      if (!scheduleItem) return;

      scheduleItem.lessons.forEach((l) => {
        const lessonNameNorm = normalize(l?.lessonName);
        const matchesMainLesson = lessonNameNorm === normalize(lesson);
        const matchesAltNaming =
          Array.isArray(altNaming) &&
          altNaming.some((alt) => lessonNameNorm === normalize(alt));
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
  }, [schedule, userTarification]);

  const handleAddHoursClick = () => {
    const refDate = parseDateLabelToDDMMYYYY(dateSchedule);

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
    const fetchData = async () => {
      const [fetchedSchedule, fetchedMyCabinetLectures, dateSchedule] =
        await getVGTK(isUrlToday ? urlToday : urlTommorow, myCabinet);
      setSchedule(fetchedSchedule);
      setMyCabinetLectures(fetchedMyCabinetLectures);
      setDateSchedule(dateSchedule);
    };

    fetchData();
  }, [isUrlToday, myCabinet]);

  useEffect(() => {
    filterSchedule();
    getHours();
  }, [schedule, myCabinetLectures, userTarification, filterSchedule]);

  useEffect(() => {
    console.log("USER ИЗМЕНИЛСЯ");
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
                  placeholder={`Ваш кабинет: ${myCabinet}`}
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
