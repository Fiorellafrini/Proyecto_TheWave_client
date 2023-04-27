import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please provide the necessary information to reset your password.";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { data } = await axios.post(`password/forgot`, values);
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
          <label htmlFor="email">We require your email address in order to recover your forgotten password. </label>
          <br/>
            <Field type="text"  name="email" />
           
            <ErrorMessage
              name="email"
              component={() => (
                <div className={styles.error}>{errors.email}</div>
              )}
            />
          
          <br />
          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
          {isSent && <p className={styles.exito}>Sent successfully </p>}
        </Form>
      )}
    </Formik>
  );
};
export default ForgotPassword;
