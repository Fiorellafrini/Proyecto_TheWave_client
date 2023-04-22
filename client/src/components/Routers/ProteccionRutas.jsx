import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function ProteccionRutas() {

   let isLoguin = JSON.parse(window.localStorage.getItem("login"));

    if (!isLoguin) {
      return <Navigate to="/SectionLogIn" />;
    }

  return (
    <Outlet/>
  )
}

export default ProteccionRutas