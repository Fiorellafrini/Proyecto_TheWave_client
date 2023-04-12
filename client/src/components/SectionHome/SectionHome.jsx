import React from "react";
import styles from "../SectionHome/SectionHome.module.css";
import hurley from "../../assets/hurley.png";
import tablaPublicidad from "../../assets/tablaPublicidad.png";
import { ImArrowRight } from "react-icons/im";

const SectionHome = () => {
  return (
    <>
      <div className={styles.containerPublicidad}>
        <div className={styles.col1}>
          <img src={hurley} alt="" />
        </div>
        <div className={styles.col2}>
          <img src={tablaPublicidad} alt="" />
        </div>
        <div className={styles.col3}>
          <ImArrowRight />
        </div>
      </div>
      <div className={styles.productosDestacados}>
          <p>PRODUCTOS DESTACADOS</p>
          <hr />
      </div>
    </>
  );
};

export default SectionHome;
