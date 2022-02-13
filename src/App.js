import { Route, Routes, Link } from "react-router-dom";
import CharacterCreatorFormPage from "./pages/CharacterCreatorFormPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import CharacterMatchesListPage from "./pages/CharacterMatchesListPage";
import usePublicAPI from "./hooks/usePublicAPI";
import { useContext, useEffect } from "react";
import useStarAPI from "./hooks/useStarAPI";
import LoadingPage from "./pages/LoadingPage";
import StarContext from "./store/contexts/StarContext/StarContext";
import MatchesDetailsPage from "./pages/MatchesDetailsPage";
import CharacterUpdaterPage from "./pages/CharacterUpdaterPage";

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

const StyledDiv = styled.div`
  width: 100vw;
  height: 100px;
  background-color: yellow;
  transform: skew(344deg, 328deg);
  z-index: -100;
  bottom: -60px;
  position: fixed;
`;
const StyledThinDiv = styled.div`
  width: 100vw;
  height: 100px;
  background-color: yellow;
  transform: skew(307deg, 328deg);
  z-index: -100;
  bottom: 5px;
  position: fixed;
`;

function App() {
  const { loadFightersAPI, getPageCharacters } = usePublicAPI();
  const { loadMyFighters } = useStarAPI();
  const { charactersPerPage, setCurrentPage } = useContext(StarContext);

  useEffect(() => {
    loadMyFighters();
    loadFightersAPI();
  }, [loadFightersAPI, loadMyFighters]);

  return (
    <>
      <StyledDiv className="fat-div"></StyledDiv>
      <StyledThinDiv></StyledThinDiv>
      <main className="main row col-12" name="main">
        <header className="header col-12">
          <nav className="navigation col-12">
            <ul className="navigation__list list-unstyled">
              <li className="navigation__list__matches">
                <Link
                  to="/character-list"
                  onClick={async () => {
                    setCurrentPage(1);
                    await loadFightersAPI();
                    getPageCharacters(1, charactersPerPage);
                  }}
                >
                  <img src="/icons/Search.png" alt=""></img>
                </Link>
              </li>
              <li className="navigation__list__matches">
                <Link to="/character-matches">
                  <img src="/icons/MatchIcon.png" alt=""></img>
                </Link>
              </li>
              <li className="navigation__list__create">
                <Link to="/character-creator">
                  <img src="/icons/add.png" alt=""></img>
                </Link>
              </li>
              <li className="navigation__list__profile">
                <Link to="/home">
                  <img src="/icons/home.png" alt=""></img>
                </Link>
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
          <LoadingPage />
          <Routes>
            <Route path="/*" element={<HomePage />}></Route>
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
              path="/character-matches/:id"
              element={<MatchesDetailsPage />}
            />
            <Route
              path="/character-creator"
              element={<CharacterCreatorFormPage />}
            />
            <Route
              path="/character-updater/:id"
              element={<CharacterUpdaterPage />}
            />
          </Routes>
        </header>
      </main>
    </>
  );
}
export default App;
