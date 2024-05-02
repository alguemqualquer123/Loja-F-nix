import React, { useState, useEffect } from "react";
import { DivContaty } from "../css/Contaty";
import { api } from "../config.js";
import axios from "axios";

export const Contato = () => {
    const [Contaty, SetContaty] = useState([]);
    useEffect(() => {
        api.get("/discord/widget").then((response) => {
            console.log(response.data);
            SetContaty(response.data)
        });
    }, [])
    return (
        <DivContaty>
            <div className="Contatos">
                <div className="Contatos-Itens">
                    {Contaty.map((item, index) => (
                        <div className="Itens" key={index} onClick={() => { window.open("https://discord.gg/CwQrSypj2T", "_blank") }}>
                            <img src={item ? item.avatar_url : ''} alt="Image">
                            </img>
                                <div style={item.status === 'dnd' ? { width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%' } : item.status === 'online' ? { width: '10px', height: '10px', backgroundColor: 'green', borderRadius: '50%' } : item.status === 'idle' ? { width: '10px', height: '10px', backgroundColor: 'yellow', borderRadius: '50%' } : {}} />
                            <span>{item ? item.username : ''}</span>
                        </div>
                    ))}
                </div>
            </div>
        </DivContaty>
    );

}