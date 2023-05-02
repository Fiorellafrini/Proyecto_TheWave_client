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
import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import CardsDash from "./components/Dashboard/CardsDash";
import Estadisticas from "./components/Dashboard/Estadisticas/Estadisticas";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import Favorites from "./components/Favoritos/Favoritos";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ResetPassword from "./components/ResetPasword/ResetPassword.jsx";
import AddReview from "./components/Review/AddReview";
import ProteccionRutaAdmin from "./components/Routers/ProteccionRutaAdmin";
import ProteccionRutas from "./components/Routers/ProteccionRutas";
import SectionCarrito from "./components/SectionCarrito/SectionCarrito";
import SectionRegister from "./components/SectionRegister/SectionRegister";
import Perfil from "./components/perfil/Perfil";
//import UserDash from "./components/Dashboard/UsersDash";
import Users from "./components/Dashboard/UsersDash";

function App() {
  new Cloudinary({
    cloud: {
      cloudName: "djngalumm",
    },
  });
  const location = useLocation();
  return (
    <div className="App">
      {["/SectionHome","/SectionCategories","/Favorites"].includes(
        location.pathname
      ) ? <NavVertical /> : null}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/SectionHome" element={<SectionHome />}></Route>
        <Route path="/SectionLogIn" element={<Login />}></Route>
        <Route path="/SectionRegister" element={<Register />}></Route>
        <Route path="/SectionCategories"  element={<SectionCategories />}></Route>
        <Route path="/SectionCarrito" element={<SectionCarrito />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/forgot-password/" element={<ForgotPassword />}></Route>
        <Route path="/reset-Password/:id/:token" element={<ResetPassword/>}></Route>
        <Route element={<ProteccionRutas />}/>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/MyProfile" element={<Perfil />}></Route>
        <Route path="/SectionRegister" element={<SectionRegister />}></Route>
        <Route path="review" element={<AddReview/>}></Route>
        <Route
          path="/SectionCategories"
          element={<SectionCategories />}
        ></Route>

        <Route element={<ProteccionRutas />}>
          <Route path="/SectionCarrito" element={<SectionCarrito />}></Route>
          <Route path="/form" element={<FormProduct />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
        </Route>

        <Route element={<ProteccionRutaAdmin />}>
          <Route path="/form" element={<FormProduct />}></Route>
          <Route path="/admin" element={<HomeDashboard />}></Route>
          <Route path="/admin" element={<Users />}></Route>
          <Route path="/admin" element={<CardsDash />}></Route>
          <Route path="/stats" element={<Estadisticas />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;