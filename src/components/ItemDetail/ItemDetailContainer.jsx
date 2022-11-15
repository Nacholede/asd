import { useState, useEffect } from "react";
import { getSingleItem } from "../../asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProduct] = useState([]);
  const { idItem } = useParams();
  console.log(useParams());

  async function getItemsAsync() {
    let respuesta = await getSingleItem(idItem);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail productos={producto} />;
}
export default ItemDetailContainer;