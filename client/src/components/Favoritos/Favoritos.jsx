import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./Favorites.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Navigation from "../Navigation/Navigation.jsx";

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const fav = useSelector((state) => state.products.favorites);

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
          <div className={styles.fila1}>
            <h1 className={styles.name}>Your Favorites</h1>
            <div className={styles.card}>
              {fav?.map((product, i) => {
                return (
                  product && (
                    <div>
                      <ProductCard
                        key={i}
                        name={product.name}
                        id={product.id}
                        size={product.size}
                        price={product.price}
                        imagen={product.imagen ? product.imagen : []}
                        deletePropInFav={false}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
