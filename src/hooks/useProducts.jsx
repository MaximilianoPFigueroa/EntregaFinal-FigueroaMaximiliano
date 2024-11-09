import { useState, useEffect } from "react"
import {getProducts} from "../data/data.js"
import { useParams } from "react-router-dom"
const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {idCategory} = useParams()


    useEffect(() => {

        setLoading(true)
        getProducts()
        .then((data) => {
            if(idCategory){
                const filterProducts = data.filter((product) => product.category === idCategory)
                setProducts(filterProducts)
            }else{
                setProducts(data)
            }
        })
        .catch((error)=> {
            console.error(error)
        })
        .finally(() => {
            //setLoading(false)
            console.log("Finalizo la promesa")
        })
    }, [idCategory])/*
            .then((data) => setProducts (data))
            .finally(() => setLoading(false))
    }*/
    return {products, loading}
}
export default useProducts