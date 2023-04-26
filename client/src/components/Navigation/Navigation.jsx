import React, { useState } from "react";
import styles from "./Navigation.module.css";
import logoPage from "../../assets/logoPage.png";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  let isLoguin = window.localStorage.getItem("login");
  
  const navegar = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    const handleLogout = () => {
      window.localStorage.removeItem("login");
      navegar("/");
    };
  return (
    <div className={styles.containerNav}>
      <div className={styles.nav}>
        <div className={styles.column}>
          <Link to={"/SectionHome"}>
            <p>Home</p>
          </Link>
        </div>
        <div className={styles.column}>
          <Link to={"/SectionCategories"}>
            <p>Product</p>
          </Link>
        </div>
        <div className={styles.column}>
          <img src={logoPage} alt="" />
        </div>
        <div className={styles.column}>
          <Link to={"/Favorites"}>
            <p>Favorites</p>
          </Link>
        </div>
        <div className={styles.columnFinal}>
          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <AiOutlineUserSwitch />
            </button>
            {isOpen &&
              (!isLoguin ? (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.menuList}>
                    <Link to={"/SectionCarrito"}>
                      <li>Shopping Cart</li>
                    </Link>
                    <Link to={"/SectionRegister"}>
                      <li>Register</li>
                    </Link>
                    <Link to={"/SectionLogIn"}>
                      <li>Log in</li>
                    </Link>
                  </ul>
                </div>
              ) : (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.menuList}>
                    <Link to={"/My Profile"}>
                      <li>My Profile</li>
                    </Link>
                    <Link to={"/SectionCarrito"}>
                      <li>Shopping Cart</li>
                    </Link>
                    <button onClick={handleLogout}>Log out</button>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.nav2}>
        <div className={styles.columnResponsive}>
          <img src={logoPage} alt="" />
        </div>
        <div className={styles.columnResponsive}>
          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <TfiMenu />
            </button>
            {isOpen &&
              (!isLoguin ? (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.menuList}>
                    <Link to={"/SectionHome"}>
                      <li>Home</li>
                    </Link>
                    <Link to={"/SectionCategories"}>
                      <li>Product</li>
                    </Link>
                    <Link to={"/Favorites"}>
                      <li>Favorites</li>
                    </Link>
                    <Link to={"/SectionCarrito"}>
                      <li>Shopping Cart</li>
                    </Link>
                    <Link to={"/SectionRegister"}>
                      <li>Register</li>
                    </Link>
                    <Link to={"/SectionLogIn"}>
                      <li>Log in</li>
                    </Link>
                  </ul>
                </div>
              ) : (
                <div className={styles.dropdownMenu}>
                  <ul className={styles.menuList}>
                    <Link to={"/SectionHome"}>
                      <li>Home</li>
                    </Link>
                    <Link to={"/SectionCategories"}>
                      <li>Product</li>
                    </Link>
                    <Link to={"/Favorites"}>
                      <li>Favorites</li>
                    </Link>
                    <Link to={"/SectionCarrito"}>
                      <li>Shopping Cart</li>
                    </Link>
                    <button onClick={handleLogout}>Log out</button>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
