import React from "react";
// import Navigation from "../Navigation/Navigation";
// import styles from "../FormProduct/FromProduct.module.css";
// import Sidebar from "../Dashboard/Sidebar";
import FormBrand from "./FormBrand";
import FormDescription from "./FormDescription";
import FormImage from "./FormImage";
import FormName from "./FormName";
import FormPrice from "./FormPrice";
import FormSize from "./FormSize";
import FormStock from "./FormStock";
import FormType from "./FormType";
import styles from "./CardDashEdit.module.css";

const CardDashEdit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formulario}>
          <FormName />
        </div>
        <div className={styles.formulario}>
          <FormImage />
        </div>
        <div className={styles.formulario}>
          <FormPrice />
        </div>
        <div className={styles.formulario}>
          <FormStock />
        </div>
        <div className={styles.formulario}>
          <FormBrand />
        </div>
        <div className={styles.formulario}>
          <FormDescription />
        </div>
        <div className={styles.formulario}>
          <FormType />
        </div>
        <div className={styles.formulario}>
          <FormSize />
        </div>
      </div>
    </div>
  );
};

export default CardDashEdit;
