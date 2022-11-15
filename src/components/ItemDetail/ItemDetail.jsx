import "./Itemdetail.css"

function ItemDetail({ producto }) {
  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={producto.imagen} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{producto.juego}</h2>
        <p>{producto.descripcion}</p>
        <h4 className="priceTag">$ {producto.precio}</h4>
      </div>
    </div>
  );
}

export default ItemDetail;