import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StarContextProvider from "./contexts/StarContext/StarContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <StarContextProvider>
      <App />
    </StarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
