import { Url } from "url"
import Link from "../../node_modules/next/link"

interface MenuItemProps{
    url: Url
    texto: String
    icone: any

}

export default function MenuItem(props: MenuItemProps){
    return (
        <li className={`hover:bg-gray-200`}>
            <Link href={props.url}>
                <a className={`flex flex-col justify-center items-center w-20 h-20`}>
                    {props.icone}
                    <span className={`text-gray-600 font-light text-xs`}>
                        {props.texto}
                    </span>
                </a>
            </Link>
        </li>
    )
}