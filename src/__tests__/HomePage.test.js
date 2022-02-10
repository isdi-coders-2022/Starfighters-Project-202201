import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given a HomePage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <StarContextProvider>
            <HomePage />
          </StarContextProvider>
        </BrowserRouter>
      );
      const element = screen.getByRole("heading");

      expect(element).toBeInTheDocument();
    });
  });
});
