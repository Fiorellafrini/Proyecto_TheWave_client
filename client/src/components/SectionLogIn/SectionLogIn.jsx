import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
// import Register from "../Login/Register";
import style from "./SectionLogIn.module.css"

const SectionLogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [Open, setOpen] = useState(false);
  let isLoguin = window.localStorage.getItem("login");
  const navegar = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // const toggleMo = () => {
  //   setOpen(!Open);
  // };
  const handleLogout = () => {
    window.localStorage.removeItem("login");
    navegar("/");
  };

  if (isLoguin) {
    return (
      <div className="Form">
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  return (
    <div onBlur={(e) => {}} className={style.Form}>
      <button onClick={toggleModal}>Login</button>
      {isOpen && <Login isOpen={isOpen} onClose={toggleModal} />}
      {/* <div>
        <button onClick={toggleMo}>Register</button>
        {Open && <Register isOpen={Open} onClose={toggleMo} />}
      </div> */}
    </div>
  );
};

export default SectionLogIn;
