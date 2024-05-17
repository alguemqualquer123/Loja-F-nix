import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import FenixPng from "../assets/logo.png";
import ReactSvg from "../assets/react.svg";
import Typewriter from "@app/componentes/Typewriter/Typewriter";
import { authDiscord } from "@app/config.js";
import { InstanceSettings } from "@app/Server/Auth/server";
import { CheckUserAdmin } from "@app/Server/ControleRoles/server.ts";

export const NavBar = () => {
  const [ChequeAdmin, setChequeAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const isAdmin = CheckUserAdmin();
      setChequeAdmin(isAdmin);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <section
      className="w-full lg:fixed flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:pl-16 lg:pr-16 lg:p-6 p-6 lg:text-black  font-bold z-50  bg-black lg:bg-transparent"
      // style={{
      //   background:
      //     "linear-gradient(90.19deg, rgba(0,0,0,0.4) 0.16%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 95.68%)",
      // }}
    >
      <Link to="/" className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src={FenixPng}
            alt="logo"
            className="w-[50px] lg:w-[50px] hover:scale-2 hover:animate-tremulo bg-cover"
          ></img>

          <p className="text-white text-[15px]  lg:text-[20px] font-bold text-ellipsis hover:cursor-pointer transition-all transform  hover-underline-animation">
            Fênix Development
          </p>
        </div>
      </Link>
      <div className="grid grid-cols-3 gap-4 mt-8 lg:flex text-[12px] lg:text-[15px] lg:flex-row justify-center items-center lg:gap-10 ">
        <a
          onClick={() => {
            if (location.pathname === "/") {
              scrollToSection("inicio");
            } else {
              navigate("/");
              setTimeout(() => {
                scrollToSection("inicio");
              }, 2000);
            }
          }}
          className="font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Inicio
        </a>
        <a
          onClick={() => scrollToSection("produtos")}
          className="font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Produtos
        </a>
        <a
          onClick={() => scrollToSection("Contatos")}
          className="font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Contatos
        </a>
        <a
          onClick={() => scrollToSection("Feedbacks")}
          className="font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Feedbacks
        </a>
        {!InstanceSettings.getUserProfile() ? (
          <a
            className="font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem cursor-not-allowed"
            // href="/login"
            onClick={() => {
              window.location.href = authDiscord;
            }}
          >
            Login
          </a>
        ) : ChequeAdmin ? (
          <a
            className="font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem cursor-not-allowed"
            href="/dashboard"
          >
            Gerenciar
          </a>
        ) : null}
      </div>
    </section>
  );
};
