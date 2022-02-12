import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharactersListComponent";

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
      const expectedOutput = screen.getByRole("list");

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
      userEvent.click(screen.queryByRole("list"));

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
  /* describe("When it receives a fighter id 1", () => {
    test("Then it should redirect to '/character-details/1", () => {
      const mockedUsedNavigate = jest.fn();

      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useNavigate: () => mockedUsedNavigate,
      }));
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
          <CharactersListComponent fighter={fighter}></CharactersListComponent>
        </BrowserRouter>
      );
      userEvent.click(screen.getByRole("listitem"));
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  }); */
});
