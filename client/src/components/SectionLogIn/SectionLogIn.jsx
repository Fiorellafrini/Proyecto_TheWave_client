import React, { useState } from "react";

// import styles from "../SectionLogIn/SectionLogIn.module.css";
import Login from "../Login/Login";

const SectionLogIn = () => {
  // const [loading, setLoading] = useState(true);
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => {
     setIsOpen(!isOpen);
   };

  return (
    <>
      <button onClick={toggleModal}>Login</button>
      {isOpen && <Login isOpen={isOpen} onClose={toggleModal} />}
    </>
  );
};

export default SectionLogIn;
