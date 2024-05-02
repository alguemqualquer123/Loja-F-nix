import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routing } from "./auth/Routes.jsx";
import { NavBar } from './componentes/NavBar.jsx';
import Music from "./componentes/Music.jsx";
import { InputColor } from "./css/InputColor.jsx";
import { Copyright } from "./css/App.ts";
import { BrowserRouter } from "react-router-dom";
import { config } from "./config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Copyright>
        <div>
          <span>{config.copyright}</span>
        </div>
      </Copyright> */}
      {/* <InputColor /> */}
      {/* <Music />  */}
      <NavBar />
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
);