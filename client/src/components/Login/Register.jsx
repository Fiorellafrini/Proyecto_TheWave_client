import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { SiFacebook, SiGoogle } from "react-icons/si";
// import { useDispatch } from "react-redux";
// import { createUsers } from "../../redux/actions";
import { Popstyled } from "./loginstyle";

function Register() {
//   const dispatch = useDispatch();
  const [sendForm, setSendForm] = useState(false);

  return (
    <Popstyled>
      <div className="Form">
        <span>
          <BiX className="btn-close" size={25} />
        </span>
        <h2>registrate</h2>
        <p>Bienvenido</p>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
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
            // validacion de password
            if(!values.password){
              errors.password = "Correo invalido";
            }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)){
              errors.password = "la contraseña debe contener Una letra en mayúscula Una letra minúscula Un número  Un carácter especial";
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
                  component={() => <div className="error">{errors.password}</div>}
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

export default Register;
