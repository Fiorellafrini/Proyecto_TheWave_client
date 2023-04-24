import styles from "../ShoppingCartCard/ShoppingCartCard.module.css";
import {
  incrementQuantity,
  decrementQuantity,
  updateStockDecrement,
  updateStockIncrement,
} from "../../redux/actions";
import { useDispatch } from "react-redux";

import { useState } from "react";

const ShoppingCartCard = ({ id, name, size, price, imagen, quantity }) => {
  const [imageSrc] = useState(imagen[0]);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
    dispatch(updateStockDecrement(id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
    if (quantity > 1) {
      dispatch(updateStockIncrement(id));
    }
  };

  const priceQuantity = price * quantity;
  
  return (
    <div className={styles.containerCardShopping}>
      <img src={imageSrc} alt="" />
      <div className={styles.containerInfo}>
        <h1>{name}</h1>
        <h2>talle-{size}</h2>
        <h2>{priceQuantity}</h2>
      </div>
      <div>
        <div className={styles.buttons}>
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
