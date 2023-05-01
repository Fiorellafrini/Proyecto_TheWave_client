import axios from "axios";
import styles from "./CardDash.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";

const UserDashDelete = ({ id }) => {
    const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const isDeleted = JSON.parse(localStorage.getItem(`user_${id}`)); //Mirar si esta bien llamado el user
    setIsDeleted(isDeleted || false); // si el valor recuperado es null o algún otro valor falsy, entonces false se utilizará como valor predeterminado
  }, [id]);
    
      const toggleUserActive = async (id, active) => {
    try {
      await axios.put(`/user/active/${id}`, { active: active });
      setIsDeleted(!isDeleted);
      console.log("successfully modified user");

      // Guarda el valor en localStorage
      localStorage.setItem(`user_${id}`, JSON.stringify(!isDeleted));
    } catch (error) {
      console.error("Error changing product activation", error);
    }
    };
    
    
  const onClose = async () => {
    setIsDeleted(false);
    await toggleUserActive(id, true);

    // Guarda el valor en localStorage
    localStorage.setItem(`user_${id}`, JSON.stringify(false));
    };
    
      const handleDelete = async () => {
          await toggleUserActive(id, false);

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
}

export default UserDashDelete;