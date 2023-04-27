/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import styles from "../NavVertical/NavVertical.module.css";
import menu from "../../assets/menu.png";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const NavVertical = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.item1}>
          <Link to={"/"}>
            <img src={menu} alt="" />
          </Link>
        </div>
        <div className={styles.item3}>
          <a onClick={scrollToTop} className={styles.scrollDown}>
            <span></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavVertical;
