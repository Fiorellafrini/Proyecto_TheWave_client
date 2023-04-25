import axios from "axios";
import styles from "./CardDash.module.css";
import React, {useState} from "react";
import durability from "../../assets/durability.png";
import hurleyCard from "../../assets/hurleyCard.png";

const CardDash = ({name, size, price, imagen, id}) => {
  const [imageSrc] = useState(imagen[0]);

   const [isDeleted, setIsdeleted] = useState();

  const local = "http://localhost:3000";
   const deleteProp = async (id, boolean) => {
     axios
       .put(`${local}/admin/property/${id}?soft_delete=${boolean}`)
       .then((response) => {
         console.log(response.data);
       });
   };
 const onClose = async () => {
     if (isDeleted) {
       setIsdeleted(false);
       await deleteProp(id, false);
     } else {
       setIsdeleted(true);
       await deleteProp(id, true);
     }
  };

//   return (
//     <div>
      // {isDeleted ? (
      //   <>
      //     <button onClick={() => onClose(id)}> Restaurar </button>
      //     <ImageWrapper>
      //       <ImageBYC
      //         src={imagen[0]}
      //         alt="imagen"     
      //         onError={(e) => (e.target.src = `${Error}`)}
      //       />
      //     </ImageWrapper>
      //   </>
      // ) : (
      //   <>
      //     <button onClick={() => onClose(id)}> Eliminar </button>
      //     <ImageWrapper>
      //       <Image
      //         src={imagen[0]}
      //         alt="imagen"
      //         onError={(e) => (e.target.src = `${Error}`)}
      //       />
      //     </ImageWrapper>
      //   </>
      // )}

//       <Details>
//         <Location>
//           {name}, {size}, {imagen}
//         </Location>
//         <Price>${price}</Price>
//       </Details>
//     </div>
//   );
// };

// import {Link} from "react-router-dom";

  return (
    <div className={styles.containerCard}>
        {isDeleted ? (
        <>
          <button onClick={() => onClose(id)}> Restaurar </button>
        </>
      ) : (
        <>
            <button className={styles.eliminar} onClick={() => onClose(id)}> Eliminar </button>
        </>
      )}

        <div className={styles.cuadrado1}>
          <div className={styles.imgCuadrado1}>
            <img src={hurleyCard} alt="#" />
          </div>
        </div>
        <div className={styles.cuadrado2}>
          <div className={styles.col1}>
            <img src={imageSrc} alt={name} />
          </div>
          <div className={styles.col2}>
            <div className={styles.fila1}>
              <h1>{name}</h1>
              <p>${price}</p>
            </div>
            <div className={styles.fila2}>
              <div className={styles.size}>
                <h1>WEIST</h1>
                <p>{size}</p>
              </div>
              <hr />
              <div>
                <img src={durability} alt="" />
              </div>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default CardDash;
/*
const Container = styled.div`
  display: flex;
  flex-direction: column;
  .boton {
    --c: #ffb9e4;
    box-shadow: 25px inset var(--c);
    --_g: linear-gradient(var(--c) 0 0) no-repeat;
    background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
      var(--_g) calc(200% - var(--_p, 0%)) 0%,
      var(--_g) calc(var(--_p, 0%) - 100%) 100%,
      var(--_g) calc(200% - var(--_p, 0%)) 100%;
    background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
    outline-offset: 0.1em;
    transition: background-size 0.4s, background-position 0s 0.4s;
  }
  button:hover {
    --_p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }
  button:active {
    box-shadow: 25px inset #0009;
    background-color: var(--c);
    color: #ffb9dc;
    font-size: 10px;
  }
  body {
    height: 100vh;
    margin: 0;
    display: grid;
    place-content: center;
    grid-auto-flow: column;
    gap: 40px;
    background: #f2a2dd;
  }
  button {
    font-family: system-ui, sans-serif;
    font-size: 14px;
    cursor: pointer;
    padding: 0.1px.6px;
    font-weight: bold;
    border: none;
  }
  .boton {
    color: red;
  }
`;

const ImageWrapper = styled.div`
  height: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5em;
`;

const ImageBYC = styled.img`
  width: 80%;
  height: 80%;
  margin: 30px;
  object-fit: cover;
  border-radius: 0.5em;
  filter: grayscale(100%);
`;

const Details = styled.div`
  margin-top: 1em;
  color: #000;
`;

const Location = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5em; ;
`;

const Price = styled.span`
  font-size: 1rem;
`;
*/

