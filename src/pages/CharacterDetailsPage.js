import { useContext } from "react";
import StarContext from "../store/contexts/StarContext/StarContext";

const CharacterDetailsPage = () => {
  const { starFighters } = useContext(StarContext);

  return (
    <>
      <h2> Returning Character Details Page</h2>;
      <div>
        {starFighters.map((fighter) => {
          return <CharacterDetailsPage />;
        })}
      </div>
    </>
  );
};

export default CharacterDetailsPage;
