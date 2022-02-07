import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StarContextProvider from "./store/contexts/StarContext/StarContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StarContextProvider>
        <App />
      </StarContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
