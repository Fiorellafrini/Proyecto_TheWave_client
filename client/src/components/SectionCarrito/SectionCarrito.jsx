import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "../SectionCarrito/SectionCarrito.module.css";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { useSelector } from "react-redux";

const SectionCarrito = () => {
  const [loading, setLoading] = useState(true);
  const userCartShopping = useSelector((state) => state.shoppingCart);

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
          <div className={styles.shoppingCartContainer}>
            <h1>Shopping Cart</h1>
            <div className={styles.containerProducts}>
              {userCartShopping?.map((product) => {
                return (
                  <ShoppingCartCard
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    imagen={product.imagen}
                  />
                );
              })}
            </div>
            <div className={styles.totalPay}>
              <p>Total</p>
              <p>
                {userCartShopping.reduce(
                  (total, product) => total + product.price,
                  0
                )}
              </p>
            </div>
            <hr />
            <button>Pay</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCarrito;
