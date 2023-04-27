import React from "react";
// import SectionLogIn from "../SectionLogIn/SectionLogIn";
// import SectionRegister from "../SectionRegister/SectionRegister";
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
  const navgigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };
  const handleLogin = () => {
    navgigate("/SectionLogIn");
  };
  const handleLogout = () => {
    window.localStorage.removeItem("login");
    navgigate("/");
  };

  return (
    <div className={styles.containerLanding}>
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
                        <li onClick={() => handleLogin("Log in")}>
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
              Welcome to our online store of nautical products,
                specialized in surfing. We are passionate about the sea and the
                water sports, and we want to share our passion with you
                offering you the best products to enjoy your
                surf sessions. In our store you will find a wide
                selection of high quality products, from surfboards and
                accessories, even wetsuits and accessories for
                protect you from the sun and wind. We work with the best
                brands in the market, guaranteeing you long-lasting and high-quality products.
                excellent performance. In addition, we have a team of
                surf experts who will be happy to advise and help you
                in everything you need to choose the perfect equipment for you.
                We offer free shipping on orders over a certain
                quantity, and we are committed to the satisfaction of
                our customers, so if you are not satisfied with your
                purchase, you can return it without problems. join our
                surfing community and discover what we have to offer you.
               
                Thank you for choosing us!
              </p>
            </div>
          )}
        </div>
        {/* {selectedNavItem === "Log in" && <SectionLogIn />}
        {selectedNavItem === "Register" && <SectionRegister />} */}
      </div>
    </div>
  );
};
export default LandingPage;
