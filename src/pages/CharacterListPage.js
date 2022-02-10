import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";
import StarContext from "../store/contexts/StarContext/StarContext";
import styled from "styled-components";
import ButtonText from "../components/ButtonTextComponent/ButtonComponent/ButtonTextComponent";
import usePublicAPI from "../hooks/usePublicAPI";
import ButtonImage from "../components/ButtonImageComponent/ButtonImageComponent";
import useStarAPI from "../hooks/useStarAPI";

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
  const { addFighterAPI } = useStarAPI();

  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-details/${id}`);
  };
  return (
    <>
      <div className="filter">
        <ButtonText
          text={"HUMANS"}
          onClickAction={() => filterFighters("human")}
        />
        <ButtonText
          text={"DROIDS"}
          onClickAction={() => filterFighters("droid")}
        />
      </div>
      <StarFightersBox className="list-unstyled">
        {starFighters.map((fighter) => (
          <div key={fighter.id} className="character-card">
            <CharactersListComponent
              key={fighter.id}
              fighter={fighter}
              actionOnClick={() => {
                goToPage(fighter.id);
              }}
            />
            <ButtonImage
              type="submit"
              onClickAction={() => {
                addFighterAPI(fighter);
              }}
              src="add"
              alt="Add character"
            />
          </div>
        ))}
      </StarFightersBox>
    </>
  );
};

export default CharacterListPage;
