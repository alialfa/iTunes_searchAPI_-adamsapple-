/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @index.js - initiates the main application, site styling is referenced here
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/custom.css";
import "./assets/css/fontawesome/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
