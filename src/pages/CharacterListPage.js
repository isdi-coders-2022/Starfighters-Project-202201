import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";
import StarContext from "../store/contexts/StarContext/StarContext";

const CharacterListPage = () => {
  const { fighters } = useContext(StarContext);
  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-details/${id}`);
  };
  return (
    <>
      <ul>
        {fighters.map((fighter) => (
          <CharactersListComponent
            key={fighter.id}
            fighter={fighter}
            actionOnClick={() => {
              goToPage(fighter.id);
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default CharacterListPage;
