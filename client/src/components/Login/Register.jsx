import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { registro} from "../../redux/actions";
import { Popstyled } from "./loginstyle";

function Register({ Open, onClose }) {
    const dispatch = useDispatch();
  const [sendForm, setSendForm] = useState(false);

  return (
    <Popstyled>
      <div className="Form">
        <button onClick={onClose}>
          <BiX className="btn-close" size={25} />
        </button>
        <p>Bienvenido</p>
        <h2>registrate</h2>

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
            // if (!values.confirmar_password) {
            //   errors.confirmar_password = "Ingrese contraseña";
            // } else if (values.password !== values.confirmar_password) {
            //   errors.confirmar_password = "la contraseña no coinciden";
            // }
            if (!values.address) {
              errors.address = "ingrese un address";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            dispatch(registro(values));
            setSendForm(true);
            setTimeout(() => setSendForm(false), 5000);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ errors, isSubmitting }) => (
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
              {/* <div>
                <Field
                  className="inputs"
                  type="password"
                  id="confirmar_password"
                  name="confirmar_password"
                  placeholder="Confirmar Password"
                />
                <ErrorMessage
                  name="confirmar_password"
                  component={() => (
                    <div className="error">{errors.confirmar_password}</div>
                  )}
                />
              </div> */}
              <button
                className="btn-submit"
                type="submit"
                disabled={isSubmitting}
              >
                Enviar
              </button>
              {sendForm && <p>"Usuario agregado con exito"</p>}
            </Form>
          )}
        </Formik>
      </div>
    </Popstyled>
  );
}

export default Register;
