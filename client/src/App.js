import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import FormProduct from "./components/FormProduct/FromProduct.jsx";
import Error404 from "./components/Error404/Error404";
import Detail from "./components/Detail/Detail.jsx";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionCategories from "./components/SectionCategories/SectionCategories";
import NavVertical from "./components/NavVertical/NavVertical";
import SectionLogIn from "./components/SectionLogIn/SectionLogIn";
import SectionRegister from "./components/SectionRegister/SectionRegister";
import SectionCarrito from "./components/SectionCarrito/SectionCarrito";
// import HomeDashboard from "./review/dashboard/HomeDashboard";
import ProteccionRutas from "./components/Routers/ProteccionRutas"
import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";


function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djngalumm'
    }
  });
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/"  && <NavVertical />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/SectionHome" element={<SectionHome />}></Route>
        <Route path="/SectionLogIn" element={<SectionLogIn />}></Route>
        <Route path="/SectionRegister" element={<SectionRegister />}></Route>
        <Route path="/SectionCategories" element={<SectionCategories />}></Route>
        
        <Route element={<ProteccionRutas/>}> 
        <Route path="/SectionCarrito" element={<SectionCarrito />}></Route>
        <Route path="/form" element={<FormProduct />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        </Route>

        <Route path="*" element={<Error404 />}></Route>
        {/* <Route path="/admin" element={<HomeDashboard/>}></Route>  */}
      </Routes>
    </div>
  );
}

export default App;
