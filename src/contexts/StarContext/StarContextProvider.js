import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  async function getStarFighters(endpoint) {
    const firstList = await fetch(endpoint);
    const arrayStarFighters = await firstList.json();
    const starFighters = await Promise.all(arrayStarFighters);
    return starFighters;
  }
  const starFighters = () =>
    getStarFighters("https://akabab.github.io/starwars-api/api/all.json");

  return (
    <StarContext.Provider value={{ starFighters }}>
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;
