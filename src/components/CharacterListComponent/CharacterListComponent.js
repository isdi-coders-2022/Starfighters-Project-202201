import { Navigate, useNavigate } from "react-router-dom";

const CharactersListComponent = ({ fighter }) => {
  let navigate = useNavigate();
  const goToPage = () => {
    console.log("Hola");
    navigate(`/character-details/${fighter.id}`);
  };
  return (
    <li class="character" onClick={goToPage}>
      <img
        className="character-list__image"
        alt="character profile"
        src={fighter.image}
        width="200"
      />
      <h2 className="character-list__name">{fighter.name}</h2>
      <section>
        <p>Homeworld: {fighter.homeworld}</p>
      </section>
    </li>
  );
};

export default CharactersListComponent;
