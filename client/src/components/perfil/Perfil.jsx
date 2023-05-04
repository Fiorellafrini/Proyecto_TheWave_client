import React, { useState } from "react";
// import perfil from "./perfil.png";
import jwt from "jwt-decode";
import styles from "./Perfil.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { putUser, cleanUser } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";


function Perfil() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/SectionHome");
  let token = window.localStorage.getItem("login");
  const user = jwt(token);
  const dispatch = useDispatch();
  const datosUser = useSelector((state) => state.user.userID);
// console.log(datosUser);

  const [editar, setEditar] = useState(true);
  const [editarDireccion, setEditarDireccion] = useState(true);
//<<<<<<< HEAD
  // const [editarPassword, setEditarPassword] = useState(true);
  const [imagePreview, setImagePreview] = useState(""); // Agrego para la vista previa
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);


  const handleEditar = () => {
    setEditar(!editar);
  };
  const handleEditarDireccion = () => {
    setEditarDireccion(!editarDireccion);
  };

  // const handleEditarpassword = () => {
  //   setEditarPassword(!editarPassword);
  // };

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
    setImagePreview(data.secure_url); // Agrego para la vista previa
    setImagenSeleccionada(data.secure_url);
  };

  return (
    <div className={styles.contenedor_todo}>
      <div className="animate__animated animate__fadeIn">
        <div className={styles.contenedor}>
          <div className={styles.contenedor2}>
            <img src={imagenSeleccionada || datosUser.photo} alt="#" />
            <h2>{datosUser.name + "  " + datosUser.lastName}</h2>
            <h2>{datosUser.email}</h2>
            <h2>{datosUser.address}</h2>
          </div>
          <div className={styles.editar}>
            <h1>Edit Profile</h1>
            <hr />
            <Formik
              initialValues={{
                name: `${datosUser.name}`,
                lastName: `${datosUser.lastName}`,
                address: `${datosUser.address}`,
                email: `${datosUser.email}`,
               // password: "",
               // confirmar_password: "",
                photo: `${datosUser.photo}`,
              }}
              validate={(values) => {
                let errors = {};
                // validacion de password
                // if (editarPassword !== true) {
                //   if (!values.password) {
                //     errors.password = "Enter your password";
                //   } else if (
                //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                //       values.password
                //     )
                //   ) {
                //     errors.password =
                //       " The password must be at least one lowercase letter, one uppercase letter, one number, and one special character, and be at least 8 characters long.";
                //   }
                // }
                if (editarDireccion !== true) {
                  if (!values.address) {
                    errors.address = "Please enter an address";
                  }
                }
                if (editar !== true) {
                  if (!values.photo) {
                    errors.photo = "Please enter a photo";
                  }
                }
                return errors;
              }}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                dispatch(putUser(user.id, values));
                dispatch(cleanUser());
                navigate("/SectionHome");
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
                      disabled={true}
                    />
                  </div>
                  <div>
                    <Field
                      className="inputs"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="LastName"
                      disabled={true}
                    />
                  </div>
                  <div>
                    <label>
                      <input
                        className="inputs"
                        type="file"
                        id="photo"
                        name="photo"
                        disabled={editar}
                        onChange={(e) => handleImageUpload(e, setFieldValue)}
                      />

                      <button type="button" onClick={handleEditar}>
                        <FiEdit />
                      </button>
                    </label>

                    <ErrorMessage
                      name="photo"
                      component={() => (
                        <div className={styles.error}>{errors.photo}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label>
                      <Field
                        className="inputs"
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        disabled={editarDireccion}
                      />
                      <button type="button" onClick={handleEditarDireccion}>
                        <FiEdit />
                      </button>
                    </label>
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
                      disabled={true}
                    />
                  </div>
                  {/* <div>
                    <label>
                      <Field
                        className="inputs"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        disabled={editarPassword}
                      />
                      <button type="button" onClick={handleEditarpassword}>
                        <FiEdit />
                      </button>
                    </label>
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className={styles.error}>{errors.password}</div>
                      )}
                    />
                  </div> */}
                  {/* <div>
                    <label>
                      <Field
                        className="inputs"
                        type="password"
                        id="confirmar_password"
                        name="confirmar_password"
                        placeholder="Confirm password"
                        disabled={editarPassword}
                      />
                    </label>
                    <ErrorMessage
                      name="confirmar_password"
                      component={() => (
                        <div className={styles.error}>
                          {errors.confirmar_password}
                        </div>
                      )}
                    />
                  </div> */}
                  <div className={styles.botones}>
                    <button
                      className="btn-submit"
                      type="submit"
                      disabled={
                        editar && editarDireccion === true ? true : false
                      }
                    >
                      Confirm
                    </button>
                    <button onClick={handleNavigate}>Cancel</button>
                  </div>
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
