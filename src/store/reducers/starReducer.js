import actionTypes from "../actions/actionTypes";

const starReducer = (currentStarFighters, action) => {
  let newStarFighters;

  switch (action.type) {
    case actionTypes.loadFighters:
      newStarFighters = [...action.starFighters];
      break;

    case actionTypes.filterFighters:
      newStarFighters = currentStarFighters.filter(
        (fighter) => fighter.species === "human"
      );
      break;

    default:
      newStarFighters = [...currentStarFighters];
  }

  return newStarFighters;
};

export default starReducer;
