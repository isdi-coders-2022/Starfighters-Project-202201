import { StyledCharacter } from "./CharacterListComponent.style";
const CharactersListComponent = ({ fighter, actionOnClick }) => {
  return (
    <StyledCharacter className="character" onClick={actionOnClick}>
      <ul className="name-section list-unstyled">
        <li>
          <img
            className="character-list__image"
            alt="character profile"
            src={fighter.image}
            width="200"
          />
        </li>
        <li className="character__info">
          <h2 className="character-list__name">{fighter.name}</h2>
          <p>
            {fighter.species} <span></span>from: {` `}
            {typeof fighter.homeworld === "object"
              ? fighter.homeworld[0]
              : fighter.homeworld}
          </p>
        </li>
        <li>
          <span></span>
        </li>
      </ul>
    </StyledCharacter>
  );
};

export default CharactersListComponent;
