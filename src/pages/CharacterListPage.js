import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StarContext from "../store/contexts/StarContext/StarContext";
import ButtonText from "../components/ButtonText/ButtonText";
import usePublicAPI from "../hooks/usePublicAPI";
import ButtonImage from "../components/ButtonImage/ButtonImage";
import useStarAPI from "../hooks/useStarAPI";
import StarFightersBox from "./StarFightersBox";
import CharactersListComponent from "../components/CharacterListComponent/CharactersListComponent";

const CharacterListPage = () => {
  const { starFighters } = useContext(StarContext);
  const { filterFighters, loadFightersAPI } = usePublicAPI();
  const { addFighterAPI } = useStarAPI();

  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-details/${id}`);
  };
  return (
    <>
      <div className="filter">
        <ButtonText
          text={"ALL"}
          onClickAction={async () => {
            await loadFightersAPI();
          }}
        />
        <ButtonText
          text={"HUMANS"}
          onClickAction={async () => {
            await loadFightersAPI();
            filterFighters("human");
          }}
        />
        <ButtonText
          text={"DROIDS"}
          onClickAction={async () => {
            await loadFightersAPI();
            filterFighters("droid");
          }}
        />
        <ButtonText
          text={"WOOKIEE"}
          onClickAction={async () => {
            await loadFightersAPI();
            filterFighters("wookiee");
          }}
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
