// import React from 'react'
import EstadisticasBar from './EstadisticasBar'
import EstadisticasTorta from './EstadisticasTorta';
import styles from './Estadisticas.module.css';

// import { useState } from 'react'
// import { DataStats } from './DataStats'
// import { Chart, Line, Bar } from "react-chartjs-2";


//listDetail() trae las compras 
//listProducts() trae prodcutos


function Estadisticas() {
   
  
  return (
    <div>
      <h3 className={styles.titulo}>Stocks for Product</h3>
      <EstadisticasBar />
      <h3 className={styles.titulo}>Price</h3>
      <EstadisticasTorta />
      
      </div>
    
  )
}

export default Estadisticas
