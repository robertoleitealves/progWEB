import Layout from "../components/Layout";


export default function Arquivo(){
    return(
        <Layout titulo="Sobre" subtitulo = "Trabalho WEB">
            <h3> Autor: Roberto Leite Alves</h3>
            <div className="hidden  md:block md: w-1/2 lg:w-2/3">
                <img src="../components/beach-ge30f9525b_640.jpg" className="w-full h-screen"
                     alt="Imagem"/>
            </div>
        </Layout>
    )
}