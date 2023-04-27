import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../SearchBar/SearchBar.module.css";
import { filterByName, setCurrentPage } from "../../redux/actions";
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
    dispatch(setCurrentPage(1));
  };

  const handleSearch = () => {
    if (!name) {
      Swal.fire({
        title: "Please enter a product",
        color: "white",
        icon: "warning",
        iconColor:'#5edad2',
        background: '#1e1e1e',
        confirmButtonColor: '#224145',
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
// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import styles from "../SearchBar/SearchBar.module.css";
// import { filterByName } from "../../redux/actions";

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");

//   const setSearchTerm = (e) => {
//     e.preventDefault();
//     setName(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(filterByName(name))
//   }

//   return (
//     <div className={styles.filters}>
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => setSearchTerm(e)}
//       />
//       <button onClick={(e) => handleSubmit(e)} type="submit">Search</button>
//     </div>
//   );
// };

// export default SearchBar;
