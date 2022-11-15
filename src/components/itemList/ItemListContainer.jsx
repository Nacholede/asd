import { useState, useEffect } from "react";

import Item from "./item";

import getItems from "../../asyncmock";

import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="item-list">
      {products.map((productos) => {
        return (
          <Item
            key={productos.id}
            id={productos.id}
            imgurl={productos.imagen}
            title={productos.titulo}
            price={productos.precio}
            category={productos.categoria}
            color="red"
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;