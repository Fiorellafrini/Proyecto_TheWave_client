import React from "react";
import style from "../Error404/Error404.module.css";
import notFound from "../../assets/404.png";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>
          Oops! There's no one left. Everybody is gone.
        </h1>
        <Link to={'/SectionHome'}>
        <button className={style.button}>Go To Home</button>
        </Link>
      </div>
      <img src={notFound} alt="" />
    </div>
  );
};

export default Error404;
