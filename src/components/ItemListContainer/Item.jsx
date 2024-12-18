import { Link } from "react-router-dom"

const Item = ({product}  ) => {
  return (
    <div className="item">
        <img src={product.image[0]} alt=""  width={100}/>
        <p>{product.name}</p>
        <p>Precio: {product.price}</p>
        <Link to={"/detail/"+product.id } > Ver detalles</Link>
    </div>
  )
}

export default Item