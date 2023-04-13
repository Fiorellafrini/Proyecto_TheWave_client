import React, { useEffect } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";

const SectionCategories = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <h1 className={styles.titulo}>SectionCategories</h1>
      <div className={styles.containerProducts}>
        {allProducts.map((product, i) => {
          return (
            <ProductCard
            name={product.name}
            price={product.price}
            size={product.size}
            imagen={product.imagen}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionCategories;
