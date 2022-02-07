import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  const character = {
    id: 1,
    name: "Luke Skywalker",
    height: 1.72,
    mass: 73,
    gender: "male",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Luke_Skywalker",
    image:
      "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    born: -19,
    bornLocation: "polis massa",
    died: 34,
    diedLocation: "ahch-to",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue",
    skinColor: "light",
    cybernetics: "Prosthetic right hand",
    affiliations: [
      "Alliance to Restore the Republic",
      "Red Squadron",
      "Rogue Squadron",
      "Massassi Group",
      "Leia Organa's team",
      "Endor strike team",
      "Jedi Order",
      "Bright Tree tribe",
      "New Republic",
      "Resistance",
    ],
    masters: ["Obi-Wan Kenobi", "Yoda"],
    apprentices: [
      "Leia Organa",
      "Ben Solo (along with a dozen apprentices)",
      "Rey",
    ],
    formerAffiliations: [],
  };

  async function getStarFighters(endpoint) {
    const firstList = await fetch(endpoint);
    const arrayStarFighters = await firstList.json();
    const starFighters = await Promise.all(arrayStarFighters);
    return starFighters;
  }

  const starFightersFetch = await getStarFighters(
    "https://akabab.github.io/starwars-api/api/all.json"
  );

  return (
    <StarContext.Provider value={{ character }}>
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;
