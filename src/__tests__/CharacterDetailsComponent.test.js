import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import CharactersDetailsComponent from "../components/CharacterDetailsComponent/CharactersDetailsComponent";

describe("Given a CharacterDetailsComponent component", () => {
  describe("When it's rendered", () => {
    test("Then it should display an <h>", () => {
      const fighter = {
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

      render(<CharactersDetailsComponent fighter={fighter} />);

      const expectedOutput = screen.queryByRole("heading");

      expect(expectedOutput).toBeInTheDocument();
    });
  });

  describe("When executing the component", () => {
    test("Then it should render", () => {
      const fighter = {
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
      const component = reactTestRenderer.create(
        <CharactersDetailsComponent fighter={fighter} />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
