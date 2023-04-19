import React from "react";
import NavVertical from "../../components/NavVertical/NavVertical";
import SectionCategories from "../../components/SectionCategories/SectionCategories";
import FormProduct from "../../components/FormProduct/FromProduct";
import SectionCarrito from "../../components/SectionCarrito/SectionCarrito";
import SectionLogIn from "../../components/SectionLogIn/SectionLogIn";
import SectionRegister from "../../components/SectionRegister/SectionRegister";
import logoPage from "../../assets/logoPage.png";
import carrito from "../../assets/carrito.png";
import styles from "../../components/HomePage/HomePage.module.css";
import { useState } from "react";

const Admin = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item); // actualizamos el estado con la opción seleccionada
  };

  return (
    <div className={styles.containerHome}>
      <NavVertical />
      <div className={styles.home}>
        <div className={styles.containerNav}>
          <div className={styles.col}>
            <p onClick={() => handleNavItemClick("Categories")}>Products</p>
            <p onClick={() => handleNavItemClick("Add")}>Add Item</p>
          </div>
          <div className={styles.col}>
            <img src={logoPage} alt="" />
          </div>
          <div className={styles.col}>
            {" "}
            <p onClick={() => handleNavItemClick("Log in")}>Log in</p>
            <p onClick={() => handleNavItemClick("Register")}>Register</p>
          </div>
          <div
            className={styles.col}
            onClick={() => handleNavItemClick("Carrito")}
          >
            <img src={carrito} alt="" />
          </div>
        </div>
        <div className={styles.section}>
          {selectedNavItem === "Categories" && <SectionCategories/>}
          {selectedNavItem === "Add" && <FormProduct/>}
          {selectedNavItem === "Log in" && <SectionLogIn/>}
          {selectedNavItem === "Register" && <SectionRegister/>}
          {selectedNavItem === "Carrito" && <SectionCarrito/>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
