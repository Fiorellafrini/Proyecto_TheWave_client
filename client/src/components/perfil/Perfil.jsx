import React from 'react' 
import perfil from './perfil.png'
import jwt from 'jwt-decode'
import styles from "./Perfil.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";





function Perfil() {
  let token = window.localStorage.getItem("login");
  
  const user  = jwt(token);



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
      console.log(data);

      // Actualizar los valores de imagen en el formulario
      setFieldValue("imagen[0]", data.secure_url);
      // setFieldValue("imagen[1]", data.secure_url);
    };


  return (
    <div className={styles.contenedor_todo}>
      <div className={styles.contenedor}>
        <img src={user.photo ? user.photo : perfil} alt="foto" />
        <div className={styles.contenedor2}>
          <h2>{user.name + " " + user.lastName}</h2>
          <h2>{user.email}</h2>
        </div>
        <div className={styles.editar}>
          <hr />
          <h1>Edit profile</h1>
          <hr />
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              address: "",
              email: "",
              password: "",
              confirmar_password: "",
              photo: "",
            }}
            validate={(values) => {
              let errors = {};
              // Validación de nombre
              if (!values.name) {
                errors.name = "Ingrese su nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                errors.name = "El nombre solo puede contener letras";
              }
              if (!values.lastName) {
                errors.lastName = "Ingrese su nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
                errors.lastName = "El nombre solo puede contener letras";
              }
              // Validación de email
              if (!values.email) {
                errors.email = "Ingrese su email";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  values.email
                )
              ) {
                errors.email = "Correo invalido";
              }
              // validacion de password
              if (!values.password) {
                errors.password = "Ingrese contraseña";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)) {
                errors.password =
                  "La contraseña debe contener al menos una letra en mayúscula, una letra minúscula, un número y un carácter especial y debe tener al menos 8 caracteres de longitud.";
              }
              if (!values.address) {
                errors.address = "ingrese un address";
              }
              return errors;
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ errors, isSubmitting, setFieldValue }) => (
              <Form className={styles.formulario}>
                <div>
                  <Field
                    className="inputs"
                    type="file"
                    id="photo"
                    name="photo"
                    placeholder="Photo"
                    onChange={(e) => handleImageUpload(e, setFieldValue)}
                  />
                  <ErrorMessage
                    name="photo"
                    component={() => (
                      <div className="error">{errors.photo}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    className="inputs"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => <div className="error">{errors.name}</div>}
                  />
                </div>
                <div>
                  <Field
                    className="inputs"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="LastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component={() => (
                      <div className="error">{errors.lastName}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    className="inputs"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                  />
                  <ErrorMessage
                    name="address"
                    component={() => (
                      <div className="error">{errors.address}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    className="inputs"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="error">{errors.password}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    className="inputs"
                    type="password"
                    id="confirmar_password"
                    name="confirmar_password"
                    placeholder="Confirm password"
                  />
                  <ErrorMessage
                    name="confirmar_password"
                    component={() => (
                      <div className="error">{errors.confirmar_password}</div>
                    )}
                  />
                </div>
                <button
                  className="btn-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </button>
                <button>Cancel</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Perfil

