import { render, screen } from "@testing-library/react";
import Button from "./ButtonComponent";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a button", () => {
      render(<Button />);

      const buttonTest = screen.queryByRole("button");

      expect(buttonTest).toBeInTheDocument();
    });
  });
});
