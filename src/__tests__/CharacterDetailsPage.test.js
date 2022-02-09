import { render, screen } from "@testing-library/react";
import CharacterDetailsPage from "../pages/CharacterDetailsPage";

describe("Given a CharacterDetailsPage function", () => {
  describe("When invoked", () => {
    test("Then it should render a CharacterDetailsComponent", () => {
      render(<CharacterDetailsPage />);

      const element = screen.getByRole("img");

      expect(element).toBeInTheDocument();
    });
  });
});
