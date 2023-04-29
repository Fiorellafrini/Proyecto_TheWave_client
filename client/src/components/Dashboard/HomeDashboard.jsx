import React from "react";

import styles from "./Dashboard.module.css";

import Navbar2 from "./NavBar";
import Sidebar from "./Sidebar";
import CardsDash from "./CardsDash";
import Users from "./UsersDash";

function HomeDashboard() {
  return (
    <div className={styles.container}>
      <Navbar2 />
      <Sidebar />
      {/* <CardsDash /> */}
      <Users />
    </div>
  );
}

export default HomeDashboard;
