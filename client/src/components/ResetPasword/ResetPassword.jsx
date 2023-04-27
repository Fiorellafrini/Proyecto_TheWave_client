import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "./ResetPassword.module.css";
const ResetPassword = () => {
  const { id, token } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  console.log(id, token);
  return (
    <Formik
      initialValues={{
        password: "",
        password1: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password =
            "Please provide the necessary information to reset your password.";
        }
        if (!values.password1) {
          errors.password1 = "Please enter a imagen for this product";
        }
        if (values.password1 !== values.password) {
          errors.password1 =
            "Your password and confirmation password do not match.";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { data } = await axios.post(
          `password/reset/${id}/${token}`,
          values
        );
        console.log(values);
        setIsSent(true);
        setSubmitting(false);
        resetForm();
        alert(`${data}`);
        navegate("/SectionCategories");
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className={styles.formulario}>
          <label htmlFor="password">
            <Field type={showPassword ? "text" : "password"} name="password" />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </button>
            <ErrorMessage
              name="password"
              component={() => (
                <div className={styles.error}>{errors.password}</div>
              )}
            />
          </label>
          <br />
          <label htmlFor="password1">
            <Field type={showPassword ? "text" : "password"} name="password1" />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </button>
            <ErrorMessage
              name="password1"
              component={() => (
                <div className={styles.error}>{errors.password1}</div>
              )}
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {isSent && <p className={styles.exito}>form sent successfully </p>}
        </Form>
      )}
    </Formik>
  );
};
export default ResetPassword;
