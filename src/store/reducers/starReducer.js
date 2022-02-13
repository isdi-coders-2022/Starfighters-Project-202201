import actionTypes from "../actions/actionTypes";

const starReducer = (currentStarFighters, action) => {
  let newStarFighters;

  switch (action.type) {
    case actionTypes.loadFighters:
      newStarFighters = [...action.starFighters];
      break;

    case actionTypes.filterFighters:
      newStarFighters = currentStarFighters.filter(
        (fighter) => fighter.species === action.species
      );
      break;

    case actionTypes.getPageCharacters:
      const indexOfLastCharacter =
        action.currentPage * action.charactersPerPage;
      const indexOfFirstCharacter =
        indexOfLastCharacter - action.charactersPerPage;
      if (indexOfLastCharacter <= currentStarFighters.length) {
        newStarFighters = currentStarFighters.slice(
          indexOfFirstCharacter,
          indexOfLastCharacter
        );
      } else {
        newStarFighters = currentStarFighters.slice(indexOfFirstCharacter);
      }

      break;
    default:
      newStarFighters = [...currentStarFighters];
  }
  return newStarFighters;
};

export default starReducer;
