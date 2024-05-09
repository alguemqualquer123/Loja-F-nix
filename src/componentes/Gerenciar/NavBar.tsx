import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FenixPng from "@app/assets/logo.png";
import { InstanceSettings } from "@app/Server/Auth/server";
import { CheckUserAdmin } from "@app/Server/ControleRoles/server.ts";

export const PNavBar = () => {
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <section
      className="w-full h-[8vh] flex flex-row justify-between items-center pl-16 pr-4  font-bold z-50 "
      style={{
        background:
          "linear-gradient(90.19deg, rgba(0,0,0,1.4) 0.16%, rgba(0,0,0,1.4) 50%, rgba(0,0,0,1.4) 95.68%)",
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
      <div className="flex flex-row justify-center items-center gap-10 ml-[28vw]">
        {/* <a
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
        </a> */}
        <div className="flex flex-rol justify-between items-center gap-4">
          <a
            onClick={() => scrollToSection("produtos")}
            className="text-white text-[20px] font-bold hover:text-red-700 duration-500 hover:cursor-pointer transition-all transform translate-x-0 hover-underline-animation animate-DropItem"
          >
            {InstanceSettings.getUserProfile()?.global_name}
          </a>
          <img src= {InstanceSettings.getUserProfile()?.avatar} alt="" className="w-[2vw] rounded-lg"/>
        </div>
      </div>
    </section>
  );
};
