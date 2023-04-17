import styles from "../CarruselProducts/CarruselProducts.module.css";
import { useState, useEffect, useRef } from "react";
import diets from "./img";
import Error404 from "../Error404/Error404";

const CarruselProducts = () => {
  const carruselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carrusel = carruselRef.current;
    let interval = null;
    let step = 1;

    const start = () => {
      interval = setInterval(() => {
        carrusel.scrollLeft += step;
        if (
          carrusel.scrollLeft >=
          carrusel.scrollWidth - carrusel.clientWidth
        ) {
          carrusel.scrollLeft = 0;
        }
      }, 30);
    };

    const stop = () => {
      clearInterval(interval);
    };

    if (!isPaused) {
      start();
    }

    return () => {
      stop();
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.productosDestacados}>
        <p>FEATURED PRODUCTS</p>
        <hr />
      </div>
      <div
        className={styles.carruselItems}
        ref={carruselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {diets.length !== 0 ? diets.map((element, i) => (
          <div key={i} className={styles.carruselItem}>
            <img className={styles.img} src={element.src} alt="" />
          </div>
        )) : <Error404/>}
      </div>
    </div>
  );
};

export default CarruselProducts;
