import { render, screen } from "@testing-library/react";
import CharacterDetailsPage from "../pages/CharacterDetailsPage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given a CharacterDetailsPage function", () => {
  describe("When invoked", () => {
    test("Then it should render a CharacterDetailsComponent", () => {
      render(
        <StarContextProvider>
          <CharacterDetailsPage />
        </StarContextProvider>
      );
      const element = screen.getByRole("img");

      expect(element).toBeInTheDocument();
    });
  });
});
