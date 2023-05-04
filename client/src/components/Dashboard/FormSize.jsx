import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "./Form.module.css";
const FormSize = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
  return (
    <div>
      <Formik
        initialValues={{
          size: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.size) {
            errors.size = "Required";
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
          <div className="animate__animated animate__fadeIn">
            <div className={styles.cntd}>
              <Form className={styles.formulario}>
                <label htmlFor="size">
                  Size
                  <Field name="size" as="select">
                    <option value="none"></option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="TU">Unique Size</option>
                  </Field>
                  <ErrorMessage
                    name="size"
                    component={() => (
                      <div className={styles.error}>{errors.size}</div>
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
export default FormSize;
