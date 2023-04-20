import styled from "styled-components";

import { useRef, useState } from "react";



import { HiOutlineUserCircle, HiMenu } from "react-icons/hi";
import Login from "../Login/Login";
import Register from "../Login/Register";
// import { useSelector } from "react-redux";

const SectionRegister = () => {
  const refMenu = useRef(null);
  // const { user } = useSelector((state) => state.user);
  // console.log(user)
  const [active, setActive] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [Open, setOpen] = useState(false);


      const toggleModal = () => {
        setIsOpen(!isOpen);
      };

           const toggleModalRegister = () => {
             setOpen(!Open);
           };

  return (
    <Button ref={refMenu}>
      <div onClick={() => setActive(!active)}>
        <HiMenu size={25} />
        <HiOutlineUserCircle size={25} />
      </div>
      <MenuHidden style={active ? null : { display: "none" }}>
        <Ul>
          <Li>
            <button onClick={toggleModal}>Login</button>
            {isOpen && <Login isOpen={isOpen} onClose={toggleModal} />}
          </Li>
          <Li>
            {" "}
            <button onClick={toggleModal}>Register</button>
            {Open && (
              <Register isOpen={Open} onClose={toggleModalRegister} />
            )}
          </Li>
          <Li>
            <p>Ayuda</p>
          </Li>
        </Ul>
      </MenuHidden>
    </Button>
  );
};
export default SectionRegister;
const Button = styled.div`
  padding: 0.5em;
  position: relative;
  border: 1px solid grey;
  border-radius: 15px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const MenuHidden = styled.div`
  position: absolute;
  top: 6.5em;
  left: -9em;
  right: 0em;
  z-index: 2;
`;

const Ul = styled.ul`
  min-width: 18em;
  min-height: 18em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border: 1px solid grey;
  border-radius: 1em;
  list-style: none;
  background: #ffff;
`;

const Li = styled.li`
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;


