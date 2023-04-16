import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './FromProduct.module.css';

const FormProduct = () => (
    <div>
        <Formik
        initialValues={{
            name: '',
            image: [],
            brand:'',
            type: '',
            size:'',
            price: 0
        }}
        validate={(values) => {
            const errors = {};
            if (!values.name) {
            errors.name = "Please enter a name for this product";
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                errors.name = "please only alphabet and spaces";
            }
            if(!values.image){
                errors.image = "Please enter a name for this product";  
            }
            if (!values.type) {
                errors.type = 'Required';
            }
            if (!values.size) {
                errors.size ='Required';
            }
            if (!values.brand) {
                errors.brand = 'Required';
            }
            if(values.price === 0){
                errors.price = "Please enter a price for this product"; 
            }

            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 10);
        }}
        >
        {({ isSubmitting }) => (
            <Form className={styles.formulario}>
                <label>Name
                <Field type="text" name="name" />
                </label>
                
                <ErrorMessage name="name" component="div" />
                {/*  <Field name="description" as="textarea"/>
                <ErrorMessage name="description" component="div" />*/}
                <label>Image
                <Field type="url" name="image[0]" />
                <ErrorMessage name="image[0]" component="div" />
                <Field type="url" name="image[1]" />
                </label>
                <label>
                Price
                <Field type="number" name="price" />
                <ErrorMessage name="price" component="div" />
                </label>
                
                <label>
                Brnad :
                <Field name="brand" as="select">
                    <option value="Hurley">Hurley</option>
                    <option value="Rip Curl">Rip Curl</option>
                    <option value="Vesl">Vesl</option>
                    <option value="Russell">Russell</option>
                    <option value="Wave">Wave</option>
                    <option value="JOBE">JOBE</option>
                    <option value="Compact">Compact</option>
                    <option value="SungShot">SungShot</option>
                    <option value="Billabong">Billabong</option>
                    <option value="O'neill">O'neill</option>
                    <option value="Orca">Orca</option>
                    <option value="Gill Zenlite">Gill Zenlite</option>
                    <option value="Powerjet">Powerjet</option>
                    <option value="Mundial One">Mundial One</option>
                </Field>
                <ErrorMessage name="brand" component="div" />
            
                Type :
                <Field name="brand" as="select">
                    <option value="Aletas de buceo">Aletas de buceo</option>
                    <option value="Traje De Neopreno">Traje De Neopreno</option>
                    <option value="Tabla de Surf">Tabla de Surf</option>
                    <option value="Tabla de Stand Up Paddle">Tabla de Stand Up Paddle</option>
                </Field>
                Size
                <Field name="brand" as="select">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="TU">Unique Size</option>
                </Field>
                </label>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
        )}
        </Formik>
    </div>
);
export default FormProduct;
