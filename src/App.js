import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <main class="main container" name="main">
        <header class="header">
          <nav class="navigation">
            <ul class="navigation__list list-unstyled">
              <li class="navigation__list__matches">icon 1</li>
              <li class="navigation__list__profile">icon 2</li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
          <h1 class="header__logo">Star Fighters</h1>
        </header>
      </main>
    </>
  );
}
export default App;
