import React from "react";
import ReactDOM from "react-dom/client";
import { Routing } from "./auth/Routes.jsx";
import { BrowserRouter } from "react-router-dom";
import { config } from "./config.js";
import "@app/css/index.css";

class ErrorBoundary extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Aguardando Resolução Do Erro</h1>;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Routing />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
