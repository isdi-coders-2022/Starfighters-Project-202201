import { render, screen } from "@testing-library/react";
import Button from "../components/ButtonComponent/ButtonComponent";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a button with accessible id of 'Back'", () => {
      render(<Button id="back" />);

      const buttonTest = screen.queryByTestId("back");

      expect(buttonTest).toHaveAccessibleName();
    });
  });
  describe("When it receives an action and a button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<Button onClickAction={action} />);

      userEvent.click(screen.queryByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
