import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";
import style from './SectionRegister.module.css'

const SectionRegister = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const navegar = useNavigate();

  let isLoguin = window.localStorage.getItem("login");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleMo = () => {
    setOpen(!Open);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("login");
    navegar("/");
  };

  if (!isLoguin) {
    return (
      <div className={style.container}>
        <button onClick={toggleModal}>Login</button>
        {isOpen && <Login isOpen={isOpen} onClose={toggleModal} />}
        <button onClick={toggleMo}>Register</button>
        {Open && <Register isOpen={Open} onClose={toggleMo} />}
      </div>
    );
  }
  return (
    <div className={style.container}>
      <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  );
};
export default SectionRegister;



