import React, { useEffect } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions";

const SectionCategories = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1 className={styles.titulo}>SectionCategories</h1>
      <div className={styles.containerProducts}>
        {allProducts?.map((product, i) => {
          return (
            <>
              <ProductCard
                key={i}
                name={product.name}
                price={product.price}
                size={product.size}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default SectionCategories;
