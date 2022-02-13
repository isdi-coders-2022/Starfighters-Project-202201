import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StarContext from "../store/contexts/StarContext/StarContext";
import ButtonImage from "../components/ButtonImage/ButtonImage";
import useStarAPI from "../hooks/useStarAPI";
import StarFightersBox from "./StarFightersBox";
import CharactersListComponent from "../components/CharacterListComponent/CharactersListComponent";

const CharacterMatchesListPage = () => {
  const { myFighters } = useContext(StarContext);

  const { deleteFighterAPI } = useStarAPI();

  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-matches/${id}`);
  };
  return (
    <>
      <StarFightersBox className="list-unstyled">
        {myFighters.map((fighter) => (
          <div key={fighter.id} className="matches-card">
            <CharactersListComponent
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
