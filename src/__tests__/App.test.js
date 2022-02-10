import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given an App component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a main element", () => {
      render(
        <BrowserRouter>
          <StarContextProvider>
            <App />
          </StarContextProvider>
        </BrowserRouter>
      );
      const expectedOutput = screen.getByRole("main");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
  test("A header with Star Fighters should be rendered", () => {
    render(
      <BrowserRouter>
        <StarContextProvider>
          <App />
        </StarContextProvider>
      </BrowserRouter>
    );
    const expectedOutput = screen.getByText("May the force be with you");
    expect(expectedOutput).toBeInTheDocument();
  });
});
