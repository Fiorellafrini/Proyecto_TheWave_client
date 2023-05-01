import React from "react";
import styles from "./HomeDashboard.module.css";
// import Navbar2 from "./NavBar";
import Sidebar from "./Sidebar";
import CardsDash from "./CardsDash";
import Users from "./UsersDash";
import Estadisticas from "./Estadisticas";

function HomeDashboard() {
  return (
    <div className={styles.container}>
      {/* <Navbar2 /> */}
      <div className={styles.dash}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.Cards}>
          <div className="animate__animated animate__fadeIn">
            <Estadisticas />
            <div className={styles.cardDash}>
              <CardsDash />
              <Users />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
