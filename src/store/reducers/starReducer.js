import actionTypes from "../actions/actionTypes";

const starReducer = (currentStarFighters, action) => {
  let newStarFighters;

  switch (action.type) {
    case actionTypes.loadFighters:
      newStarFighters = [...action.starFighters];
      break;
    case actionTypes.addFighter:
      newStarFighters = [...currentStarFighters, action.fighter];
      break;
    case actionTypes.deleteFighter:
      newStarFighters = currentStarFighters.filter(
        (starFighter) => starFighter.id !== action.id
      );
      break;
    case actionTypes.updateFighter:
      newStarFighters = currentStarFighters.map((starFighter) => {
        if (starFighter.id === action.fighter.id) {
          return { ...action.fighter };
        }
        return { ...starFighter };
      });
      break;

    default:
      newStarFighters = [...currentStarFighters];
  }

  return newStarFighters;
};

export default starReducer;
