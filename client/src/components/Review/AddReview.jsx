import axios from "axios";
import { Field, Form, Formik } from "formik";
import jwt from "jwt-decode";
import { React, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import styles from "./AddReview.module.css";
import StarRating from "./StarRating";

const AddReview = ({ setIsOpen}) => {
  const [isSent, setIsSent] = useState(false);
  const [rating, setRating] = useState(0);
  const navegate = useNavigate();

  const { id } = useParams();
  let token = window.localStorage.getItem("login");
  const idUser = jwt(token).id;

  return (
    <Formik
      initialValues={{
        comment: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.rating === 0) {
          errors.rating =
            "Please provide the necessary information to reset your password.";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        if (rating !== 0) {
          setIsSent(true);
          setSubmitting(false);
          axios.post(`http://localhost:3001/review`, {
            comment: values.comment,
            rating,
            idProduct: id,
            idUser,
          });
          navegate(`/detail/${id}`);
        }
        if (rating === 0) {
          setIsSent(false);
          alert("Please insert a new rating");
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <div className="animate__animated animate__fadeIn">
          <div className={styles.cntd}>
            <Form className={styles.formulario}>
              <StarRating rating={rating} setRating={setRating} />
              <label htmlFor="comment"></label>
              <br />
              <Field name="comment" as="textarea" />
              <br />
              <div className={styles.btnrws}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                
                >
                  Send
                </button>
              </div>
              {isSent && <p className={styles.exito}>Sent successfully </p>}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddReview;
