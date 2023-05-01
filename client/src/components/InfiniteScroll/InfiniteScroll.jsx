import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listProducts, setCurrentPage } from "../../redux/actions.js";
import Error404 from "../Error404/Error404";
import Paginado from "../Paginado/Paginado";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./InfiniteScroll.module.css";


const Infinite = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products.products);
  const setPage = useSelector((state) => state.products.setPage);

  const lastIndex = setPage * 8;
  const firstIndex = lastIndex - 8;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(setCurrentPage(1));
    // console.log(currentPage);
  }, [dispatch]);



  const activeProductos = productos.filter((product) => product.active);

  return (
    <>
      <Paginado total={activeProductos.length} />
      <section className={styles.linkk}>
        {activeProductos.length ? (
          activeProductos
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                size={product.size}
                imagen={product.imagen}
                quantity={product.quantity}
                stock={product.stock}
              />
            ))
            .slice(firstIndex, lastIndex)
        ) : (
          <Error404 />
        )}
      </section>
    </>
  );
        }  
export default Infinite;
