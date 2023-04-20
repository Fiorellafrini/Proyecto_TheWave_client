import React from "react";
import styles from "../ShoppingCartCard/ShoppingCartCard.module.css";

import { useState } from "react";

const ShoppingCartCard = ({ name, size, price, imagen }) => {

  const [imageSrc] = useState(imagen[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;
  
  return (
    <div className={styles.containerCardShopping}>
      <img src={imageSrc} alt="" />
      <div className={styles.containerInfo}>
        <h1>{name}</h1>
        <h2>talle-{size}</h2>
        <h2>${totalPrice}</h2>
      </div>
      <div>
        <div className={styles.buttons}>
          <button onClick={handleIncrement}>+</button>
          <p>{quantity}</p>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
