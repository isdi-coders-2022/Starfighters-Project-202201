import actionTypes from "../actions/actionTypes";

const starReducer = (currentStarFighters, action) => {
  let newStarFighters;

  if (action.type === actionTypes.loadFighters) {
    newStarFighters = [...action.starFighters];
  } else if (action.type === actionTypes.filterFighters) {
    newStarFighters = currentStarFighters.filter(
      (fighter) => fighter.species === action.species
    );
  } else {
    newStarFighters = [...currentStarFighters];
  }
  return newStarFighters;
};

export default starReducer;
