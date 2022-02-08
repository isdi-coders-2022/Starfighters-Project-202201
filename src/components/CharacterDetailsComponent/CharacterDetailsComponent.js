import { useContext } from "react";
import StarContext from "../../contexts/StarContext/StarContext";

const CharactersDetailsComponent = () => {
  const { starFighters } = useContext(StarContext);

  return (
    <div class="character">
      <img
        className="character__image"
        alt="character profile"
        src={starFighters.image}
      />
      <h2 className="character__name">{starFighters.name}</h2>
      <section className="character__info">
        <p>{starFighters.name}</p>
        <p>Height:{starFighters.height}</p>
        <p>Mass: {starFighters.mass}</p>
        <p>Homeworld: {starFighters.homeworld}</p>
        <p>Species: {starFighters.species}</p>
        <p>More info: {starFighters.wiki}</p>
      </section>
    </div>
  );
};

export default CharactersDetailsComponent;
