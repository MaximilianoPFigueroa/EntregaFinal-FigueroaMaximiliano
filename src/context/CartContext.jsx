import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //funcion para agregas productos al carrito
    const addProductInCart = (newProduct) => {
        const condicion = isInCart(newProduct.id)
        if(condicion){
            const newCart = cart.map((productCart)=>{
                if(productCart.id === newProduct.id) {
                    const newQuantity = productCart.quantity + newProduct.quantity
                    if(newQuantity > newProduct.stock){
                        return productCart
                    } else{
                        return {...productCart, quantity: newQuantity}
                    }
                }else {
                    return productCart
                }
            })
            setCart(newCart)
            }else{
            setCart([...cart, newProduct])
        }
    }

    //funcion para detectar productos duplicados
    const isInCart = (idProduct) => {
        return cart.some((productCart) => productCart.id === idProduct)
    }
    //funcion para eliminar un producto del carrito por su ID
    const deleteProductInCar= (idProduct) =>{
        const productsFilter = cart.filter((productCart) =>
            productCart.id !==idProduct)
        setCart(productsFilter)
    }
    //funcion para calcular la cant total de productos
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    //funcion para calcular el precio total de la compra
    const totalPrice = () =>{
        const price = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity),0)
        return price
    }

    //funcion para vaciar el carrito
    const deleteCart= () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCar, deleteCart }}>
            {children}
        </CartContext.Provider>
    )

}
export { CartContext, CartProvider }