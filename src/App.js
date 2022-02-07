import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterCreatorFormPage from "./pages/CharacterCreatorFormPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <main className="main container" name="main">
        <header className="header">
          <nav className="navigation">
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
          <h1 className="header__logo">Star Fighters</h1>
        </header>
      </main>
    </>
  );
}
export default App;
