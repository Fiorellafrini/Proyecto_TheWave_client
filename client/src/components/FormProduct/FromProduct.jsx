import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./FromProduct.module.css";
import { createProduct } from "../../redux/actions";
import Navigation from "../Navigation/Navigation";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";






// cloudinary.config({
// cloud_name: 'djngalumm',
// api_key: '897654326791657',
// api_secret: 'UfU4nbhH4-ud3S3bYVrv-U4lICo',
// // CLOUDINARY_URL=cloudinary://897654326791657:UfU4nbhH4-ud3S3bYVrv-U4lICo@djngalumm
// });

const FormProduct = () => {
  const [isSent, setIsSent] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const errors = {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        Swal.fire({
          title: "¡Good Job.!",
          text: "Product Created SuccesFully",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        // navigate("/SectionCategories");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Missing Information",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      return error.message;
    }
  };

  // Función para manejar la carga de imágenes
  const handleImageUpload = async (e, setFieldValue) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "thewave"); // Reemplaza con tu upload preset de Cloudinary

    // Realizar la petición de carga de imagen a Cloudinary
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djngalumm/image/upload", // Reemplaza con tu cloud name de Cloudinary
      {
        method: "POST",
        body: formData
      }
    );
    const data = await res.json();
    console.log(data);

    // Actualizar los valores de imagen en el formulario
    setFieldValue("imagen[0]", data.secure_url);
    // setFieldValue("imagen[1]", data.secure_url);
  };



  return (
    <div className={styles.container}>
    <Navigation/>
    <div>
      <Formik
        initialValues={{
          name: "",
          imagen: ["", ""],
          id_brand: "",
          id_type: "",
          size: "",
          price: "",
        }}
        validate={(values) => {
          if (!values.name) {
            errors.name = "Please enter a name for this product";
          } /*  else if (!products.includes(values.name)){
                    errors.name = "this name has been used";
                } */
          if (!values.imagen) {
            errors.imagen = "Please enter a imagen for this product";
          }
          if (!values.id_type) {
            errors.id_type = "Required";
          }
          if (!values.size) {
            errors.size = "Required";
          }
          if (!values.id_brand) {
            errors.id_brand = "Required";
          }
          if (!values.price) {
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
        {({ isSubmitting, errors,  setFieldValue }) => (
          <div className={styles.cntd}>
            <Form onSubmit={handleSubmit} className={styles.formulario}>
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
              {/* <label>
                Imagen
                <Field type="url" name="imagen[0]" />
                <Field type="url" name="imagen[1]" />
                <ErrorMessage
                  name="imagen"
                  component={() => (
                    <div className={styles.error}>{errors.imagen}</div>
                  )}
                />
              </label> */}
              <label>
                Imagen
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setFieldValue)}
                />
                {/* Mostrar error si lo hay */}
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


// const FormProduct = () => {
//   const [isSent, setIsSent] = useState(false);
//   const dispatch = useDispatch();

//   // Función para manejar la carga de imágenes
//   const handleImageUpload = async (e, setFieldValue) => {
//     const files = e.target.files;
//     const formData = new FormData();
//     formData.append("file", files[0]);
//     formData.append("upload_preset", "thewave"); // Reemplaza con tu upload preset de Cloudinary

//     // Realizar la petición de carga de imagen a Cloudinary
//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/djngalumm/image/upload", // Reemplaza con tu cloud name de Cloudinary
//       {
//         method: "POST",
//         body: formData
//       }
//     );
//     const data = await res.json();

//     // Actualizar los valores de imagen en el formulario
//     setFieldValue("imagen[0]", data.secure_url);
//     setFieldValue("imagen[1]", data.secure_url);
//   };

//   return (
//     <div className={styles.container}>
//       <Navigation />
//       <div>
//         <Formik
//           initialValues={{
//             name: "",
//             imagen: ["", ""],
//             id_brand: 0,
//             id_type: 0,
//             size: "",
//             price: 0
//           }}
//           validate={(values) => {
//             const errors = {};
//             if (!values.name) {
//               errors.name = "Please enter a name for this product";
//             }
//             if (values.imagen.length === 0) {
//               errors.imagen = "Please enter an image for this product";
//             }
//             if (values.id_type === 0) {
//               errors.id_type = "Required";
//             }
//             if (!values.size) {
//               errors.size = "Required";
//             }
//             if (values.id_brand === 0) {
//               errors.id_brand = "Required";
//             }
//             if (values.price === 0) {
//               errors.price = "Please enter a price for this product";
//             } else if (values.price > 999999999) {
//               errors.price = "Please enter a valid price for this product";
//             }
//             return errors;
//           }}
//           onSubmit={(values, { setSubmitting, resetForm }) => {
//             dispatch(createProduct(values));
//             setIsSent(true);
//             setSubmitting(false);
//             resetForm();
//           }}
//         >
//           {({ isSubmitting, errors, setFieldValue }) => (
//             <div className={styles.cntd}>
//               <Form className={styles.formulario}>
//                 <label>
//                   Name
//                   <Field type="text" name="name" />
//                   <ErrorMessage
//                     name="name"
//                     component={() => (
//                       <div className={styles.error}>{errors.name}</div>
//                     )}
//                   />
//                 </label>

//                 <label>
//                   Imagen
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, setFieldValue)}
//                   />
//                   {/* Mostrar error si lo hay */}
//                   <ErrorMessage
//                     name="imagen"
//                     component
//                     ={() => (
//                       <div className={styles.error}>{errors.imagen}</div>
//                     )}
//                 />
//               </label>

//               <label>
//                 Price
//                 <Field type="number" name="price" />
//                 <ErrorMessage
//                   name="price"
//                   component={() => (
//                     <div className={styles.error}>{errors.price}</div>
//                   )}
//                 />
//               </label>

//               <div className={styles.selets}>
//                 <label htmlFor="id_brand">
//                   Brand :
//                   <Field name="id_brand" as="select">
//                     <option value={0}></option>
//                     <option value={1}>Hurley</option>
//                     <option value={2}>Rip Curl</option>
//                     <option value={3}>Vesl</option>
//                     <option value={4}>Russell</option>
//                     <option value={5}>Wave</option>
//                     <option value={6}>JOBE</option>
//                     <option value={7}>Compact</option>
//                     <option value={8}>SungShot</option>
//                     <option value={9}>Billabong</option>
//                     <option value={10}>O'neill</option>
//                     <option value={11}>Orca</option>
//                     <option value={12}>Gill Zenlite</option>
//                     <option value={13}>Powerjet</option>
//                     <option value={14}>Mundial One</option>
//                   </Field>
//                   <ErrorMessage
//                     name="id_brand"
//                     component={() => (
//                       <div className={styles.error}>{errors.id_brand}</div>
//                     )}
//                   />
//                 </label>
//                 <label htmlFor="id_type">
//                   Type :
//                   <Field name="id_type" as="select">
//                     <option value={0}></option>
//                     <option value={1}>Aletas de buceo</option>
//                     <option value={2}>Traje De Neopreno</option>
//                     <option value={3}>Tabla de Stand Up Paddle</option>
//                     <option value={4}>Tabla de Surf</option>
//                     <option value={5}>Tabla de WakeBoard</option>
//                   </Field>
//                   <ErrorMessage
//                     name="id_type"
//                     component={() => (
//                       <div className={styles.error}>{errors.id_type}</div>
//                     )}
//                   />
                  
//                 </label>
                
//                 <label htmlFor="size">
//                 Size  
//                   <Field name="size" as="select">
//                     <option value="none"></option>
//                     <option value="S">S</option>
//                     <option value="M">M</option>
//                     <option value="L">L</option>
//                     <option value="XL">XL</option>
//                     <option value="XXL">XXL</option>
//                     <option value="TU">Unique Size</option>
//                   </Field>

//                   <ErrorMessage
//                     name="size"
//                     component={() => (
//                       <div className={styles.error}>{errors.size}</div>
//                     )}
//                   />
//                 </label>
//               </div>
//               <button type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//               {isSent && (
//                 <p className={styles.exito}>form sent successfully </p>
//               )}
//             </Form>
//           </div>
//         )}
//       </Formik>
//     </div>
//     </div>

//   );
// };


export default FormProduct;
