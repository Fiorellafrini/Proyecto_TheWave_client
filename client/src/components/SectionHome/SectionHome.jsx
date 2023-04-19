import React, { useState, useEffect } from "react";
import styles from "../SectionHome/SectionHome.module.css";
import Publicidad from "../Publicidad/Publicidad";
import CarruselProducts from "../CarruselProducts/CarruselProducts";
import CoursesBanner from "../CoursesBanner/CoursesBanner";
import Navigation from "../Navigation/Navigation";

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
          <div className={styles.containerTrasparent}>
            <Publicidad />
            <div className={styles.aboutPage}>
              <div className={styles.img1}>
                <h1>Stand Up Paddle</h1>
              </div>
              <div className={styles.img2}>
                <h1>Surf</h1>
              </div>
              <div className={styles.img3}>
                <h1>WakeBoard</h1>
              </div>
            </div>
            <div className={styles.containerColor}>
              <CoursesBanner />
              <CarruselProducts />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHome;
