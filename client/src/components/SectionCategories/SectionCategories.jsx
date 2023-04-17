import React, { useEffect, useState } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  filterByNameAsc,
  filterByNameDesc,
  filterByPriceAsc,
  filterByPriceDesc,
  filterByType,
} from "../../redux/actions";

// import Infinite from "../InfiniteScroll/InfiniteScroll";

const SectionCategories = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const filterProducts = useSelector((state) => state.allProduct);
  const [loading, setLoading] = useState(true);

  const filterByTypes = (e) => {
    dispatch(filterByType(e.target.value));
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
            <p>byType</p>
            <select name="" id="" onChange={(e) => filterByTypes(e)}>
              <option value="1">Aletas de buceo</option>
              <option value="2">Traje De Neopreno</option>
              <option value="3">Tabla de Stand Up Paddle</option>
              <option value="4">Tabla de Surf</option>
              <option value="5">Tabla de WakeBoard</option>
              <option value="allTypes">All Types</option>
            </select>
          </div>
          <div className={styles.containerProducts}>
            {allProducts?.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  name={product.name}
                  price={product.price}
                  size={product.size}
                  // imagen={product.imagen}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionCategories;
