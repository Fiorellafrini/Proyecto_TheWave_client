import React from "react";
import styles from "./Estadisticas.module.css";
import { AiFillEye, AiOutlineUser } from "react-icons/ai";
import { BiNews } from "react-icons/bi";

function Estadisticas() {
  return (
    <div>
      <div className={styles.cardBox}>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>7</div>
            <div className={styles.cardName}>Users</div>
          </div>
          <div className={styles.iconBox}>
            <AiOutlineUser />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>309</div>
            <div className={styles.cardName}>Visits</div>
          </div>
          <div className={styles.iconBox}>
            <AiFillEye />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>27</div>
            <div className={styles.cardName}>Publications</div>
          </div>
          <div className={styles.iconBox}>
            <BiNews />
          </div>
        </div>
      </div>
    </div>

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
  );
}

export default Estadisticas;
