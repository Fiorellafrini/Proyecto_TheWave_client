import React, { useState } from "react";
import styles from "../ProductCard/ProductCard.module.css";
import hurleyCard from "../../assets/hurleyCard.png";
import { Link } from "react-router-dom";
import {
  addToFav,
  deleteToFav,
  addToCart,
  deleteToCart,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { BsBagHeart, BsBagHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ProductCard = ({
  name,
  size,
  price,
  imagen,
  id,
  quantity,
  stock,
  deletePropInFav = true,
}) => {
  const [imageSrc] = useState(imagen[0]);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  let token = window.localStorage.getItem("login");

  const handleFav = () => {
    const product = { name, size, price, imagen, id };
    if (isFav === false) {
      dispatch(addToFav(product));
      setIsFav(true);
    } else if (isFav === true) {
      dispatch(deleteToFav(id));
      setIsFav(false);
    }
  };

  const handleAddToShoppingCart = () => {
    const product = { name, size, price, imagen, id, quantity, stock };
    if (isSelected === false) {
      dispatch(addToCart(product));
      setIsSelected(true);
    } else if (isSelected === true) {
      dispatch(deleteToCart(id));
      setIsSelected(false);
    }
  };

  const handleSinPermisos = () => {
    Swal.fire({
      icon: "info",
      title: "You need to be logged in to be able to add to favorites",
      color: "white",
      background: "#1e1e1e",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/SectionRegister");
  };
  const handleSinPermisosAñadir = () => {
    Swal.fire({
      icon: "info",
      title:
        "You need to be logged in to be able to add products to the shopping cart",
      color: "white",
      background: "#1e1e1e",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/SectionRegister");
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
                <h1>SIZE</h1>
                <p>{size}</p>
              </div>
              <hr />
              <div>
              {deletePropInFav &&
                (isFav ? (
                  <button
                    id={styles.carrito}
                    onClick={!token ? handleSinPermisos : handleFav}
                  >
                    <BsBagHeartFill />
                  </button>
                ) : (
                  <button
                    id={styles.carrito}
                    onClick={!token ? handleSinPermisos : handleFav}
                  >
                    <BsBagHeart />
                  </button>
                ))}
              </div>
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
                  onClick={
                    !token ? handleSinPermisosAñadir : handleAddToShoppingCart
                  }
                >
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  onClick={
                    !token ? handleSinPermisosAñadir : handleAddToShoppingCart
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
