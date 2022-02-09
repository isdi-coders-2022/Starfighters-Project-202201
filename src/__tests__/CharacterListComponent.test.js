import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";

describe("Given a CharacterListComponent,", () => {
  describe("When it receives a fighter", () => {
    test("Then it should render a list element", () => {
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
      };
      render(
        <BrowserRouter>
          <CharactersListComponent fighter={fighter} />
        </BrowserRouter>
      );
      const expectedOutput = screen.getByRole("listitem");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
  describe("When a character on the list is clicked", () => {
    test("Then the function should be called", () => {
      const mockFunction = jest.fn();
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
      };

      render(
        <BrowserRouter>
          <CharactersListComponent
            fighter={fighter}
            actionOnClick={mockFunction}
          />
        </BrowserRouter>
      );
      userEvent.click(screen.queryByRole("listitem"));

      expect(mockFunction).toHaveBeenCalled();
    });
  });
  describe("When it receives a fighter named 'Luke Skywalker'", () => {
    test("Then it should render its name", () => {
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
      };
      render(
        <BrowserRouter>
          <CharactersListComponent fighter={fighter} />
        </BrowserRouter>
      );
      const expectedOutput = screen.getByText("Luke Skywalker");

      expect(expectedOutput.textContent).toStrictEqual(fighter.name);
    });
  });
});
