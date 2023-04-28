import React from "react";
import styled from "styled-components";
import { variables } from "./ItemSidebar";
import {
  AiFillHome,
    AiOutlineForm,
    AiOutlineUpload,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
export default function Sidebar({ sidebarOpen, setsidebarOpen }) {
  // const open = () => {
  //   setsidebarOpen(!sidebarOpen);
  // };
    return (
      <div className={style.sidebar}>
    <Container isOpen={!sidebarOpen}>
      {/* <button className="Sidebarbutton" onClick={open}>
        <AiOutlineArrowsAlt />
      </button> */}
      {/* <div className="LogoInmobate">
        <div className="imgcontent">

        </div>
      </div> */}
      {linksArray.map(({icon, label, to}) => (
        <div className="me-2" key ={label}>
          <NavLink to={to} activeClassName="active" className ="Links">
            <div className="Linkicon">
              {icon}
            </div>
          
              <span>{label}</span>
           
          </NavLink>
        </div>
      ))}
            </Container>
            </div>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <AiFillHome />,
    to: "/SectionHome",
  },
  {
    label: "Stats",
    icon: <ImStatsBars />,
    to: "/stats",
  },
  {
    label: "General",
    icon: <AiOutlineForm/>,
    to: "/admin",
  },
  {
    label: "Comments",
    icon: <AiOutlineForm/>,
    to: "/comments",
  },
  {
    label: "Add",
    icon: <AiOutlineUpload/>,
    to: "/form",
  },
];

//////////////////styledcomponents//////////////


const Container = styled.div`



.LogoInmobate {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

}
.Links {
   
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.Links:hover {
  background-color: #333;
  color: #fba2e7;
}
.Linkicon {
  with: 14rem;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1.5rem;
}
.active {
  background-color: #333;
  color: #ff94e8;
}
@media screen and (max-width: 768px) {
  .LogoInmobate {
    margin-top: 10px;
  }
  
  .Links {
    padding: 5px;
    margin: 3px 0;
    font-size: 0.8rem;
  }
  
  .Linkicon {
    
    margin-right: 5px;
    font-size: 1.2rem;
  }
}
`;

