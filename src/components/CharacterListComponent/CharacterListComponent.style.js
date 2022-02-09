import styled from "styled-components";

const StyledCharacter = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
  border-radius: 20px;
`;

const StyledCharacterTitle = styled.h2`
  font-family: "Star Jedi";
`;
export { StyledCharacter, StyledCharacterTitle };
