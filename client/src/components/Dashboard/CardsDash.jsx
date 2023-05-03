import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, setCurrentPage } from "../../redux/actions";
// import Paginado from "../Paginado/Paginado";
import styles from "./CardsDash.module.css";
// import Error404 from "../Error404/Error404";
import CardDashDelete from "./CardDashDelete";
import { FiEdit } from "react-icons/fi";
import PaginadoDash from "./PaginadoDash";
import SearchBarDash from "./SearchBarDash";

const CardsDash = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products.products);
  console.log(productos);
  const setPage = useSelector((state) => state.products.setPage);
  const lastIndex = setPage * 8;
  const firstIndex = lastIndex - 8;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.pag}>
        <PaginadoDash total={productos.length} />
        <SearchBarDash />
      </div>
      <div className={styles.containerDash}>
        <div className={styles.linkk}>
          <h2>Products</h2>
          {/* Tabla de los Producto */}

          <table>
            <thead>
              <tr>
                {/* <td>ID</td> */}
                <td>Name</td>
                <td>Price</td>
                <td>Size</td>
                <td colSpan={2}>Status</td>
              </tr>
            </thead>
            {productos.length
              ? productos
                  .map((product) => (
                    <tbody key={product.id}>
                      <tr>
                        {/* <td>{product.id}</td> */}
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.size}</td>
                        <td>
                          <CardDashDelete id={product.id} />
                        </td>
                        <td>
                          <button className={styles.editar}>
                            <FiEdit />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))
                  .slice(firstIndex, lastIndex)
              : // <Error404 />
                null}
          </table>
        </div>
      </div>
    </div>
  );
};
export default CardsDash;
