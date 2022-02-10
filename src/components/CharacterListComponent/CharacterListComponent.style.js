import styled from "styled-components";

const StyledCharacter = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid yellow;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 10px;
  width: 285px;
  height: 65px;
  background-color: rgb(90, 90, 90);
  cursor: pointer;

  .name-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
  }

  .character__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 43px;
  }

  p {
    margin: 0;
    font-size: 12px;
    text-justify: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  h2 {
    font-size: 14px;
    text-justify: center;
  }

  img {
    object-fit: cover;
    object-position: top;
    height: 62px;
    width: 65px;
    border: 1px solid rgb(14, 21, 56);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: rgba(236, 240, 162, 0.8);
    margin-right: 40px;
  }
`;

export { StyledCharacter };
