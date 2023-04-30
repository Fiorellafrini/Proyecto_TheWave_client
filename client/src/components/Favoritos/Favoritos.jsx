import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToFav } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Favorites.module.css";
import tablaWhite from "../../assets/products7-2.png";
import logoPage from "../../assets/logoPage.png";
import ProductCard from "../ProductCard/ProductCard";
import Navigation from "../Navigation/Navigation.jsx";
import { BsHeartbreakFill } from "react-icons/bs";

const Favorites = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const fav = useSelector((state) => state.products.favorites);

  const handleDelete = (product) => {
    dispatch(deleteToFav(product));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.container}>
          <Navigation />
          <div className={styles.containerPayments}>
            <div className={styles.payment}>
              <div className={styles.logoPage}>
                <img src={logoPage} alt="" />
                <hr />
              </div>
              <div className={styles.tituloPage}>
                <h1>MY FAVORITES</h1>
              </div>
              <div className={styles.paymentColor}>
                <div className={styles.detail}>
                  {fav?.map((product) => {
                    return (
                      product && (
                        <div className={styles.card}>
                          <div className={styles.delete}>
                            <button
                              className={styles.button}
                              onClick={() => handleDelete(product.id)}
                            >
                              <BsHeartbreakFill />
                            </button>
                          </div>
                          <ProductCard
                            name={product.name}
                            id={product.id}
                            size={product.size}
                            price={product.price}
                            imagen={product.imagen ? product.imagen : []}
                            deletePropInFav={false}
                            key={product.id}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
                <div className={styles.tablaSurf}>
                  <img src={tablaWhite} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
