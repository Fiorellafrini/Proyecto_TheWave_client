import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail/Detail.jsx";
import Error404 from "./components/Error404/Error404";
import FormProduct from "./components/FormProduct/FromProduct.jsx";
import LandingPage from "./components/LandingPage/LandingPage";
import NavVertical from "./components/NavVertical/NavVertical";
import SectionCategories from "./components/SectionCategories/SectionCategories";
import SectionHome from "./components/SectionHome/SectionHome";
// import SectionLogIn from "./components/SectionLogIn/SectionLogIn";
import Favorites from "./components/Favoritos/Favoritos";
import SectionCarrito from "./components/SectionCarrito/SectionCarrito";
import SectionRegister from "./components/SectionRegister/SectionRegister";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import Estadisticas from "./components/Dashboard/Estadisticas";
import CardsDash from "./components/Dashboard/CardsDash";
import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import Login from "./components/Login/Login";
import ProteccionRutas from "./components/Routers/ProteccionRutas";
import Perfil from "./components/perfil/Perfil";
import ProteccionRutaAdmin from "./components/Routers/ProteccionRutaAdmin";


function App() {
  new Cloudinary({
    cloud: {
      cloudName: "djngalumm",
    },
  });
  const location = useLocation();
  return (
    <div className="App">
      {![
        "/",
        "/SectionLogIn",
        "/SectionRegister",
        "/form",
        "/SectionCarrito",
      ].includes(location.pathname) && <NavVertical />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/SectionHome" element={<SectionHome />}></Route>
        <Route path="/SectionLogIn" element={<Login />}></Route>
        <Route path="/SectionRegister" element={<SectionRegister />}></Route>
        <Route path="/SectionCategories" element={<SectionCategories />}></Route>
        <Route path="/SectionCarrito" element={<SectionCarrito />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Error404 />}></Route>

        <Route element={<ProteccionRutas />}>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/My Profile" element={<Perfil />}></Route>
        </Route>

        <Route element={<ProteccionRutaAdmin />}>
          <Route path="/form" element={<FormProduct />}></Route>
          <Route path="/admin" element={<HomeDashboard />}></Route>
          <Route path="/admin" element={<CardsDash />}></Route>
          <Route path="/stats" element={<Estadisticas />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
