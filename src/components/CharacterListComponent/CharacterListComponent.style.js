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
  }

  p {
    margin: 0;
  }

  h2 {
    font-size: 16px;
  }

  img {
    object-fit: cover;
    object-position: top;
    height: 63px;
    width: 65px;
    border: 2px solid yellow;
    background-color: rgba(236, 240, 162, 0.8);
  }
`;

export { StyledCharacter };
