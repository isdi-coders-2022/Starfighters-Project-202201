import {
  StyledCharacter,
  StyledCharacterTitle,
} from "./CharacterListComponent.style";
const CharactersListComponent = ({ fighter, actionOnClick }) => {
  return (
    <StyledCharacter className="character" onClick={actionOnClick}>
      <img
        className="character-list__image"
        alt="character profile"
        src={fighter.image}
        width="200"
      />
      <StyledCharacterTitle className="character-list__name">
        {fighter.name}
      </StyledCharacterTitle>
      <section>
        <p>Homeworld: {fighter.homeworld}</p>
      </section>
    </StyledCharacter>
  );
};

export default CharactersListComponent;
