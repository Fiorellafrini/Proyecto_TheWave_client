import React from "react";
import NavVertical from "../NavVertical/NavVertical";
import SectionHome from "../SectionHome/SectionHome";
import SectionCategories from "../SectionCategories/SectionCategories";
import SectionCourses from "../SectionCourses/SectionCourses";
import SectionCarrito from "../SectionCarrito/SectionCarrito";
import SectionLogIn from "../SectionLogIn/SectionLogIn";
import SectionRegister from "../SectionRegister/SectionRegister";
import logoPage from "../../assets/logoPage.png";
import carrito from "../../assets/carrito.png";
import styles from "../HomePage/HomePage.module.css";
import { useState } from "react";

const HomePage = () => {
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
            <p onClick={() => handleNavItemClick("Home")}>Home</p>
            <p onClick={() => handleNavItemClick("Categories")}>Categories</p>
            <p onClick={() => handleNavItemClick("Courses")}>Courses</p>
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
          {selectedNavItem === "Home" && <SectionHome />}
          {selectedNavItem === "Categories" && <SectionCategories/>}
          {selectedNavItem === "Courses" && <SectionCourses/>}
          {selectedNavItem === "Log in" && <SectionLogIn/>}
          {selectedNavItem === "Register" && <SectionRegister/>}
          {selectedNavItem === "Carrito" && <SectionCarrito/>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
