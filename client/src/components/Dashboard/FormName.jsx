import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "../FormProduct/FromProduct.module.css";


const FormName = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Please enter a name for this product.";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          dispatch(editarProduct(id, values));
          setIsSent(true);
          setSubmitting(false);
          resetForm();

          navegate("/SectionCategories");
        }}
      >
        {({ isSubmitting, errors }) => (
          <div className="animateanimated animatefadeIn">
            <div className={styles.cntd}>
              <Form className={styles.formulario}>
                <label>
                  Name
                  <Field type="text" name="name" />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className={styles.error}>{errors.name}</div>
                    )}
                  />
                </label>
                <br />
                <button type="submit" disabled={isSubmitting}>
                  Send
                </button>
                {isSent && <p className={styles.exito}>Sent successfully </p>}
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default FormName;