import { iconecasa, iconeForm } from "./icons/index";
import { iconeAjuste } from "./icons/index"
import { iconeFile } from "./icons/index";
import MenuItem from "./MenuItem"

export default function MenuLateral(){
    return (
        <aside>
            <div className={`bg-gradient-to-r from-indigo-500 to-purple-300 h-20 w-20`}>
                
            </div>
            <ul>
                <MenuItem url="Inicio" texto= "Inicio" icone= {iconecasa} /> 
                <MenuItem url="Ajustes" texto="Ajustes" icone={iconeAjuste} />
                <MenuItem url="Pagina" texto="Página" icone={iconeFile}/>
                <MenuItem url="Formulario" texto="Formulario" icone={iconeForm}/>
            </ul>
           
        </aside>
    )
}