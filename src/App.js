import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterCreatorFormPage from "./pages/CharacterCreatorFormPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";

const TitleStar = styled.h1`
  @font-face {font-family: "Star Jedi"; src: url("//db.onlinewebfonts.com/t/af7c07faaff0d16720c25db7990579e2.eot"); src: url("//db.onlinewebfonts.com/t/af7c07faaff0d16720c25db7990579e2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/af7c07faaff0d16720c25db7990579e2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/af7c07faaff0d16720c25db7990579e2.woff") format("woff"), url("//db.onlinewebfonts.com/t/af7c07faaff0d16720c25db7990579e2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/af7c07faaff0d16720c25db7990579e2.svg#Star Jedi") format("svg"); }
 }
   font-family: "Star Jedi";
   color: yellow;
   font-size: 20px;
 `;
function App() {
  /*  const Try1 = styled.div`
    background-color: rgb(35, 35, 35);
    width: 100px;
    height: 100px;
  `; */

  return (
    <>
      <main className="main row col-12" name="main">
        <header className="header col-12">
          <nav className="navigation col-12">
            <ul className="navigation__list list-unstyled">
              <li className="navigation__list__matches">icon 1</li>
              <li className="navigation__list__profile">icon 2</li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/character-list" element={<CharacterListPage />} />
            <Route
              path="/character-details"
              element={<CharacterDetailsPage />}
            />
            <Route
              path="/character-creator"
              element={<CharacterCreatorFormPage />}
            />
          </Routes>
          <TitleStar className="header__logo">Star Fighters</TitleStar>
          {/* <Try1></Try1> Test of dynamical styles */}
        </header>
      </main>
    </>
  );
}
export default App;
