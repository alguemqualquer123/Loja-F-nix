// import './css/App.css'
import { useState, useEffect } from "react";
import { NavBar } from "@app/componentes/NavBar.jsx";
import FenixPng from "@app/assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Ondas from "@app/assets/ondas.png";
import Dots from "@app/assets/dots.png";
import Typewriter from "@app/componentes/Typewriter/Typewriter";
import { motion } from "framer-motion";
import { Avatar, Carousel } from "@material-tailwind/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import FENIXPNG from "@app/assets/fenix.png";
import SRVINIXPNG from "@app/assets/authores/srvinix.jpg";
import MaterialCard from "@app/componentes/MaterialIcons/MaterialCard.jsx";
import {
  api,
  config,
  ActiveSections,
  optionsLi,
  optionsButtons,
} from "@app/config.js";
function App() {
  return (
    <main className="w-screen flex flex-col justify-start items-start overflow-y-auto">
      <img src={Dots} alt="" className="bg-cover bg-no-repeat absolute top-0" draggable={false}/>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4.5 }}
      >
        <section className="w-[100vw] ml-[4rem] mt-[4rem] pb-4 pt-4 flex flex-col  justify-center items-center gap-2 p-5 transition-all animate-retivalC">
          <h2 className="text-white text-[30px] font-bold font-signika">
            Olá, Seja Bem Vindo a  Fênix{" "}
            {/* <span className="text-[#a31818] text-[30px] font-signika">
              Development
            </span> */}
          </h2>
          <h2 className="text-white text-[20px] font-semibold font-signika">
            Esta procurando novos scripts para a sua cidade inovadores e que vai
            acrescentar bastante na sua cidade ?
          </h2>
        </section>

        <section className="w-full h-full mt-[20rem] flex flex-col justify-center items-center transition-all animate-retivalB duration-1000">
          <img src={Ondas} alt="" />
          <div className="w-full bg-white flex flex-col justify-center items-center">
            <h1 className="text-black text-[50px] font-bold">
              Temos Alguns de nossos Resources Em Exibição !!
            </h1>
            <span className="text-black text-[40px] font-bold">
              Clique no botão de Interagir
            </span>
            <div className="w-full bg-white grid grid-cols-4 pb-20 pt-10 pl-10  mt-[20rem] gap-10 overflow-auto">
              <MaterialCard
                Title="Quantic-Phone v1.0 | em desenvolvimento !!"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                Image={FENIXPNG}
                ToogleImagem={true}
                className="bg-gray-800"
              />
              <MaterialCard
                Title="Pause Menu Capital SP v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src={"https://pause-menu-capital.vercel.app/"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Fênix Hud v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src={"https://f-nix-hud.vercel.app/"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Goianox AC v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src={"https://goianox-ac.vercel.app/"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Fênix Garagem v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src={"https://fenix-garagem.vercel.app/"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              {/* <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              />
              <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              />
              <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              />
              <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              />
              <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              />
              <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              />
              <MaterialCard
                Title="Quantic-Phone v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="BY / SR VINIX"
                src="https://quantic-phone-mdsu.vercel.app/"
                className=""
              /> */}
            </div>
            <div className="flex flex-col justify-center items-center gap-10 pb-20 pt-10">
              <h1 className="text-black text-[40px] font-bold">
                Entre Em Contato Em Nosso Discord !!
              </h1>
              <div className="flex justify-center items-center flex-row gap-20">
                <button
                  className="border-none hover:shadow-lg hover:shadow-blue-gray-800 transition-all duration-500 active:border-transparent after:border-transparent"
                  onClick={() => window.open("https://discord.gg/2zX682sDwC")}
                >
                  Loja
                </button>
                <button
                  className="border-none hover:shadow-lg hover:shadow-blue-gray-800 transition-all duration-500 active:border-transparent after:border-transparent"
                  onClick={() => window.open("https://discord.gg/gSHUVHXNwP")}
                >
                  Comunidade
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            background:
              "linear-gradient(90.19deg, #161616 0.16%, #4b1818 50%, #a31818 95.68%);",
          }}
        >
          {/* <div className="w-full h-[20rem]">
            <img
              src={Dots}
              alt=""
              className="w-full h-full bg-cover bg-no-repeat"
            />
          </div> */}
          <div className="w-full bg-[#161111] flex flex-row justify-between items-center pb-[2rem] pt-[2rem] ">
            <a
              className="ml-[16rem] font-bold text-[20px] text-white hover:text-white  mt-[2rem]"
              href="#termos"
            >
              Termos
            </a>

            <div className="flex flex-col justify-center items-center gap-4 ">
              <img src={FenixPng} alt="logo" className="w-[100px] bg-cover" />
              <span className="text-white font-bold font-signika">
                Fênix - 2024 | Todos os direitos reservados.
              </span>
            </div>

            <div className="w-auto h-auto flex items-center -space-x-4 gap-1 pt-2 pb-2 pr-2 pl-2">
              <Tippy content="SR VINIX">
                <img
                  alt="user 1"
                  className="border border-red-900 shadow-xl shadow-red-900/20 ring-4 ring-red-500/30 hover:z-10 focus:z-10 rounded-full h-[30px] w-[30px] transition-all duration-1000 hover:scale-[1.1]"
                  src={SRVINIXPNG}
                />
              </Tippy>
              {/* <img
                variant="circular"
                alt="user 1"
                className="border border-red-900 shadow-xl shadow-red-900/20 ring-4 ring-red-500/30 hover:z-10 focus:z-10 rounded-full w-[40px] transition-none duration-1000 hover:scale-[1.1] animate"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              /> */}
            </div>

            <div className="">
              <div className="flex flex-col justify-center items-center text-[15px] mr-[14vw]  font-signika mt-8">
                <span>Fênix Development</span>
                <span>Todos Os Direitos Reservados.</span>
                <span>©copyright</span>
                <span>Production By Fênix Development</span>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-[1rem] left-[1rem] flex flex-col justify-center items-center font-signika text-[20px] text-gray-500 z-[50]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"></path>
          </svg>{" "}
          Deslize para ver mais
        </div>
      </motion.div>
    </main>
  );
}

export default App;
