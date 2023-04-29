import axios from "axios";
import styles from "./CardDash.module.css";
import React, { useState } from "react";
import durability from "../../assets/durability.png";
import hurleyCard from "../../assets/hurleyCard.png";
import { useEffect } from "react";


const CardDash = ({ name, size, price, imagen, id, active }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  

  useEffect(() => {
    const isDeleted = JSON.parse(localStorage.getItem(`product_${id}`));
    setIsDeleted(isDeleted || false); // si el valor recuperado es null o algún otro valor falsy, entonces false se utilizará como valor predeterminado 
  }, [id]);
  

  const toggleProductActive = async (id, active) => {
    try {
      await axios.put(`/product/active/${id}`, { active: active });
      setIsDeleted(!isDeleted);
      console.log('successfully modified product');
  
      // Guarda el valor en localStorage
      localStorage.setItem(`product_${id}`, JSON.stringify(!isDeleted));
    } catch (error) {
      console.error('Error changing product activation', error);
    }
  };
  
  const onClose = async () => {
    setIsDeleted(false);
    await toggleProductActive(id, true);
  
    // Guarda el valor en localStorage
    localStorage.setItem(`product_${id}`, JSON.stringify(false));
  };
  
  const handleDelete = async () => {
    await toggleProductActive(id, false);
  
    // Guarda el valor en localStorage
    localStorage.setItem(`product_${id}`, JSON.stringify(true));
  };
  
  
  const handleOnClick = (e) => {
    e.stopPropagation();
    setIsDeleted(!isDeleted);
    console.log("isDeleted:", isDeleted);
  };
  
  const cardClassName = `${styles.containerCard} ${
    isDeleted ? styles.opacidad : ""
  }`;
  
  return (
    <div className={cardClassName} onClick={handleOnClick}>
      {isDeleted ? (
        <button onClick={onClose}> Restaurar </button>
      ) : (
        <button className={styles.eliminar} onClick={handleDelete}>
          {" "}
          Eliminar{" "}
        </button>
      )}

      <div className={styles.cuadrado1}>
        <div className={styles.imgCuadrado1}>
          <img src={hurleyCard} alt="#" />
        </div>
      </div>
      <div className={styles.cuadrado2} onClick={handleOnClick}>
        <div className={styles.col1}>
          <img src={imagen[0]} alt={name} />
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
        </div>
      </div>
    </div>
  );
};


export default CardDash;




