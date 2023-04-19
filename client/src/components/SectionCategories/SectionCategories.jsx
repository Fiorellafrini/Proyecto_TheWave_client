import React, { useEffect, useState } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Navigation/Navigation";
import { useDispatch } from "react-redux";
import {
  filterByNameAsc,
  filterByNameDesc,
  filterByPriceAsc,
  filterByPriceDesc,
} from "../../redux/actions";

import Infinite from "../InfiniteScroll/InfiniteScroll";
import Filtro_Marca from "../Filtros/Filtro_Marca";
import Filtro_Type from "../Filtros/Filtro_Type";
const SectionCategories = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.container}>
          <Navigation/>
          <div className={styles.products}>
            <div className={styles.filters}>
              <h1>Products</h1>
              <SearchBar />
              <p>byName</p>
              <button onClick={() => dispatch(filterByNameAsc())}>
                ascendente
              </button>
              <button onClick={() => dispatch(filterByNameDesc())}>
                descendente
              </button>
              <p>byPrice</p>
              <button onClick={() => dispatch(filterByPriceAsc())}>
                ascendente
              </button>
              <button onClick={() => dispatch(filterByPriceDesc())}>
                descendente
              </button>
            </div>
            <Filtro_Marca className={styles.filtros}></Filtro_Marca>
            <Filtro_Type className={styles.filtros}></Filtro_Type>
            <div className={styles.containerProducts}>
              <Infinite />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCategories;
