
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch, useSelector} from "react-redux";
import { listProducts, setCurrentPage} from "../../redux/actions";
import Paginado from "../Paginado/Paginado";
import styles from './CardsDash.module.css'
import Error404 from "../Error404/Error404";
import CardDash from "./CardDash";


const CardsDash= () => {
  const dispatch = useDispatch()
  const productos = useSelector((state) => state.products.products);
  const setPage = useSelector((state) => state.products.setPage);
    const lastIndex = setPage * 8;
    const firstIndex = lastIndex - 8;

  useEffect(()=>{
    dispatch(listProducts());
    dispatch(setCurrentPage(1))
  },[dispatch])

  return (
    <>
      <Paginado total={productos.length} />
      {/* <InfiniteScroll
        dataLength={productos.length}
        next={() => dispatch(setCurrentPage(currentPage))}
        hasMore={true}
        loader={productos.length >= productos ? "" : <h4>Loading...</h4>}
      > */}
      <section className={styles.linkk}>
        
        {productos.length ? productos
          .map((product) => (
            <Link to={`/detail/${product.id}`} key={product.id}>
              <CardDash
                key={product.id}
                name={product.name}
                price={product.price}
                size={product.size}
                imagen={product.imagen}
              />
            </Link>
          ))
          .slice(firstIndex, lastIndex)
        : <Error404/>}
      </section>
      {/* </InfiniteScroll> */}
    </>
  );
};
export default CardsDash;

