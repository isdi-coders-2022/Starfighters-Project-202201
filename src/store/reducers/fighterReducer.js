import actionTypes from "../actions/actionTypes";

const fighterReducer = (currentFighter, action) => {
  let newFighter;

  switch (action.type) {
    case actionTypes.loadFighter:
      newFighter = { ...action.fighter };
      break;

    case actionTypes.setError:
      newFighter = {
        ...currentFighter,
        error: true,
      };
      break;
    case actionTypes.unsetError:
      newFighter = {
        ...currentFighter,
        error: false,
      };
      break;

    default:
      newFighter = { ...currentFighter };
  }

  return newFighter;
};

export default fighterReducer;
