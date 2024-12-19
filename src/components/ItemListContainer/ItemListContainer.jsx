import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"
import useProducts from "../../hooks/useProducts.jsx"
import Loading from "../Loading/Loading.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ products }) => {

    return (
        <div className="itemlistcontainer">

            <ItemList products={products} />
        </div>
    )
}
const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)
export default ItemListContainerWithHoc