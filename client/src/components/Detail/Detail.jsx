import React, {useEffect} from 'react'
import {productsById} from '../../redux/actions.js'
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router'
import styles from './Detail.module.css'
import visa from './iconos/visa.png' 
import master from './iconos/master.png'
// import pago from './iconos/pago.png'
import {Link} from 'react-router-dom'

function Detail() {
const dispatch = useDispatch()
const detalle = useSelector((state) => state.detail);
const {id} = useParams()




  useEffect(() => {
    dispatch(productsById(id));
  }, [dispatch,id]);

  return (
    <div className={styles.cuadrado1}>
      <div className={styles.cerrar}>
        <Link to="/SectionCategories">Back</Link>
      </div>
      <div className={styles.imag}>
        {detalle.imagen?.map((imagen, i) => (
          <div className={styles.imagenT}>
            <img key={i} src={imagen} alt="imagen" />
          </div>
        ))}
        <div className={styles.granImagen}>
          {detalle.imagen?.map((imagen, i) => (
            <img  key={i} src={i === 0 ? imagen : null} alt="" />
          ))}
        </div>
        <div className={styles.pago}>
          <h2 id={styles.megusta}>.</h2>
          <h1 id={styles.name}>
            <b>{detalle?.name}</b>
          </h1>
          <p id={styles.precio}>
            <b>$ {detalle?.price} ARS</b>
          </p>
          <span>
            <b>Talla {detalle?.size}</b>
          </span>
          <div className={styles.metodo}>
            <p id={styles.cuotas}>
              <b>Payment methods</b>
            </p>
            <img src={visa} alt="visa" />
            <img src={master} alt="card" />
          </div>
          <p id={styles.envio}>Free shipping nationwide</p>
          <p id={styles.devolucion}>Free return</p>
          <p id={styles.dias}>You have 30 days from when you receive it.</p>
          <button id={styles.comprar}>Comprar ahora</button>
          <button id={styles.carrito}>Add to cart</button>
          <p id={styles.protegida}>
            <b>Protected Purchase</b>, , receive the product you expected <br /> or you
            we return your money.
          </p>
          <p id={styles.garantia}>
            <b>90 day factory warranty.</b>
          </p>
        </div>
      </div>
      <div className={styles.comentario}>
        <h2>
          <b>About this article</b>
        </h2>
        <ul>
          <li>
          Dimensions: 8 pies x 22 1/2 x 3 1/4 <br />
          weight 11.5 lbs. Volume 86 liter capacity <br /> of weight
            suggested up to 200 pounds
          </li>
          <li>
          Includes traction pad for<br />
            correa de tobillo y cubierta suave para calcetines <br />
            para protección. <br />
            ankle strap and soft sock cover
          </li>
          <li>
            Soft Webs-IXL Water Barrier Skin Crosslink
            <br />
            Top Deck and Rils High density HDPE PE Skin <br />
            Slick Bottom Skin <br />
            Exclusive Brushed Color Graphic Art Deck
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Detail
