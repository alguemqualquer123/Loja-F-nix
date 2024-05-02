import { DivNewToken } from "../../css/NewToken";
import { useState } from "react";
import { api } from "../../config.js";


const ScriptOptions = [
    {
        label: "Selecione",
        name: "Selecione"
    },
    {
        label: "songfy",
        name: "songfy"
    },
]

export const NewToken = () => {
    const [GetNick, SetNick] = useState('');
    const [GetDiscordId, SetDiscordId] = useState('');
    const [GetIp, SetIp] = useState('');
    const [GetScript, SetScript] = useState('');
    const [GetDate, SetDate] = useState('');
    const [InputScript, SetInputScript] = useState('');

    const ChangeInputValue = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'nick':
                SetNick(value);
                break;
            case 'discordId':
                SetDiscordId(value);
                break;
            case 'ip':
                SetIp(value);
                break;
            case 'script':

                SetScript(value);
                break;
            case 'date':
                SetDate(value);
                break;
            default:
                break;
        }
    };

    async function SendNewToken(e) {
        e.preventDefault();
        try {
            await api.post('/SendNewToken', {
                name: GetNick,
                discord_id: GetDiscordId,
                ip_authorization: GetIp,
                script: GetScript,
                date: GetDate,
            }).then((response) => {
                alert('Novo token Inserido')
                console.log('Novo token Inserido', response)
            });
            SetNick('');
            SetDiscordId('');
            SetIp('');
            SetScript('');
            SetDate('');
        } catch (error) {
            console.log('Erro ao enviar token:', error);
        }
    };
    const NewInputScript = (e) => {
        SetScript(e.target.value);
    }
    return (
        <DivNewToken>
            <div>
                <form className="form">
                    <p className="title">Registrar nova licença </p>
                    <p className="message">Informe os dados abaixo. </p>
                    <div className="flex">
                        <label>
                            <input
                                placeholder=""
                                type="text"
                                className="input"
                                id="nick"
                                value={GetNick}
                                onChange={ChangeInputValue}
                            />
                            <span>Nick</span>
                        </label>

                        <label>
                            <input
                                placeholder=""
                                type="number"
                                className="input"
                                id="discordId"
                                value={GetDiscordId}
                                onChange={ChangeInputValue}
                            />
                            <span>Discord_id</span>
                        </label>
                    </div>

                    <label>
                        <input
                            placeholder=""
                            type="text"
                            className="input"
                            id="ip"
                            value={GetIp}
                            onChange={ChangeInputValue}
                        />
                        <span>IP DE AUTORIZAÇÃO</span>
                    </label>

                    <select name="type" id="type" value={GetScript} onChange={NewInputScript}>
                        {ScriptOptions.map((data, key) => (
                            <option value={data.label} key={key} >{data.name}</option>
                        ))}
                    </select>
                    {/* <label>
                        <input placeholder="" type="text" className="input" id="script" value={GetScript} onChange={ChangeInputValue} />
                        <span>SCRIPT</span>
                    </label> */}
                    <label>
                        <input
                            placeholder=""
                            type="date"
                            className="input"
                            id="date"
                            value={GetDate}
                            onChange={ChangeInputValue}
                        />
                        <span>DATA DE TERMINO</span>
                    </label>
                    <button className="submit" onClick={SendNewToken}>
                        REGISTRAR
                    </button>
                </form>
            </div>
        </DivNewToken>
    );
};
