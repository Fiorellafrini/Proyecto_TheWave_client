import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { SiGoogle } from "react-icons/si";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import style from "./login.module.css";

function Login({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/SectionHome");
  const [sendForm, setSendForm] = useState(false);
  let isLoguin = window.localStorage.getItem("login");

  // const handlefacebook = () => {
  //   dispatch(facebook());
  //   if (!isLoguin) {
  //     navegar("/SectionLogIn");
  //   }
  //   navegar("/SectionHome");
  // };

  return (
    <div className={style.container}>
      <div className="animate__animated animate__fadeIn">
        <div className={style.Form}>
          <div className={style.close}>
            <button onClick={handleNavigate}>
              <BiX className={style.btnclose} size={25} />
            </button>
          </div>
          <h1>Sign In</h1>
          {/* <span>Welcome</span> */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              let errors = {};
              // Validación de Password
              if (!values.password) {
                errors.password = "Enter your password";
              } else if (!/^[a-zA-Z]+$/.test(values.password)) {
                errors.password =
                  "The password can only contain lower or upper case letters.";
              } else if (!/^.{5,10}$/.test(values.password)) {
                errors.password =
                  "Password Must be between 5 and 10 characters";
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

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(login(values));
              if (!isLoguin) {
                navigate("/SectionLogIn");
              }
              navigate("/SectionHome");
              setSendForm(true);
              setTimeout(() => setSendForm(false), 5000);
              resetForm();
            }}
          >
            {({ errors }) => (
              <Form className={style.formulario}>
                <div className={style.access}>
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
                </div>
                <div className={style.link}>
                  <Link to="/SectionRegister">You are not registered?</Link>
                  <Link to={"/forgot-password"}>Forgot password?</Link>
                </div>
                <div>
                  <br />
                  <button
                    className={style.btnsubmit}
                    type="submit"
                    disabled={Object.keys(errors).length === 0 ? false : true}
                  >
                    Login
                  </button>
                  {/* {sendForm && <p>"User added successfully"</p>} */}
                </div>
              </Form>
            )}
          </Formik>
          <p>You can also register with</p>
          <div className={style.icons}>
            <button
              onClick={() => {
                const width = 620;
                const height = 700;
                const left = window.screen.width / 2 - width / 2;
                const top = window.screen.height / 2 - height / 2;

                const popup = window.open(
                  // "http://localhost:3001/auth/google",
                  "https://proyectothewaveapi-production.up.railway.app/auth/google",
                  "targetWindow",
                  `toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    width=${width},
    height=${height},
    left=${left},
    top=${top}`
                );

                window.addEventListener("message", (event) => {
                  // if (event.origin === "http://localhost:3001"){
                  if (
                    event.origin ===
                    "https://proyectothewaveapi-production.up.railway.app"
                  ) {
                    if (event.data) {
                      window.localStorage.setItem("login", event.data);
                      popup?.close();
                      navigate("/SectionHome");
                    }
                  }
                });
              }}
            >
              <SiGoogle size={25} />
            </button>
            {/* <p>Google</p> */}
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
