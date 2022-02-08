import { useContext } from "react";
import { Navigate } from "react-router-dom";
import StarContext from "../../store/contexts/StarContext/StarContext";

const CharactersListComponent = () => {
  const { starFighters } = useContext(StarContext);

  return (
    <li
      class="character"
      onClick={<Navigate to={`/character-details/${starFighters.id}`} />}
      onFocus={starFighters.id}
    >
      <img
        className="character-list__image"
        alt="character profile"
        src={starFighters.image}
      />
      <h2 className="character-list__name">{starFighters.name}</h2>
      <section>
        <p>Homeworld: {starFighters.homeworld}</p>
      </section>
    </li>
  );
};

export default CharactersListComponent;
