import React, { useState } from "react";
import durability from "../../assets/durability.png";
import styles from "../ProductCard/ProductCard.module.css";
import hurleyCard from "../../assets/hurleyCard.png";

const ProductCard = ({ name, size, price }) => {
  // const [imageSrc, setImageSrc] = useState(imagen[0]);

  return (
    <div className={styles.containerCard}>
      <div className={styles.cuadrado1}>
        <div className={styles.imgCuadrado1}>
          <img src={hurleyCard} alt="" />
        </div>
      </div>
      <div className={styles.cuadrado2}>
        <div className={styles.col1}>
          {/* <img src={imageSrc} alt={name} /> */}
        </div>
        <div className={styles.col2}>
          <div className={styles.fila1}>
            <h1>{name}</h1>
            <p>${price}</p>
          </div>
          <div className={styles.fila2}>
            <div className={styles.size}>
              <h1>WEIST</h1>
              <p>{size}</p>
            </div>
            <hr />
            <div>
              <img src={durability} alt="" />
            </div>
          </div>
          <div className={styles.fila3}>
            <button>ADD TO CAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
