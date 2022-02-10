import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given a HomePage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading", () => {
      render(
        <StarContextProvider>
          <HomePage />
        </StarContextProvider>
      );
      const element = screen.getByRole("heading");

      expect(element).toBeInTheDocument();
    });
  });
});
