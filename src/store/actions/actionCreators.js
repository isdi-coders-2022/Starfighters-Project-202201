import actionTypes from "./actionTypes";

export const loadFightersAction = (starFighters) => ({
  type: actionTypes.loadFighters,
  starFighters,
});

export const addFighterAction = (fighter) => ({
  type: actionTypes.addFighter,
  fighter: fighter,
});

export const deleteFighterAction = (id) => ({
  type: actionTypes.deleteFighter,
  id,
});

export const updateFighterAction = (fighter) => ({
  type: actionTypes.updateFighter,
  fighter,
});

export const loadFighterAction = (fighter) => ({
  type: actionTypes.loadFighter,
  fighter,
});

export const filterFightersAction = (species) => ({
  type: actionTypes.filterFighters,
  species,
});

export const setErrorAction = () => ({
  type: actionTypes.setError,
});

export const unsetErrorAction = () => ({
  type: actionTypes.unsetError,
});

export const getPageCharactersAction = (currentPage, charactersPerPage) => ({
  type: actionTypes.getPageCharacters,
  currentPage,
  charactersPerPage,
});
