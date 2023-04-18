import React, { useState } from "react";
// import styles from "../SectionRegister/SectionRegister.module.css";
import Register from "../Login/Register";
const SectionRegister = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => {
     setIsOpen(!isOpen);
   };

  return (
    <>
      <button onClick={toggleModal}>Registrarse</button>
      {isOpen && <Register isOpen={isOpen} onClose={toggleModal} />}
    </>
  );
};

export default SectionRegister;
