import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharactersListComponent";
import CharacterListPage from "../pages/CharacterListPage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given a CharacterListPage function", () => {
  describe("When invoked", () => {
    test("Then it should render an image", () => {
      render(
        <BrowserRouter>
          <StarContextProvider>
            <CharacterListPage />
          </StarContextProvider>
        </BrowserRouter>
      );
      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendered", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <StarContextProvider>
            <CharacterListPage />
          </StarContextProvider>
        </BrowserRouter>
      );
      const element = screen.getByText("HUMANS");

      expect(element).toBeInTheDocument();
    });
  });
  describe("When it receives a fighter id 1", () => {
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
          <CharactersListComponent
            fighter={fighter}
            actionOnClick={() => mockedUsedNavigate()}
          ></CharactersListComponent>
        </BrowserRouter>
      );
      userEvent.click(screen.getByAltText("character profile"));
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
