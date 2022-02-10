import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharactersDetailsComponent from "../components/CharacterDetailsComponent/CharacterDetailsComponent";
import useStarAPI from "../hooks/useStarAPI";
import StarContext from "../store/contexts/StarContext/StarContext";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const { fighter } = useContext(StarContext);
  const { loadFighter } = useStarAPI();

  useEffect(() => {
    loadFighter(id);
  }, [id, loadFighter]);

  return (
    <>
      <div>
        <CharactersDetailsComponent fighter={fighter} />
      </div>
    </>
  );
};

export default CharacterDetailsPage;
