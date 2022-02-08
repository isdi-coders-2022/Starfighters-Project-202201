import actionTypes from "./actionTypes";

export const loadFightersAction = (starFighters) => ({
  type: actionTypes.loadFighters,
  starFighters,
});
