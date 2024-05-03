// import './css/App.css'
import { useState, useEffect } from "react";
import { NavBar } from "@app/componentes/NavBar.jsx";
import FenixPng from "@app/assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Ondas from "@app/assets/ondas.png";
import Dots from "@app/assets/dots.png";
import Typewriter from "@app/componentes/Typewriter/Typewriter";
import { motion } from "framer-motion";
import {
  api,
  config,
  ActiveSections,
  optionsLi,
  optionsButtons,
} from "@app/config.js";
function App() {
  return (
    <main className="w-screen flex flex-col justify-start items-start">
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4.5 }}
      >
        <img
          src={Dots}
          alt=""
          className="w-full h-full bg-cover bg-no-repeat absolute top-0"
        />
        <section className="w-[35vw] ml-[4rem] mt-[4rem] pb-4 pt-4 flex flex-col gap-2 p-5">
          <Typewriter text="Olá, Seja Bem Vindo!" speed={50} textSize={30} />
          <Typewriter
            text=" Esta procurando novos scripts para a sua cidade inovadores e que vai acrescentar bastante na sua cidade ?"
            speed={50}
            textSize={20}
          />
          {/* <h2 className="text-white text-[20px] font-bold">
          Olá, Seja Bem Vindo a Fênix{" "}
          <span className="text-[#a31818]">Development</span>
        </h2> */}
          <h2 className="text-white text-[15px]"></h2>
        </section>

        <section className="w-full h-full mt-[20rem] flex flex-col justify-center items-center">
          <img src={Ondas} alt="" />
          <div className="w-full h-[90rem] bg-white"></div>
        </section>
        <section
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            background:
              "linear-gradient(90.19deg, #161616 0.16%, #4b1818 50%, #a31818 95.68%);",
          }}
        >
          <div className="w-full h-[90rem]">
            <img
              src={Dots}
              alt=""
              className="w-full h-full bg-cover bg-no-repeat"
            />
          </div>
        </section>
      </motion.div>
    </main>
  );
}

export default App;
