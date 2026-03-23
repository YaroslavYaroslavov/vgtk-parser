import { useState, useEffect } from "react";
import { fetchAllGroups } from "../../consts/allGroups";
import { SelectStyled } from "./styled";

export const CustomSelect = ({ handleSelectChange, selectValue }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGroups = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllGroups();
        setAllGroups(data.allGroups);
        setError(null);
      } catch (err) {
        console.error("Ошибка загрузки групп:", err);
        setError("Не удалось загрузить список групп");
      } finally {
        setIsLoading(false);
      }
    };

    loadGroups();
  }, []);

  if (isLoading) {
    return (
      <SelectStyled type="text" required disabled>
        <option>Загрузка групп...</option>
      </SelectStyled>
    );
  }

  if (error) {
    return (
      <SelectStyled type="text" required disabled>
        <option>{error}</option>
      </SelectStyled>
    );
  }

  return (
    <SelectStyled
      type="text"
      required
      value={selectValue}
      onChange={handleSelectChange}
    >
      <option value="" disabled selected={!selectValue} hidden>
        Группа
      </option>
      {allGroups.map((group) => (
        <option value={group} key={group}>
          {group}
        </option>
      ))}
    </SelectStyled>
  );
};
