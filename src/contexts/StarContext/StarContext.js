const { createContext } = require("react");

const StarContext = createContext();
export default StarContext;

async function getStarFighters(endpoint) {
  const firstList = await fetch(endpoint);
  const arrayStarFighters = await firstList.json();
  const starFighters = await Promise.all(arrayStarFighters);
  return starFighters;
}

const starFightersFetch = await getStarFighters(
  "https://akabab.github.io/starwars-api/api/all.json"
);
