
export const ItemDetail = ({product}) => {
  return (
    <div className="itemdetailcontainer">
        <img src={product.image} width={500} alt="" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>

    </div>
  )
}
export default ItemDetail
