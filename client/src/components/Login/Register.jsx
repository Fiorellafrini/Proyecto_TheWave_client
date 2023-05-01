import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { registro } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { Link } from "react-router-dom";

function Register({ Open, onClose }) {
  const dispatch = useDispatch();
  const [sendForm, setSendForm] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/SectionHome");

  return (
    <div className={style.container}>
      <div className="animate__animated animate__fadeIn">
        <div className={style.Form}>
          <div className={style.close}>
            <button onClick={handleNavigate}>
              <BiX className={style.btnclose} size={25} />
            </button>
          </div>
          <h1>Sign Up</h1>
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
                errors.name = "Please enter your name";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                errors.name = "El nombre solo puede contener letras";
              }
              if (!values.lastName) {
                errors.lastName = "Please enter your lastname";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
                errors.lastName = "The name can only contain letters";
              }
              // Validación de email
              if (!values.email) {
                errors.email = "Enter your email";
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
              } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                  values.password
                )
              ) {
                errors.password =
                  " The password must be at least one lowercase letter, one uppercase letter, one number, and one special character, and be at least 8 characters long.";
              }
              if (!values.address) {
                errors.address = "enter an address";
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
              <Form className={style.formulario}>
                <div className={style.access}>
                  <div className={style.input}>
                    <Field
                      className={style.inputs}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className={style.error}>{errors.name}</div>
                      )}
                    />
                  </div>
                  <div className={style.input}>
                    <Field
                      className={style.inputs}
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Surname"
                    />
                    <ErrorMessage
                      name="lastName"
                      component={() => (
                        <div className={style.error}>{errors.lastName}</div>
                      )}
                    />
                  </div>
                  <div className={style.input}>
                    <Field
                      className={style.inputs}
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Address"
                    />
                    <ErrorMessage
                      name="address"
                      component={() => (
                        <div className={style.error}>{errors.address}</div>
                      )}
                    />
                  </div>
                  <div className={style.input}>
                    <Field
                      className={style.inputs}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className={style.error}>{errors.email}</div>
                      )}
                    />
                  </div>
                  <div className={style.input}>
                    <Field
                      className={style.inputs}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className={style.error}>{errors.password}</div>
                      )}
                    />
                  </div>
                  {/* <div>
                <Field
                      className={style.inputs}
                  className=
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
                </div>
                <div className={style.link}>
                  <Link to="/SectionLogIn">Already registered?</Link>
                </div>
                <div>
                  <button
                    className={style.btnsubmit}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                  {sendForm && <p>"User successfully added"</p>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
