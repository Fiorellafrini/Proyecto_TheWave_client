/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../NavVertical/NavVertical.module.css";
import menu from "../../assets/menu.png";
import scrollDown from "../../assets/scrollDonw.png";

const NavVertical = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.item1}>
          <img src={menu} alt="" />
        </div>
        <div className={styles.item2}>
          <p>•</p>
          <p>•</p>
        </div>
        <div className={styles.item3}>
          <img src={scrollDown} alt="" />
          <a className={styles.scrollDown}>
            <span></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavVertical;
