import React, { useState, useEffect } from "react";
import styles from "../SectionRegister/SectionRegister.module.css";
import Navigation from "../Navigation/Navigation";


const SectionRegister = () => {
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
          <h1 className={styles.titulo}>Section Register</h1>
        </div>
      )}
    </>
  );
};

export default SectionRegister;
