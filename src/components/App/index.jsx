import { getVGTK } from "../../helpers/getVGTK";
import { useEffect, useState } from "react";
import { urlToday, urlTommorow } from "../../consts/url";
import { CustomInput } from "../Inputs";
import { CustomSelect } from "../Selects";
import { Checkbox } from "../Checkboxes";
import { ThemeSwitcher } from "../ThemeSwitcher";
import gerb from '../../assets/gerb.png'


import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

import Modal from "../Modal";
import { useTheme } from '../../hooks/use-theme';
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import { lessonsTime } from "../../consts/timeSchedule";
import { CopyTarification } from "../CopyTarification";
import {
  ImageGerb,
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
  Head
} from "./styled";
import { ToggleButton } from "../ToggleButton";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [mySchedule, setMySchedule] = useState([]);
  const [myCabinetLectures, setMyCabinetLectures] = useState([]);
  const [dateSchedule, setDateSchedule] = useState("Пожалуйста подождите");
  const [inputLessonValue, setInputLessonValue] = useState("");
  const [selectGroupValue, setSelectGroupValue] = useState("");
  const [checkboxLect, setCheckboxLect] = useState(false);
  const [checkboxLab, setCheckboxLab] = useState(false);
  const [userTarification, setUserTarification] = useState(
    JSON.parse(localStorage.getItem("userTarification")) || []
  );
  const [showTarification, setShowTarification] = useState(false);
  const [isUrlToday, setIsUrlToday] = useState(false);
  const [isCabinetMode, setIsCabinetMode] = useState(false);
  const [cabinetInputValue, setCabinetInputValue] = useState("");
  const [currentGroupModal, setCurrentGroupModal] = useState('')
  const [myCabinet, setMyCabinet] = useState(
    localStorage.getItem("userCabinet") || null
  );

  const { theme, setTheme } = useTheme();

  const onLessonInputChange = (event) => {
    setInputLessonValue(event.target.value);
  };

  const handleOpenModal = useCallback((groupName) => {
    setModalActive(true);
    setCurrentGroupModal(groupName)
  }, []);


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

  const handleSelectGroup = (event) => {
    setSelectGroupValue(event.target.value);
  };

  const handleCabinetInputChange = (event) => {
    setCabinetInputValue(event.target.value);
  };

  const handleChangeTheme = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme, theme]);
  

  const addGroupFromModal = (lesson) => {
    const isDuplicate = userTarification.some(
      (group) =>
        group.groupName === lesson.groupName &&
        group.lesson === lesson.lessonName 
    );
    if (isDuplicate) {
      alert('Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.')
    }
    else {
      console.log(lesson)

      const newGroup = {
        id: uuidv4(),
        groupName: lesson.groupName,
        lesson: lesson.lessonName,
        lecture: !lesson.isLab,
        labs: lesson.isLab,
      };

      setUserTarification((prev) => [...prev, newGroup]);

      localStorage.setItem(
        "userTarification",
        JSON.stringify([...userTarification, newGroup])
      );
      filterSchedule();
     
    }
  }

  const addGroup = () => {
    const isDuplicate = userTarification.some(
      (group) =>
        group.groupName === selectGroupValue &&
        group.lesson === inputLessonValue
    );

    if (isDuplicate) {
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

      localStorage.setItem(
        "userTarification",
        JSON.stringify([...userTarification, newGroup])
      );
      filterSchedule();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addGroup();
  };

  const filterSchedule = useCallback(() => {
    const newSchedule = [];

    userTarification.forEach((item) => {
      const { groupName, lesson, labs, lecture } = item;

      const scheduleItem = schedule.find(
        (schedule) =>
          schedule.groupName === groupName &&
          schedule.lessons.some(
            (l) =>
              l.lessonName === lesson &&
              ((labs && l.isLab) || (!l.isLab && lecture))
          )
      );

      if (scheduleItem) {
        newSchedule.push(
          ...scheduleItem.lessons.filter((l) => l.lessonName === lesson)
        );
      }
    });
    // console.log(newSchedule);
    newSchedule.sort();
    setMySchedule(
      newSchedule.sort(
        (a, b) => parseFloat(a.lessonNumber) - parseFloat(b.lessonNumber)
      )
    );
    // scheduleMode ? drawSchedsule(newSchedule) : drawSchedule(myCabinetLectures);
  }, [schedule, userTarification]);

  const handleDelete = (id) => {
    const updatedTarification = userTarification.filter((el) => el.id !== id);
    setUserTarification(updatedTarification);
    localStorage.setItem(
      "userTarification",
      JSON.stringify(updatedTarification)
    );

    filterSchedule();
  };

  const handleSetMyCabinet = () => {
    setMyCabinet(cabinetInputValue);
    setCabinetInputValue("");
    localStorage.setItem("userCabinet", cabinetInputValue);
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
  }, [schedule, myCabinetLectures, userTarification, filterSchedule]);

  return (
    <AppWrapper>
      <Head>
        <a href="https://www.vgtk.by">
        <ImageGerb src={gerb} alt="" />
        </a>
      <DateSchedule
        onClick={() => {
          setIsUrlToday((prev) => !prev);
        }}
      >
        {dateSchedule}
      </DateSchedule>
        <ThemeSwitcher handleChangeTheme={handleChangeTheme} theme={theme} />
      </Head>
      <Tarification>
        <AddPanel onSubmit={handleFormSubmit} action="">
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
                <FormButtonDelete onClick={() => handleDelete(el.id)}>
                  Удалить
                </FormButtonDelete>
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
                <GroupName onClick={()=>{handleOpenModal(el.groupName)}}>{el.groupName}</GroupName>
                <CabinetNumber>{el.cabinet}</CabinetNumber>
              </LessonWrapper>
            ))}
          {isCabinetMode &&
            myCabinetLectures.map((el) => (
              <LessonWrapper key={el.lessonNumber}>
                <CabinetNumber>{el.lessonNumber}</CabinetNumber>
                <LessonName>{lessonsTime[el.lessonNumber]}</LessonName>
                <LessonName>{el.lessonName}</LessonName>
                <GroupName onClick={()=>{handleOpenModal(el.groupName)}}>{el.groupName}</GroupName>
                <CabinetNumber>{el.cabinet}</CabinetNumber>
              </LessonWrapper>
            ))}
        </div>
        <FormButton onClick={handleCaptureClick}>Сохранить как изображение</FormButton>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        
        <div>Расписание группы {currentGroupModal}</div>
       <div>{schedule.find(obj => obj.groupName === currentGroupModal)?.lessons.map((lesson) => (
        <LessonWrapper key={lesson.lessonNumber}>
          <CabinetNumber>{lesson.lessonNumber}</CabinetNumber>
          <LessonName>{lessonsTime[lesson.lessonNumber]}</LessonName>
          <LessonName>{lesson.lessonName}</LessonName>
          <CabinetNumber>{lesson.cabinet}</CabinetNumber>
          {lesson.cabinet && <FormButton onClick={()=> addGroupFromModal(lesson)}>Добавить</FormButton>}
        </LessonWrapper>
       ))}

       </div>
      </Modal>
    </AppWrapper>
  );
}

export default App;
