import React, { useEffect, useState } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";
import SearchBar from "../SearchBar/SearchBar";
// import Navigation from "../Navigation/Navigation";
import { useDispatch } from "react-redux";
import {
  // filterByNameAsc,
  // filterByNameDesc,
  // filterByPriceAsc,
  // filterByPriceDesc,
  orderByName,
  orderByPrice,
} from "../../redux/actions";

import Infinite from "../InfiniteScroll/InfiniteScroll";
import FiltroMarca from "../Filtros/FiltroMarca";
import FiltroType from "../Filtros/FiltroType";
const SectionCategories = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  function handlerOrder(e,) {
    const order = e.target.value;
    if (order === "nameAsc") {
      dispatch(orderByName("nameAsc"));
    } else if (order === "nameDesc") {
      dispatch(orderByName("nameDesc"));
    } else if (order === "priceAsc") {
      dispatch(orderByPrice("priceAsc"));
    } else if (order === "priceDesc") {
      dispatch(orderByPrice("priceDesc"));
    }
  }
  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.products}>
          <div className={styles.filters}>
            <SearchBar />
            {/* <p>Order Name</p>
            <button value="nameAsc" onChange={handlerOrder}>
              ascendente
            </button>
            <button value="nameDesc" onChange={handlerOrder}>
              descendente
            </button> */}
            <select defaultValue="order" onChange={handlerOrder}>
              <option disabled value="order">
                Order Name
              </option>
              <option value="nameAsc">A - Z</option>
              <option value="nameDesc">Z - A</option>
            </select>
            {/* <p>Order Price</p>
            <button onClick={() => dispatch(filterByPriceAsc())}>
              ascendente
            </button>
            <button onClick={() => dispatch(filterByPriceDesc())}>
              descendente
            </button> */}
            <select defaultValue="price" onChange={handlerOrder}>
              <option disabled value="price">
                Price
              </option>
              <option value="priceAsc">Price Lower</option>
              <option value="priceDesc">Price Higher</option>
            </select>
          </div>
          <FiltroMarca className={styles.filtros} />
          <FiltroType className={styles.filtros} />
          <div className={styles.containerProducts}>
            <Infinite />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCategories;
