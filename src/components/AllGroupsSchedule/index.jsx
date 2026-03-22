import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { groupsByDepartment } from "../../consts/allGroups"; // Импортируем данные об отделениях

// Функция для определения отделения по группе
const getDepartmentForGroup = (groupName) => {
  console.log("Поиск отделения для группы:", groupName);
  console.log("Доступные отделения:", groupsByDepartment);

  for (const [department, groups] of Object.entries(groupsByDepartment)) {
    if (groups.includes(groupName)) {
      console.log("Найдено отделение:", department);
      return department;
    }
  }
  console.log("Отделение не найдено для группы:", groupName);
  return null;
};

const Container = styled.div`
  padding: 10px;
  max-width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => 
    theme === "dark" ? "var(--input-border-color, #444)" : "var(--input-border-color, #ddd)"
  };
  border-radius: 25px;
  background: ${({ theme }) => 
    theme === "dark" ? "var(--input-background-color, #333)" : "var(--input-background-color, #fff)"
  };
  color: var(--text-color);
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff8caf;
    box-shadow: 0 0 0 3px rgba(255, 140, 175, 0.2);
    transform: scale(1.02);
  }

  &::placeholder {
    color: var(--color-gray);
  }
`;

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GroupCard = styled.div`
  background: var(--card-background-color);
  border-radius: 12px;
  border: 1px solid ${({ theme }) => 
    theme === "dark" ? "var(--input-border-color, #444)" : "var(--input-border-color, #e0e0e0)"
  };
  overflow: hidden;
  height: fit-content;
  display: flex;
  flex-direction: column;

  /* Анимация появления карточки */
  animation: cardAppear 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);

  @keyframes cardAppear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Эффект при наведении */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px var(--color-black-half-opacity);
    border-color: #ff8caf;
  }
`;

const GroupTitle = styled.div`
  background: ${({ theme, $departmentColor, $darkDepartmentColor }) => {
    if (theme === "dark" && $darkDepartmentColor) {
      return $darkDepartmentColor;
    }
    if (theme === "light" && $departmentColor) {
      return $departmentColor;
    }
    return theme === "dark" ? "var(--card-background-color)" : "var(--color-white)";
  }};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({ theme }) => 
      theme === "dark" ? "var(--input-border-color, #444)" : "var(--input-border-color, #e0e0e0)"
    };
  color: ${({ theme, $darkDepartmentColor }) => {
    if (theme === "dark" && $darkDepartmentColor) {
      return "var(--color-white)";
    }
    return "var(--text-color)";
  }};
`;

const LessonsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const LessonRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid
    ${({ theme }) => 
      theme === "dark" ? "var(--input-border-color, #444)" : "var(--input-border-color, #f0f0f0)"
    };
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--hover-color);
  }

  /* Анимация для строк уроков */
  animation: rowAppear 0.3s ease forwards;
  animation-delay: ${({ index }) => index * 0.05}s;
  opacity: 0;
  transform: translateX(-10px);

  @keyframes rowAppear {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

const LessonNumber = styled.div`
  width: 40px;
  font-weight: bold;
  color: var(--color-gray);
`;

const LessonName = styled.div`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-color);
`;

const Cabinet = styled.div`
  background: ${({ theme }) => 
    theme === "dark" 
      ? "var(--input-background-color)" 
      : "var(--hover-color)"
  };
  color: ${({ theme }) => 
    theme === "dark" ? "var(--color-white)" : "var(--color-green)"
  };
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => 
      theme === "dark" 
        ? "var(--hover-color)" 
        : "var(--hover-color-input)"
    };
    transform: scale(1.05);
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: var(--color-gray);
  font-size: 18px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px 15px;
  background: ${({ theme }) => 
    theme === "dark" ? "var(--card-background-color)" : "var(--hover-color)"
  };
  border-radius: 12px;
  font-size: 14px;
  color: var(--text-color);
  animation: statsAppear 0.3s ease;

  @keyframes statsAppear {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    color: #ff8caf;
    font-size: 18px;
  }
`;

export const AllGroupsSchedule = ({
  schedule,
  dateSchedule,
  theme = "light",
}) => {
  const [search, setSearch] = useState("");
  const [prevCount, setPrevCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  console.log("AllGroupsSchedule рендер, theme:", theme);

  // Защита от пустого или невалидного schedule
  if (!schedule || !Array.isArray(schedule) || schedule.length === 0) {
    return (
      <Container>
        <SearchInput
          theme={theme}
          placeholder="🔍 Поиск группы или предмета..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <EmptyMessage>Нет данных о расписании</EmptyMessage>
      </Container>
    );
  }

  // Безопасная фильтрация с проверками
  const filteredGroups = schedule.filter((group) => {
    if (!group) return false;
    const groupName = group.groupName || "";
    const searchLower = search.toLowerCase();
    const matchesGroup = groupName.toLowerCase().includes(searchLower);
    const lessons = group.lessons || [];
    const matchesLesson = lessons.some((lesson) => {
      if (!lesson) return false;
      const lessonName = lesson.lessonName || "";
      return lessonName.toLowerCase().includes(searchLower);
    });
    return matchesGroup || matchesLesson;
  });

  // Эффект для анимации изменения количества карточек
  useEffect(() => {
    setIsSearching(true);
    setPrevCount(filteredGroups.length);

    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filteredGroups.length]);

  return (
    <Container>
      <SearchInput
        theme={theme}
        placeholder="🔍 Поиск группы или предмета..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StatsBar theme={theme}>
        <StatsItem>
          📊 Найдено групп: <span>{filteredGroups.length}</span>
        </StatsItem>
        {search && <StatsItem>🔍 Поиск: "{search}"</StatsItem>}
      </StatsBar>

      <GroupsGrid className={isSearching ? "searching" : ""}>
        {filteredGroups.map((group, groupIndex) => {
          const groupName = group.groupName || `Группа ${groupIndex + 1}`;
          const lessons = group.lessons || [];

          // Определяем отделение для группы и получаем цвет
          const department = getDepartmentForGroup(groupName);
          
          // Цвета для отделений (соответствуют цветам из таблицы)
          const departmentColors = {
            "ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА": "#e6f3ff", // Голубой
            "ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ": "#fff0e6", // Оранжевый/персиковый
            "ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ": "#e6ffe6", // Салатовый
            "ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ": "#ffe6e6", // Розовый/красноватый
            "ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ": "#e6e6ff", // Сиреневый
            "ОТДЕЛЕНИЕ ТРАНСПОРТА": "#fff4e6", // Желтоватый
            "ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ": "#f0e6ff", // Фиолетовый
            "ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ": "#ffe6f0", // Розовый
          };

          // Темные версии цветов для ночной темы
          const darkDepartmentColors = {
            "ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА": "#1a3b4f", // Темно-синий
            "ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ": "#4f3b1a", // Темно-оранжевый/коричневый
            "ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ": "#1a4f1a", // Темно-зеленый
            "ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ": "#4f1a1a", // Темно-красный
            "ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ": "#1a1a4f", // Темно-синий
            "ОТДЕЛЕНИЕ ТРАНСПОРТА": "#4f3d1a", // Темно-желтый
            "ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ": "#2d1a4f", // Темно-фиолетовый
            "ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ": "#4f1a3b", // Темно-розовый
          };

          const departmentColor = department
            ? departmentColors[department]
            : null;
          const darkDepartmentColor = department
            ? darkDepartmentColors[department]
            : null;

          return (
            <GroupCard
              key={groupName + groupIndex}
              theme={theme}
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <GroupTitle
                theme={theme}
                $departmentColor={departmentColor}
                $darkDepartmentColor={darkDepartmentColor}
              >
                {groupName}
              </GroupTitle>
              <LessonsList>
                {lessons.map((lesson, idx) => {
                  const lessonNumber = lesson?.lessonNumber || idx + 1;
                  const lessonName =
                    lesson?.lessonName || "Название не указано";
                  const cabinet = lesson?.cabinet || "---";

                  return (
                    <LessonRow key={idx} theme={theme} index={idx}>
                      <LessonNumber theme={theme}>{lessonNumber}</LessonNumber>
                      <LessonName theme={theme}>
                        {lessonName}
                        {lesson?.isLab && " 🔬"}
                      </LessonName>
                      <Cabinet theme={theme}>{cabinet}</Cabinet>
                    </LessonRow>
                  );
                })}
              </LessonsList>
            </GroupCard>
          );
        })}
      </GroupsGrid>

      {filteredGroups.length === 0 && (
        <EmptyMessage>😕 Ничего не найдено по запросу "{search}"</EmptyMessage>
      )}
    </Container>
  );
};