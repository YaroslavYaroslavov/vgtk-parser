import styled from "styled-components";
export const SelectStyled = styled.select`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: rgba(41, 37, 37, 1);
  border-radius: 5px;
  background: rgba(56, 50, 50, 1);
  outline-width: 0;
  /* margin */
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  

  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);
  &:hover {
    background: var(--hover-color);
  }
`;
