import { useState } from "react";
import Link from "../../node_modules/next/link";
import AutInput from "../components/AutInput";
import MenuItem from "../components/MenuItem";
import MenuLateral from "../components/MenuLateral";

function submeter(){
  return(
    <div>
      <ul>
        <Link href={"Inicio"} > </Link>
      </ul>
    </div>
  )       
}


export default function Autenticacao(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="hidden  md:block md: w-1/2 lg:w-2/3">
                <img src="http://source.unsplash.com/random" className="w-full h-screen"
                     alt="Imagem da tela de autenticação"/>
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3" >
                <AutInput 
                    label="Email"
                    tipo = "text"
                    valor = {email}
                    valorMudou = {setEmail}
                />
                <AutInput 
                    label = "Senha"
                    tipo = "password"
                    valor = {senha}
                    valorMudou = {setSenha}
                />
                <button onClick = {submeter} className ={`w-full bg-indigo-200 hover:bg-indigo-400 
                                                    text-white rounded-lg px-4 mt-6`} >
                    Entrar
                </button>
                </div>
            </div>
    )
}