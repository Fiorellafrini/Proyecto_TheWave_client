import React from "react";
// import Navigation from "../Navigation/Navigation";
import styles from "../FormProduct/FromProduct.module.css";
// import Sidebar from "../Dashboard/Sidebar";
import FormBrand from "./FormBrand";
import FormDescription from "./FormDescription";
import FormImage from "./FormImage";
import FormName from "./FormName";
import FormPrice from "./FormPrice";
import FormSize from "./FormSize";
import FormStock from "./FormStock";
import FormType from "./FormType";

const CardDashEdit = () => {

  return (
    <div className={styles.container}>
      {/* <Navigation /> */}
      <div>
        <FormName />
        <FormPrice />
        <FormDescription />
        <FormImage />
        <FormStock />
        <FormBrand />
        <FormType />
        <FormSize />
      </div>
    </div>
  );
};

export default CardDashEdit;
