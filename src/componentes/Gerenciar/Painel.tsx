import { useState } from "react";
import { PNavBar } from "./NavBar";
import { Route, Routes, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pages = ({ Pagina }: { Pagina: string }) => {
  let { GetRoute } = useParams();

  return (
    <section className="w-full p-4" id="loadingPage">
      <div className="w-full h-full bg-white text-[50px] font-bold rounded ">
        <h1 className="text-black">{Pagina}</h1>
      </div>
    </section>
  );
};
export const Painel = () => {
  const [OpenModal, SetOpenModal] = useState(true);

  const DropItem = ({
    text,
    action,
    icon,
  }: {
    text: string;
    action: string;
    icon?: string;
  }) => {
    return (
      <li className="w-[90%] p-4 flex flex-row gap-10 justify-center items-center hover:bg-black/20 rounded-lg">
        <Link to={`/dashboard/${action}`} className="text-black font-bold">
          {text}
        </Link>
      </li>
    );
  };

  return (
    <section className="w-[100vw] h-[100vh]">
      <PNavBar />
      <div className="flex flex-row">
        <div
          className={`${
            OpenModal ? "w-[20vw]" : "w-0"
          } h-[92vh] pt-10 bg-white text-black flex flex-col justify-start items-center gap-4 transition-all duration-500`}
        >
          <DropItem text="Painel" action="painel" icon="add" />
          <DropItem text="Gerênciar Usuarios" action="gerenciar" icon="add" />
          <DropItem text="Gerênciar Scripts" action="scripts" icon="add" />
        </div>
        <Routes>
          <Route path={"/dashboard"} index />
          <Route path="/painel" element={<Pages Pagina="painel" />} />
          <Route path="/gerenciar" element={<Pages Pagina="gerenciar" />} />
          <Route path="/scripts" element={<Pages Pagina="scripts" />} />
        </Routes>
      </div>

      <h1
        className="w-[60px]  flex justify-center items-center absolute right-[1vw] bottom-[1vw] bg-white rounded text-black text-[40px] pb-1"
        onClick={() => {
          SetOpenModal(!OpenModal);
        }}
      >
        {OpenModal ? "-" : "+"}
      </h1>
    </section>
  );
};
