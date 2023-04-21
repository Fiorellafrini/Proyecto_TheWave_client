import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "../SectionCarrito/SectionCarrito.module.css";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { useSelector } from "react-redux";

const SectionCarrito = () => {
  const [loading, setLoading] = useState(true);
  const userCartShopping = useSelector((state) => state.shoppingCart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const newTotal = userCartShopping.reduce(
      (total, product) => total + product.total,
      0
    );
    // console.log("newTotal: ", newTotal);
    setTotal(newTotal);
  }, [userCartShopping]);

// useEffect(() => {
//   const newTotal = userCartShopping.reduce((total, product) => total + product.total, 0);
//   setTotal(newTotal);
// }, [userCartShopping]);



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
                 console.log("product.total: ", product.total);
                return (
                  <ShoppingCartCard
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    imagen={product.imagen}
                    setTotal={(newTotal) => {
                      product.total = newTotal;
                    }}
                  />
                );
              })}
            </div>
            <div className={styles.totalPay}>
              <p>Total</p>
              <p>{total}</p>
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



