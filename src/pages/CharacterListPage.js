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
  const { starFighters, currentPage, setCurrentPage, charactersPerPage } =
    useContext(StarContext);
  const { filterFighters, loadFightersAPI, getPageCharacters } = usePublicAPI();
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
            setCurrentPage(1);
            await loadFightersAPI();
            getPageCharacters(1, charactersPerPage);
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
      <div className="page-buttons">
        <ButtonImage
          type="submit"
          onClickAction={async () => {
            if (currentPage > 1) {
              await loadFightersAPI();
              getPageCharacters(currentPage - 1, charactersPerPage);
              setCurrentPage(currentPage - 1);
            }
          }}
          src="Back"
          alt="Next page"
        />
        <ButtonImage
          type="submit"
          onClickAction={async () => {
            if (currentPage < 4) {
              await loadFightersAPI();
              getPageCharacters(currentPage + 1, charactersPerPage);
              setCurrentPage(currentPage + 1);
            }
          }}
          src="Forward"
          alt="Next page"
        />
      </div>
    </>
  );
};

export default CharacterListPage;
