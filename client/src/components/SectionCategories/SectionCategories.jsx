import React, { useEffect, useState } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";
import SearchBar from "../SearchBar/SearchBar";

import { useDispatch } from "react-redux";
import { orderByName, orderByPrice } from "../../redux/actions";
import Infinite from "../InfiniteScroll/InfiniteScroll";
import FiltroMarca from "../Filtros/FiltroMarca";
import FiltroType from "../Filtros/FiltroType";
import Navigation from "../Navigation/Navigation";
import Publicidad from "../Publicidad/Publicidad";

const SectionCategories = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    e.target.name === "orderByName" && dispatch(orderByName(e.target.value));

    e.target.name === "orderByPrice" && dispatch(orderByPrice(e.target.value));
  };

  return (
    <>
      {loading ? (
        <div className={styles.containerSpinner}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.container}>
          <Navigation />
          <Publicidad />
          <div className={styles.products}>
            <div className={styles.bar}>
              <SearchBar />
              <div className={styles.filters}>
                <select
                  name="orderByName"
                  defaultValue="order"
                  onChange={handleChange}
                >
                  <option disabled value="order">
                    Order Name
                  </option>
                  <option value="nameAsc">A - Z</option>
                  <option value="nameDesc">Z - A</option>
                </select>
                <select
                  name="orderByPrice"
                  defaultValue="price"
                  onChange={handleChange}
                >
                  <option disabled value="price">
                    Price
                  </option>
                  <option value="priceAsc">Price Lower</option>
                  <option value="priceDesc">Price Higher</option>
                </select>
                <div className={styles.filtros}>
                  <FiltroMarca />
                  <FiltroType />
                </div>
              </div>
            </div>
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
