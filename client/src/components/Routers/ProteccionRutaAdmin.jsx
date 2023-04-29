import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt from "jwt-decode"

function RutasAdmin() {

    let isLoguin = window.localStorage.getItem("login");

  const arrayCorreos = [
    "lucassarachu7@gmail.com",
    "Fedeasaad1099@outlook.com.ar",
    "Gerson.reynaga23@gmail.com",
    "cotyespeche@hotmail.com",
    "fiorella_frini@hotmail.com",
    "jonataniturriagovizcaino@gmail.com",
    "henrydjpacheco@gmail.com",
];

  if (isLoguin) {
    const user = jwt(isLoguin);
    if (!arrayCorreos.includes(user.email)) {
      return  <Navigate to="/" />
    }
    return <Outlet />;
  }
  return <Navigate to="/SectionRegister" />;
}

export default RutasAdmin;