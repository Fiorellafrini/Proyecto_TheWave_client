import styles from "./CardDash.module.css";
import React from "react";
import {FiEdit} from "react-icons/fi"

const CardDashEdit = () => {

  return (
    <div>
        <button className={styles.editar}>
          <FiEdit/>
        </button>
    </div>
  );
};

export default CardDashEdit;
