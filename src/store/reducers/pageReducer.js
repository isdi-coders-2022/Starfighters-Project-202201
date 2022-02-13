import actionTypes from "../actions/actionTypes";

const pageReducer = (currentPageFighters, action) => {
  let newPageFighters;

  switch (action.type) {
    case actionTypes.getCurrentCharacters:
      const indexOfLastCharacter =
        action.currentPage * action.charactersPerPage;

      const indexOfFirstCharacter =
        indexOfLastCharacter - action.charactersPerPage;
      newPageFighters = currentPageFighters.slice(
        indexOfFirstCharacter,
        indexOfLastCharacter
      );
      break;

    default:
      newPageFighters = { ...currentPageFighters };
  }

  return newPageFighters;
};

export default pageReducer;
