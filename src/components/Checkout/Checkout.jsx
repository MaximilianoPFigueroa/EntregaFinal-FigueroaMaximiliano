import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        repeatEmail: ""
    })

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }
    const handleSubmitForm = (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        if (dataForm.email === dataForm.repeatEmail) {
            uploadOrder(order)
        } else {
            toast.error("Los emails deben coincidir")
        }
    }
    const uploadOrder = (newOrder) => {
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, newOrder)
            .then((response) => {
                setOrderId(response.id)
            })
            .finally(() => {
                toast.success("Felicitaciones, ha realizado una gran compra, muchas gracias!")
                deleteCart()
            })
    }


    return (
        <div>
            {
                orderId ? (
                    <div>
                        <h2>Orden enviada correctamente</h2>
                        <p>Adjunte su Número de orden para tener el seguimiento de su compra : {orderId}</p>
                        <Link to="/">Ir a inicio del sitio</Link>
                    </div>
                ) : (

                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                )
            }
        </div>
    )
}

export default Checkout