import React from "react";
import styles from "../ShoppingCartCard/ShoppingCartCard.module.css";

import { useState } from "react";

// const MAX_QUANTITY =10; //la activo cuando le quiero poner el mismo limite de sotck a todos los productos
const PRODUCT_LIMIT = {
  "Stand Up Paddle Board Vesl-3569": 5,
  "Stand Up Paddle Board Vesl-2507": 5,
  "Stand Up Paddle Board Vesl-1559": 5,
  "Stand Up Paddle Board Vesl-Hunter": 5,
  "Surfboard Russell-Hunter-Hunter v2": 5,
  "Surfboard Hurley-Geometry v1": 5,
  "Surfboard Hurley-Geometry v2": 5,
  "Surfboard Hurley-Geometry v3": 5,
  "Surfboard Wave-Freestyle v4": 5,
  "Surfboard Wave-Freestyle v1": 5,
  "Surfboard JOBE": 5,
  "Surfboard JOBE-Explorer": 5,
  "Surfboard Compact-a": 5,
  "WakeBoard SungShot-Blue": 5,
  "Billabong Womens Wetsuit - Black": 2,
  "Billabong Men's Storm Wetsuit - Black": 2,
  "Gill Zenlite Wetsuit - Blue": 2,
  "Orca Synergy Women's Wetsuit - Wild Blue": 2,
  "O'neill Men's Hammer 2mm Wetsuit - Slate / Black": 2,
  "O'neill Mens Atlanta 2mm Back Zip Wetsuit - Black-Blue": 2,
  "Diving Fins - Powerjet": 5,
  "Diving Fins World One 50": 5,
  "Diving fins Mundial One": 5,
  "Diving fins - Nude - Powerjet": 5,
};

const ShoppingCartCard = ({ name, size, price, imagen, setTotal }) => {
  const [imageSrc] = useState(imagen[0]);
  const [quantity, setQuantity] = useState(1);
  const [total, setProductTotal] = useState(price);
  // if(quantity < MAX_QUANTITY) //este es si quiero poner el mismo stock a todos

  const handleIncrement = () => {
    if (quantity < PRODUCT_LIMIT[name]) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1;
        const newTotal = newQuantity * price;
        setProductTotal(newTotal);
        setTotal(newTotal);
        return newQuantity;
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        const newTotal = newQuantity * price;

        setProductTotal(newTotal);

        setTotal(newTotal);
        return newQuantity;
      });
    }
  };


  // const handleRemove = () => {
  //   removeProduct(name);
  // };

  return (
    <div className={styles.containerCardShopping}>
      <img src={imageSrc} alt="" />
      <div className={styles.containerInfo}>
        <h1>{name}</h1>
        <h2>waist: {size}</h2>
        <h2>1 x ${price}</h2>
        {/* <h2>Total ${total}</h2> */}
      </div>
      <div>
        <div className={styles.buttons}>
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
        <h2>Total ${total}</h2>
        {/* <button onClick={handleRemove}>🗑</button>  */}
      </div>
    </div>
  );
};

export default ShoppingCartCard;
