
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a main element", () => {
      render(<App></App>);

      const expectedOutput = screen.getByRole("main");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
  test("A header with Star Fighters should be rendered", () => {
    render(<App></App>);

    const expectedOutput = screen.getByText("Star Fighters");

    expect(expectedOutput).toBeInTheDocument();
  });
});
