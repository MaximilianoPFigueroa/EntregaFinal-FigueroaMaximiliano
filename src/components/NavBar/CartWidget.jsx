import { FaCartShopping } from "react-icons/fa6";

const CartWidget = ()=> {
    return (
        <div className="cartwidget"> 
            <FaCartShopping size={50} color="red" />
            <p>0</p>
        </div>
    )
}
export default CartWidget