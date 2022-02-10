import { Route, Routes, Link } from "react-router-dom";
import CharacterCreatorFormPage from "./pages/CharacterCreatorFormPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import {
  FilterPlanets,
  FilterSpecies,
} from "./components/FilterComponent/FilterComponent";
import { Dropdown } from "bootstrap";

const TitleStar = styled.h1`
  color: yellow;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .star {
    display: flex;
    margin: 5px;
    width: 205px;
    height: 40px;
  }
  .fighters {
    display: flex;
    margin: 5px;
    width: 285px;
    height: 40px;
  }
`;

function App() {
  return (
    <>
      <main className="main row col-12" name="main">
        <header className="header col-12">
          <nav className="navigation col-12">
            <ul className="navigation__list list-unstyled">
              <li className="navigation__list__matches">
                <Link to="/character-list">Character List</Link>;
              </li>
              <li className="navigation__list__create">
                <Link to="/character-creator">Create</Link>;
              </li>
              <li className="navigation__list__profile">
                <Link to="/home">Home</Link>;
              </li>
              <FilterSpecies />
              <FilterPlanets />
            </ul>
          </nav>

          <TitleStar className="header__logo">
            <img
              className="star"
              src="/images/text-1644143571928.png"
              alt="Star"
            />
            <img
              className="fighters"
              src="/images/text-1644143563620.png"
              alt="Fighters"
            />
          </TitleStar>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/character-list" element={<CharacterListPage />} />
            <Route
              path="/character-details/:id"
              element={<CharacterDetailsPage />}
            />
            <Route
              path="/character-creator"
              element={<CharacterCreatorFormPage />}
            />
          </Routes>
        </header>
      </main>
    </>
  );
}
export default App;
