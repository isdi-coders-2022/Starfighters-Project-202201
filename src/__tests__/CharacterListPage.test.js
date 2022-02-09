import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
});
