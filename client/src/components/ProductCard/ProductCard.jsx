import React, { useState } from "react";
import durability from "../../assets/durability.png";
import styles from "../ProductCard/ProductCard.module.css";
import hurleyCard from "../../assets/hurleyCard.png";
import { Link } from "react-router-dom";
import {
  addToFav,
  deleteToFav,
  addToCart,
  deleteToCart,
} from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductCard = ({
  name,
  size,
  price,
  imagen,
  id,
  deletePropInFav = true,
}) => {
  const [imageSrc] = useState(imagen[0]);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const fav = useSelector((state) => state.products.favorites);
  const [isSelected, setIsSelected] = useState(false);

  // const detalle = useSelector((state) => state.products.detail);

  const handleFav = () => {
    const product = { name, size, price, imagen, id };
    if (isFav === false) {
      dispatch(addToFav(product));
      setIsFav(true);
    } else if (isFav === true) {
      dispatch(deleteToFav(product));
      setIsFav(false);
    }
  };

  const handleAddToShoppingCart = (product) => {
    if (isSelected === false) {
      dispatch(addToCart(product));
      setIsSelected(true);
    } else if (isSelected === true) {
      dispatch(deleteToCart(product));
      setIsSelected(false);
    }
  };

  return (
    <div className={styles.containerCard}>
      <div className={styles.cuadrado1}>
        <div className={styles.imgCuadrado1}>
          <img src={hurleyCard} alt="#" />
        </div>
      </div>
      <div className={styles.cuadrado2}>
        <div className={styles.col1}>
          <img src={imageSrc} alt={name} />
        </div>
        <div className={styles.col2}>
          <div className={styles.fila1}>
            <h1>{name}</h1>

            <p>${price}</p>
          </div>
          <div className={styles.fila2}>
            <div className={styles.size}>
              <h1>WEIST</h1>
              <p>{size}</p>
            </div>
            <hr />
            <div>
              <img src={durability} alt="" />
            </div>
            {deletePropInFav &&
              (isFav ? (
                <button id={styles.carrito} onClick={handleFav}>
                  ❤️
                </button>
              ) : (
                <button id={styles.carrito} onClick={handleFav}>
                  🤍
                </button>
              ))}
          </div>
          {deletePropInFav && (
            <div className={styles.fila3}>
              <Link to={`/detail/${id}`}>
                <button>DETAILS</button>
              </Link>
            </div>
          )}
          <div className={styles.fila3}>
            {isSelected ? (
              <button
                id={styles.carrito}
                onClick={() =>
                  handleAddToShoppingCart({ name, size, price, imagen, id })
                }
              >
                REMOVE FROM CART
              </button>
            ) : (
              <button
                id={styles.carrito}
                onClick={() =>
                  handleAddToShoppingCart({ name, size, price, imagen, id })
                }
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
