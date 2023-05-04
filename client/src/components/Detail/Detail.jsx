import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import billabong from "../../assets/billabong.png";
import hurley from "../../assets/hurley.png";
import russel from "../../assets/russel.png";
import Swal from "sweetalert2";

import {
  paymentMercadoPago,
  createShop,
  createShopDetail,
} from "../../redux/actions";
import { addToCart, deleteToCart, productsById } from "../../redux/actions.js";
import Navigation from "../Navigation/Navigation.jsx";
import styles from "./Detail.module.css";
import talleS from "../../assets/talleS.png";
import talleM from "../../assets/talleM.png";
import talleL from "../../assets/talleL.png";
import talleXL from "../../assets/talleXL.png";
import vesl from "../../assets/vesl.png";
import target1 from "../Detail/iconos/master.png";
import target2 from "../Detail/iconos/visa.png";
import AddReview from "../Review/AddReview";
import ReviewCard from "../Review/ReviewCard";
import StarRender from "../Review/StartRender";
import jwt from "jwt-decode";
function Detail() {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.products.detail);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  let token = window.localStorage.getItem("login");
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleOpenReview = () => {
    setReviewVisible(true);
  };

  const handleCloseReview = () => {
    setReviewVisible(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //user
  let isLoguin = window.localStorage.getItem("login");
  let user = "";
  if (isLoguin) user = jwt(isLoguin);

  const handlePayment = async () => {
    dispatch(createShop(new Date(), user.id)).then((newShop) => {
      dispatch(
        createShopDetail(
          detalle.quantity,
          detalle.price,
          detalle.id,
          newShop.shop_id
        )
      );
    });
    dispatch(paymentMercadoPago(detalle));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(productsById(id));
  }, [dispatch, id]);

  const addToShoppingCart = () => {
    // const product = { name, size, price, imagen, id, quantity, stock };
    if (isSelected === false) {
      const storedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
      const productInCart = storedCart.find(cart => cart.id === detalle.id);
  
      if (productInCart) {
        // alert("This product already exists in the cart");
        Swal.fire({
          icon: "info",
          title: "This product already exists in the cart",
          color: "white",
          background: "#1e1e1e",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        dispatch(addToCart(detalle));
        setIsSelected(true);
        // Guardar en localStorage
        localStorage.setItem('shoppingCart', JSON.stringify([...storedCart, detalle]));
      }
    } else if (isSelected === true) {
      dispatch(deleteToCart(detalle.id));
      setIsSelected(false);
      // Actualizar localStorage
      const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
      const updatedCart = storedCart.filter(cart => cart.id !== detalle.id);
      localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    }
  };
  


  const nombreEnMayusculas = detalle?.name?.toUpperCase();

  const handleSinPermisos = () => {
    Swal.fire({
      icon: "info",
      title: "You need to be logged in to be able to buy",
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

  const reviews = detalle.Reviews;
  const reviewCount = reviews && reviews.length ? reviews.length : 0;

  let total = 0;
  for (let i = 0; i < reviewCount; i++) {
    total += reviews[i].rating;
  }
  const promedio = total / reviewCount;
  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.container}>
          <Navigation />
          <div className={styles.detailContainer}>
            <div className={styles.talles}>
              {detalle.size === "S" && <img src={talleS} alt="Talle S" />}
              {detalle.size === "M" && <img src={talleM} alt="Talle M" />}
              {detalle.size === "L" && <img src={talleL} alt="Talle L" />}
              {detalle.size === "XL" && <img src={talleXL} alt="Talle XL" />}
            </div>
            <div className={styles.detailInfo}>
              <div className={styles.col1}>
                {detalle.id_brand === 1 && <img src={hurley} alt="hurley" />}
                {detalle.id_brand === 4 && (
                  <img style={{ width: "100px" }} src={russel} alt="russel" />
                )}
                {detalle.id_brand === 6 && <h2>JOBE</h2>}
                {detalle.id_brand === 9 && (
                  <img src={billabong} alt="billabong" />
                )}
                <div className={styles.containerInfo}>
                  <h2>{nombreEnMayusculas}</h2>
                  {detalle.Reviews && reviewCount !== 0 ? (
                    <div className={styles.qualification}>
                      <p>{promedio.toFixed(1)}</p>
                      <StarRender rating={promedio} />
                      <h2>({reviewCount})</h2>
                    </div>
                  ) : (
                    <div>
                      <p>No reviews</p>
                    </div>
                  )}
                  <h2>${detalle.price}</h2>
                  <p>{detalle.description}</p>
                </div>
                <div className={styles.cards}>
                  <p>-Free shipping nationwide</p>
                  <p>-free return</p>
                  <p>-30 days factory warranty.</p>
                </div>
                <div className={styles.cards}>
                  <p style={{ color: "#224145" }}>Payment methods:</p>
                  <img src={target1} alt="" />
                  <img src={target2} alt="" />
                </div>
                <div>
                  <div>
                    <button onClick={handleOpen}>ADD REVIEW</button>
                    <button onClick={handleOpenReview}>SEE COMENTS</button>
                  </div>
                </div>
                <div className={styles.containerPago}>
                  <button onClick={!token ? handleSinPermisos : handlePayment}>
                    PAY
                  </button>
                  {isSelected ? (
                    <button
                      onClick={
                        !token ? handleSinPermisosAñadir : addToShoppingCart
                      }
                    >
                      REMOVE
                    </button>
                  ) : (
                    <button
                      onClick={
                        !token ? handleSinPermisosAñadir : addToShoppingCart
                      }
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.col2}>
                {detalle.id_type === 1 && (
                  <h1 style={{ fontSize: "210px" }}>Diving Fins</h1>
                )}
                {detalle.id_type === 2 && (
                  <h1 style={{ fontSize: "200px" }}>Wetsuit</h1>
                )}
                {detalle.id_type === 3 && (
                  <h1 style={{ fontSize: "140px" }}>Stand Up Paddle</h1>
                )}
                {detalle.id_type === 4 && (
                  <h1 style={{ fontSize: "210px" }}>Surf Board</h1>
                )}
                {detalle.id_type === 5 && (
                  <h1 style={{ fontSize: "9.5vw" }}>Wakeboard</h1>
                )}
                <div className={styles.detailImagen}>
                  <img src={detalle.imagen[0]} alt="" />
                </div>
              </div>
            </div>
          </div>
          {reviewCount === 0 ? (
            isOpen && (
              <div className={styles.modal}>
                <div className={styles.buttonClose}>
                  <button onClick={handleClose}>x</button>
                </div>
                <div className={styles.modalcontent}>
                  <AddReview handleClose={handleClose} />
                </div>
              </div>
            )
          ) : (
            <>
              {reviewVisible && (
                <div className={styles.modal}>
                  <div className={styles.buttonClose}>
                    <button onClick={handleCloseReview}>x</button>
                  </div>
                  <div className={styles.modalcontent}>
                    {detalle.Reviews.map((review) => (
                      <ReviewCard
                        idUser={review.id_user}
                        updatedAt={review.updatedAt}
                        rating={review.rating}
                        comment={review.comment}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Detail;
