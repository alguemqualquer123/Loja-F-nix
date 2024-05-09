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
      className="w-full fixed flex flex-row justify-between items-center pl-16 pr-16  font-bold z-50 "
      style={{
        background:
          "linear-gradient(90.19deg, rgba(0,0,0,0.4) 0.16%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 95.68%)",
      }}
    >
      <Link to="/" className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src={FenixPng}
            alt="logo"
            className="w-[70px] hover:scale-2 hover:animate-tremulo bg-cover"
          ></img>

          <p className="text-white text-[20px]  md:text-[20px] xl:text-[20px]  sm:text-[20px]  lg:text-[10px] font-bold text-ellipsis hover:cursor-pointer transition-all transform  hover-underline-animation">
            Fênix Development
          </p>
        </div>
      </Link>
      <div className="flex flex-row justify-center items-center gap-10 ml-[25vw]">
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
          className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Inicio
        </a>
        <a
          onClick={() => scrollToSection("produtos")}
          className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Produtos
        </a>
        <a
          onClick={() => scrollToSection("Contatos")}
          className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Contatos
        </a>
        <a
          onClick={() => scrollToSection("Feedbacks")}
          className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
        >
          Feedbacks
        </a>
        {!InstanceSettings.getUserProfile() ? (
          <a
            className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem cursor-not-allowed"
            // href="/login"
            onClick={() => {
              window.location.href = authDiscord;
            }}
          >
            Login
          </a>
        ) : ChequeAdmin ? (
          <a
            className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem cursor-not-allowed"
            href="/dashboard"
          >
            Gerenciar
          </a>
        ) : null}
      </div>
    </section>
  );
};
