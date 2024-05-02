import React, { useReducer, useState, useEffect } from "react";
import axios from "axios"

const api = axios.create({
    baseURL: "https://api.mercadopago.com"
});
api.interceptors.request.use(async config => {
    const token = 'APP_USR-2413292706350510-090223-a21b179fe6616db02ed061c668219aec-784915472'
    config.headers.Authorization = `Bearer ${token}`
    return config
});

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}




export const Payment = ({ Data }) => {
    const [formData, setFormdata] = useReducer(formReducer, {})
    const [Qrcode, SetQrcode] = useState(null)
    const [linkBuyMercadoPago, setLinkBuyMercadoPago] = useState(false)
    const [responsePayment, setResponsePayment] = useState(false)
    const [Qr_codeCopy, SetQr_codeCopy] = useState(false)

    const handleChange = event => {
        setFormdata({
            name: event.target.name,
            value: event.target.value
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
            'X-Idempotency-Key': 'HlOkT7ZrwhWgavhrwoumMppyjtlVhMzF',
            'Authorization': 'Bearer APP_USR-2413292706350510-090223-a21b179fe6616db02ed061c668219aec-784915472'
        };

        const body = {
            "transaction_amount": 0.1,
            "description": "Produto teste de desenvolvimento",
            "payment_method_id": "pix",
            "external_reference": "MP0001",
            "payer": {
                "email": "gerson@gmail.com",
                "first_name": "Gerson Dev",
                "last_name": "JS python html",
                "identification": {
                    "type": "CPF",
                    "number": "01234567890"
                }
            },
            "notification_url": "https://eorpjcvcjvhqnq6.m.pipedream.net"
        };


        await api.post("v1/payments", body, { headers }).then(response => {
            console.log("response", response)
            // const qr_codeCopy = response.data.point_of_interaction.transaction_data.qr_code
            // const qr_code_base64 = response.data.point_of_interaction.transaction_data.qr_code_base64
            // const qr_codeURL = `data:image/png;base64, ${qr_code_base64}`

            // SetQr_codeCopy(qr_codeCopy)
            // SetQrcode(qr_codeURL)
            // setResponsePayment(response)
            // setLinkBuyMercadoPago(response.data.point_of_interaction.transaction_data.ticket_url)
        }).catch(err => {
            alert(err)
        })
    }
    const ClearInput = () => {
        SetQrcode(null)
        setLinkBuyMercadoPago(null)
    }

    return (
        <div className="relative flex w-[100vw] h-[20rem]">
            <div className="flex relative justify-center items-center left-[50%] flex-coll">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>E-mail</label>
                        <input onChange={handleChange} name="email" className="relative m-[1rem]" />
                    </div>

                    <div>
                        <label>Nome</label>
                        <input onChange={handleChange} name="nome" className="relative m-[1rem]" />
                    </div>

                    <div>
                        <label>CPF</label>
                        <input onChange={handleChange} name="cpf" className="relative m-[1rem]" />
                    </div>

                    <div>
                        <button type="submit">Pagar</button>
                    </div>
                </form>

                <button onClick={ClearInput}>Limpar</button>

                {Qrcode ? (
                    <>
                        <img src={Qrcode} alt="qrcode" className="relative m-[4rem] w-[10rem] h-[10rem]" />
                        {/* <input value={}/> */}
                    </>
                ) : null}

                {linkBuyMercadoPago ? (
                    <iframe src={linkBuyMercadoPago} width="400px" height="620px" title="link_buy" />
                ) : null}

                {/* {Qr_codeCopy ? (
              <input type='text' value={Qr_codeCopy} />
            ) : null} */}
            </div>
        </div>
    );

}