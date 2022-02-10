//import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ButtonImage from "../components/ButtonImageComponent/ButtonImageComponent";
import CharactersDetailsComponent from "../components/CharacterDetailsComponent/CharacterDetailsComponent";

const CharacterDetailsPage = () => {
  const fighter = {
    id: 1,
    name: "Luke Skywalker",
    height: 1.72,
    mass: 73,
    gender: "male",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Luke_Skywalker",
    image:
      "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    born: -19,
    bornLocation: "polis massa",
    died: 34,
    diedLocation: "ahch-to",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue",
    skinColor: "light",
    cybernetics: "Prosthetic right hand",
    affiliations: [
      "Alliance to Restore the Republic",
      "Red Squadron",
      "Rogue Squadron",
      "Massassi Group",
      "Leia Organa's team",
      "Endor strike team",
      "Jedi Order",
      "Bright Tree tribe",
      "New Republic",
      "Resistance",
    ],
    masters: ["Obi-Wan Kenobi", "Yoda"],
    apprentices: [
      "Leia Organa",
      "Ben Solo (along with a dozen apprentices)",
      "Rey",
    ],
    formerAffiliations: [],
  };
  //const { id } = useParams();
  let navigate = useNavigate();
  const goToPage = (id) => {
    navigate(`/character-updater/${id}`);
  };
  return (
    <>
      <h2> Returning Character Details Page</h2>;
      <div>
        <ButtonImage onClickAction={goToPage} />
        <CharactersDetailsComponent fighter={fighter} />
      </div>
    </>
  );
};

export default CharacterDetailsPage;
