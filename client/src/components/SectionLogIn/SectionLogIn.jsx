import React, { useState } from "react";
import { Popstyled } from "./sesion";
// import styles from "../SectionLogIn/SectionLogIn.module.css";
import Login from "../Login/Login";
// import Register from "../Login/Register";

// import Navigation from "../Navigation/Navigation";
// import styles from "../SectionLogIn/SectionLogIn.module.css";

const SectionLogIn = () => {
  // const [loading, setLoading] = useState(true);
   const [isOpen, setIsOpen] = useState(false);
   

   const toggleModal = () => {
     setIsOpen(!isOpen);
   };

  return (
    <Popstyled>
      <div className="Form">
        <button onClick={toggleModal}>Login</button>
        {isOpen && <Login isOpen={isOpen} onClose={toggleModal} />}
        {/* <button onClick={toggleModal}>Register</button>
        {isOpen && <Register isOpen={isOpen} onClose={toggleModal} />} */}
      </div>
    </Popstyled>
  );
};

export default SectionLogIn;
