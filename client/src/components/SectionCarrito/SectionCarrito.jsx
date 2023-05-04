import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "../SectionCarrito/SectionCarrito.module.css";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { useSelector } from "react-redux";
import {
  // paymentMercadoPago,
  deleteToCart,
  createShop,
  createShopDetail,
  updateStockDecrement,
  setCart,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import jwt from "jwt-decode";

const SectionCarrito = () => {
  const [loading, setLoading] = useState(true);
  const userCartShopping = useSelector((state) => state.products.shoppingCart);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.shoppingCart);

  //user
  let isLoguin = window.localStorage.getItem("login");
  let user = "";
  if (isLoguin) user = jwt(isLoguin);

  const handlePayment = async () => {
    dispatch(createShop(new Date(), user.id)).then((newShop) => {
      for (let i = 0; i < userCartShopping.length; i++) {
        const product = userCartShopping[i];
        dispatch(
          createShopDetail(
            product.quantity,
            product.price,
            product.id,
            newShop.shop_id
          )
        );
      }
    });
    dispatch(paymentMercadoPago(userCartShopping)).then((response) => {
      for (let i = 0; i < userCartShopping.length; i++) {
        const product = userCartShopping[i];
        dispatch(updateStockDecrement(product.id, product.quantity));
      }
    });
  };

  const handleDelete = (product) => {
    dispatch(deleteToCart(product));
  };



  useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
      dispatch(setCart(JSON.parse(storedCart)));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

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
          <div className="animate__animated animate__fadeIn">
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
                        onDelete={() => handleDelete(product.id)}
                      />
                    );
                  })}
                </div>
                <div className={styles.totalPay}>
                  <p>Total</p>
                  <p>
                    $
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
        </div>
      )}
    </>
  );
};

export default SectionCarrito;
