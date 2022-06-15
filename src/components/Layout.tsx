import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps{
    titulo: String
    subtitulo: String
    children?: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`flex h-screen w-screen`}>
            <MenuLateral/>
            <div className={`flex flex-col w-full bg-gray-200 p-7`}>
                <Cabecalho titulo={props.titulo}
                subtitulo={props.subtitulo}/>
            <Conteudo>
                {props.children}
            </Conteudo>
            </div>
        </div>
    )
}