import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "./Form.module.css";
const FormBrand = () => {
    const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
  return (
    <div>
      <Formik
        initialValues={{
          id_brand: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (values.id_brand === 0) {
            errors.id_brand = "Required";
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
              <label htmlFor="id_brand">
              Brand
              <Field name="id_brand" as="select">
                <option value={0}></option>
                <option value={1}>Hurley</option>
                <option value={2}>Rip Curl</option>
                <option value={3}>Vesl</option>
                <option value={4}>Russell</option>
                <option value={5}>Wave</option>
                <option value={6}>JOBE</option>
                <option value={7}>Compact</option>
                <option value={8}>SungShot</option>
                <option value={9}>Billabong</option>
                <option value={10}>O'neill</option>
                <option value={11}>Orca</option>
                <option value={12}>Gill Zenlite</option>
                <option value={13}>Powerjet</option>
                <option value={14}>Mundial One</option>
              </Field>
              <ErrorMessage
                name="id_brand"
                component={() => (
                  <div className={styles.error}>{errors.id_brand}</div>
                )}
              />
            </label>
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
export default FormBrand;
