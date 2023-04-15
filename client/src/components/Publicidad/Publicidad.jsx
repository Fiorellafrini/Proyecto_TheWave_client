import React, { useState, useEffect } from "react";
import imagen1 from "../../assets/hurley.png";
import imagen2 from "../../assets/tablaPublicidad.png";
import imagen3 from "../../assets/ripcurl.png";
import imagen4 from "../../assets/tablaPublicidad2.png";
import { ImArrowRight } from "react-icons/im";
import styles from "../Publicidad/Publicidad.module.css";

const Publicidad = () => {
  const [publicidadImages, setPublicidadImages] = useState([
    imagen1,
    imagen2,
    imagen3,
    imagen4,
  ]);

  const handlePublicidadArrow = () => {
    setPublicidadImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.push(newImages.shift());
      newImages.push(newImages.shift());
      return newImages;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(handlePublicidadArrow, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className={styles.containerPublicidad}>
        <div className={styles.col1}>
          <img src={publicidadImages[0]} alt="" />
        </div>
        <div className={styles.col2}>
          <img src={publicidadImages[1]} alt="" />
        </div>
        <div className={styles.col3}>
          <ImArrowRight onClick={handlePublicidadArrow} />
        </div>
      </div>
    </>
  );
};

export default Publicidad;
