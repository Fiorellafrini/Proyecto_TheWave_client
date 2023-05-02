import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions.js";
import Error404 from "../Error404/Error404";
import Paginado from "../Paginado/Paginado";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./InfiniteScroll.module.css";



const Infinite = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products.products);
  // const setPage = useSelector((state) => state.products.page);
  const filters = useSelector((state) => state.products.filters);
  const page = useSelector((state) => state.products.setPage);
  const [loaded, setLoaded] = useState(false); // agregar estado local

  useEffect(() => {
    if (!loaded) { // si los productos no se han cargado sin filtro la primera vez
      dispatch(listProducts({}, 1)); // cargar todos los productos sin filtro
      setLoaded(true); // cambiar el estado a true para evitar cargarlos de nuevo
    } else { // si ya se cargaron todos los productos sin filtro la primera vez
      if (!filters) { // si no hay filtros aplicados
        dispatch(listProducts({}, page)); // cargar todos los productos con la página actual
      } else { // si hay filtros aplicados
        dispatch(listProducts(filters, page)); // cargar los productos filtrados con la página actual
      }
    }
  }, [dispatch, filters, page, loaded]);

  const activeProductos = productos.filter((product) => product.active);

  const lastIndex = page * 8;
  const firstIndex = lastIndex - 8;



// const Infinite = () => {
//   const dispatch = useDispatch();
//   const productos = useSelector((state) => state.products.products);
//   const setPage = useSelector((state) => state.products.setPage);

//   const lastIndex = setPage * 8;
//   const firstIndex = lastIndex - 8;

//   useEffect(() => {
//     dispatch(listProducts());
//     dispatch(setCurrentPage(1));
//     // console.log(currentPage);
//   }, [dispatch]);



//   const activeProductos = productos.filter((product) => product.active);

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
