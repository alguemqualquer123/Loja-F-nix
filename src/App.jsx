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
import { ControleRoles } from "@app/Server/ControleRoles/server.ts";
import { api } from "@app/config.js";
import { VscGithub } from "react-icons/vsc";
import { IoLogoDiscord } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { GetDataCookie, getCookie } from "@app/auth/getCookies";
import { InstanceSettings } from "@app/Server/Auth/server";

function App() {
  // useEffect(() => {
  // const interval = setInterval(() => {
  // ControleRoles();
  // }, 5000);
  // return () => {
  // clearInterval(interval);
  // };
  // }, []);
  useEffect(() => {
    ControleRoles();
  });

  return (
    <main
      className="w-screen flex flex-col justify-start items-center overflow-y-auto transition-all duration-700"
      id="inicio"
    >
      <NavBar />
      <img
        src={Dots}
        alt=""
        className="bg-cover bg-no-repeat absolute top-0"
        draggable={false}
      />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <section className="w-full lg:mb-[10vh] lg:mt-[50vh]  mt-[20vh] ">
          <div
            className="flex flex-col  justify-start items-center lg:gap-2 gap-4 transition-all animate-retivalC
          text-[8px] lg:text-[25px] 
          "
          >
            <h2 className="text-white  from-red-500 to-black font-bold font-signika ">
              Olá, Seja Bem Vindo a Fênix
            </h2>
            <div className="w-full flex items-center justify-center">
              <h2 className="text-white font-semibold font-signika">
                Esta procurando novos scripts para a sua cidade inovadores e que
                vai
                <h2 className="text-white font-semibold font-signika">
                  acrescentar bastante na sua cidade ?
                </h2>
              </h2>
            </div>
          </div>
        </section>

        <section className="w-full h-full mt-[18rem] lg:mt-[20rem]  flex flex-col justify-center items-center transition-all animate-retivalB duration-1000">
          <img src={Ondas} alt="" />
          <div
            className="w-full bg-white flex flex-col justify-center items-center"
            id="produtos"
          >
            <h1 className="text-black text-[14px] lg:text-[50px] font-bold">
              Temos Alguns de nossos Resources Em Exibição !!
            </h1>
            <span className="text-black md:text-[24px] sm:text-[50px] lg:text-[40px] 2xl:text-[50px] font-bold">
              Clique no botão de Interagir
            </span>
            <div className="bg-white grid grid-cols-2 lg:grid-cols-4 lg:pb-14 lg:pt-10 lg:p-20 mt-20 justify-center items-center">
            <MaterialCard
                Title="Fênix Sistema de Liberação id Asgard 🍀"
                Text="Essa é a mais nova exclusividade da Fênix com a Icon Design"
                Footer="R$ 80"
                src={"https://liberacaodc.fenixdevelopment.com.br/"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Quantic-Phone v1.0 | em desenvolvimento !!"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="RESOURCE PRIVADO"
                src="https://phone.fenixdevelopment.com.br"
                Image={FENIXPNG}
                ToogleImagem={true}
                className="bg-gray-800"
              />
              <MaterialCard
                Title="Pause Menu Capital SP v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="R$ 250"
                src={"https://pause.fenixdevelopment.com.br"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Fênix Hud v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="R$ 250"
                src={"https://f-nix-hud.vercel.app/"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Goianox AC v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="RESOURCE PRIVADO"
                src={"https://goianoxac.fenixdevelopment.com.br"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Fênix Garagem v1.0"
                Text="Essa é a mais nova exclusividade da Fênix"
                Footer="R$ 180"
                src={"https://garagem.fenixdevelopment.com.br"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Fênix Registro v1.0"
                Text="Essa é a mais nova exclusividade da Fênix com a Icon Design"
                Footer="R$ 80"
                src={"https://rocket-registration.vercel.app"}
                Image={FENIXPNG}
                ToogleImagem={true}
              />
              <MaterialCard
                Title="Fênix Sistema de Relacionamento v1.0"
                Text="Essa é a mais nova exclusividade da Fênix com a Icon Design"
                Footer="R$ 40"
                src={"https://relac-git-main-sr-vinixs-projects.vercel.app/"}
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
            <div
              className="flex flex-col justify-center items-center gap-10 pb-20 pt-10 lg:mt-[40rem] mt-[5rem]"
              id="Contatos"
            >
              <h1 className="text-black lg:text-[40px] font-bold uppercase drop-shadow-lg shadow-black">
                Entre Em Contato Em Nosso Discord !!
              </h1>
              <div className="w-screen flex justify-center items-center flex-row  gap-2 lg:gap-10">
                <button
                  className="w-[60px] lg:w-[80px]  h-[30px] text-[8px] lg:h-[45px] lg:text-[12px] p-1 rounded-md bg-gradient-to-r from-red-500 to-red-600 border-none border-transparent font-semibold hover:text-black hover:shadow-black hover:shadow-1xl transition-all duration-700"
                  onClick={() => window.open("https://discord.gg/2zX682sDwC")}
                >
                  Loja
                </button>
                <button
                  className="lg:h-[46px] h-[30px] text-[8px] lg:text-[12px] p-2  rounded-md  bg-black  border-none hover:shadow-1xl hover:shadow-blue-gray-800 hover:text-red-700 transition-all duration-700 active:border-transparent after:border-transparent font-semibold"
                  onClick={() => window.open("https://discord.gg/gSHUVHXNwP")}
                >
                  Comunidade
                </button>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[45px] lg:w-[50px] h-[30px] lg:h-[45px] bg-black/70 rounded-lg p-1 hover:border  hover:border-indigo-500 duration-100 text-black hover:text-white flex justify-center items-center">
                    <VscGithub
                      className="size-4 lg:size-5"
                      onClick={() =>
                        window.open("https://github.com/alguemqualquer123/")
                      }
                    />
                  </div>
                  <div className="w-[45px] lg:w-[50px] h-[30px] lg:h-[45px] bg-black/70 rounded-lg p-1 hover:border hover:border-indigo-500 duration-100 text-black hover:text-white flex justify-center items-center">
                    <IoLogoDiscord
                      className="size-4 lg:size-5"
                      onClick={() =>
                        window.open("https://discord.gg/CwQrSypj2T")
                      }
                    />
                  </div>
                  <div className="w-[45px] lg:w-[50px] h-[30px] lg:h-[45px] bg-black/70 rounded-lg p-1 hover:border hover:border-indigo-500 duration-100 text-black hover:text-white flex justify-center items-center">
                    <RiInstagramFill
                      className="size-4 lg:size-5"
                      onClick={() =>
                        window.open("https://www.instagram.com/vinix_santoos/")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            background:
              "linear-gradient(90.19deg, #161616 0.16%, #4b1818 50%, #a31818 95.68%)",
          }}
        >
          {/* <div className="w-full h-[20rem]">
            <img
              src={Dots}
              alt=""
              className="w-full h-full bg-cover bg-no-repeat"
            />
          </div> */}
          <div
            className="w-full bg-[#161111] flex lg:flex-row flex-col gap-4 lg:gap-0 lg:justify-between lg:pr-20 lg:pl-20 items-center lg:pt-10 pt-4 pb-4 lg:pb-10"
            id="Feedbacks"
          >
            {/* <a
              className="font-bold lg:text-[20px] text-white hover:text-white  mt-[2rem]"
              href="#termos"
            >
              Termos
            </a> */}

            <div className="flex flex-col justify-center items-center">
              <img
                src={FenixPng}
                alt="logo"
                className="lg:w-[100px] w-[50px] bg-cover"
              />
              <span className="text-white font-bold font-signika text-[10px] lg:text-[10px]">
                Fênix - 2024 | Todos os direitos reservados.
              </span>
            </div>

            <div className="w-auto h-auto flex items-center -space-x-4 gap-1 pt-2 pb-2 pr-2 pl-2">
              {/* <Tippy content="SR VINIX">
                  <img
                    alt="user 1"
                    className="border border-red-900 shadow-xl shadow-red-900/20 ring-4 ring-red-500/30 hover:z-10 focus:z-10 rounded-full h-[30px] w-[30px] transition-all duration-1000 hover:scale-[1.1]"
                    src={SRVINIXPNG}
                  />
                </Tippy> */}
              {/* </div> */}
              {/* <img
                variant="circular"
                alt="user 1"
                className="border border-red-900 shadow-xl shadow-red-900/20 ring-4 ring-red-500/30 hover:z-10 focus:z-10 rounded-full w-[40px] transition-none duration-1000 hover:scale-[1.1] animate"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              /> */}
            </div>

            <div className="flex flex-col justify-center items-center text-[10px] lg:text-[15px] lg:mr-[14vw] mb-4 lg:mg-0  font-signika">
              <span>Fênix Development</span>
              <span>Todos Os Direitos Reservados.</span>
              <span>©copyright</span>
              <span>Production By Fênix Development</span>
            </div>
          </div>
        </section>
        <div className="fixed bottom-[1rem] left-[1rem] flex flex-col justify-center items-center font-signika text-[8px] lg:text-[20px] text-gray-500 z-[50]">
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
