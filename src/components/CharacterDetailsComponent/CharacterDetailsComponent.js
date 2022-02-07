import { useContext } from "react";
import StarContext from "../../contexts/StarContext/StarContext";

const CharactersDetails = () => {
  const { starFightersList } = useContext(StarContext);

  return (
    <div class="character">
      <img
        className="character__image"
        alt="character profile"
        src={starFightersList.image}
      />
      <h2 className="character__name">{starFightersList.name}</h2>
      <section className="character__info">
        <p>{starFightersList.name}</p>
        <p>Height:{starFightersList.height}</p>
        <p>Mass: {starFightersList.mass}</p>
        <p>Homeworld: {starFightersList.homeworld}</p>
        <p>Species: {starFightersList.species}</p>
        <p>More info: {starFightersList.wiki}</p>
      </section>
    </div>
  );
};

export default CharactersDetails;
