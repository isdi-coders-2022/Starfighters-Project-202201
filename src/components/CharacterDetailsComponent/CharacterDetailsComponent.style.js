import styled from "styled-components";

const CharacterDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .light-div {
    width: 151vw;
    height: 100px;
    background-color: yellow;
    transform: skew(305deg, 329deg);
    z-index: -100;
    bottom: 297px;
    position: fixed;
  }
  h2 {
    border-radius: 20px;
    font-weight: 600;
    font-size: 35px;
    text-align: center;
  }
  img {
    width: 150px;
    border: 2px solid yellow;
    border-radius: 20px;
  }
  section {
    border: 2px solid yellow;
    background-color: rgba(54, 52, 52, 0.7);
    font-weight: 600;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;

    h2 {
      background-color: rgba(54, 52, 52, 0.7);
      border: 2px solid yellow;
      margin-bottom: 10px;
    }

    section {
      width: 400px;
      height: 300px;
    }

    img {
      width: 240px;
    }
  }
`;
export default CharacterDetailsBox;
