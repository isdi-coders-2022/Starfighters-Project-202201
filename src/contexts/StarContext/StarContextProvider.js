import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  async function getStarFighters(endpoint) {
    const firstList = await fetch(endpoint);
    const arrayStarFighters = await firstList.json();
    const starFighters = await Promise.all(arrayStarFighters);
    return starFighters;
  }
  const starFightersList = getStarFighters(
    "https://akabab.github.io/starwars-api/api/all.json"
  );

  return (
    <StarContext.Provider value={{ starFightersList }}>
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;
