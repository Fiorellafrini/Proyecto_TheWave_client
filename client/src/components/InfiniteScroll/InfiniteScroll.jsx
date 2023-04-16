import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from "../ProductCard/ProductCard";


const Infinite = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

    async function fetchItems(page) {
      await fetch(`http://localhost:3001/product?page=${page}&size=5`)
        .then((response) => response.json())
        .then((data) => {
          setProducts([...products, ...data.products]);
          setTotalProducts(data.total);
        })
        .catch((error) => console.error(error));
    }
  
    useEffect(() => {
      fetchItems(currentPage);
    }, [currentPage]);
  
  return (
    <InfiniteScroll
        dataLength={products.length}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={true}
        loader={products.length >= totalProducts ? "" : <h4>Loading...</h4>}
    >
        <section>
            { 
            products.map((product) => (
                <Link to={`/detail/${product.id}`} key={product.id}>
                  <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  size={product.size}
                  //imagen={product.imagen}
                  />
                </Link>


            ))}
        </section>
    </InfiniteScroll>
    );
};
export default Infinite;