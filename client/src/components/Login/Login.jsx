import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { SiFacebook, SiGoogle } from "react-icons/si";
// import { useDispatch } from "react-redux";
// import { createUsers } from "../../redux/actions";
import { Popstyled } from "./loginstyle";

function Login({ isOpen, onClose }) {
  //   const dispatch = useDispatch();
  const [sendForm, setSendForm] = useState(false);

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
            name: "",
            email: "",
          }}
          validate={(values) => {
            let errors = {};
            // Validación de nombre
            if (!values.name) {
              errors.name = "Ingrese su nombre";
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              errors.name = "El nombre solo puede contener letras";
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
            // dispatch(createUsers(values));
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
                  id="name"
                  name="name"
                  placeholder="Nombre"
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
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
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
          <SiGoogle size={25} />
          <p>Google</p>
          <SiFacebook size={25} />
          <p>Facebook</p>
        </div>
      </div>
    </Popstyled>
  );
}

export default Login;
