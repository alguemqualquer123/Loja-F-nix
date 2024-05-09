import React from "react";
import ReactDOM from "react-dom/client";
import { Routing } from "./auth/Routes.jsx";
import { BrowserRouter } from "react-router-dom";
import "@app/css/index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "@app/componentes/NavBar.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
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
        {/* <NavBar /> */}
        <Routing />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
