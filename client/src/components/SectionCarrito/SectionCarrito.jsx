import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "../SectionCarrito/SectionCarrito.module.css";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { useSelector } from "react-redux";
import { paymentMercadoPago, deleteToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SectionCarrito = () => {
  const [loading, setLoading] = useState(true);
  const userCartShopping = useSelector((state) => state.products.shoppingCart);

  const dispatch = useDispatch();

  const handlePayment = () => {
    dispatch(paymentMercadoPago(userCartShopping));
  };
  const handleDelete = (product) => {
    dispatch(deleteToCart(product));
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
          <div className={styles.shop}>
            <div className={styles.shoppingCartContainer}>
              <h1>Your Shopping Cart</h1>
              <div className={styles.containerProducts}>
                {userCartShopping?.map((product, i) => {
                  return (
                    <ShoppingCartCard
                      key={i}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      size={product.size}
                      imagen={product.imagen}
                      stock={product.stock}
                      quantity={product.quantity}
                      onDelete={() => handleDelete(product)}
                    />
                  );
                })}
              </div>
              <div className={styles.totalPay}>
                <p>Total</p>
                <p>
                  {userCartShopping.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  )}
                </p>
              </div>
              <hr />
              <div className={styles.pay}>
                <button onClick={handlePayment}>Pay</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCarrito;
