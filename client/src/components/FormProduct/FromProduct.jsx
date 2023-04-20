import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./FromProduct.module.css";
import { createProduct } from "../../redux/actions";
import Navigation from "../Navigation/Navigation";


const FormProduct = () => {
  const [isSent, setIsSent] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
    <Navigation/>
    <div>
      <Formik
        initialValues={{
          name: "",
          imagen: ["", ""],
          id_brand: 0,
          id_type: 0,
          size: "",
          price: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Please enter a name for this product";
          } /*  else if (!products.includes(values.name)){
                    errors.name = "this name has been used";
                } */
          if (values.imagen.length === 0) {
            errors.imagen = "Please enter a imagen for this product";
          }
          if (values.id_type === 0) {
            errors.id_type = "Required";
          }
          if (!values.size) {
            errors.size = "Required";
          }
          if (values.id_brand === 0) {
            errors.id_brand = "Required";
          }
          if (values.price === 0) {
            errors.price = "Please enter a price for this product";
          } else if (values.price > 999999999) {
            errors.price = "Please enter a price  valid for this product";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(createProduct(values));
          setIsSent(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, errors }) => (
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

              {/*  <Field name="description" as="textarea"/>
                    <ErrorMessage name="description" component="div" />*/}
              <label>
                Image
                <Field type="url" name="imagen[0]" />
                <Field type="url" name="imagen[1]" />
                <ErrorMessage
                  name="imagen"
                  component={() => (
                    <div className={styles.error}>{errors.imagen}</div>
                  )}
                />
              </label>
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

              <div className={styles.selets}>
                <label htmlFor="id_brand">
                  Brand :
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
                <label htmlFor="id_type">
                  Type :
                  <Field name="id_type" as="select">
                    <option value={0}></option>
                    <option value={1}>Aletas de buceo</option>
                    <option value={2}>Traje De Neopreno</option>
                    <option value={3}>Tabla de Stand Up Paddle</option>
                    <option value={4}>Tabla de Surf</option>
                    <option value={5}>Tabla de WakeBoard</option>
                  </Field>
                  <ErrorMessage
                    name="id_type"
                    component={() => (
                      <div className={styles.error}>{errors.id_type}</div>
                    )}
                  />
                  
                </label>
                
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
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              {isSent && (
                <p className={styles.exito}>form sent successfully </p>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </div>
    </div>

  );
};
export default FormProduct;
