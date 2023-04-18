// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import InfiniteScroll from 'react-infinite-scroll-component';
// import ProductCard from "../ProductCard/ProductCard";


// const Infinite = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [products, setProducts] = useState([]);
//   const [totalProducts, setTotalProducts] = useState(0);

//     async function fetchItems(page) {
//       await fetch(`http://localhost:3001/product?page=${page}&size=5`)
//         .then((response) => response.json())
//         .then((data) => {
//           setProducts([...products, ...data.products]);
//           setTotalProducts(data.total);
//         })
//         .catch((error) => console.error(error));
//     }
  
//     useEffect(() => {
//       fetchItems(currentPage);
//     }, [currentPage]);
  
//   return (
//     <InfiniteScroll
//         dataLength={products.length}
//         next={() => setCurrentPage(currentPage + 1)}
//         hasMore={true}
//         loader={products.length >= totalProducts ? "" : <h4>Loading...</h4>}
//     >
//         <section>
//             { 
//             products.map((product) => (
//                 <Link to={`/detail/${product.id}`} key={product.id}>
//                   <ProductCard
//                   key={product.id}
//                   name={product.name}
//                   price={product.price}
//                   size={product.size}
//                   //imagen={product.imagen}
//                   />
//                 </Link>


//             ))}
//         </section>
//     </InfiniteScroll>
//     );
// };
// export default Infinite;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import { listProducts, setCurrentPage} from "../../redux/actions.js";
import Paginado from "../Paginado/Paginado";
import styles from './InfiniteScroll.module.css'

const Infinite = () => {
  const dispatch = useDispatch()
  const productos = useSelector((state) => state.products);
  const setPage = useSelector((state) => state.setPage);
  // console.log(currentPage)
    const lastIndex = setPage * 8;
    const firstIndex = lastIndex - 8;

  useEffect(()=>{
    dispatch(listProducts());
    dispatch(setCurrentPage(1))
    // console.log(currentPage);
  },[dispatch])

  return (
    <>
      <Paginado total={productos.length} />
      {/* <InfiniteScroll
        dataLength={productos.length}
        next={() => dispatch(setCurrentPage(currentPage + 1))}
        hasMore={true}
        loader={productos.length >= productos ? "" : <h4>Loading...</h4>}
      > */}
      <section className={styles.linkk}>
        {productos
          .map((product) => (
            <Link to={`/detail/${product.id}`} key={product.id}>
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                size={product.size}
                imagen={product.imagen}
              />
            </Link>
          ))
          .slice(firstIndex, lastIndex)}
      </section>
      {/* </InfiniteScroll> */}
    </>
  );
};
export default Infinite;