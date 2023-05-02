import React from "react";
import { useSelector } from "react-redux";
import styles from "./Estadisticas.module.css";
import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineShoppingBasket } from "react-icons/md";


function Estadisticas() {

  const users = useSelector(state => state.products.users); // Accedes a la lista de usuarios almacenada en el store
  const productos = useSelector((state) => state.products.products);

  return (
    <div>
      <div className={styles.cardBox}>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>{users.length}</div> {/* Muestras la cantidad de usuarios */}
            <div className={styles.cardName}>Users</div>
          </div>
          <div className={styles.iconBox}>
            <AiOutlineUser />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>309</div>
            <div className={styles.cardName}>Daily Views</div>
          </div>
          <div className={styles.iconBox}>
            <AiOutlineEye />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>{productos.length}</div>
            <div className={styles.cardName}>Products</div>
          </div>
          <div className={styles.iconBox}>
            <MdOutlineShoppingBasket />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>2227</div>
            <div className={styles.cardName}>Comments</div>
          </div>
          <div className={styles.iconBox}>
            <GoCommentDiscussion />
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
