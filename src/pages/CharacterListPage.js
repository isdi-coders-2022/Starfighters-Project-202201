import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";
import StarContext from "../store/contexts/StarContext/StarContext";
import styled from "styled-components";
import ButtonText from "../components/ButtonTextComponent/ButtonComponent/ButtonTextComponent";
import usePublicAPI from "../hooks/usePublicAPI";

const StarFightersBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
`;

const CharacterListPage = () => {
  const { starFighters } = useContext(StarContext);
  const { filterFighters } = usePublicAPI();

  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-details/${id}`);
  };
  return (
    <>
      <ButtonText
        text={"Filter by humans"}
        actionOnClick={() => filterFighters("human")}
      />
      <StarFightersBox className="list-unstyled">
        {starFighters.map((fighter) => (
          <CharactersListComponent
            key={fighter.id}
            fighter={fighter}
            actionOnClick={() => {
              goToPage(fighter.id);
            }}
          />
        ))}
      </StarFightersBox>
    </>
  );
};

export default CharacterListPage;
