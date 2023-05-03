import styles from "../ShoppingCartCard/ShoppingCartCard.module.css";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";

import { useState } from "react";

const ShoppingCartCard = ({
  id,
  name,
  size,
  price,
  imagen,
  quantity,
  onDelete,
}) => {
  const [imageSrc] = useState(imagen[0]);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  const priceQuantity = price * quantity;

  return (
    <div className={styles.containerCardShopping}>
      <img src={imageSrc} alt="" />
      <div className={styles.containerInfo}>
        <h1>{name}</h1>
        <h2>Size - {size}</h2>
        <h2>{priceQuantity}</h2>
      </div>
      <div className={styles.option}>
        <div className={styles.delete}>
          <button onClick={onDelete}>
            <ImBin />
          </button>
        </div>
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
