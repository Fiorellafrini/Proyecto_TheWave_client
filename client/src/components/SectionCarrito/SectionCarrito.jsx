import React, { useState, useEffect } from "react";

import styles from "../SectionCarrito/SectionCarrito.module.css";

const SectionCarrito = () => {
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
        <>
          <h1 className={styles.titulo}>Section Carrito</h1>
        </>
      )}
    </>
  );
};

export default SectionCarrito;
