import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../SearchBar/SearchBar.module.css";
import { filterByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const setSearchTerm = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterByName(name))
  }

  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e)}
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
