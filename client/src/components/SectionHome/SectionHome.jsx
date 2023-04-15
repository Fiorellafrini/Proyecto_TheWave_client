import React, { useState, useEffect } from "react";
import styles from "../SectionHome/SectionHome.module.css";
import Publicidad from "../Publicidad/Publicidad";
import CarruselProducts from "../CarruselProducts/CarruselProducts";

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
        <>
        <Publicidad/>
        <CarruselProducts/>
        </>
      )}
    </>
  );
};

export default SectionHome;






