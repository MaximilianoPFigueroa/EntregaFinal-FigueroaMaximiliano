import CartWidget from "./CartWidget"
import logo from "../../assets/logo.jpg"
import "./navbar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/"className="brand">
                <img src={logo} alt="" width={100} />
            </Link>
            <ul className="categorias">
                <li className="lista">
                    <Link to="/category/camperas"> Camperas</Link>
                </li>
                <li className="lista">
                    <Link to="/category/gorras"> Gorras</Link>
                </li>
                <li className="lista">
                    <Link to="/category/zapatillas"> Zapatillas</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}
export default NavBar