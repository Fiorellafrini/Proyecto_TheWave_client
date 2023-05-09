import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToFav, setFavorites } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Favorites.module.css";
import tablaWhite from "../../assets/products6.png";
import logoPage from "../../assets/logoPage.png";
import ProductCard from "../ProductCard/ProductCard";
import Navigation from "../Navigation/Navigation.jsx";
import { BsHeartbreakFill } from "react-icons/bs";

const Favorites = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fav = useSelector((state) => state.products.favorites);

  const handleDelete = (productId) => {
    dispatch(deleteToFav(productId));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      dispatch(setFavorites(JSON.parse(storedFavorites)));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(fav));
  }, [fav]);

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
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            size={product.size}
                            imagen={product.imagen}
                            quantity={product.quantity}
                            stock={product.stock}
                            onDelete={() => handleDelete(product.id)}
                            deletePropInFav={false}
                            addToCartInFav={false}
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
