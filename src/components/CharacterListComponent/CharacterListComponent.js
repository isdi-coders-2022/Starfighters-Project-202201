const CharactersListComponent = ({ fighter, actionOnClick }) => {
  return (
    <li class="character" onClick={actionOnClick}>
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
