import React, {useEffect} from 'react'
import {productsById} from '../../redux/actions.js'
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router'
import styles from './Detail.module.css'
import visa from './iconos/visa.png' 
import master from './iconos/master.png'

function Detail() {
const dispatch = useDispatch()
const detalle = useSelector((state) => state.detail);
const {id} = useParams()



  useEffect(() => {
    dispatch(productsById(id));
  }, [dispatch,id]);

  return (
    <div className={styles.cuadrado1}>
      <div className={styles.imag}>
        {detalle.imagen?.map((imagen) => (
          <div className={styles.imagenT}>
            <img key={detalle.id} src={imagen} alt="imagen" />
          </div>
        ))}
        <div className={styles.granImagen}>"imagen selecionada"</div>
        <div className={styles.pago}>
          <h2 id={styles.megusta}>❤️</h2>
          <h1 id={styles.name}>
            <b>{detalle?.name}</b>
          </h1>
          <p id={styles.precio}>
            <b>$ {detalle?.price}</b>
          </p>
          <span>
            <b>Talla {detalle?.size}</b>
          </span>
          <div className={styles.metodo}>
            <p id={styles.cuotas}>Hasta 48 cuotas</p>
            <img src={visa} alt="visa" />
            <img src={master} alt="card" />
          </div>
          <p id={styles.envio}>Envío gratis a nivel nacional</p>
          <p id={styles.devolucion}>Devolución gratis</p>
          <p id={styles.dias}>Tienes 30 días desde que lo recibes.</p>
          <button id={styles.comprar}>Comprar ahora</button>
          <button id={styles.carrito}>Agregar al carrito</button>
          <p id={styles.protegida}>
            <b>Compra Protegida</b>, recibe el producto <br /> que esperabas o
            te devolvemos tu dinero.
          </p>
          <p id={styles.garantia}>
            <b>90 días de garantía de fábrica.</b>
          </p>
        </div>
      </div>
      <div className={styles.comentario}></div>
    </div>
  );
}

export default Detail
