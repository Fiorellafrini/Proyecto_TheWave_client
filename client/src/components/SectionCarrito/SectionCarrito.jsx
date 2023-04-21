import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "../SectionCarrito/SectionCarrito.module.css";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { useSelector } from "react-redux";
import axios from "axios";

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
              {userCartShopping?.map((product, i) => {
                return (
                  <ShoppingCartCard
                    key={i}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    imagen={product.imagen}
                  />
                );
              })}
            </div>
            <div className={styles.totalPay}>
              <p>total</p>
              <p>
                {userCartShopping.reduce(
                  (total, product) => total + product.price,
                  0
                )}
              </p>
            </div>
            <hr />
            <button
              onClick={() => {
                const body = userCartShopping;
                console.log("Body:", body); 
                axios
                  .post("http://localhost:3001/payment", body)
                  .then(
                    (res) =>
                      (window.location.href = res.data.response.body.init_point)
                  );
              }}
            >
              pagar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCarrito;
