import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoPage from "../../assets/logoPage.png";
import tablaWhite from "../../assets/products7-2.png";
import styles from "../ShopDetail/ShopDetail.module.css";
import Navigation from "../Navigation/Navigation";
import { listDetail } from "../../redux/actions";

const ShopDetail = () => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.products.shop);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(listDetail());
  }, [dispatch]);

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
                <h1>MY PURCHASES</h1>
                <p>
                  Here you will find all the information about your purchases
                  with date and time
                </p>
              </div>
              <div className={styles.paymentColor}>
                <div className={styles.detail}>
                  {shop?.map((pay) => (
                    <div className={styles.info} key={pay.shop_id}>
                      <h2>SHOP DETAIL {pay.shop_id}</h2>
                      <hr />
                      <p>User: {pay.User.name}</p>
                      <p>Email: {pay.User.email}</p>
                      <p>Date: {pay.date}</p>
                      <h3>PRODUCTS</h3>
                      {pay.ShopDetails?.map((detail, i) => (
                        <div className={styles.products} key={i}>
                          <p>Product ID: {detail.product_id}</p>
                          <p>Name : {detail.Product.name}</p>
                          <p>Size : {detail.Product.size}</p>
                          <p>Quantity: {detail.quantity}</p>
                          <hr />
                          <p>Price: {detail.price}</p>
                        </div>
                      ))}
                    </div>
                  ))}
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

export default ShopDetail;
