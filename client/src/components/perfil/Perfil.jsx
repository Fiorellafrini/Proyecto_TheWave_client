import React from "react";
import perfil from "./perfil.png";
import jwt from "jwt-decode";
import styles from "./Perfil.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import "animate.css";
import {putUser} from '../../redux/actions.js'
import {useDispatch} from 'react-redux'
function Perfil() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/SectionHome");
  let token = window.localStorage.getItem("login");
  const user = jwt(token);
  const dispatch = useDispatch();

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
    setFieldValue("photo", data.secure_url);
    // setFieldValue("imagen[1]", data.secure_url);
  };

  return (
    <div className={styles.contenedor_todo}>
      <div className="animate__animated animate__fadeIn">
        <div className={styles.contenedor}>
          <div className={styles.contenedor2}>
            <img src={user.photo ? user?.photo : perfil} alt="#" />
            <h2>{user.name + " " + user.lastName}</h2>
            <h2>{user.email}</h2>
          </div>



          <div className={styles.editar}>
            <h1>Edit Profile</h1>
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
                  errors.name = "Please enter your name";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                  errors.name = "The name can only contain letters";
                }
                if (!values.lastName) {
                  errors.lastName = "Ingrese su nombre";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
                  errors.lastName = "The lastname can only contain letters";
                }
                // Validación de email
                if (!values.email) {
                  errors.email = "Enter your email address";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email";
                }
                // validacion de password
                if (!values.password) {
                  errors.password = "Enter your password";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)) {
                  errors.password =
                    "The password must contain at least one uppercase letter, one lowercase letter, one number and one special character and must be at least 8 characters long";
                }
                if (!values.address) {
                  errors.address = "Enter an address";
                }
                return errors;
              }}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                dispatch(putUser(user.id, values));
                resetForm();
                setSubmitting(false);
              }}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form className={styles.formulario}>
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
                      component={() => (
                        <div className={styles.error}>{errors.name}</div>
                      )}
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
                        <div className={styles.error}>{errors.lastName}</div>
                      )}
                    />
                  </div>
                  <div>
                    <input
                      className="inputs"
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={(e) => handleImageUpload(e, setFieldValue)}
                    />
                    <ErrorMessage
                      name="photo"
                      component={() => (
                        <div className={styles.error}>{errors.photo}</div>
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
                        <div className={styles.error}>{errors.address}</div>
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
                        <div className={styles.error}>{errors.email}</div>
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
                        <div className={styles.error}>{errors.password}</div>
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
                        <div className={styles.error}>
                          {errors.confirmar_password}
                        </div>
                      )}
                    />
                  </div>
                  <button
                    className="btn-submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Confirm
                  </button>
                  <button onClick={handleNavigate}>Cancel</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
