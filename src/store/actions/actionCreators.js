import actionTypes from "./actionTypes";

export const loadFightersAction = (starFighters) => ({
  type: actionTypes.loadFighters,
  starFighters,
});

export const addFighterAction = (fighter) => ({
  type: actionTypes.addFighter,
  fighter,
});

export const deleteFighterAction = (id) => ({
  type: actionTypes.deleteFighter,
  id,
});
