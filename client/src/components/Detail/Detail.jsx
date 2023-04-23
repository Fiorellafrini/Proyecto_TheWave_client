import React, { useEffect, useState } from "react";
import { productsById, addToCart, deleteToCart } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "./Detail.module.css";
import visa from "./iconos/visa.png";
import master from "./iconos/master.png";
// import pago from './iconos/pago.png'
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";

function Detail() {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.products.detail);
  const [isSelected, setIsSelected] = useState(false);

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(productsById(id));
  }, [dispatch, id]);

  //------------------------------addToCart------------------------------\\
  const addToShoppingCart = (product) => {
    if (isSelected === false) {
      dispatch(addToCart(detalle));
      setIsSelected(true);
    } else if (isSelected === true) {
      dispatch(deleteToCart(detalle));
      setIsSelected(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.container}>
          <Navigation />
          <div className={styles.cuadrado1}>
            <div className={styles.cerrar}>
              <Link to="/SectionCategories">Back</Link>
            </div>
            <div className={styles.imag}>
              {detalle.imagen?.map((imagen, i) => (
                <div className={styles.imagenT}>
                  <img key={i} src={imagen} alt="imagen" />
                </div>
              ))}

              <div className={styles.granImagen}>
                {detalle.imagen?.map((imagen, i) => (
                  <img key={i} src={i === 0 ? imagen : null} alt="" />
                ))}
              </div>
              <div className={styles.pago}>
                <h2 id={styles.megusta}>.</h2>
                <h1 id={styles.name}>
                  <b>{detalle?.name}</b>
                </h1>
                <p id={styles.precio}>
                  <b>$ {detalle?.price} ARS</b>
                </p>
                <span>
                  <b>Size {detalle?.size}</b>
                </span>
                <div className={styles.metodo}>
                  <p id={styles.cuotas}>
                    <b>Payment methods</b>
                  </p>
                  <img src={visa} alt="visa" />
                  <img src={master} alt="card" />
                </div>
                <p id={styles.envio}>Free shipping nationwide</p>
                <p id={styles.devolucion}>free return</p>
                <p id={styles.dias}>Tienes 30 días desde que lo recibes.</p>
                {/* <button id={styles.comprar}>Buy now</button> */}
                {isSelected ? (
                  <button id={styles.carrito} onClick={addToShoppingCart}>
                    REMOVE FROM CART
                  </button>
                ) : (
                  <button id={styles.carrito} onClick={addToShoppingCart}>
                    ADD TO CART
                  </button>
                )}

                <p id={styles.protegida}>
                  <b>Protected Purchase</b>, receive the product you expected{" "}
                  <br /> or we will refund your money.
                </p>
                <p id={styles.garantia}>
                  <b>90 days factory warranty.</b>
                </p>
              </div>
            </div>
            <div className={styles.comentario}>
              <h2>
                <b>About this article</b>
              </h2>
              <ul>
                <li>
                Dimensions: 8 ft x 22 1/2 x 3 1/4 <br />
                  weight 11.5 pounds Volume 86 liters capacity <br /> of
                  suggested weight up to 200 pounds
                </li>
                <li>
                  Incluye almohadilla de tracción para <br />
                  correa de tobillo y cubierta suave para calcetines <br />
                  para protección. <br />
                  Correa de poliuretano de alta calidad
                </li>
                <li>
                Soft Webs-IXL Water Barrier Skin Crosslink
                  <br />
                  Top Deck and Rils High density HDPE PE Skin <br />
                  Slick Bottom Skin<br />
                  Exclusive Brushed Color Graphic Art Deck
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;