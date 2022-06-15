import { useState } from "react";
import AutoInput from "../components/AutoForm";
import Layout from "../components/Layout";


    export default function CadastroProd(){
    const [produto, setProduto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [qtde, setQtde] = useState("");
    return(
        <div className="flex items-center justify-center">
            <Layout titulo="Formulario" subtitulo = "Cadastro de Produto">
            <div className="m-10 hidden  md:block md: w-1/2 lg:w-2/3" >
                <form>
                <AutoInput 
                    label="Produto"
                    tipo = "produto"
                    valor = {produto}
                    valorMudou = {setProduto}
                />
                <AutoInput 
                    label = "Descrição"
                    tipo = "descricao"
                    valor = {descricao}
                    valorMudou = {setDescricao}
                />
                <AutoInput 
                    label = "Quantidade"
                    tipo = "qtde"
                    valor = {qtde}
                    valorMudou = {setQtde}
                />
                </form>
            </div>
            </Layout>
        </div>

        )
    }