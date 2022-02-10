import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterMatchesListPage from "../pages/CharacterMatchesListPage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given a CharacterMatchesListPage function", () => {
  describe("When invoked", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <StarContextProvider>
            <CharacterMatchesListPage />
          </StarContextProvider>
        </BrowserRouter>
      );
      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });
});
