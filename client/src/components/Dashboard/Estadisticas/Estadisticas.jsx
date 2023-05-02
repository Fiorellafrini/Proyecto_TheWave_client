import EstadisticasBar from "./EstadisticasBar";
import EstadisticasTorta from "./EstadisticasTorta";
import EstadisticasLine from "./EstadisticasLine";
import styles from "./Estadisticas.module.css";

function Estadisticas() {
  return (
    <div className={styles.container}>
      <div className={styles.containerStats}>
        <div className={styles.bar}>
          <div className={styles.stats}>
            <EstadisticasBar />
          </div>
          <div className={styles.stats}>
            <EstadisticasLine />
          </div>
        </div>
        <div className={styles.pie}>
          <EstadisticasTorta />
        </div>
      </div>
    </div>
  );
}

export default Estadisticas;
