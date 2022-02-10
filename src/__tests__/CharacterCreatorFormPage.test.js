import { render, screen } from "@testing-library/react";
import CharacterDetailsPage from "../pages/CharacterDetailsPage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given a CharacterCreatorFormPage function", () => {
  describe("When invoked", () => {
    test("Then it should render a form", () => {
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
