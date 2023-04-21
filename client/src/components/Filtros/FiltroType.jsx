import React from "react";
import { filterType,setCurrentPage } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import styles from "./Filtro.module.css";

function FiltroType() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    e.preventDefault();
    e.target.name === "filterType" && dispatch(filterType(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={styles.filtros}>
      <select name="filterType" onChange={handleOnchange}>
        <option value="">All</option>
        <option value="1">Aletas de buceo</option>
        <option value="2">Traje De Neopreno</option>
        <option value="3">Tabla de Stand Up Paddle</option>
        <option value="4">Tabla de Surf</option>
        <option value="5">Tabla de WakeBoard</option>
      </select>
    </div>
  );
}

export default FiltroType;
