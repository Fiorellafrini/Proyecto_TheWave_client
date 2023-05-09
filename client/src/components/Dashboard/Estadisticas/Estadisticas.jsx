import EstadisticasBar from "./EstadisticasBar";
import EstadisticasTorta from "./EstadisticasTorta";
// import EstadisticasLine from "./EstadisticasLine";
import styles from "./Estadisticas.module.css";

//listDetail() trae las compras 
//listProducts() trae prodcutos


function Estadisticas() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.statsBar}>
          <EstadisticasBar />
        </div>
      </div>
      <div className={styles.containerStats}>
        <div className={styles.pie}>
          <EstadisticasTorta />
        </div>
        {/* <div className={styles.statsLine}>
          <EstadisticasLine />
        </div> */}
      </div>
    </div>
  );
}

export default Estadisticas;
