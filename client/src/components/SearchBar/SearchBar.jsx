import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../SearchBar/SearchBar.module.css";
import { filterByName } from "../../redux/actions";
import Swal from "sweetalert2";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const setSearchTerm = (e) => {
    // e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterByName(name));
  };

  const handleSearch = () => {
    if (!name) {
      Swal.fire({
        title: "Please enter a product",
        icon: "warning",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.filters}>
        <input
          type="search"
          placeholder="Search..."
          onChange={setSearchTerm}
          value={name}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
