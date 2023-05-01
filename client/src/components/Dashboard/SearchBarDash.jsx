import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName, setCurrentPage } from "../.././redux/actions.js";
import styles from "./searchBarDash.module.css";

const SearchBarDash = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    dispatch(filterByName(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search Product...."
        onChange={(e) => handleChange(e)}
        value={name}
      />
    </div>
  );
};
export default SearchBarDash;
