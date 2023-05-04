
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "../FormProduct/FromProduct.module.css";
const FormPrice = () => {
    const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          price: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (values.price === 0) {
            errors.price = "Please enter a price for this product";
          } else if (values.price > 999999999) {
            errors.price = "Please enter a price  valid for this product";
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
                    Price
                    <Field type="number" name="price" />
                    <ErrorMessage
                      name="price"
                      component={() => (
                        <div className={styles.error}>{errors.price}</div>
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
export default FormPrice;
