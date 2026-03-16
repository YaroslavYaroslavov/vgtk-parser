import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  max-width: 100%;
`;

const GroupBlock = styled.div`
  background: ${({ theme }) => (theme === "dark" ? "#2d2d2d" : "#fff")};
  border-radius: 12px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => (theme === "dark" ? "#444" : "#e0e0e0")};
  overflow: hidden;
`;

const GroupTitle = styled.div`
  background: ${({ theme }) => (theme === "dark" ? "#3d3d3d" : "#f5f5f5")};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({ theme }) => (theme === "dark" ? "#444" : "#e0e0e0")};
`;

const LessonRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid
    ${({ theme }) => (theme === "dark" ? "#444" : "#f0f0f0")};

  &:last-child {
    border-bottom: none;
  }
`;

const LessonNumber = styled.div`
  width: 40px;
  font-weight: bold;
  color: ${({ theme }) => (theme === "dark" ? "#aaa" : "#666")};
`;

const LessonName = styled.div`
  flex: 1;
  font-size: 15px;
`;

const Cabinet = styled.div`
  background: ${({ theme }) => (theme === "dark" ? "#4a4a4a" : "#e8f0fe")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#1976d2")};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => (theme === "dark" ? "#444" : "#ddd")};
  border-radius: 25px;
  background: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

export const AllGroupsSchedule = ({ schedule, dateSchedule, theme }) => {
  const [search, setSearch] = useState("");

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
        <div style={{ textAlign: "center", padding: "30px", color: "#999" }}>
          Нет данных о расписании
        </div>
      </Container>
    );
  }

  // Безопасная фильтрация с проверками
  const filteredGroups = schedule.filter((group) => {
    // Проверяем что группа существует
    if (!group) return false;

    const groupName = group.groupName || "";
    const searchLower = search.toLowerCase();

    // Проверяем совпадение по названию группы
    const matchesGroup = groupName.toLowerCase().includes(searchLower);

    // Проверяем совпадение по названиям уроков
    const lessons = group.lessons || [];
    const matchesLesson = lessons.some((lesson) => {
      if (!lesson) return false;
      const lessonName = lesson.lessonName || "";
      return lessonName.toLowerCase().includes(searchLower);
    });

    return matchesGroup || matchesLesson;
  });

  return (
    <Container>
      <SearchInput
        theme={theme}
        placeholder="🔍 Поиск группы или предмета..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredGroups.map((group, groupIndex) => {
        // Защита от группы без названия
        const groupName = group.groupName || `Группа ${groupIndex + 1}`;
        const lessons = group.lessons || [];

        return (
          <GroupBlock key={groupName + groupIndex} theme={theme}>
            <GroupTitle theme={theme}>{groupName}</GroupTitle>
            {lessons.map((lesson, idx) => {
              // Защита от урока без данных
              const lessonNumber = lesson?.lessonNumber || idx + 1;
              const lessonName = lesson?.lessonName || "Название не указано";
              const cabinet = lesson?.cabinet || "---";

              return (
                <LessonRow key={idx} theme={theme}>
                  <LessonNumber theme={theme}>{lessonNumber}</LessonNumber>
                  <LessonName theme={theme}>
                    {lessonName}
                    {lesson?.isLab && " 🔬"}
                  </LessonName>
                  <Cabinet theme={theme}>{cabinet}</Cabinet>
                </LessonRow>
              );
            })}
          </GroupBlock>
        );
      })}

      {filteredGroups.length === 0 && (
        <div style={{ textAlign: "center", padding: "30px", color: "#999" }}>
          Ничего не найдено
        </div>
      )}
    </Container>
  );
};
