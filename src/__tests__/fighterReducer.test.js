import { loadFighterAction } from "../store/actions/actionCreators";
import fighterReducer from "../store/reducers/fighterReducer";

describe("Given a fighterReducer reducer", () => {
  describe("When given an action and an id", () => {
    test("Then should display thr character with that id", () => {
      const newObjectList = {
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

      const currentObjectList = {};
      const action = loadFighterAction(newObjectList);

      const recievedList = fighterReducer(currentObjectList, action);

      expect(recievedList).toEqual(newObjectList);
    });
  });
});
