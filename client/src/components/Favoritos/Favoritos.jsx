import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, deleteToFav } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Favorites.module.css";
import ProductCard from "../ProductCard/ProductCard";
import Navigation from "../Navigation/Navigation.jsx";

const Favorites = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const fav = useSelector((state) => state.products.favorites);

  useEffect(() => {
    dispatch(deleteToFav());
    dispatch(addToFav());
    console.log(fav);
  }, []);

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
            <h1 className={styles.name}>Favorites</h1>
            <div>
              {fav?.map((product) => {
                return (
                  product && (
                    <div>
                      <ProductCard
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
