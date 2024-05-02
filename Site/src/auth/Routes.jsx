import { Routes, Route } from "react-router-dom"
import App from "../App"
import { Return } from "./ReturnHome.jsx"
import { Login } from "../auth/Login.jsx"
import { Painel } from "../componentes/Painel.jsx"
import { AdminLoja } from "../componentes/admin/AdminLoja.jsx"
import { CreateItem } from "../componentes/admin/CreateItem.jsx"
import { NewToken } from "../componentes/admin/NewToken.jsx"
import { Clientes } from "../componentes/admin/Clientes.jsx"
import { Scripts } from "../componentes/admin/Scripts.jsx"
import { Aplicacoes } from "../componentes/admin/Aplicacoes.jsx"
import { Payment } from "../componentes/admin/Payment.jsx"
import { Contato } from "../componentes/Contato.jsx"
import { RestartAplication } from "../componentes/admin/RestartAplication.jsx"
import { Gerenciamento } from "../componentes/admin/Gerenciamento.jsx"
import { Daganddrop } from "../componentes/Daganddrop.jsx"
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
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Painel",
      element: <Painel />
    },
    {
      path: "/AdminLoja",
      element: <AdminLoja />
    },
    {
      path: "/NewToken",
      element: <NewToken />
    },
    {
      path: "/Clientes",
      element: <Clientes />
    },
    {
      path: "/Scripts",
      element: <Scripts />
    },
    {
      path: "/Aplicacoes",
      element: <Aplicacoes />
    },
    {
      path: "/RestartAplication",
      element: <RestartAplication />
    },
    {
      path: "/Gerenciamento",
      element: <Gerenciamento />
    },
    {
      path: "/CreateItem",
      element: <CreateItem />
    },
    {
      path: "/Membros",
      element: <Contato />
    },
    {
      path: "/Payment",
      element: <Payment />
    },
    {
      path: "/Daganddrop",
      element: <Daganddrop />
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