import React from "react";
// import { variables } from "./ItemSidebar";
import {
  AiFillHome,
  AiOutlineForm,
  AiOutlineUpload,
  // AiOutlineShoppingCart,
} from "react-icons/ai";
// import { ImStatsBars } from "react-icons/im";
import {MdSpaceDashboard} from "react-icons/md"
import {BiLogOut} from "react-icons/bi"
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

export default function Sidebar({ sidebarOpen, setsidebarOpen }) {
  return (
    <div className={style.sidebar}>
      <div isOpen={!sidebarOpen}>
        {linksArray.map(({ icon, label, to }) => (
          <div className="me-2" key={label}>
            <NavLink to={to} activeclassname={style.active} className={style.Links}>
              <div className={style.Linkicon}>{icon}</div>
              <span>{label}</span>
            </NavLink>
          </div>
        ))}
      </div>
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
    label: "Dasboard",
    icon: <MdSpaceDashboard />,
    to: "/admin"
  },
  {
    label: "Add",
    icon: <AiOutlineUpload />,
    to: "/form",
  },
  // {
  //   label: "Stats",
  //   icon: <ImStatsBars />,
  //   to: "/stats",
  // },
  {
    label: "General",
    icon: <AiOutlineForm />,
    to: "/general",
  },
  {
    label: "Comments",
    icon: <AiOutlineForm />,
    to: "/comments",
  },
  {
    label: "Sign Out",
    icon: <BiLogOut />,
    to: "/",
  },
];
