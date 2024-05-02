import { DivAdminLoja } from "../../css/AdminLoja";
import { useState, useEffect } from "react";
import { api } from "../../config.js";
import deleteImage from "../../assets/deleteImage.png"



const TypeOptions = [
    {
        label: '0',
        name: 'Selecione',
    },
    {
        label: '1',
        name: 'Criptografado',
    },
    {
        label: '2',
        name: 'Open Source',
    },
]
export const AdminLoja = () => {
    const [CreateNewItem, SetCreateNewItem] = useState(false);
    const [PriceProduct, SetPriceProduct] = useState('');
    const [CategoryProduct, SetCategoryProduct] = useState('');
    const [TypeProduct, SetTypeProduct] = useState('');
    const [DescriptionProduct, SetDescriptionProduct] = useState('');
    const [StatusScript, SetStatusScript] = useState(false);
    const [CategoryScript, SetCategoryScript] = useState('');
    const [ValueScript, SetValueScript] = useState(0);
    const [NameProduct, SetNameProduct] = useState('');
    const [IdProduct, SetIdProduct] = useState('');
    const [imagem, setImagem] = useState(null);
    const [Items, SetItems] = useState([]);
    const [DataNewItens, SetDataNewItens] = useState({});
    const [SelectScriptData, SetSelectScriptData] = useState(null);
    const SetSelectScript = (Data) => {
        SetSelectScriptData(Data);
        const { id, name, product_id, category, type, descrsiption, src, value } = Data;
        SetDataNewItens(Data)
        SetPriceProduct(value)
        SetCategoryProduct(category)
        SetTypeProduct(SetTypeProduct[type])
        SetDescriptionProduct(descrsiption)
        SetNameProduct(name)
        console.log(product_id)
        // SetIdProduct(product_id)
        setImagem(src)
    }
    async function feachData() {
        try {
            await api.get('/GetScripts').then((response) => {
                SetItems(response.data);
            });
        } catch (error) {
            console.error("Erro ao obter scripts:", error);
        }
    }
    async function InsertNewScripts() {
        try {
            await api.post('/InsertNewScripts', { Data: DataNewItens }).then((response) => {
                console.log(response.data)
                SetItems(response.data);
            });
        } catch (error) {
            console.error("Erro ao obter scripts:", error);
        }
    }
    useEffect(() => {
        feachData()
    }, [])

    useEffect(() => {
        setTimeout(function () {
            feachData()
        }, 10000);
    }, [feachData])

    async function UpdateItem(Colum, value) {
        try {
            console.log(value)
            await api.post('/UpdateExistenteScripts', { Colum: Colum, newvalue: value, product_id: SelectScriptData.product_id }).then((response) => {
                console.log('item atualizado', response.data)
                SetDataNewItens(response.data)
                return true;
            });
        } catch (error) {
            console.log(error)
        }
    }
    const InputNameProduct = (e) => {
        const value = e.target.value;
        SetNameProduct(value);
        UpdateItem('name', value);
    }
    const InputCategoryProduct = (e) => {
        const value = e.target.value;
        SetCategoryProduct(value);
        UpdateItem('category', value);
    }
    const InputDescriptionProduct = (e) => {
        const value = e.target.value;
        SetDescriptionProduct(value);
        UpdateItem('description', value);
    }
    const InputPriceProduct = (e) => {
        const value = e.target.value;
        SetPriceProduct(value);
        UpdateItem('value', value);
    }
    const InputTypeProduct = (e) => {
        const value = e.target.value;
        console.log(value);
        SetTypeProduct(value);
        UpdateItem('type', value);
    }
    const handleImagemChange = (event) => {
        const arquivo = event.target.files[0];
        setImagem(arquivo);
    };

    const ClearInputs = () => {
        SetSelectScriptData({})
        SetDescriptionProduct('')
        SetNameProduct('')
        SetCategoryProduct('')
        SetPriceProduct('')
        SetTypeProduct('')
        setImagem('')
    }
    async function SetCreateNewProduct() {
        const NewProduct = {
            description: DescriptionProduct,
            name: NameProduct,
            category: CategoryProduct,
            value: PriceProduct,
            type: TypeProduct,
            src: Imagem,
        }
        await api.post('/CreateNewItem', { Data: NewProduct }).then((response) => {
            if (response.status === 200) {
                SetItems(response.data);
            } else {
                return
            }
        })
    }
    async function DelitItem(){
        await api.post('/DeleteItem', { Data: SelectScriptData }).then((response) => {
            if (response.status === 200) {
                SetItems(response.data);
                ClearInputs()
                SetSelectScriptData(null)
            } else {
                return
            }
        })
    }

    return (
        <DivAdminLoja>
            <div className="ListScripts">
                <div className="CardOptions w-full h-full bg-gray-0">
                    <div className="ListProducts flex relative left-[0%] top-[5%] justify-center items-center w-[100%] h-[56rem] bg-red-0">
                        {Items ? (
                            Items.map((item, key) => (
                                <div id="Itens-Product" key={key} onClick={() => { SetSelectScript(item) }} draggable={true}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={item.src} alt="" />
                                        </div>
                                        <p className="card-title">{item.name}</p>
                                        <p className="card-body">Categoria: {item.category}</p>
                                        <p className="card-body">Tipo: {item.type}</p>
                                        <p className="card-body">Valor: {item.value}</p>
                                        <p className="footer"><span className="by-name">{item.description}</span></p>
                                    </div>
                                </div>
                            ))
                        ) : null}

                    </div>
                </div>
                <div className="EditItens">
                    <div className="ResumCart">

                        {SelectScriptData ? ( <img  src={deleteImage} onClick={DelitItem} className="w-[1rem] h-[1rem] cursor-pointer" /> ) : null}
                        <div className="form-container">
                            <div className="Input-Image flex justify-center items-center flex-row" >
                                {/* <button type="submit" className="form-submit-btn">Submit</button> */}
                                {!imagem ? (<input name="file-image" id="file-image" type="file" accept="image/*" onChange={handleImagemChange} />) : <></>}
                                {imagem && (
                                    <>
                                        {/* <img src={deleteImage} alt="Delete Imagem" id="deleteImage" value={URL.createObjectURL(imagem)} onClick={() => { setImagem(null) }} /> */}
                                        <div id="Input-Image">
                                            <img src={imagem} alt="Imagem Selecionada" />
                                        </div>
                                    </>
                                )}
                            </div>
                            <form className="form">
                                <div className="form-group">
                                    <label htmlFor="text">Nome Do Produto  | ID {IdProduct} </label>
                                    <input required="" name="text" id="text" type="text" value={NameProduct} onChange={InputNameProduct} />
                                    <label htmlFor="number">Valor Do Produto</label>
                                    <input name="number" id="number" type="text" value={PriceProduct} onChange={InputPriceProduct} />
                                    <label htmlFor="text">Categoria Do Produto</label>
                                    <input name="text" id="text" type="text" value={CategoryProduct} onChange={InputCategoryProduct} />
                                    <label htmlFor="text">Tipo Do Produto</label>
                                    {/* <input name="text" id="text" type="text" onChange={InputTypeProduct} /> */}
                                    <select name="type" id="type" value={TypeProduct} onChange={InputTypeProduct}>
                                        {TypeOptions.map((data, key) => (
                                            <option value={data.label} key={key}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textarea">Descrição Do Produto</label>
                                    <textarea required="" cols="20" rows="5" id="textarea" value={DescriptionProduct} onChange={InputDescriptionProduct} name="textarea"></textarea>
                                </div>
                                {/* <div className="ClearInputs">
                                    <a onClick={ClearInputs}>Limpar</a>
                                    <a onClick={SetCreateNewProduct}>Criar</a>
                                </div> */}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </DivAdminLoja>
    );
};
