import actionTypes from "../actions/actionTypes";

const matchesReducer = (currentMyFighters, action) => {
  let newMyFighters;

  switch (action.type) {
    case actionTypes.loadFighters:
      newMyFighters = [...action.starFighters];
      break;
    case actionTypes.addFighter:
      newMyFighters = [...currentMyFighters, action.fighter];
      break;
    case actionTypes.deleteFighter:
      newMyFighters = currentMyFighters.filter(
        (starFighter) => starFighter.id !== action.id
      );
      break;
    case actionTypes.updateFighter:
      newMyFighters = currentMyFighters.map((starFighter) => {
        if (starFighter.id === action.fighter.id) {
          return { ...action.fighter };
        }
        return { ...starFighter };
      });
      break;

    default:
      newMyFighters = [...currentMyFighters];
  }

  return newMyFighters;
};

export default matchesReducer;
