import actionTypes from "src/store/actions/actionTypes.js";

const starFighterReducer = (currentStarFighters, action) => {
  let newStarFighters;
  
switch (action.type) {
  case actionTypes.loadFighters:
    newStarFighters = [...action.starFighters]
    break;
  case actionTypes.addFighter:
    newStarFighters = [...currentStarFighters, action.starFighters]
    break;
  case actionTypes.deleteFighter:
    newStarFighters = currentStarFighters.filter((starFighter) => starFighter.id !== action.id)
    break;
  case actionTypes.updateFighter:
    newStarFighters = currentStarFighters.map((starFighter) => {
      if(starFighter.id === action.id){
        return {
          ...starFighter
        }
      }
      return {...starFighter};
    });
    break;
  
  default:
      newStarFighters = [...currentStarFighters];

}
return newStarFighters
}
export default starFighterReducer;
