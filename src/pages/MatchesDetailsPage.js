import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonImage from "../components/ButtonImage/ButtonImage";
import CharactersDetailsComponent from "../components/CharacterDetailsComponent/CharactersDetailsComponent";
import useStarAPI from "../hooks/useStarAPI";
import StarContext from "../store/contexts/StarContext/StarContext";

const MatchesDetailsPage = () => {
  const { id } = useParams();
  const { fighter } = useContext(StarContext);
  const { loadFighter } = useStarAPI();
  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-updater/${id}`);
  };

  useEffect(() => {
    loadFighter(id);
  }, [id, loadFighter]);

  return (
    <>
      <div>
        <CharactersDetailsComponent fighter={fighter} />
        <ButtonImage
          src="home"
          alt="Modify character"
          onClickAction={() => goToPage(fighter.id)}
        />
      </div>
    </>
  );
};

export default MatchesDetailsPage;
