import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CharacterListComponent from "../components/CharacterListComponent/CharacterListComponent";
import StarContext from "../store/contexts/StarContext/StarContext";
import styled from "styled-components";
import ButtonImage from "../components/ButtonImageComponent/ButtonImageComponent";
import useStarAPI from "../hooks/useStarAPI";

const StarFightersBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharacterMatchesListPage = () => {
  const { myFighters } = useContext(StarContext);

  const { deleteFighterAPI } = useStarAPI();

  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-details/${id}`);
  };
  return (
    <>
      <StarFightersBox className="list-unstyled">
        {myFighters.map((fighter) => (
          <div key={fighter.id} className="matches-card">
            <CharacterListComponent
              key={fighter.id}
              fighter={fighter}
              actionOnClick={() => {
                goToPage(fighter.id);
              }}
            />
            <ButtonImage
              type="button"
              onClickAction={() => {
                deleteFighterAPI(fighter.id);
              }}
              src="Cross"
              alt="Delete fighter from your matches list"
            />
          </div>
        ))}
      </StarFightersBox>
    </>
  );
};

export default CharacterMatchesListPage;
