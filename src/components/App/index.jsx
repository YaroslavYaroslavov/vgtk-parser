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
import { CopyTarification } from "../CopyTarification";
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
} from "./styled";
import { ToggleButton } from "../ToggleButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebase";
import { onValue, ref, set, get, child } from "firebase/database";
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
  const [checkboxLab, setCheckboxLab] = useState(false);
  const [loadHours, setLoadHours] = useState(0);
  const [fetchedHours, setFetchedHours] = useState(0);
  const [userTarification, setUserTarification] = useState(
    JSON.parse(localStorage.getItem("userTarification")) || []
  );
  const [showTarification, setShowTarification] = useState(false);
  // const [isGuestMode, setIsGuestMode] = useState(true);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [isUrlToday, setIsUrlToday] = useState(false);
  const [isCabinetMode, setIsCabinetMode] = useState(false);
  const [cabinetInputValue, setCabinetInputValue] = useState("");
  const [currentGroupModal, setCurrentGroupModal] = useState("");
  const [currentLessonModal, setCurrentLessonModal] = useState("");
  const [altLessonNameInputValue, setAltLessonNameInputValue] = useState("");
  const [myCabinet, setMyCabinet] = useState(
    localStorage.getItem("userCabinet") || null
  );

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
      set(ref(db, `users/${auth?.currentUser?.uid}/cabinet`, userCabinet));
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

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(
      document.querySelector(".scheduleWrapper")
    );
    const nameScreenshot = dateSchedule + ".png";
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, nameScreenshot, "image/png");
  };

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
    console.log(lesson);
    return userTarification.some(
      (group) =>
        group.groupName.toLowerCase().trim() ===
          lesson.groupName.toLowerCase().trim() &&
        group.lesson.toLowerCase().trim() ===
          lesson.lessonName.toLowerCase().trim()
    );
  };

  const addAlternativeName = () => {
    // if ((userTarification.find((el) => el.id === currentLessonModal))?.altNaming.some((el)=> el === altLessonNameInputValue) {alert('Ошибка')}}
    // console.log(currentLessonModal.altNaming.some(el=> el === altLessonNameInputValue))

    if (
      currentLessonModal.altNaming.some((el) => el === altLessonNameInputValue)
    ) {
      alert("Название уже существует");
    } else {
      currentLessonModal.altNaming.push(altLessonNameInputValue);
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
      console.log(lesson);

      const newGroup = {
        id: uuidv4(),
        groupName: lesson.groupName,
        lesson: lesson.lessonName,
        lecture: !lesson.isLab,
        labs: lesson.isLab,
        altNaming: [],
      };

      setUserTarification((prev) => [...prev, newGroup]);

      saveUserTarification([...userTarification, newGroup]);
      filterSchedule();
    }
  };

  const getHours = () => {
    get(ref(db, `users/${auth?.currentUser?.uid}/hours`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
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
    // console.log(userTarification);

    const newSchedule = [];

    userTarification.forEach((item) => {
      const { groupName, lesson, labs, lecture, altNaming } = item; // lesson здесь - это полное название, которое мы хотим

      const scheduleItem = schedule.find(
        (
          scheduleEntry // Переименовал schedule в scheduleEntry, чтобы не было конфликта имен
        ) =>
          scheduleEntry.groupName.toLowerCase().trim() ===
            groupName.toLowerCase().trim() &&
          scheduleEntry.lessons.some((l) => {
            const normalizedLessonName = l?.lessonName?.toLowerCase().trim();

            const matchesMainLesson =
              normalizedLessonName === lesson.toLowerCase().trim();

            const matchesAltNaming =
              altNaming &&
              altNaming.some(
                (altName) =>
                  normalizedLessonName === altName.toLowerCase().trim()
              );

            return (
              (matchesMainLesson || matchesAltNaming) &&
              ((labs && l.isLab) || (!l.isLab && lecture))
            );
          })
      );

      if (scheduleItem) {
        // Теперь модифицируем найденные уроки перед добавлением
        scheduleItem.lessons.forEach((l) => {
          const normalizedLessonName = l.lessonName.toLowerCase().trim();
          const matchesMainLesson =
            normalizedLessonName === lesson.toLowerCase().trim();
          const matchesAltNaming =
            altNaming &&
            altNaming.some(
              (altName) => normalizedLessonName === altName.toLowerCase().trim()
            );

          if (matchesMainLesson || matchesAltNaming) {
            // Создаем копию объекта урока, чтобы не изменять исходные данные в 'schedule'
            const lessonToAdd = { ...l };
            // console.log(lessonToAdd);
            // Заменяем lessonName на полное название из userTarification.lesson
            lessonToAdd.lessonName = lesson; // item.lesson содержит полное название

            newSchedule.push(lessonToAdd);
          }
        });
      }
    });

    newSchedule.sort(
      (a, b) => parseFloat(a.lessonNumber) - parseFloat(b.lessonNumber)
    );

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
    console.log("didnt complete");
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
    console.log("dateSchedule изменился");
  }, [dateSchedule]);
  // console.log(user);

  useEffect(() => {
    console.log("USER ИЗМЕНИЛСЯ");
    if (user) {
      get(ref(db, `users/${auth?.currentUser?.uid}/tarification`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setUserTarification(snapshot.val());
          } else {
            if (localStorage.getItem("userTarification")) {
              set(
                ref(db, `users/${auth?.currentUser?.uid}/tarification`),
                JSON.parse(localStorage.getItem("userTarification"))
              );
              console.log("localStorage To DB");
            } else {
              console.log("No tarification yet");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setUserTarification(JSON.parse(localStorage.getItem("userTarification")));
    }
  }, [user]);
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
            <CopyTarification />
            <ToggleButton
              displayName={"Продвинутый режим"}
              displayNameAlt={"Обычный режим"}
              handleClick={() => {
                setAdvancedMode((prev) => !prev);
              }}
            ></ToggleButton>
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
                {/* <button>Редактировать</button> */}
                {!advancedMode ? (
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
                )}
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

        <div className="scheduleWrapper">
          {!isCabinetMode &&
            mySchedule.map((el) => (
              <LessonWrapper key={el.lessonNumber}>
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
        </div>
        <FormButton onClick={handleCaptureClick}>
          Сохранить как изображение
        </FormButton>
        {user && (
          <FormButton handleState={loadHours} onClick={handleAddHoursClick}>
            Добавить в учет часов
          </FormButton>
        )}
      </div>
      <ScheduleTable rawData={fetchedHours}></ScheduleTable>
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
                {}
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
            handleFormSubmit(e, addAlternativeName);
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
    </AppWrapper>
  );
}

export default App;
