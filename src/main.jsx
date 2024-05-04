import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routing } from "./auth/Routes.jsx";
import { BrowserRouter } from "react-router-dom";
import { config } from "./config.js";
import '@app/css/index.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
);