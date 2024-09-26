import CartWidget from "./CartWidget"
import logo from "../../assets/logo.jpg"
import "./navbar.scss"

const NavBar =() =>{
    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logo} alt="" width={100}/>
            </div>
            <ul className="categorias">
                <li className="lista">
                    Camperas
                </li>
                <li className="lista">
                    Gorras
                </li>
                <li className="lista">
                    Zapatillas
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}
export default NavBar