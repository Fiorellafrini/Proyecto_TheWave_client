
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "./Form.module.css";
const FormStock = () => {
    const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
  return (
    <div>
      <Formik
        initialValues={{
          stock: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (values.stock === 0) {
            errors.stock = "Please enter the quantity of products in stock";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
        
          dispatch(editarProduct(id, values))
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
              <label>
              Available stock
              <Field type="number" name="stock" />
              <ErrorMessage
                name="stock"
                component={() => (
                  <div className={styles.error}>{errors.stock}</div>
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
export default FormStock;