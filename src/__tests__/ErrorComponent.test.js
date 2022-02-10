import { render, screen } from "@testing-library/react";
import Error from "../components/ErrorComponent/ErrorComponent";

describe("Given an Error component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading", () => {
      render(<Error />);
      const element = screen.getByRole("heading");

      expect(element).toBeInTheDocument();
    });
  });
});
