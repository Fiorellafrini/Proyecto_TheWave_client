import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editarProduct, productsById} from "../../redux/actions";
// import Navigation from "../Navigation/Navigation";
import styles from "../FormProduct/FromProduct.module.css";
// import Sidebar from "../Dashboard/Sidebar";
import { FiEdit } from "react-icons/fi";



const CardDashEdit = () => {
  const [isSent, setIsSent] = useState(false);
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const { id } = useParams();
  const detalle = useSelector((state) => state.products.detail);

  const [namem, setName] = useState(true);
  const [barand, setBarand] = useState(true);
  const [type, setType] = useState(true);
  const [size, setSize] = useState(true);
  const [imagen,setImagen] = useState(true);
  const [description, setDescription] = useState(true);
  const [stock, setStock] = useState(true);
  const [price,setPrice] = useState(true);


    useEffect(() => {
      dispatch(productsById(id));
    }, [dispatch, id]);

const handleName=()=>{
  setName(!namem)
}
const handlebarand = () => {
  setBarand(!barand);
};
const handleType = () => {
  setType(!type);
};
const handleSize = () => {
  setSize(!size);
};
const handleImagen = () => {
  setImagen(!imagen)
}
const handleDescription = () => {
  setDescription(!description);
};
const handleStock = () => {
  setStock(!stock);
};
const handlePrice = () => {
  setPrice(!price);
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
        body: formData,
      }
    );
    const data = await res.json();

    // Actualizar los valores de imagen en el formulario
    setFieldValue("imagen[0]", data.secure_url);
    // setFieldValue("imagen[1]", data.secure_url);
  };

  return (
    <div className={styles.container}>
      {/* <Navigation /> */}
      <div>
        <Formik
          initialValues={{
            name: `${detalle.name}`,
            id_brand: `${detalle.id_brand}`,
            id_type: `${detalle.id_type}`,
            size: `${detalle.size}`,
            price: `${detalle.price}`,
            stock: `${detalle.stock}`,
            description: `${detalle.description}`,
            imagen: `${detalle.imagen}`,
          }}
          validate={(values) => {
            const errors = {};
            if (namem !== true) {
              if (!values.name) {
                errors.name = "Please enter a name for this product";
              }
            }
            if (imagen !== true) {
              if (values.imagen.length === 0) {
                errors.imagen = "Please enter a imagen for this product";
              }
            }
            if (type !== true) {
              if (values.id_type === 0) {
                errors.id_type = "Required";
              }
            }
            if (size !== true) {
              if (!values.size) {
                errors.size = "Required";
              }
            }
            if (barand !== true) {
              if (values.id_brand === 0) {
                errors.id_brand = "Required";
              }
            }
            if (price !== true) {
              if (values.price === 0) {
                errors.price = "Please enter a price for this product";
              } else if (values.price > 999999999) {
                errors.price = "Please enter a price  valid for this product";
              }
            }
            if (stock !== true) {
              if (values.stock === 0) {
                errors.stock = "Please enter the quantity of products in stock";
              }
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(editarProduct(id, values));
            setIsSent(true);
            setSubmitting(false);
            resetForm();
            navegate("/SectionCategories");
          }}
        >
          {({ isSubmitting, errors, setFieldValue }) => (
            <div className="animate__animated animate__fadeIn">
              <div className={styles.cntd}>
                <Form className={styles.formulario}>
                  <label>
                    Name
                    <Field type="text" name="name" disabled={namem} />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className={styles.error}>{errors.name}</div>
                      )}
                    />
                    <button type="button" onClick={handleName}>
                      <FiEdit />
                    </button>
                  </label>

                  <label>
                    Image
                    <input
                      type="file"
                      accept="image/*"
                      disabled={imagen}
                      onChange={(e) => handleImageUpload(e, setFieldValue)}
                    />
                    {/* Mostrar error si lo hay */}
                    <ErrorMessage
                      name="imagen"
                      component={() => (
                        <div className={styles.error}>{errors.imagen}</div>
                      )}
                    />
                    <button type="button" onClick={handleImagen}>
                      <FiEdit />
                    </button>
                  </label>
                  <label>
                    Price
                    <Field type="number" name="price" disabled={price} />
                    <ErrorMessage
                      name="price"
                      component={() => (
                        <div className={styles.error}>{errors.price}</div>
                      )}
                    />
                    <button type="button" onClick={handlePrice}>
                      <FiEdit />
                    </button>
                  </label>

                  <label>
                    Available stock
                    <Field type="number" name="stock" disabled={stock} />
                    <ErrorMessage
                      name="stock"
                      component={() => (
                        <div className={styles.error}>{errors.stock}</div>
                      )}
                    />
                    <button type="button" onClick={handleStock}>
                      <FiEdit />
                    </button>
                  </label>
                  <label>
                    Description
                    <Field
                      name="description"
                      as="textarea"
                      disabled={description}
                    />
                    <ErrorMessage name="description" component="div" />
                    <button type="button" onClick={handleDescription}>
                      <FiEdit />
                    </button>
                  </label>
                  <div className={styles.selets}>
                    <label htmlFor="id_brand">
                      Brand
                      <Field name="id_brand" as="select" disabled={barand}>
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
                      <button type="button" onClick={handlebarand}>
                        <FiEdit />
                      </button>
                    </label>
                    <label htmlFor="id_type">
                      Type
                      <Field name="id_type" as="select" disabled={type}>
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
                      <button type="button" onClick={handleType}>
                        <FiEdit />
                      </button>
                    </label>

                    <label htmlFor="size">
                      Size
                      <Field name="size" as="select" disabled={size}>
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
                      <button type="button" onClick={handleSize}>
                        <FiEdit />
                      </button>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={
                      namem &&
                      price &&
                      stock &&
                      description &&
                      imagen &&
                      size &&
                      type &&
                      barand === true
                        ? true
                        : false
                    }
                  >
                    Submit
                  </button>
                  {isSent && (
                    <p className={styles.exito}>form sent successfully </p>
                  )}
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CardDashEdit;
