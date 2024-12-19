import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../db/db.js"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategory } = useParams()

    const getProducts = () => {
        const collectionName = collection(db, "productos")
        getDocs(collectionName)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })
                setProducts(productsDb)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
                console.log("Finalizo la promesa")
            })
    }

    const getProductsByCategory = () => {
        const collectionName = collection(db, "productos")
        const q = query(collectionName, where("category", "==", idCategory))
        getDocs(q)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })
                setProducts(productsDb)
            })
    }

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory()
        } else {
            getProducts()
        }
    }, [idCategory])
    return { products }
}
export default useProducts