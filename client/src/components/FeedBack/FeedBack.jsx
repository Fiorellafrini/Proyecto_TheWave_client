import React, { useState, useEffect } from "react";
import styles from "../FeedBack/FeedBack.module.css";
import Navigation from "../Navigation/Navigation";
import logoPage from "../../assets/logoPage.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeedBack = () => {
  const [loading, setLoading] = useState(true);

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
                <hr />
                <img src={logoPage} alt="" />
                <hr />
              </div>
              <div className={styles.paymentSucces}>
                <FaRegCheckCircle fontSize={"100px"} color="#21a88bdc" />
                <h1>THANK YOUR FOR THE PURCHASE!</h1>
                <table>
                  <tbody>
                    <tr>
                      <td className="label">ID de Pago</td>
                      <td className="value">12345</td>
                    </tr>
                    <tr>
                      <td className="label">Producto</td>
                      <td className="value">Nombre del producto</td>
                    </tr>
                    <tr>
                      <td className="label">Cantidad</td>
                      <td className="value">1</td>
                    </tr>
                    <tr>
                      <td className="label">Precio</td>
                      <td className="value">$9.99</td>
                    </tr>
                  </tbody>
                </table>
                <Link to={"/ShopDetail"}>
                  <button>View My Payments</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBack;
