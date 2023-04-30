import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import logoPage from "../../assets/logoPage.png";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import perfil from "../perfil//perfil.png";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userCartShopping = useSelector((state) => state.products.shoppingCart);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.closest(`.${styles.dropdownMenu}`)) return;
    setIsOpen(false);
  };
  let isLoguin = window.localStorage.getItem("login");

  const navegar = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("login");
    navegar("/");
  };

  if (isLoguin) {
    const user = jwt(isLoguin);
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
            <Link to={"/SectionHome"}>
              <img src={logoPage} alt="" />
            </Link>
          </div>
          <div className={styles.column}>
            <Link to={"/Favorites"}>
              <p>Favorites</p>
            </Link>
          </div>
          <div className={styles.columnFinal}>
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={toggleDropdown}
              >
                <img src={user.photo ? user.photo : perfil} alt="foto" />
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
                      <Link to={"/MyProfile"}>
                        <li>My Profile</li>
                      </Link>{" "}
                      <Link to={"/ShopDetail"}>
                        <li>My Payments</li>
                      </Link>
                      <li onClick={handleLogout}>Log out</li>
                    </ul>
                  </div>
                ))}
            </div>
            <div className={styles.cart}>
              <Link to={"/SectionCarrito"}>
                <HiShoppingCart style={{ color: "#ffffffb7" }} />
              </Link>
              {userCartShopping.length > 0 && (
                <div className={styles.cartCount}>
                  {userCartShopping.length}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.nav2}>
          <div className={styles.columnResponsive}>
            <img src={logoPage} alt="" />
          </div>
          <div className={styles.columnResponsive}>
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
  } else {
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
            <Link to={"/SectionHome"}>
              <img src={logoPage} alt="" />
            </Link>
          </div>
          <div className={styles.column}>
            <Link to={"/Favorites"}>
              <p>Favorites</p>
            </Link>
          </div>
          <div className={styles.columnFinal}>
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={toggleDropdown}
              >
                <AiOutlineUserSwitch />
              </button>
              {isOpen &&
                (!isLoguin ? (
                  <div className={styles.dropdownMenu}>
                    <ul className={styles.menuList}>
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
                      <Link to={"/ShopDetail"}>
                        <li>My Payments</li>
                      </Link>
                      <Link to={"/SectionCarrito"}>
                        <li>Shopping Cart</li>
                      </Link>
                      <button onClick={handleLogout}>Log out</button>
                    </ul>
                  </div>
                ))}
            </div>
            <div className={styles.cart}>
              <Link to={"/SectionCarrito"}>
                <HiShoppingCart style={{ color: "#ffffffb7" }} />
              </Link>
              {userCartShopping.length > 0 && (
                <div className={styles.cartCount}>
                  {userCartShopping.length}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.nav2}>
          <div className={styles.columnResponsive}>
            <img src={logoPage} alt="" />
          </div>
          <div className={styles.columnResponsive}>
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
  }
};

export default Navigation;
