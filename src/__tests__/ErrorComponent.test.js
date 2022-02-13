import { render, screen } from "@testing-library/react";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";

describe("Given an Error component", () => {
  describe("When invoked", () => {
    test("Then it should render an image", () => {
      render(<Error />);
      const element = screen.getByRole("img");

      expect(element).toBeInTheDocument();
    });
  });
});
