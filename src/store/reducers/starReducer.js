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
    case actionTypes.setError:
      newStarFighters = {
        ...currentStarFighters,
        error: true,
      };
      break;
    case actionTypes.unsetError:
      newStarFighters = {
        ...currentStarFighters,
        error: false,
      };
      break;

    default:
      newStarFighters = [...currentStarFighters];
  }

  return newStarFighters;
};

export default starReducer;
