import { Routes, Route } from "react-router-dom"
import App from "@app/App.jsx"
import { Return } from "./ReturnHome.jsx"
import { Login } from "./Login.jsx"
import '@app/css/index.css'
export const Routing = () => {
  const availableRoutes = [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/dashboard",
      element: <></>
    },
    {
      path: "/",
      element: <Return path='/' />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/*",
      element: <Return path='/' />
    },
  ]
  return <Routes>
    {availableRoutes.map((r) => {
      return <Route {...r} key={r.path} />
    })}
  </Routes>
}