import React from "react";
import { filterType, listProducts, setCurrentPage } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import styles from "./Filtro.module.css";

function Filtro_Type() {
  const dispatch = useDispatch();

  // const handleOnchange = (e) => {
  //   dispatch(filterType(e.target.value));
  //   setCurrentPage(1);
  // };

  const handleOnchange = (event) => {
    const selectedType = event.target.value;
    if (selectedType === "All") {
      dispatch(listProducts());
    } else {
      dispatch(filterType(selectedType));
    }
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.filtros}>
      <select name="orderType" defaultValue="Default" className="" onChange={(e) => handleOnchange(e)}>
      <option key="Type" value="Default" hidden>
          Filter By Type
        </option>
        <option key="All" value="All">
          All
        </option>
        {/* <option value="All">All</option> */}
        <option value="1">Aletas de buceo</option>
        <option value="2">Traje De Neopreno</option>
        <option value="3">Tabla de Stand Up Paddle</option>
        <option value="4">Tabla de Surf</option>
        <option value="5">Tabla de WakeBoard</option>
      </select>
    </div>
  );
}

export default Filtro_Type;
