import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { RxEyeClosed } from "react-icons/rx";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const navegate = useNavigate();
  const { id, token } = useParams();


  const [isSent, setIsSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            values.password
          )
        ) {
          errors.password =
            " The password must be at least one lowercase letter, one uppercase letter, one number, and one special character, and be at least 8 characters long.";
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
        const { data } = await axios.post(`password/reset/${id}/${token}`,values);
        setIsSent(true);
        setSubmitting(false);
        resetForm();
        alert(`${data}`);
        navegate("/SectionCategories");
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className={styles.formulario}>
          <label htmlFor="password">New password</label>
          <Field type={showPassword ? "text" : "password"} name="password" />
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? <RxEyeClosed /> : <VscEye />}
          </button>
          <ErrorMessage
            name="password"
            component={() => (
              <div className={styles.error}>{errors.password}</div>
            )}
          />

          <br />
          <label htmlFor="password1">Confirm new password. *</label>
          <Field
            type={showConfirmPassword ? "text" : "password"}
            name="password1"
          />
          <button type="button" onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ? <RxEyeClosed /> : <VscEye />}
          </button>
          <ErrorMessage
            name="password1"
            component={() => (
              <div className={styles.error}>{errors.password1}</div>
            )}
          />

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
