import React from "react";
// import { variables } from "./ItemSidebar";
import {
  AiFillHome,
  // AiOutlineForm,
  // AiOutlineUpload,
  // AiOutlineShoppingCart,
} from "react-icons/ai";
// import { ImStatsBars } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { IoStatsChartSharp, IoAddCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

export default function Sidebar({ sidebarOpen, setsidebarOpen }) {
  return (
    <div className={style.sidebar}>
      <div>
        {linksArray.map(({ icon, label, to }) => (
          <div key={label}>
            <NavLink
              to={to}
              activeclassname={style.active}
              className={style.Links}
            >
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
    to: "/SectionCategories",
  },
  {
    label: "General",
    icon: <MdSpaceDashboard />,
    to: "/admin",
  },
  {
    label: "Stats",
    icon: <IoStatsChartSharp />,
    to: "/stats",
  },
  {
    label: "Comments",
    icon: <FaCommentAlt />,
    to: "/comments",
  },
  {
    label: "Add Products",
    icon: <IoAddCircle />,
    to: "/form",
  },
  {
    label: "Sign Out",
    icon: <BiLogOut />,
    to: "/",
  },
];
