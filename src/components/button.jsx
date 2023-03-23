import { NavLink } from "react-router-dom"
export default function Bouton({ label, path }) {
    return (
        <>
        <NavLink to ={path}>
        <button
            className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
        >
            {label}
        </button>
        </NavLink>
        </>
    )
}