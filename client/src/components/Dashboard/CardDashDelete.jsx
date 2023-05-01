import axios from "axios";
import styles from "./CardDash.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";

const CardDashDelete = ({ id }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const isDeleted = JSON.parse(localStorage.getItem(`product_${id}`));
    setIsDeleted(isDeleted || false); // si el valor recuperado es null o algún otro valor falsy, entonces false se utilizará como valor predeterminado
  }, [id]);

  const toggleProductActive = async (id, active) => {
    try {
      await axios.put(`/product/active/${id}`, { active: active });
      setIsDeleted(!isDeleted);
      console.log("successfully modified product");

      // Guarda el valor en localStorage
      localStorage.setItem(`product_${id}`, JSON.stringify(!isDeleted));
    } catch (error) {
      console.error("Error changing product activation", error);
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
        <button className={styles.eliminar} onClick={onClose}>
          {" "}
          <VscDebugRestart />{" "}
        </button>
      ) : (
        <button className={styles.eliminar} onClick={handleDelete}>
          {" "}
          <MdDelete />{" "}
        </button>
      )}
    </div>
    
  );
};

export default CardDashDelete;

