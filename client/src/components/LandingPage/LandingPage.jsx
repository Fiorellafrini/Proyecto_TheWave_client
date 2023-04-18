import React from "react";
import NavVertical from "../NavVertical/NavVertical";
import SectionLogIn from "../SectionLogIn/SectionLogIn";
import SectionRegister from "../SectionRegister/SectionRegister";
import styles from "./LandingPage.module.css";
import logoPage from "../../assets/logoPage.png";
import tablaSurf from "../../assets/tablasurf.png";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("Shop");

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Invertimos el estado actual de isOpen al hacer clic en el botón
  };
  const handleNavItemClick = (item) => {
    setSelectedNavItem(item); // actualizamos el estado con la opción seleccionada
  };

  return (
    <div className={styles.containerLanding}>
      <NavVertical/>
      <div className={styles.landing}>
        <div className={styles.navHome}>
          <div className={styles.containerItems}>
            <div
              className={styles.navItems}
              onClick={() => handleNavItemClick("Shop")}
            >
              <p>Shop</p>{" "}
            </div>
            <div
              className={styles.navItems}
              onClick={() => handleNavItemClick("About Us")}
            >
              <p>About Us</p>
            </div>
            <div
              className={styles.navItems}
              onClick={() => handleNavItemClick("Log in")}
            >
              <p>Log in</p>{" "}
            </div>
            <div
              className={styles.navItems}
              onClick={() => handleNavItemClick("Register")}
            >
              <p>Register</p>{" "}
            </div>
          </div>
          <div className={styles.user}>
            <img src={logoPage} alt="" />
            <p>Autentificacion</p>
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={toggleDropdown}
              >
                <TfiMenu />
              </button>
              {isOpen && (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.menuList}>
                    <li onClick={() => handleNavItemClick("Shop")}>Shop</li>
                    <li onClick={() => handleNavItemClick("About Us")}>
                      About Us
                    </li>
                    <li onClick={() => handleNavItemClick("Log in")}>Log in</li>
                    <li onClick={() => handleNavItemClick("Shop")}>Register</li>
                    <li>Autentificacion</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.containerInfo}>
          {selectedNavItem === "Shop" && (
            <>
              <div className={styles.titulo}>
                <h1>Surf Shop & More</h1>
                <p>
                  The best page of nautical products, discover what is in our
                  stores
                </p>
                <Link to={"/SectionHome"}>
                  <button>Explorer</button>
                </Link>
              </div>
              <div className={styles.imgTabla}>
                <img src={tablaSurf} alt="" />
              </div>
            </>
          )}
          {selectedNavItem === "About Us" && (
            <div className={styles.titulo}>
              <h1>About Us</h1>
              <p className={styles.aboutUsP}>
                Bienvenido a nuestra tienda online de productos náuticos,
                especializada en surf. Somos apasionados por el mar y los
                deportes acuáticos, y queremos compartir nuestra pasión contigo
                ofreciéndote los mejores productos para disfrutar de tus
                sesiones de surf. En nuestra tienda encontrarás una amplia
                selección de productos de alta calidad, desde tablas de surf y
                accesorios, hasta trajes de neopreno y complementos para
                protegerte del sol y el viento. Trabajamos con las mejores
                marcas del mercado, garantizándote productos duraderos y de
                excelente rendimiento. Además, contamos con un equipo de
                expertos en surf que estarán encantados de asesorarte y ayudarte
                en todo lo que necesites para elegir el equipo perfecto para ti.
                Ofrecemos envío gratuito en pedidos superiores a cierta
                cantidad, y estamos comprometidos con la satisfacción de
                nuestros clientes, por lo que si no estás satisfecho con tu
                compra, puedes devolverla sin problemas. Únete a nuestra
                comunidad de surfistas y descubre lo que tenemos para ofrecerte.
                ¡Gracias por elegirnos!
              </p>
            </div>
          )}
          {selectedNavItem === "Log in" && <SectionLogIn />}
          {selectedNavItem === "Register" && <SectionRegister />}
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
