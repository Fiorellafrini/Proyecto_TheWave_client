import jwt from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import billabong from "../../assets/billabong.png";
import hurley from "../../assets/hurley.png";
import russel from "../../assets/russel.png";
import talleL from "../../assets/talleL.png";
import talleM from "../../assets/talleM.png";
import talleS from "../../assets/talleS.png";
import talleXL from "../../assets/talleXL.png";
import vesl from "../../assets/vesl.png";
import {
  createShop,
  createShopDetail,
  paymentMercadoPago,
} from "../../redux/actions";
import { addToCart, deleteToCart, productsById } from "../../redux/actions.js";
import target1 from "../Detail/iconos/master.png";
import target2 from "../Detail/iconos/visa.png";
import Navigation from "../Navigation/Navigation.jsx";
import AddReview from "../Review/AddReview";
import ReviewCard from "../Review/ReviewCard";
import StarRender from "../Review/StartRender";
import styles from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.products.detail);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  let token = window.localStorage.getItem("login");
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

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
    dispatch(productsById(id));
  }, [dispatch, id]);

  //------------------------------addToCart------------------------------\\
  const addToShoppingCart = () => {
    if (isSelected === false) {
      dispatch(addToCart(detalle));
      setIsSelected(true);
    } else if (isSelected === true) {
      dispatch(deleteToCart(detalle.id));
      setIsSelected(false);
    }
  };

  const nombreEnMayusculas = detalle?.name?.toUpperCase();

  const handleSinPermisos =()=>{
    alert("You need to be logged in to be able to buy");
    navigate("/SectionRegister");
  }
  const handleSinPermisosAñadir = () => {
    alert(
      "You need to be logged in to be able to add products to the shopping cart"
    );
    navigate("/SectionRegister");
  };
  const handleSinPermisosReview= () => {
    alert(
      "You need to be logged in to be able to add Reviews to this product"
    );
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
                {detalle.id_brand === 3 && <img src={vesl} alt="vesl" />}
                {detalle.id_brand === 4 && (
                  <img style={{ width: "100px" }} src={russel} alt="russel" />
                )}
                {detalle.id_brand === 6 && <h2>JOBE</h2>}
                {detalle.id_brand === 9 && (
                  <img src={billabong} alt="billabong" />
                )}
                <div className={styles.containerInfo}>
                  <h2>{nombreEnMayusculas}</h2>
                { detalle.Reviews && reviewCount !== 0 ?
                  <div className={styles.qualification}>
                    <p>{promedio.toFixed(1)}</p>
                    <StarRender rating={promedio}/>
                    <h2>({reviewCount})</h2>
                  </div>: <div><p>No reviews</p>
                  </div>}
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
                <div className={styles.containerPago}>
                  <button onClick={!token ? handleSinPermisos : handlePayment}>
                    PAY
                  </button>

                  {isSelected ? (
                    <button
                      onClick={!token ? handleSinPermisosAñadir : addToShoppingCart}
                    >
                      REMOVE
                    </button>
                  ) : (
                    <button
                      onClick={!token ? handleSinPermisosAñadir : addToShoppingCart}
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
      {reviewCount === 0 ?
        <div className={styles.commentContainer}> 
        <p>Be the first to add a review</p>
        <div>
      <button onClick={!token ? handleSinPermisosReview :handleOpen}>Add Review</button>
      { isOpen && <AddReview isOpen={isOpen} setOpen={setIsOpen}/> }
    </div>
        
        </div>:
        detalle.Reviews.map(
        review =>( <ReviewCard idUser={review.id_user} updatedAt={review.updatedAt} rating={review.rating} comment={review.comment}/>)
      )}
  
        </div>
      )}
    </>
  );
}

export default Detail;
