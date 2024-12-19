import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalPrice, deleteProductInCar, deleteCart } = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div>
                <h2>Carrito vacío </h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Productos agregados en el carrito</h1>
            {
                cart.map((productCart) => (
                    <div key={productCart.id}>
                        <img src={productCart.image[0]} width={100} alt="" />
                        <p>
                            {productCart.name}
                        </p>
                        <p>
                            Precio c/u: {productCart.price}
                        </p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>
                            Precio total del producto: ${productCart.price * productCart.quantity}
                        </p>
                        <button onClick={() => deleteProductInCar(productCart.id)}>Borrar producto</button>
                    </div>
                ))
            }
            <div>
                <p>
                    Precio final: ${totalPrice()}
                </p>
                <button onClick={deleteCart}>Vaciar carrito</button>
                <Link to="/checkout"> Continuar con mi compra </Link>
            </div>
        </div>


    )

}
export default Cart