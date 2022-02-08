import { useContext } from "react";
import StarContext from "../../contexts/StarContext/StarContext";

const CharactersDetailsComponent = ({ onFocus }) => {
  const { starFighters } = useContext(StarContext);

  return (
    <div class="character-details">
      <img
        className="character-details__image"
        alt="character profile"
        src={starFighters[onFocus].image}
      />
      <h2 className="character-details__name">{starFighters[onFocus].name}</h2>
      <section className="character-details__info">
        <p>Height:{starFighters[onFocus].height}</p>
        <p>Mass: {starFighters[onFocus].mass}</p>
        <p>Homeworld: {starFighters[onFocus].homeworld}</p>
        <p>Species: {starFighters[onFocus].species}</p>
        <p>More info: {starFighters[onFocus].wiki}</p>
      </section>
    </div>
  );
};

export default CharactersDetailsComponent;
