import { render, screen } from "@testing-library/react";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";
import CharacterCreatorFormPage from "../pages/CharacterCreatorFormPage";

describe("Given a CharacterCreatorFormPage function", () => {
  describe("When invoked", () => {
    test("Then it should render a form", () => {
      render(
        <StarContextProvider>
          <CharacterCreatorFormPage />
        </StarContextProvider>
      );
      const element = screen.getByText("Image:");

      expect(element).toBeInTheDocument();
    });
  });
});
