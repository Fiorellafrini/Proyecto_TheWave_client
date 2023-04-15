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
} from "../../redux/actions";

const SectionCategories = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

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
