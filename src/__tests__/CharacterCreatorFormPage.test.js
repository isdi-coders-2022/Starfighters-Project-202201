import { render, screen } from "@testing-library/react";
import CharacterDetailsPage from "../pages/CharacterDetailsPage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";
<<<<<<< Updated upstream
=======
import CharacterCreatorFormPage from "../pages/CharacterCreatorFormPage";
import CreatorFormStyled from "../components/CreatorForm/CreatorForm.style";
import ButtonImage from "../components/ButtonImageComponent/ButtonImageComponent";
import userEvent from "@testing-library/user-event";
>>>>>>> Stashed changes

describe("Given a CharacterCreatorFormPage function", () => {
  describe("When invoked", () => {
    test("Then it should render a form", () => {
      render(
        <StarContextProvider>
          <CharacterDetailsPage />
        </StarContextProvider>
      );
      const element = screen.getByRole("img");

      expect(element).toBeInTheDocument();
    });
  });
  describe("When the button is clicked", () => {
    test("It should call the action", () => {
      const action = jest.fn();
      render(
        <StarContextProvider>
          <CharacterCreatorFormPage />
          <CreatorFormStyled>
            <ButtonImage />
          </CreatorFormStyled>
        </StarContextProvider>
      );

      userEvent.click(screen.queryByRole("button"));

      expect(action).toHaveBeenCalled;
    });
  });
});
