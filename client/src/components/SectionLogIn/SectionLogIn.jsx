import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "../SectionLogIn/SectionLogIn.module.css";

const SectionLogIn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
          <div className={styles.container}>
          <Navigation/>
          <h1 className={styles.titulo}>Section Login</h1>
        </div>
      )}
    </>
  );
};

export default SectionLogIn;
