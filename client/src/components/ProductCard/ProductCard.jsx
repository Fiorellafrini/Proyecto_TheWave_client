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
import { useSelector, useDispatch } from "react-redux";
import { BsBagHeart, BsBagHeartFill } from "react-icons/bs";

const ProductCard = ({
  name,
  size,
  price,
  imagen,
  id,
  quantity,
  stock,
  deletePropInFav = true,
  handleDelete
}) => {
  const [imageSrc] = useState(imagen[0]);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const [isSelected, setIsSelected] = useState(false);

  const detalle = useSelector((state) => state.products.detail);

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

  const handleAddToShoppingCart = () => {
    if (isSelected === false) {
      dispatch(addToCart(detalle));
      setIsSelected(true);
    } else if (isSelected === true) {
      dispatch(deleteToCart(detalle));
      setIsSelected(false);
    }
  };  

  return (
    <div className="animate__animated animate__fadeIn">
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
                    <BsBagHeartFill />
                  </button>
                ) : (
                  <button id={styles.carrito} onClick={handleFav}>
                    <BsBagHeart />
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
                  onClick={() =>
                    handleAddToShoppingCart({
                      name,
                      size,
                      price,
                      imagen,
                      id,
                      quantity,
                      stock,
                    })
                  }
                >
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleAddToShoppingCart({
                      name,
                      size,
                      price,
                      imagen,
                      id,
                      quantity,
                      stock,
                    })
                  }
                >
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


