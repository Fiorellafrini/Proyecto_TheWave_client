import styled from "styled-components";

import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { HiOutlineUserCircle, HiMenu } from "react-icons/hi";
// import { useSelector } from "react-redux";

const SectionRegister = () => {
  const refMenu = useRef(null);
  // const { user } = useSelector((state) => state.user);
  // console.log(user)
  const [active, setActive] = useState(false);

  return (
    <Button ref={refMenu}>
      <div onClick={() => setActive(!active)}>
        <HiMenu size={25} />
        <HiOutlineUserCircle size={25} />
      </div>
      <MenuHidden style={active ? null : { display: "none" }}>
        <Ul>
          <Link to="/admin">
            <Li>Dashboard</Li>
          </Link>
          <hr />
          <hr />
          <Li>Ayuda</Li>
          <Li>
            <Link to="/addproperty">Mis publicaciones</Link>
          </Li>
          <Li>Cerrar Sesion</Li>
        </Ul>
        <Ul>
          <Li>Iniciar Sesion</Li>
          <Li>Registrarse</Li>
          <hr />
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
  top: 3em;
  right: 0em;
  z-index: 100;
`;

const Ul = styled.ul`
  min-width: 10em;
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


