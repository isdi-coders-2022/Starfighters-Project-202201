import { StyledCharacter } from "./CharacterListComponent.style";
const CharactersListComponent = ({ fighter, actionOnClick }) => {
  return (
    <StyledCharacter className="character" onClick={actionOnClick}>
      <img
        className="character-list__image"
        alt="character profile"
        src={fighter.image}
        width="200"
      />
      <section className="name-section">
        <h2 className="character-list__name">{fighter.name}</h2>
        <p>Homeworld: {fighter.homeworld}</p>
      </section>
    </StyledCharacter>
  );
};

export default CharactersListComponent;
