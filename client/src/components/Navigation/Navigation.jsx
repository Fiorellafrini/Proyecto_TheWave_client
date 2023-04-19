import React from "react";
import styles from "./Navigation.module.css";
import logoPage from "../../assets/logoPage.png";
import carrito from "../../assets/carrito.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.containerNav}>
      <div className={styles.col}>
        <Link to={"/SectionHome"}>
          <p>Home</p>
        </Link>
        <Link to={"/SectionCategories"}>
          <p>Products</p>
        </Link>
        <Link to={"/Form"}>
          <p>Add Item</p>
        </Link>
      </div>
      <div className={styles.col}>
        <img src={logoPage} alt="" />
      </div>
      <div className={styles.col}>
        <Link to={"/SectionLogIn"}>
          <p>Log in</p>
        </Link>{" "}
        <Link to={"/SectionRegister"}>
          <p>Register</p>
        </Link>{" "}
      </div>
      <Link to={"/SectionCarrito"}>
        <div className={styles.col}>
          <img src={carrito} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
