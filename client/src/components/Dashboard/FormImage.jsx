import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "../FormProduct/FromProduct.module.css";

const FormImage = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
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
      <Formik
      initialValues={{
        
      }}
      validate={(values) => {
        const errors = {};
        
        return errors;
      }}
        onSubmit={async (values, { setSubmitting, resetForm}) => {
           console.log(values)
            dispatch(editarProduct(id, values))
            setIsSent(true);
            setSubmitting(false);
            resetForm();

          navegate("/SectionCategories");
        }}
      >
        {({ isSubmitting, errors, setFieldValue }) => (
          <div className="animate__animated animate__fadeIn">
            <div className={styles.cntd}>
              <Form className={styles.formulario}>
                <label>
                  Image
                  <input
                  
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setFieldValue)}
                  />
                  {/* Mostrar error si lo hay */}
              
                </label>

                <br />
                <button type="submit" disabled={isSubmitting}>
                  Send
                </button>
                {isSent && <p className={styles.exito}>Sent successfully </p>}
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default FormImage;
