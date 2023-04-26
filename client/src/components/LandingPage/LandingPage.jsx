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
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("Shop");
  let isLoguin = window.localStorage.getItem("login");
  const navegar = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };
  const handleNavItemClick = (item) => {
    setSelectedNavItem(item); 
  };
    const handleLogout = () => {
      window.localStorage.removeItem("login");
      navegar("/");
    };

  return (
    <div className={styles.containerLanding}>
      <NavVertical />
      <div className={styles.landing}>
        <div className={styles.navHome}>
          <div className={styles.containerNavBar}>
            <div className={styles.col}>
              <img src={logoPage} alt="" />
            </div>
            <div className={styles.col}>
              <div className={styles.dropdown}>
                <button
                  className={styles.dropdownToggle}
                  onClick={toggleDropdown}
                >
                  <TfiMenu />
                </button>
                {isOpen &&
                  (!isLoguin ? (
                    <div className={styles.dropdownMenu}>
                      <ul className={styles.menuList}>
                        <li onClick={() => handleNavItemClick("Shop")}>Shop</li>
                        <li onClick={() => handleNavItemClick("About Us")}>
                          About Us
                        </li>
                        <li onClick={() => handleNavItemClick("Log in")}>
                          Log in
                        </li>
                        <li onClick={() => handleNavItemClick("Register")}>
                          Register
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className={styles.dropdownMenu}>
                      <ul className={styles.menuList}>
                        <li onClick={() => handleNavItemClick("Shop")}>Shop</li>
                        <li onClick={() => handleNavItemClick("About Us")}>
                          About Us
                        </li>
                        <button onClick={handleLogout}>Log out</button>
                      </ul>
                    </div>
                  ))}
              </div>
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
                <button>
                  <Link to={"/SectionHome"}>Explorer</Link>
                </button>
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
