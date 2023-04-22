import React, { useEffect, useState } from "react";
import { productsById, addToCart, deleteToCart } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "./Detail.module.css";
import visa from "./iconos/visa.png";
import master from "./iconos/master.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";

function Detail() {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detail);
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
              <Link to="/SectionCategories">Volver</Link>
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
                  <b>Talla {detalle?.size}</b>
                </span>
                <div className={styles.metodo}>
                  <p id={styles.cuotas}>
                    <b>Metodos de pago</b>
                  </p>
                  <img src={visa} alt="visa" />
                  <img src={master} alt="card" />
                </div>
                <p id={styles.envio}>Envío gratis a nivel nacional</p>
                <p id={styles.devolucion}>Devolución gratis</p>
                <p id={styles.dias}>Tienes 30 días desde que lo recibes.</p>
                <button
                  id={styles.comprar}
                  onClick={() => {
                    const body = detalle;
                    console.log("Body:", body);
                    axios
                      .post("http://localhost:3001/payment", body)
                      .then(
                        (res) =>
                          (window.location.href =
                            res.data.response.body.init_point)
                      );
                  }}
                >
                  pagar
                </button>
                {isSelected ? (
                  <button id={styles.carrito} onClick={addToShoppingCart}>
                    Quitar del carrito
                  </button>
                ) : (
                  <button id={styles.carrito} onClick={addToShoppingCart}>
                    Agregar al carrito
                  </button>
                )}

                <p id={styles.protegida}>
                  <b>Compra Protegida</b>, recibe el producto que esperabas{" "}
                  <br /> o te devolvemos tu dinero.
                </p>
                <p id={styles.garantia}>
                  <b>90 días de garantía de fábrica.</b>
                </p>
              </div>
            </div>
            <div className={styles.comentario}>
              <h2>
                <b>Sobre este artículo</b>
              </h2>
              <ul>
                <li>
                  Dimensiones: 8 pies x 22 1/2 x 3 1/4 <br />
                  peso 11.5 libras Volumen de 86 litros de capacidad <br /> de
                  peso sugerida de hasta 200 libras
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
                  Slick Bottom Skin <br />
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
