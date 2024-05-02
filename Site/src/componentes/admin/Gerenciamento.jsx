import { DivGerenciamento, EditingToken, CardClient } from "../../css/Gerenciamento.ts";
import userJpg from "../../assets/user.jpg"
import logoPng from "../../assets/logo.png"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import keyPng from "../../assets/key.png"
import { api } from "../../config.js"
import { user } from "../../auth/getCookies.js"

export const Gerenciamento = () => {
    const location = useLocation()
    const { pathname, search, hash } = location;
    const [ShowEditing, SetShowEditing] = useState(false)
    const [GenrencyTokens, SetGenrencyTokens] = useState([])
    const [TokenEdit, SetTokenEdit] = useState(true)
    const [Validar, SetValidar] = useState(null)
    useEffect(() => {
        if (pathname !== '/Painel') {
            SetShowEditing(false);
            SetTokenEdit(true)
        }
    }, [])
    const [CardsInfo, SetCardsInfo] = useState({
        avatar: '',
        banner: '',
        banner_color: '',
        global_name: '',
        username: '',
    })
    const [GetDataInfos, SetDataInfos] = useState([]);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        SetDataInfos((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };



    async function feachData() {
        try {
            await api.get('/GetTokens').then((response) => {
                SetGenrencyTokens(response.data);
            });
        } catch (error) {
            console.error("Erro ao obter tokens:", error);
        }
    }
    useEffect(() => {
        feachData();
    }, [])
    const SetInfosEditing = async (Data1) => {
        await api.post('/userinfo', { userId: Data1.discord_id }).then((data) => {
            SetDataInfos(Data1);
            SetValidar(Data1.authorized)
            SetShowEditing(true);
            const infos = data.data;
            const { banner_color, global_name, username } = infos;
            let avatar = `https://cdn.discordapp.com/avatars/${infos.id}/${infos.avatar}`;
            let banner = `https://cdn.discordapp.com/banners/${infos.id}/${infos.banner}`;
            if (!infos.id) {
                avatar = `https://cdn.discordapp.com/attachments/1145697791096655974/1179516790011859035/user.jpg`;
                banner = `https://cdn.discordapp.com/attachments/1145697791096655974/1179516790011859035/user.jpg`;
            }
            SetCardsInfo({
                avatar: avatar,
                banner: banner,
                banner_color: banner_color,
                global_name: global_name,
                username: username,
            });

        })

    };
    const SaveTokenEdit = async () => {
        try {
            await api.post("/SaveEditToken", { Data: GetDataInfos }).then((response) => {
                console.log(response.data)
                SetGenrencyTokens(response.data)
                SetTokenEdit(true);
            });
        } catch (error) {
            throw error;
        }
    };
    const DeletTokenEdit = async () => {
        try {
            await api.post("/DeletToken", { Data: GetDataInfos }).then((response) => {
                SetGenrencyTokens(response.data)
                SetTokenEdit(true);
            });
        } catch (error) {
            throw error;
        }
    };

    const SendAuthorization = async () => {
        await api.post('/ValidAuthorization', { authorized: Validar, discord_id: GetDataInfos.discord_id, token: GetDataInfos.token }).then((response) => {
            if (response.status === 200) {
                feachData();
                SetDataInfos({ authorized: Validar })
                return true;
            } else {
                return false;
            }
        })
    }
    console.log('GenrencyTokens', GenrencyTokens)
    return (
        <>
            <DivGerenciamento>
                <div className="TokensPage">
                    <div className="ListTokens">
                        {GenrencyTokens && GenrencyTokens.length >= 1 ? (
                            GenrencyTokens.map((Itens, key) => (
                                <div className="Itens" key={key} onClick={() => { SetDataInfos(Itens); SetInfosEditing(Itens); }}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={keyPng} alt="" />
                                        </div>
                                        <p className="card-title">{Itens.name}</p>
                                        <p className="card-body">Cliente: {Itens.cliente}</p>
                                        <p className="card-body">ID: {Itens.discord_id}</p>
                                        <p className="card-body">IP: {Itens.ip_authorization}</p>
                                        <p className="card-body" style={Itens.authorized ? { color: 'green' } : { color: 'red' }}>{Itens.authorized ? "Authenticado" : 'Não Authenticado'}</p>
                                        <p className="footer"><span className="by-name">{Itens.description}</span></p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white w-[20rem] h-[1.5rem] redonded-full">
                                <div style={{ position: 'relative', display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                    <span>Não existem Tokens Registrados !!</span>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                {ShowEditing ? (
                    <>
                        <EditingToken className="EditingToken">
                            <div className="bg">
                                <div>
                                    <div className="btn-group">
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" id="editar" onClick={() => { SetTokenEdit(!TokenEdit) }}>Editar</a>
                                            {!TokenEdit ? <a className="dropdown-item" id="salvar" onClick={SaveTokenEdit}>Salvar</a> : null}
                                            <a className="dropdown-item" id="salvar" onClick={() => { SetValidar(!GetDataInfos.authorized), SendAuthorization(!GetDataInfos.authorized) }} style={!GetDataInfos.authorized ? { background: 'green' } : { background: 'red', width: '6rem' }}>{!GetDataInfos.authorized ? 'Validar' : 'Invalidar'}</a>
                                            {!TokenEdit ? <a className="dropdown-item " id="deletar" onClick={DeletTokenEdit}>Deletar</a> : null}
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <a style={{ color: 'yellow' }}>{GetDataInfos.name}</a>
                                                <input type="text" className="form-control" id="cliente" placeholder="#srvinix" value={GetDataInfos.cliente} style={{ color: 'white' }} disabled={true} onChange={handleInputChange} />
                                                <input type="text" className="form-control" id="ip_authorization" placeholder='ip_authorization' value={GetDataInfos.ip_authorization} style={{ color: 'white' }} disabled={TokenEdit} onChange={handleInputChange} />
                                                <input type="text" className="form-control" id="discord_id" placeholder='discord_id' value={GetDataInfos.discord_id} style={{ color: 'white' }} disabled={TokenEdit} onChange={handleInputChange} />
                                                <input type="token" className="form-control" id="token" placeholder="Token" style={{ color: 'white' }} value={GetDataInfos.token} disabled={TokenEdit} onChange={handleInputChange} />
                                                <input type="text" className="form-control" id="password" placeholder="Password" style={GetDataInfos.authorized ? { color: 'green' } : { color: 'red' }} value={GetDataInfos.authorized ? 'Authorized' : "Unauthorized"} disabled={true} onChange={handleInputChange} />
                                                <input type="text" className="form-control" id="date" value={GetDataInfos.date} style={{ color: 'white' }} disabled={TokenEdit} onChange={handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </EditingToken>
                        <CardClient >
                            <div className="card">
                                <div className="card-banner">
                                    <img src={CardsInfo ? CardsInfo.banner : ''} />
                                    <div className="card-user">
                                        <img src={CardsInfo ? CardsInfo.avatar : ''} />
                                        <div className="card__title">{CardsInfo ? CardsInfo.global_name : ''}</div>
                                        <div className="card__subtitle">{CardsInfo ? CardsInfo.username : ''}</div>
                                    </div>
                                </div>
                            </div>
                        </CardClient>
                    </>
                ) : <></>}
            </DivGerenciamento>
        </>
    )
}