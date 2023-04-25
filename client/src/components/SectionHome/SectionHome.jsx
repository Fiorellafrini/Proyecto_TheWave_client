import React, { useState, useEffect } from "react";
import styles from "../SectionHome/SectionHome.module.css";
import Navigation from "../Navigation/Navigation";
import Geometry from "../../assets/geometry.png";
import img5 from "../../assets/img5.png";
import img4 from "../../assets/img4.png";
import img3 from "../../assets/img3.png";
import img2 from "../../assets/img2.png";
import img1 from "../../assets/img1.png";
import CarruselProducts from "../CarruselProducts/CarruselProducts";
import CoursesBanner from "../CoursesBanner/CoursesBanner";

const SectionHome = () => {
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
          <div className={styles.containerHome}>
            <div className={styles.section1}>
              <div className={styles.imageButtonContainer}>
                <img src={Geometry} alt="" className={styles.image} />
                <button className={styles.button}>Pay</button>
              </div>
            </div>
            <div className={styles.section2}>
              <div className={styles.fila1}>
                <div className={styles.box}>
                  <img src={img3} alt="" />
                </div>
                <div className={styles.box}>
                  <img src={img2} alt="" />
                </div>
                <div className={styles.box}>
                  <img src={img1} alt="" />
                </div>
                <div className={styles.box}>
                  <img src={img4} alt="" />
                </div>
                <div className={styles.box}>
                  <img src={img5} alt="" />
                </div>
              </div>
              <div className={styles.fila2}></div>
            </div>
            <div className={styles.section3}>
              <div className={styles.column}>
                <h2>Free Shipping</h2>
                <p>Free Shipping On All Order</p>
              </div>{" "}
              <div className={styles.column}>
                <h2>Money Guarantee</h2>
                <p>30 Day Money Back</p>
              </div>{" "}
              <div className={styles.column}>
                <h2>Secure Payment</h2>
                <p>All Card Accepted</p>
              </div>{" "}
              <div className={styles.column}>
                <h2>Free Shipping</h2>
                <p>Free Shipping On All Order</p>
              </div>
            </div>
            <div className={styles.section4}>
              <CarruselProducts />
              <CoursesBanner />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHome;
