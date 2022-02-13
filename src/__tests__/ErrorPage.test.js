import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import StarContextProvider from "../store/contexts/StarContext/StarContextProvider";

describe("Given an ErrorPage function", () => {
  describe("When invoked with an apiStatus of false", () => {
    test("Then it should render nothing", () => {
      render(
        <BrowserRouter>
          <StarContextProvider>
            <ErrorPage />
          </StarContextProvider>
        </BrowserRouter>
      );

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
  });
});
