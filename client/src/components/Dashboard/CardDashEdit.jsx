import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  cleanProduct,
  productsById
} from "../../redux/actions";
// import Navigation from "../Navigation/Navigation";
import styles from "../FormProduct/FromProduct.module.css";
// import Sidebar from "../Dashboard/Sidebar";
import FormBrand from "./FormBrand";
import FormDescription from "./FormDescription";
import FormImage from "./FormImage";
import FormPrice from "./FormPrice";
import FormSize from "./FormSize";
import FormStock from "./FormStock";
import FormType from "./FormType";



const CardDashEdit = () => {

  const dispatch = useDispatch();
 
  const { id } = useParams();
  


    useEffect(() => {
      dispatch(productsById(id));
      return () => dispatch(cleanProduct());
    }, [dispatch, id]);
    

  // Función para manejar la carga de imágenes
  const handleImageUpload = async (e, setFieldValue) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "thewave"); // Reemplaza con tu upload preset de Cloudinary

    // Realizar la petición de carga de imagen a Cloudinary
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djngalumm/image/upload", // Reemplaza con tu cloud name de Cloudinary
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();

    // Actualizar los valores de imagen en el formulario
    setFieldValue("imagen[0]", data.secure_url);
    // setFieldValue("imagen[1]", data.secure_url);
  };

  return (
    <div className={styles.container}>
      {/* <Navigation /> */}
      <div>
      <FormPrice/>
        <FormDescription/>
        <FormImage/>
        <FormStock/>
        <FormBrand/>
        <FormType/>
        <FormSize/>
      </div>
    </div>
  );
};

export default CardDashEdit;