import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import Footer from "../Footer/Footer";
import { GoPackage } from "react-icons/go";
import { GiEarthAmerica } from "react-icons/gi";
import { BsFillPatchCheckFill, BsCreditCardFill } from "react-icons/bs";

const SectionHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
                <Link to={"/SectionCategories"}>
                  <button className={styles.button}>view</button>
                </Link>
              </div>
            </div>
            <div className={styles.section2}>
              <div className={styles.fila1}>
                <div className={styles.box}>
                  <Link to={"/SectionCategories"}>
                    <img src={img3} alt="" />
                  </Link>
                </div>
                <div className={styles.box}>
                  <Link to={"/SectionCategories"}>
                    <img src={img2} alt="" />
                  </Link>
                </div>
                <div className={styles.box}>
                  <Link to={"/SectionCategories"}>
                    <img src={img1} alt="" />
                  </Link>
                </div>
                <div className={styles.box}>
                  <Link to={"/SectionCategories"}>
                    <img src={img4} alt="" />
                  </Link>
                </div>
                <div className={styles.box}>
                  <Link to={"/SectionCategories"}>
                    <img src={img5} alt="" />
                  </Link>
                </div>
              </div>
              <div className={styles.fila2}></div>
            </div>
            <div className={styles.section3}>
              <div className={styles.column}>
                <div className={styles.icon}>
                  <GoPackage />
                </div>
                <div>
                  {" "}
                  <h2>Free Shipping</h2>
                  <p>Free Shipping On All Order</p>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.icon}>
                  <BsFillPatchCheckFill />
                </div>
                <div>
                  {" "}
                  <h2>Money Guarantee</h2>
                  <p>30 Day Money Back</p>
                </div>
              </div>{" "}
              <div className={styles.column}>
                <div className={styles.icon}>
                  <BsCreditCardFill />
                </div>
                <div>
                  {" "}
                  <h2>Secure Payment</h2>
                  <p>All Cards Accepted</p>
                </div>
              </div>{" "}
              <div className={styles.column}>
                <div className={styles.icon}>
                  <GiEarthAmerica />
                </div>
                <div>
                  {" "}
                  <h2>Shipping to LATAM</h2>
                  <p>Shipping to all Latam</p>
                </div>
              </div>
            </div>
            <div className={styles.section4}>
              <CarruselProducts />
              <CoursesBanner />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHome;
