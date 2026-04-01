import styled from "styled-components";

const checkState = (handleState) => {
  switch (handleState) {
    case 0:
      return `var(--input-background-color)`;
    case 1:
      return `green`;
    case 2:
      return `red`;
  }
};

export const TarificationWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid lightpink;

  @media (max-width: 768px) {
    height: auto;
    min-height: 55px;
    padding: 10px 0;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const AddPanel = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-bottom: 30px;
  }
`;

export const LessonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid lightpink;

  @media (max-width: 768px) {
    height: auto;
    min-height: 55px;
    padding: 15px 0;
    /* flex-wrap: wrap; */
    gap: 12px;
  }
`;

export const LessonName = styled.div`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 5px;
  }
`;

export const Tarification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0 15px;
  }
`;

export const LessonInput = styled.input`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-radius: 5px;
  outline-width: 0;
  padding-right: 10px;
  padding-left: 10px;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const GroupName = styled.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Head = styled.header`
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 80px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 0;
  }
`;

export const ImageLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const FormButton = styled.button`
  height: 37px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-radius: 5px;
  outline-width: 0;
  padding-right: 10px;
  padding-left: 10px;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);
  border-color: ${(props) => checkState(props.handleState)};

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 44px;
    font-size: 16px;
  }
`;

export const FormButtonDelete = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: #180000;
  border-radius: 5px;
  background: rgba(56, 50, 50, 1);
  outline-width: 0;
  height: 37px;
  width: 150px;
  color: white;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 44px;
    font-size: 16px;
  }
`;

export const DateSchedule = styled.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    justify-content: center;
    padding: 10px 0;
  }
`;

export const MyCabinetInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: none;
  background: rgba(56, 50, 50, 1);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  height: 40px;
  width: 150px;

  &:focus {
    outline-width: 0;
  }

  font-weight: bold;
  background: var(--input-background-color);

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 44px;
    padding: 0 10px;
  }
`;

export const MyCabinetInputWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: rgba(41, 37, 37, 1);
  border-radius: 5px;
  background: rgba(56, 50, 50, 1);
  outline-width: 0;
  padding-right: 10px;
  padding-left: 10px;
  width: 170px;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 44px;
  }
`;

export const HeaderSchedule = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`;

export const CabinetNumber = styled.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const SetCabinetNumber = styled.div`
  transition: 0.2s;
  width: 40px;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: lightgray;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Header = styled.div`
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ScheduleWrapper = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
// Добавьте эти стили в ваш существующий файл styled.js

export const ViewToggleWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  background-color: var(--input-background-color);
  border: solid;
  border-radius: 5px;
  border-color: var(--input-border-color);
  padding: 5px;
  border-radius: 30px;
  width: fit-content;
`;

export const ViewToggleButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 25px;
  background-color: ${({ active, theme }) =>
    active ? (theme === "dark" ? "#4a90e2" : "#1976d2") : "transparent"};
  color: ${({ active, theme }) =>
    active ? "white" : theme === "dark" ? "#fff" : "#333"};
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ active, theme }) =>
      active
        ? theme === "dark"
          ? "#357abd"
          : "#1565c0"
        : theme === "dark"
          ? "#555"
          : "#e0e0e0"};
  }
`;
// Добавьте эти стили в ваш файл styled.js

export const DateNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavButton = styled.button`
  background: ${(props) => (props.theme === "dark" ? "#444" : "#f0f0f0")};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.theme === "dark" ? "#555" : "#e0e0e0")};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const DatePickerContainer = styled.div`
  padding: 20px;
  background: ${(props) => (props.theme === "dark" ? "#2d2d2d" : "#ffffff")};
  border-radius: 12px;
  min-width: 300px;
`;

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    text-transform: capitalize;
  }
`;

export const DatePickerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 15px;
`;

export const DatePickerWeekday = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 8px;
  color: ${(props) => (props.theme === "dark" ? "#aaa" : "#666")};
`;

export const DatePickerDay = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DatePickerDayButton = styled.button`
  aspect-ratio: 1;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.isAvailable ? "pointer" : "not-allowed")};
  background: ${(props) => {
    if (props.isToday) return props.theme === "dark" ? "#4a90e2" : "#007bff";
    if (props.isAvailable)
      return props.theme === "dark" ? "#3d3d3d" : "#f8f9fa";
    return props.theme === "dark" ? "#2d2d2d" : "#f0f0f0";
  }};
  color: ${(props) => {
    if (props.isToday) return "#ffffff";
    if (!props.isAvailable) return props.theme === "dark" ? "#666" : "#ccc";
    return props.theme === "dark" ? "#e0e0e0" : "#333";
  }};
  font-size: 14px;
  font-weight: ${(props) => (props.isToday ? "bold" : "normal")};
  transition: all 0.2s;
  position: relative;

  &:hover {
    background: ${(props) => {
      if (!props.isAvailable)
        return props.theme === "dark" ? "#2d2d2d" : "#f0f0f0";
      return props.theme === "dark" ? "#4a4a4a" : "#e0e0e0";
    }};
    transform: ${(props) => (props.isAvailable ? "scale(1.05)" : "none")};
  }

  &:active {
    transform: ${(props) => (props.isAvailable ? "scale(0.95)" : "none")};
  }
`;

export const AvailableDateBadge = styled.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${(props) => (props.theme === "dark" ? "#4a90e2" : "#007bff")};
`;
