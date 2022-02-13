import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharactersDetailsComponent from "../components/CharacterDetailsComponent/CharactersDetailsComponent";
import useStarAPI from "../hooks/useStarAPI";
import StarContext from "../store/contexts/StarContext/StarContext";

const MatchesDetailsPage = () => {
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

export default MatchesDetailsPage;
