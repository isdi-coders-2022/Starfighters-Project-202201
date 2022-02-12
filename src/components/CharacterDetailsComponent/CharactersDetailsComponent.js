import CharacterDetailsBox from "./CharacterDetailsBox";

const CharactersDetailsComponent = ({ fighter }) => {
  return (
    <CharacterDetailsBox className="character-details">
      <img
        className="character-details__image"
        alt="character profile"
        src={fighter.image}
        width="400"
      />
      <div className="light-div"></div>
      <div className="section-div">
        <h2 className="character-details__name">{fighter.name}</h2>
        <section className="character-details__info">
          <p>Height:{fighter.height}</p>
          <p>Mass: {fighter.mass}</p>
          <p>Homeworld: {fighter.homeworld}</p>
          <p>Species: {fighter.species}</p>
          <p>
            <a href={fighter.wiki}>More info:</a>
          </p>
        </section>
      </div>
    </CharacterDetailsBox>
  );
};

export default CharactersDetailsComponent;
