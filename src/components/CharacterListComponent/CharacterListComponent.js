import { StyledCharacter } from "./CharacterListComponent.style";
const CharactersListComponent = ({ fighter, actionOnClick, children }) => {
  return (
    <StyledCharacter className="character" onClick={actionOnClick}>
      <ul className="name-section list-unstyled">
        <li key={fighter.id}>
          <img
            className="character-list__image"
            alt="character profile"
            src={fighter.image}
            width="200"
          />
        </li>
        <li className="character__info" key={`${fighter.id}00`}>
          <h2 className="character-list__name">{fighter.name}</h2>
          <p>
            {fighter.species} from: {` `}
            {typeof fighter.homeworld === "object"
              ? fighter.homeworld[0]
              : fighter.homeworld}
          </p>
        </li>
      </ul>
    </StyledCharacter>
  );
};

export default CharactersListComponent;
