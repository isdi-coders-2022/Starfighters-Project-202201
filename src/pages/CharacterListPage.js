import { useContext } from "react";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";
import StarContext from "../store/contexts/StarContext/StarContext";

const CharacterListPage = () => {
  const { starFighters } = useContext(StarContext);
  return (
    <>
      <h2> Returning Character List Page</h2>;
      <ul>
        {starFighters.map((fighter) => {
          return <CharactersListComponent />;
        })}
      </ul>
    </>
  );
};

export default CharacterListPage;
