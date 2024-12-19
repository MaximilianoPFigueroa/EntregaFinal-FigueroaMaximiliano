import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [hideItemCount, setHideItemCount] = useState(false)
  const [loading, setLoading] = useState(true)
  const { addProductInCart } = useContext(CartContext)
  const { idProduct } = useParams()

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    addProductInCart(productCart)
    setHideItemCount(true)
  }

  const getProduct = () => {
    const docRef = doc(db, "productos", idProduct)
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    getProduct()
  }, [idProduct])

  return (
    <>
      {
        loading ? <div>Cargando...</div> : <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
      }
    </>
  )
}

export default ItemDetailContainer