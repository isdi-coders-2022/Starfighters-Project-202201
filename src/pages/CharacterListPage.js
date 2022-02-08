import { useContext } from "react";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";
import StarContext from "../store/contexts/StarContext/StarContext";

const CharacterListPage = () => {
  const { fighters } = useContext(StarContext);
  return (
    <>
      <h2> Returning Character List Page</h2>;
      <ul>
        {fighters.map((fighter) => (
          <CharactersListComponent key={fighter.id} fighter={fighter} />
        ))}
      </ul>
    </>
  );
};

export default CharacterListPage;
