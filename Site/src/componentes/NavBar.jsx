import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FenixPng from "../assets/logo.png";
import ReactSvg from "../assets/react.svg";
import Select from './SelectMenu.jsx'
import { SelectMenuButton } from "./SelectMenuButton.jsx"
import { AdminLoja } from "./admin/AdminLoja.jsx"
import { NewToken } from "./admin/NewToken.jsx"
import { Clientes } from "./admin/Clientes.jsx"
import { Scripts } from "./admin/Scripts.jsx"
import { Aplicacoes } from "./admin/Aplicacoes.jsx"
import { RestartAplication } from "./admin/RestartAplication.jsx"
import { Gerenciamento } from "./admin/Gerenciamento.jsx"
import { DivNav, Nav, SelectMenu, UserLogged } from "../css/NavBar.ts"
import { api,config, ActiveSections, optionsLi, optionsButtons } from "../config.js";
import { user } from "../auth/getCookies.js";
import { Login } from "../auth/Login.jsx";


export const NavBar = () => {
  const [selectedOptions, setSelectedOptions] = useState("");
  const [Administradores, SetAdministradores] = useState([{}]);
  const [PainelOpen, SetPainelOpen] = useState(false);
  const PainelAdmin = config.PainelOptions

  const obtenerAdministradores = async () => {
    try {
      await api.get('/Administradores').then((response) => {
        SetAdministradores(response.data);
      });
    } catch (error) {
      console.error('Error al obtener administradores', error);
      throw error;
    }
  };
  const Navigate = useNavigate()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [InputColor, SetInputColor] = useState('#000000');
  const [Cookies, SetCookies] = useState(false);
  useEffect(() => {
    obtenerAdministradores()
    if (!user) {
      Navigate('/')
      SetCookies(false);
    } else {
      SetCookies(true)
    }
  }, [Cookies]);
  const LoginPage = () => {
    Navigate('/login')
  };
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
  };
  const SetNewColor = (e) => {
    const newColor = e.target.value;
    SetInputColor(newColor);
  };

  const handleSelectChange = (e) => {
    setSelectedOptions(e.href)
  };
  return (
    <>
      <DivNav>
        <Nav style={{ background: InputColor }}>
          <Link to="/" className="title" >
            <img src={FenixPng} alt="logo" ></img>
            <p>{config ? config.TilteNav : 'Vini Santos'}</p>
          </Link>
          <ul className={isMenuOpen ? "open" : ""}>
            {optionsButtons.map((option, i) => (
              <div key={i}>
                {Cookies ? (
                  <li id='buttonsHover'>
                    <NavLink to={option ? option.href : ''}>{option ? option.title : ''}</NavLink>
                  </li>
                ) : null}
              </div>
            ))}

            {!Cookies ? (
              <li>
                <a onClick={LoginPage} className="dropdown-button">Login</a>
              </li>
            ) : null}
            {Cookies ? (
              <div>
                {Administradores.map((admin, index) => (
                  admin.DISCORD_ID === user.id ? (
                    <ul key={index}>
                      <li>
                        {/* <a href="/Painel" className="Painel-Administração">Painel</a> */}
                        <a onClick={() => { SetPainelOpen(!PainelOpen) }} className="Painel-Administração">Painel</a>
                      </li>
                    </ul>
                  ) : null
                ))}
              </div>
            ) : null}
            {Cookies ? (
              <UserLogged>
                <li>
                  <a onClick={handleToggleMenu} className="dropdown-button">Clientes</a>
                </li>
                <img src={user ? user.avatar : ''} alt={user ? user.username : ''} />
                <span>Olá  {user ? user.global_name : ''}</span>
              </UserLogged>
            ) : null}
            {ActiveSections.InputColor ? (
              <li>
                <div className="favcolor">
                  <input type="color" id="favcolor" name="favcolor" onChange={SetNewColor} value={InputColor} />
                </div>
              </li>
            ) : null}
          </ul>
        </Nav>

        {isMenuOpen ? (
          <SelectMenu>
            <div label="Gêneros" cols="3" className="nfDropDown open theme-lakira">
              <div role="menu" className="sub-menu theme-lakira" style={{ opacity: 1, transitionDuration: '150ms' }}>
                <ul className="sub-menu-list multi-column">
                <SelectMenuButton prop={optionsLi}/>
                  {/* {optionsLi.map((option, i) => (
                    <li key={i} className="sub-menu-item" role="none" onClick={() => { handleSelectChange(option.href) }}>
                      <a className="sub-menu-link">{option.title ? option.title : ''}</a>
                      <span>{option.description ? option.description : ''}</span>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div >
          </SelectMenu>
        ) : null}
        {PainelOpen ? (
          <SelectMenu>
            <div label="Gêneros" cols="3" className="nfDropDown open theme-lakira">
              <div role="menu" className="sub-menu theme-lakira" style={{ opacity: 1, transitionDuration: '150ms' }}>
                <ul className="sub-menu-list multi-column">
                  <SelectMenuButton prop={PainelAdmin}/>
                </ul>
              </div>
            </div >
          </SelectMenu>
        ) : null}
      </DivNav>
    </>
  );
};