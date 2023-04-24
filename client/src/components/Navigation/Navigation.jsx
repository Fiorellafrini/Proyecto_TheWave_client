import React, {useState} from "react";
import styles from "./Navigation.module.css";
import logoPage from "../../assets/logoPage.png";
import carrito from "../../assets/carrito.png";
import { Link } from "react-router-dom";
import SectionLogIn from "../SectionLogIn/SectionLogIn";


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
      </div>
      <div className={styles.col}>
        <img src={logoPage} alt="" />
      </div>{" "}
      <div className={styles.col}>
        <Link to={"/Favorites"}>
          <p>Favorites</p>
        </Link>
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
    </div>
  );
};

export default Navigation;
