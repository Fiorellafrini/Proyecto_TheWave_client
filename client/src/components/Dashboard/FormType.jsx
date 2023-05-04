
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct } from "../../redux/actions";
import styles from "./Form.module.css";
const FormType = () => {
    const dispatch = useDispatch();
  const navegate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const { id } = useParams();
  return (
    <div>
      <Formik
        initialValues={{
          id_type: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (values.id_type === 0) {
            errors.id_type = "Required";
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
              <label htmlFor="id_type">
                      Type
                      <Field name="id_type" as="select">
                        <option value={0}></option>
                        <option value={1}>Diving fins</option>
                        <option value={2}>Wetsuit</option>
                        <option value={3}>Stand Up Paddle Board</option>
                        <option value={4}>Surfboard</option>
                        <option value={5}>WakeBoard</option>
                      </Field>
                      <ErrorMessage
                        name="id_type"
                        component={() => (
                          <div className={styles.error}>{errors.id_type}</div>
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
export default FormType;
