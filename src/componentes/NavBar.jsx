import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FenixPng from "../assets/logo.png";
import ReactSvg from "../assets/react.svg";
import Typewriter from "@app/componentes/Typewriter/Typewriter";
import { Nav } from "../css/NavBar.ts";
import {
  api,
  config,
  ActiveSections,
  optionsLi,
  optionsButtons,
} from "../config.js";

export const NavBar = () => {
  return (
    <section
      className="w-[100vw] flex flex-row justify-start items-center pl-16 pt-4 font-bold"
      style={{
        background:
          "linear-gradient(90.19deg, #161616 0.16%, #4b1818 50%, #a31818 95.68%)",
      }}
    >
      <Link to="/" className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src={FenixPng}
            alt="logo"
            className="w-[70px] animate-tremulo bg-cover"
          ></img>
         
          <p className="text-white  text-ellipsis hover:cursor-pointer transition-all transform  hover-underline-animation">
              Fênix Development
          </p>
        </div>
      </Link>
      <div className="flex flex-row justify-center items-center gap-10 ml-[25vw]">
        <a
          href="/produtos"
          className="text-white hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation"
        >
          Produtos
        </a>
        <a
          href="/contatos"
          className="text-white hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation"
        >
          Scripts
        </a>
        <a
          href="/scripts"
          className="text-white hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation"
        >
          Contatos
        </a>
        <a
          href="/instagram"
          className="text-white hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation"
        >
          Feedbacks
        </a>
      </div>
    </section>
  );
};
