import { render, screen } from "@testing-library/react";
import ButtonImage from "../components/ButtonImageComponent/ButtonImageComponent";
import userEvent from "@testing-library/user-event";

describe("Given a ButtonText component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a button with text 'Naboo'", () => {
      render(
        <ButtonImage
          src="../components/ButtonImageComponent/Back.png"
          alt="back"
        />
      );

      const buttonTest = screen.getByRole("img");

      expect(buttonTest).toBeInTheDocument();
    });
  });
  describe("When it receives an action and a button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<ButtonImage onClickAction={action} />);

      userEvent.click(screen.queryByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
