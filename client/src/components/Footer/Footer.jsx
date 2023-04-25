import React from "react";
import styles from "./Footer.module.css";
import logoPage from "../../assets/logoPage.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
            <img src={logoPage} alt="" />
            <p>
              "Find everything you need for your adventures at sea in The Wave
              Nautical Store."
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>About Us</h4>
            <p>
              We are a nautical shop specialized in the sale of High quality for
              navigation. Our passion for the sea and the Navigation leads us to
              offer the best selection of products to meet the needs of our
              customers.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact us</h4>
            <p>Email: pfthewhave@gmail.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Andress: 123 Main St, Miami, FL 33131</p>
          </div>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.col12}>
          <hr className={styles.hr} />
          <p className={styles.textCenter}>
            Copyright © 2023 | The Wave Nautical Store | All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
