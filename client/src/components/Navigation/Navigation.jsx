import React, { useState } from "react";
import { Link } from "react-router-dom";
import carrito from "../../assets/carrito.png";
import logoPage from "../../assets/logoPage.png";
import SectionLogIn from "../SectionLogIn/SectionLogIn";
import styles from "./Navigation.module.css";


const Navigation = () => {

  const [cerrar , setcerrar]=useState(false)

  const handelcerrar = ()=>{
    setcerrar(true)
  }

   

  return (
    <div className={styles.containerNav}>
      <div className={styles.col}>
        <Link to={"/SectionHome"}>
          <p>Home</p>
        </Link>
        <Link to={"/SectionCategories"}>
          <p>Products</p>
        </Link>
        <Link to={"/form"}>
        <p>Add product</p>
      </Link>
      </div>
      <div className={styles.col}>
        <img src={logoPage} alt="" />
      </div>
      <Link to={"/SectionCarrito"}>
        <div className={styles.col}>
          <img src={carrito} alt="" />
        </div>
      </Link>
      <div className={styles.color}>
        <button id={styles.boton} onClick={handelcerrar}>
          {cerrar && <SectionLogIn setcerrar={setcerrar} />}
          Perfil
        </button>
      </div>
      <Link to={"/Favorites"}>
          <p>🤍</p>
        </Link>
    </div>
  );
};

export default Navigation;
