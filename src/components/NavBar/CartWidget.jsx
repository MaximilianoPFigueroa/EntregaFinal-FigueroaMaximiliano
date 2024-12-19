import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    const total = totalQuantity()
    return (
        <Link to="/cart" className="cartwidget">
            <FaCartShopping size={50} color="red" />
            <p>{total >= 1 && total}</p>
        </Link>
    )
}
export default CartWidget