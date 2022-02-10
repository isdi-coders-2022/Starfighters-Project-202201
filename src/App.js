import { Route, Routes, Link } from "react-router-dom";
import CharacterCreatorFormPage from "./pages/CharacterCreatorFormPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";

import { useEffect } from "react";
import usePublicAPI from "./hooks/usePublicAPI";
import useStarAPI from "./hooks/useStarAPI";

import Error from "./components/ErrorComponent/ErrorComponent";
import CharacterMatchesListPage from "./pages/CharacterMatchesListPage";


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
    width: 280px;
    height: 40px;
  }
`;

function App() {
  const { loadFightersAPI } = usePublicAPI();
  const { loadFighters } = useStarAPI();

  useEffect(() => {
    loadFightersAPI();
  }, [loadFightersAPI]);

  return (
    <>
      <main className="main row col-12" name="main">
        <header className="header col-12">
          <nav className="navigation col-12">
            <ul className="navigation__list list-unstyled">
              <li className="navigation__list__matches">
                <Link to="/character-list">Character List</Link>;
              </li>
              <li className="navigation__list__matches">
                <Link to="/character-matches">Character Matches</Link>;
              </li>
              <li className="navigation__list__create">
                <Link to="/character-creator">Create</Link>;
              </li>
              <li className="navigation__list__profile">
                <Link to="/home">Home</Link>;
              </li>
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
            <Route path="/*" element={<Error />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/character-list" element={<CharacterListPage />} />
            <Route
              path="/character-matches"
              element={<CharacterMatchesListPage />}
            />
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
