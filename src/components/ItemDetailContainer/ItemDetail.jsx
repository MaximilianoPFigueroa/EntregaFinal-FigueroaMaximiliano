import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  const [currentImage, setCurrentImage] = useState(product.image[0])
  const images = product.image.filter((image) => image !== currentImage)


  return (
    <div className="itemdetailcontainer">
      <div>
        {
          images.map((image) => (
            <img src={image} key={image} onClick={() => setCurrentImage(image)} />
          ))
        }
      </div>
      <div>
        <img src={currentImage} width={500} alt="" />
      </div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {
        hideItemCount === true ? (
          <Link to="/cart">Ver carrito</Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )
      }

    </div>
  )
}
export default ItemDetail
