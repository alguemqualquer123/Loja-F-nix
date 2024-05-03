import { Routes, Route } from "react-router-dom"
import App from "../App"
import { Return } from "./ReturnHome.jsx"
import '../css/index.css'
export const Routing = () => {
  const availableRoutes = [
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/",
      element: <Return path='/' />
    },
    {
      path: "/*",
      element: <Return path='/' />
    },
  ]
  return <Routes>
    {availableRoutes.map((r) => {
      return <Route {...r} key={r.path}/>
    })}
  </Routes>
}