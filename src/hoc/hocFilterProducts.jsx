import useProducts from "../hooks/useProducts"
import { useState } from "react"

const hocFilterProducts = (Component) => {


    return function () {
        const { products } = useProducts()
        const [query, setQuery] = useState("")
        const [typeOrder, setTypeOrder] = useState("")

        const changeInput = (event) => {
            setQuery(event.target.value.toLowerCase())
        }

        const search = () => {
            let filterProducts = products.filter((product) => (
                product["name"].toLowerCase().includes(query)
            ))
            if (typeOrder === "minor") {
                filterProducts = filterProducts.sort((preProduct, nextProduct) => {
                    return preProduct.price - nextProduct.price
                })
            } else if (typeOrder === "mayor") {
                filterProducts = filterProducts.sort((preProduct, nextProduct) => {
                    return nextProduct.price - preProduct.price
                })
            }

            return filterProducts
        }

        return (
            <>
                <div>
                    <input type="text" placeholder="buscar..." onChange={changeInput} />
                    <button onClick={() => setTypeOrder("minor")}>
                        Menor precio
                    </button>
                    <button onClick={() => setTypeOrder("mayor")}>
                        Mayor precio
                    </button>
                </div>
                <Component products={search()} />

            </>
        )

    }
}
export default hocFilterProducts