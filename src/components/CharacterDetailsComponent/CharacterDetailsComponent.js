const CharactersDetailsComponent = ({ fighter }) => {
  return (
    <div class="character-details">
      <img
        className="character-details__image"
        alt="character profile"
        src={fighter.image}
        width="400"
      />
      <h2 className="character-details__name">{fighter.name}</h2>
      <section className="character-details__info">
        <p>Height:{fighter.height}</p>
        <p>Mass: {fighter.mass}</p>
        <p>Homeworld: {fighter.homeworld}</p>
        <p>Species: {fighter.species}</p>
        <p>More info: {fighter.wiki}</p>
      </section>
    </div>
  );
};

export default CharactersDetailsComponent;
