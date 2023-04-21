import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { login, google, facebook } from "../../redux/actions";
import { Popstyled } from "./loginstyle";
import { useNavigate } from "react-router-dom";

function Login({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const [sendForm, setSendForm] = useState(false);
  const token = useSelector((state) => state.user.login);
console.log(token)
  let isLoguin = window.localStorage.getItem("login");


  window.localStorage.setItem("login", JSON.stringify(token));
 

  const handleGoogle = () => {
    dispatch(google());
    if (!isLoguin) {
      navegar("/SectionLogIn");
    }
    navegar("/SectionHome");
  };

  const handlefacebook = () => {
    dispatch(facebook());
    if (!isLoguin) {
      navegar("/SectionLogIn");
    }
    navegar("/SectionHome");
  };

  return (
    <Popstyled>
      <div className="Form">
        <button onClick={onClose}>
          <BiX className="btn-close" size={25} />
        </button>
        <h2>Inicia sesion</h2>
        <p>Bienvenido</p>

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
            <Form className="formulario">
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
                  component={() => <div className="error">{errors.email}</div>}
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
          )}
        </Formik>
        <hr />
        <p>Tambien puedes registrarte con:</p>
        <div className="icons">
          <button onClick={handleGoogle}>
            <SiGoogle size={25} />
          </button>
          <p>Google</p>
          <button onClick={handlefacebook}>
            <SiFacebook size={25} />
          </button>
          <p>Facebook</p>
        </div>
      </div>
    </Popstyled>
  );
}

export default Login;
