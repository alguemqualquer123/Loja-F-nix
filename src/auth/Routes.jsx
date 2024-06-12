import { Routes, Route } from "react-router-dom";
import App from "@app/App.jsx";
import { Painel } from "@app/componentes/Gerenciar/Painel";
import { Return } from "./ReturnHome.jsx";
import { LoginPage } from "./LoginPage";
import "@app/css/index.css";
export const Routing = () => {
  const availableRoutes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dashboard",
      element: <Painel />,
    },
    {
      path: "/login",
      element: <LoginPage />,
      // element: <Login />,
    },
    {
      path: "/*",
      element: <Return path="/" />,
    },
  ];
  return (
    <Routes>
      {availableRoutes.map((r) => {
        return <Route {...r} key={r.path} />;
      })}
    </Routes>
  );
};
