import actionTypes from "../store/actions/actionTypes";
import starReducer from "../store/reducers/starReducer";

describe("Given a starReducer function", () => {
  describe("When given an array with three fighters and the loadFighters action", () => {
    test("Then it should load all the fighters into the array", () => {
      const inputFighters = [];
      const expectedFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
      ];
      const action = {
        type: actionTypes.loadFighters,
        starFighters: expectedFighters,
      };

      const newFighters = starReducer(inputFighters, action);

      expect(newFighters).toEqual(expectedFighters);
    });
  });

  describe("When the action type is neither loadFighters nor filterFighter", () => {
    test("Then it should return an array with the same fighters", () => {
      const inputFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
      ];
      const expectedFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
      ];
      const action = {
        type: "hola",
        starFighters: inputFighters,
      };
      const newFighters = starReducer(inputFighters, action);

      expect(newFighters).toEqual(expectedFighters);
    });
  });

  describe("When the action type is filterFighter and species is human", () => {
    test("Then it should return an array with human fighters", () => {
      const inputFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
      ];
      const expectedFighters = [
        {
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
        },
      ];
      const action = {
        type: actionTypes.filterFighters,
        species: "human",
      };
      const newFighters = starReducer(inputFighters, action);

      expect(newFighters).toEqual(expectedFighters);
    });
  });

  describe("When the action type is getPageCharacters and current page is 1 and characters per page is 3", () => {
    test("Then it should return an array with the first 3 fighters", () => {
      const inputFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
        {
          id: 4,
          name: "Darth Vader",
          height: 2.03,
          mass: 120,
          gender: "male",
          homeworld: "tatooine",
          wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
          image:
            "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
          born: -41,
          died: 4,
          diedLocation: "death star ii, endor system",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue, yellow (dark side)",
          skinColor: "light, later pale",
          cybernetics:
            "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
          affiliations: [
            "501st Legion",
            "Sith",
            "Galactic Empire",
            "Imperial High Command",
          ],
          masters: [
            "Qui-Gon Jinn (informal Jedi Master)",
            "Obi-Wan Kenobi (Jedi Master)",
            "Darth Sidious (Sith Master)",
            "Yoda (Force spirit teacher)",
          ],
          apprentices: ["Ahsoka Tano (Padawan)", "Inquisitorius"],
          formerAffiliations: [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic",
          ],
        },
      ];
      const expectedFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
      ];

      const action = {
        type: actionTypes.getPageCharacters,
        currentPage: 1,
        charactersPerPage: 3,
      };
      const newFighters = starReducer(inputFighters, action);

      expect(newFighters).toEqual(expectedFighters);
    });
  });

  describe("When the action type is getPageCharacters and current page is 2 and characters per page is 3", () => {
    test("Then it should return an array with the 4th fighter", () => {
      const inputFighters = [
        {
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
        },
        {
          id: 2,
          name: "C-3PO",
          height: 1.71,
          mass: 75,
          gender: "male",
          homeworld: "tatooine",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/C-3PO",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          dateCreated: -32,
          dateDestroyed: 3,
          destroyedLocation: "bespin, rebuilt shortly after",
          creator: "Anakin Skywalker",
          manufacturer: "Cybot Galactica",
          model: "3PO unit",
          class: "Protocol droid",
          sensorColor: "yellow",
          platingColor: "gray, later primarily golden",
          equipment: "TranLang III communication module",
          affiliations: [
            "Skywalker family",
            "Confederacy of Independent Systems",
            "Royal House of Naboo",
            "Galactic Republic",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Leia Organa's team",
            "Pathfinders",
            "Endor strike team",
            "Bright Tree tribe",
            "New Republic",
            "Resistance",
            "Resistance spy droid network",
          ],
          skinColor: "gold",
          eyeColor: "yellow",
          born: -112,
          formerAffiliations: [],
        },
        {
          id: 3,
          name: "R2-D2",
          height: 1.09,
          mass: 32,
          gender: "male",
          homeworld: "naboo",
          species: "droid",
          wiki: "http://starwars.wikia.com/wiki/R2-D2",
          image:
            "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
          manufacturer: "Industrial Automaton",
          productLine: "R-series",
          model: "R2 series astromech droid",
          class: "Astromech droid",
          sensorColor: "red",
          platingColor: "bluesilver",
          equipment: [
            "Buzz saw",
            "Electric pike",
            "Drinks tray (Only on Jabba's Sail Barge)",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Rocket booster",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg",
          ],
          affiliations: [
            "Royal House of Naboo",
            "Galactic Republic",
            "501st Legion",
            "R2-D2's battle droid squadron",
            "D-Squad",
            "House of Organa",
            "Galactic Empire",
            "Alliance to Restore the Republic",
            "Massassi Group",
            "Red Squadron",
            "Leia Organa's team",
            "Endor strike team",
            "Bright Tree tribe",
            "Resistance",
          ],
          skinColor: "white, blue",
          eyeColor: "red",
          born: -33,
          formerAffiliations: [],
        },
        {
          id: 4,
          name: "Darth Vader",
          height: 2.03,
          mass: 120,
          gender: "male",
          homeworld: "tatooine",
          wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
          image:
            "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
          born: -41,
          died: 4,
          diedLocation: "death star ii, endor system",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue, yellow (dark side)",
          skinColor: "light, later pale",
          cybernetics:
            "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
          affiliations: [
            "501st Legion",
            "Sith",
            "Galactic Empire",
            "Imperial High Command",
          ],
          masters: [
            "Qui-Gon Jinn (informal Jedi Master)",
            "Obi-Wan Kenobi (Jedi Master)",
            "Darth Sidious (Sith Master)",
            "Yoda (Force spirit teacher)",
          ],
          apprentices: ["Ahsoka Tano (Padawan)", "Inquisitorius"],
          formerAffiliations: [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic",
          ],
        },
      ];
      const expectedFighters = [
        {
          id: 4,
          name: "Darth Vader",
          height: 2.03,
          mass: 120,
          gender: "male",
          homeworld: "tatooine",
          wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
          image:
            "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
          born: -41,
          died: 4,
          diedLocation: "death star ii, endor system",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue, yellow (dark side)",
          skinColor: "light, later pale",
          cybernetics:
            "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
          affiliations: [
            "501st Legion",
            "Sith",
            "Galactic Empire",
            "Imperial High Command",
          ],
          masters: [
            "Qui-Gon Jinn (informal Jedi Master)",
            "Obi-Wan Kenobi (Jedi Master)",
            "Darth Sidious (Sith Master)",
            "Yoda (Force spirit teacher)",
          ],
          apprentices: ["Ahsoka Tano (Padawan)", "Inquisitorius"],
          formerAffiliations: [
            "Jedi Order",
            "Jedi High Council",
            "Galactic Republic",
          ],
        },
      ];

      const action = {
        type: actionTypes.getPageCharacters,
        currentPage: 2,
        charactersPerPage: 3,
      };
      const newFighters = starReducer(inputFighters, action);

      expect(newFighters).toEqual(expectedFighters);
    });
  });
});
