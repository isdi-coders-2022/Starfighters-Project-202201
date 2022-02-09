import { render, screen } from "@testing-library/react";
import ButtonText from "../components/ButtonTextComponent/ButtonComponent/ButtonTextComponent";
import userEvent from "@testing-library/user-event";

describe("Given a ButtonText component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a button with text 'Naboo'", () => {
      render(<ButtonText text="Naboo" />);
      const expectedOutput = "Naboo";

      const buttonTest = screen.queryByText("Naboo");

      expect(buttonTest.textContent).toMatch(expectedOutput);
    });
  });
  describe("When it receives an action and a button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<ButtonText onClickAction={action} />);

      userEvent.click(screen.queryByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
