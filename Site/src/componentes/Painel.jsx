import React, { useEffect, useState } from "react";
import { DivPainel, MenuOptions, OpenDivMenu } from "../css/Painel"
import { useNavigate } from "react-router-dom"
// import '../css/PainelButtons.css'
import { config, api } from "../config.js"
import { user } from "../auth/getCookies.js"

export const Painel = () => {
    const navigate = useNavigate()
    const [ActiveMenuOptions, SetActiveMenuOptions] = useState(false);
    const options = config.PainelOptions

    const [administradores, setAdministradores] = useState({});

    const obtenerAdministradores = async () => {
        try {
            await api.get('/Administradores').then((response) => {
                setAdministradores(response.data);
            });
        } catch (error) {
            console.error('Error al obtener administradores', error);
            throw error;
        }
    };

    useEffect(() => {
        obtenerAdministradores();
    }, [])
    useEffect(() => {
        const verificarAdmin = async () => {
            try {
                if (user) {
                    administradores.map((e) => {
                        if (user.id == e.DISCORD_ID) {
                            return true;
                        } else {
                            navigate('/');
                        }
                    })
                }
            } catch (error) {
                // console.error('Error al verificar administradores', error);
            }
        };

        verificarAdmin();
    }, [user, navigate, administradores]);
    return (
        <>
            <DivPainel>
                {/* {ActiveMenuOptions ? (
                    <MenuOptions>
                        <div className="flex absolute items-start justify-flex-start w-[2rem] h-[2rem] bottom-[2rem] left-[2rem] bg-black">
                        <OpenDivMenu className="background" onClick={() => {SetActiveMenuOptions(!ActiveMenuOptions)}}>
                            <button className="menu__icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </OpenDivMenu>
                    </div>
                        <div className="Buttons">
                            {options.map((option, key) => (
                                <nav className="NavButtons" key={key}>
                                    <ul value={option.value} onClick={(event) => handleSelectChange(event, option)}>
                                        <li><a href={`#${option.name}`}>{option.name}</a></li>
                                    </ul>
                                </nav>
                            ))}
                        </div>
                    </MenuOptions>
                ) : (
                    <div className="flex absolute items-start justify-flex-start w-[2rem] h-[2rem] bottom-[2rem] left-[2rem] bg-black">
                        <OpenDivMenu className="background" onClick={() => {SetActiveMenuOptions(!ActiveMenuOptions)}}>
                            <button className="menu__icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </OpenDivMenu>
                    </div>
                )} */}
            </DivPainel>
        </>
    );
}