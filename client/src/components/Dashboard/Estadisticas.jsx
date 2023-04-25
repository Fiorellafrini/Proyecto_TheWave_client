import React from 'react'
import styles from './Estadisticas.module.css';


function Estadisticas() {
  return (
	  <table className={styles.table}>
		  <thead>
			  <tr>
				  <th>Usuarios</th>
				  <th>Visitas</th>
				  <th>Publicaciones</th>
			  </tr>
		  </thead>
		  <tbody>
			  <tr>
                 <td >7</td>
                 <td >309</td>
                 <td >27</td>
             </tr>
		  </tbody>
      </table>
	  
//    <div class="container">
    
//     <div class="row">

// 	<div class="four col-md-3">
// 		<div class="counter-box colored">
// 			<i class="fa fa-thumbs-o-up"></i>
// 			<span class="counter">2147</span>
// 			<p>Visitas</p>
// 		</div>
// 	</div>
// 	<div class="four col-md-3">
// 		<div class="counter-box">
// 			<i class="fa fa-group"></i>
// 			<span class="counter">3275</span>
// 			<p>Reservas</p>
// 		</div>
// 	</div>
// 	<div class="four col-md-3">
// 		<div class="counter-box">
// 			<i class="fa  fa-shopping-cart"></i>
// 			<span class="counter">289</span>
// 			<p>publicaciones</p>
// 		</div>
// 	</div>
// 	<div class="four col-md-3">
// 		<div class="counter-box">
// 			<i class="fa  fa-user"></i>
// 			<span class="counter">1563</span>
// 			<p>Usuarios</p>
// 		</div>
// 	</div>
//   </div>	
// </div>
  )
}

export default Estadisticas
