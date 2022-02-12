import actionTypes from "../actions/actionTypes";

const fighterReducer = (currentFighter, action) => {
  let newFighter;

  switch (action.type) {
    case actionTypes.loadFighter:
      newFighter = { ...action.fighter };
      break;

    default:
      newFighter = { ...currentFighter };
  }

  return newFighter;
};

export default fighterReducer;
