import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./routes";



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Main />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
