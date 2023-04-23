import React, { useState } from "react";
import { Popstyled } from "./sesion";

import Login from "../Login/Login";
import Register from "../Login/Register";

const SectionLogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleMo = () => {
    setOpen(!Open);
  };
  return (
    <Popstyled>
      <div className="Form">
        <button onClick={toggleModal}>Login</button>
        {isOpen && <Login isOpen={isOpen} onClose={toggleModal} />}
        <div>
          <button onClick={toggleMo}>Register</button>
          {Open && <Register isOpen={Open} onClose={toggleMo} />}
        </div>
      </div>
    </Popstyled>
  );
};

export default SectionLogIn;
