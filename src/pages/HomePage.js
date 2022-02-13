import { useContext } from "react";
import { Link } from "react-router-dom";
import useStarAPI from "../hooks/useStarAPI";
import StarContext from "../store/contexts/StarContext/StarContext";

const HomePage = () => {
  const { setCurrentPage, loadFightersAPI, getPageCharacters } = useStarAPI();
  const { charactersPerPage } = useContext(StarContext);
  return (
    <div className="start-container">
      <h2 className="title"> May the force be with you</h2>
      <Link
        to="/character-list"
        onClick={async () => {
          setCurrentPage(1);
          await loadFightersAPI();
          getPageCharacters(1, charactersPerPage);
        }}
      >
        <img className="start-button" src="/icons/Forward.png" alt=""></img>
      </Link>
    </div>
  );
};

export default HomePage;
