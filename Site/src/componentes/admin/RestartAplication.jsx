import { DivRestartAplication } from '../../css/RestartAplication';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../config.js";
export const RestartAplication = () => {
    const navigate = useNavigate()
    const [Password, SetPassword] = useState('')

    const ChangePassword = async (e) => {
        SetPassword(e.target.value)
    }
    const SendRestartAplication = async (e) => {
        e.preventDefault();
        navigate("/AdminLoja")
        alert('Aplicação Reiniciada')
        await api.post('/RestartAplication', { password: Password }).then((response) => {
            SetPassword('')
            if (response.status === 200) {
            }
        })
    }
    return (
        <>
            <DivRestartAplication>
                <div className="form-container">
                    <div className="logo-container">
                        Reiniciar Aplicação
                    </div>
                    <form className="form">
                        <div className="form-group">
                        <label htmlFor="password">Confirme sua senha</label>
                            <input type="password" id="password" name="password" placeholder="password from restart" onChange={ChangePassword} />
                        </div>
                        <button className="form-submit-btn" type="submit" href="#" onClick={SendRestartAplication}>RESTART</button>
                    </form>
                </div>
            </DivRestartAplication>
        </>

    )
}