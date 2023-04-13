import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import Card from "./Card"; */

const Infinite = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

  async function fechProp(page) {
    await fetch(`http://localhost:3001/product`)
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, ...data.products]);
        setTotalProducts(data.total);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fechProp(currentPage);
  }, [currentPage]);

  return (
    <InfiniteScroll
        dataLength={products.length}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={true}
        loader={products.length >= totalProducts ? "" : <h4>Loading...</h4>}
    >
        <section>
            {products &&
            products.map((el) => (
                <Link to={`/detail/${el.id}`} key={el.id}>
                  { /*  <Card key={el.id}  /> */}
                </Link>


            ))}
        </section>
    </InfiniteScroll>
    );
};
export default Infinite;