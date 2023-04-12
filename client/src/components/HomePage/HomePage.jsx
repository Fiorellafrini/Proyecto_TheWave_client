import React from "react";
import NavVertical from '../NavVertical/NavVertical'
import NavHorizontal from '../NavHorizontal/NavHorizontal'
import styles from '../HomePage/HomePage.module.css'


const HomePage = () => {
return(
    <div  className={styles.containerHome}>
        <NavVertical/>
        <div className={styles.home}>
            <NavHorizontal/>
        </div>
    </div>
)
}

export default HomePage;