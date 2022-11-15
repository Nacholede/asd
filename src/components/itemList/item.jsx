import React from "react";
import MyButton from "../../MyButton/MyButton"
import ToggleButton  from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ juego, imagen, precio, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="card">
      <ToggleButton icon="♥" />
      <div className="card-img">
        <img src={imagen} alt={juego} />
      </div>
      <div className="card_detail">
        <h3>{juego}</h3>
        <h4 className="priceTag">$ {precio}</h4>
      </div>

      <Link to={urlDetail}>
        <MyButton>Ver más</MyButton>
      </Link>
    </div>
  );
}

export default Item;
