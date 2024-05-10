import { useEffect, useState } from "react";
import "./index.css";
import { AllAdminsType, InstanceSettings } from "@app/Server/Auth/server";
import { api } from "@app/config";
import { getRoleIndex } from "@app/Server/ControleRoles/server";
export const Gerenciar = () => {
  const [listMembers, setlistMembers] = useState([]);

  async function main() {
    try {
      const userInfos = await InstanceSettings.getUserInfos();
      const sortedMembers = [...listMembers].sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
      setlistMembers(userInfos);
    } catch (error) {
      console.error("Erro ao recuperar informações do usuário", error);
    }
  }
  useEffect(() => {
    main();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      main();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section
      className="w-full p-4 transition-all  duration-1000"
      id="loadingPage"
    >
      <div
        className="w-full sm:h-[85vh] lg:h-[58vh] md:h-[55vh] overflow-y-auto fade-in  bg-white text-black text-[50px] font-bold rounded "
        id="listMembers"
      >
        <table className="table-auto w-full p-6">
          <thead>
            <tr className="text-[20px] pl-20 pr-20">
              <th>Usuario</th>
              <th>Cargo</th>
              <th>Contratado</th>
              <th>Gerência</th>
            </tr>
          </thead>
          <hr id="hrhorganizations" />
          <tbody className="flex flex-col justify-center items-center  ">
            {listMembers.map((data: any, index: number) => (
              <>
                <tr
                  className="flex flex-row justify-start items-center p-2 "
                  key={index}
                >
                  <td className="flex flex-row">
                    {data.avatarUrl && (
                      <img
                        src={`${data.avatarUrl ? data.avatarUrl : ""}`}
                        alt={`${data.name.charAt(0)}`}
                        className="w-[40px] rounded-lg"
                      />
                    )}
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 text-xs">
                        {data.name ? data.name : ""}
                      </h6>
                    </div>
                  </td>
                  <td className="ml-[14vw]">
                    {data.roles ? data.roles.role : ""}
                  </td>
                  <td className="ml-[18vw]">{data.date ? data.date : ""}</td>
                  <td className="ml-[20vw]">"Não"</td>
                </tr>
                <hr id="hrhorganization" />
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[50vw] grid grid-cols-4  justify-center items-center p-2 mt-10">
        <input
          type="text"
          className="w-[16rem] h-[3rem] placeholder:text-black text-center text-black font-bold  text-[12px] border-none rounded-lg "
          placeholder="Usuario"
        />
        <input
          type="text"
          className="w-[16rem] h-[3rem] placeholder:text-black text-center text-black font-bold  text-[12px] border-none rounded-lg fade-in"
          placeholder="Cargo"
        />
        <input
          type="text"
          className="w-[16rem] h-[3rem] placeholder:text-black text-center text-black font-bold  text-[12px] border-none rounded-lg fade-in"
          placeholder="Usuario"
        />
        <button className="bg-black rounded-lg p-3.5 hover:cursor-pointer" type="submit">Salvar</button>
      </div>
    </section>
  );
};




// return (
//   <section
//     className="w-full p-4 transition-all  duration-1000"
//     id="loadingPage"
//   >
//     <div
//       className="w-full sm:h-[85vh] lg:h-[58vh] md:h-[55vh] overflow-y-auto fade-in  bg-white text-black text-[50px] font-bold rounded "
//       id="listMembers"
//     >
//       <table className="table-auto w-full p-6">
//         <thead>
//           <tr className="text-[20px] pl-20 pr-20">
//             <th>Usuario</th>
//             <th>Cargo</th>
//             <th>Contratado</th>
//             <th>Gerência</th>
//           </tr>
//         </thead>
//         <hr id="hrhorganizations" />
//         <tbody className="flex flex-col justify-center items-center  ">
//           {listMembers.map((data: any, index: number) => (
//             <>
//               <tr
//                 className="flex flex-row justify-start items-center p-2 "
//                 key={index}
//               >
//                 <td className="flex flex-row">
//                   {data.avatarUrl && (
//                     <img
//                       src={`${data.avatarUrl ? data.avatarUrl : ""}`}
//                       alt={`${data.name.charAt(0)}`}
//                       className="w-[40px] rounded-lg"
//                     />
//                   )}
//                   <div className="flex flex-col justify-center">
//                     <h6 className="mb-0 text-xs">
//                       {data.name ? data.name : ""}
//                     </h6>
//                   </div>
//                 </td>
//                 <td className="ml-[14vw]">
//                   {data.roles ? data.roles.role : ""}
//                 </td>
//                 <td className="ml-[18vw]">{data.date ? data.date : ""}</td>
//                 <td className="ml-[20vw]">"Não"</td>
//               </tr>
//               <hr id="hrhorganization" />
//             </>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <div className="w-[50vw] grid grid-cols-4  justify-center items-center p-2 mt-10">
//       <input
//         type="text"
//         className="w-[16rem] h-[3rem] placeholder:text-black text-center text-black font-bold  text-[12px] border-none rounded-lg "
//         placeholder="Usuario"
//       />
//       <input
//         type="text"
//         className="w-[16rem] h-[3rem] placeholder:text-black text-center text-black font-bold  text-[12px] border-none rounded-lg fade-in"
//         placeholder="Cargo"
//       />
//       <input
//         type="text"
//         className="w-[16rem] h-[3rem] placeholder:text-black text-center text-black font-bold  text-[12px] border-none rounded-lg fade-in"
//         placeholder="Usuario"
//       />
//       <button className="bg-black rounded-lg p-3.5 hover:cursor-pointer" type="submit">Salvar</button>
//     </div>
//   </section>
// );