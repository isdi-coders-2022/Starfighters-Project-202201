import { render, screen } from "@testing-library/react";
import Error from "../components/ErrorComponent/ErrorComponent";

describe("Given an ErrorComponent function", () => {
  describe("When invoked", () => {
    test("Then it should render an image", () => {
      render(<Error />);

      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  describe("When invoked with error true", () => {
    test("Then it should render an image", () => {
      render(<Error />);

      expect(
        screen.getByRole("img", { name: "Darth Vader says an error occurred." })
      ).toBeInTheDocument();
    });
  });
});
