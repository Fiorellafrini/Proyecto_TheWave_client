import React, { useEffect } from "react";
import styles from "../SectionCategories/SectionCategories.module.css";

import Infinite from "../InfiniteScroll/InfiniteScroll";

const SectionCategories = () => {
  return (
    <div>
      <h1 className={styles.titulo}>SectionCategories</h1>
      <Infinite/>
    </div>
  );
};

export default SectionCategories;
