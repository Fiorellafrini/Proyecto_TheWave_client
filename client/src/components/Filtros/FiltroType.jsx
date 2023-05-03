import React from "react";
import { filterType, setCurrentPage } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import styles from "./Filtro.module.css";

function FiltroType() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    // e.preventDefault();
    e.target.name === "filterType" && dispatch(filterType(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.filtros}>
      <select defaultValue="Categorie" name="filterType" onChange={handleOnchange}>
        <option disabled value="Categorie">Category</option>
        <option value="">All</option>
        <option value="1">Diving fins</option>
        <option value="2">Wetsuit</option>
        <option value="3">Stand Up Paddle Board</option>
        <option value="4">Surfboard</option>
        <option value="5">WakeBoard</option>
      </select>
    </div>
  );
}

export default FiltroType;
