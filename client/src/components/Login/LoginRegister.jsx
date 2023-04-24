import style from './login.module.css'
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  login,
  registro,

} from "../../redux/actions";
import { useNavigate } from "react-router-dom";


function LoginRegister() {

    const dispatch = useDispatch();
    const navegar = useNavigate();
    const [sendForm, setSendForm] = useState(false);
    let isLoguin = window.localStorage.getItem("login");
    const [sendForm2, setSendForm2] = useState(false);

  return (
    <div className={style.contenedor__todo}>
      <div className={style.caja__trasera}>
        <div className={style.caja__trasera_login}>
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Inicia sesion para ingresar a la pagina</p>
          <button>Iniciar Sesion</button>
        </div>
        <div className={style.caja__trasera_register}>
          <h3>¿Aun no tienes cuenta?</h3>
          <p>Registrate para que puedas iniciar sesion</p>
          <button>Registrarse</button>
        </div>
        <div className={style.contenedor__login_register}>
          {/* //formulario de iniciar sesion */}

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              let errors = {};
              // Validación de nombre
              if (!values.password) {
                errors.password = "Ingrese su contraseña";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)) {
                errors.password =
                  "El contraseña  solo puede contener letras minusculas o mayusculas";
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

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(login(values));
              if (!isLoguin) {
                navegar("/SectionLogIn");
              }
              navegar("/SectionHome");
              setSendForm(true);
              setTimeout(() => setSendForm(false), 5000);
              resetForm();
            }}
          >
            {({ errors }) => (
              <div className={style.formulario__login}>
                <Form>
                  <h2>Iniciar Sesion</h2>
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
                  <button
                    className="btn-submit"
                    type="submit"
                    disabled={Object.keys(errors).length === 0 ? false : true}
                  >
                    Enviar
                  </button>
                  {sendForm && <p>"Usuario agregado con exito"</p>}
                </Form>
              </div>
            )}
          </Formik>
          {/* //formulario de registro */}
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              address: "",
              email: "",
              password: "",
              // confirmar_password: "",
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
              console.log(values);
              dispatch(registro(values));
              setSendForm2(true);
              setTimeout(() => setSendForm2(false), 5000);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ errors, isSubmitting }) => (
              <div className={style.formulario__register}>
                <Form>
                  <h2>registrarse</h2>
                  <div>
                    <Field
                      className="inputs"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className="error">{errors.name}</div>
                      )}
                    />
                  </div>
                  <div>
                    <Field
                      className="inputs"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Apellido"
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
                      placeholder="address"
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
                  <button
                    className="btn-submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </button>
                  {sendForm2 && <p>"Usuario agregado con exito"</p>}
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister