import axios from "axios";
import Swal from "sweetalert2";
export const POST_PRODUCT = "POST_PRODUCT";
export const UPDATE_STOCK_PRODUCT_INC = "UPDATE_STOCK_PRODUCT_INC";
export const UPDATE_STOCK_PRODUCT_DEC = "UPDATE_STOCK_PRODUCT_DEC";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_All_TYPES = "GET_ALL_TYPES";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const FILTER_BRAND = "FILTER_BRAND";
export const FILTER_TYPE = "FILTER_TYPE";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const INFINITY = "INFINITY";
export const SET_CURRENTPAGE = "SET_CURRENTPAGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_TO_CART = "DELETE_TO_CART";
export const EMPTY_CART = "EMPTY CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const PAYMENT = "PAYMENT";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const DELETE_TO_FAV = "DELETE_TO_FAV";
export const STOCKS_PRODUCTS = "STOCKS_PRODUCTS";
export const GET_USERS = "GET_USERS";



export const LOGIN = "LOGIN";
export const REGISTRO = "REGISTRO";
export const LOGINGOOGLE = "LOGINGOOGLE";
export const LOGINFACEBOOK = "LOGINFACEBOOK";
export const RGOOGLE = "RGOOGLE";
export const PUTUSER = "PUTUSER";

//-------------------------------------------CREATE PRODUCT---------------------------------------------------------//


export const createProduct = (body) => async (dipatch) => {
  const { data } = await axios.post("/product", body);
  return dipatch({
    type: "POST_PRODUCT",
    payload: data,
  });
};
// -----------------------------------LIST-PRODUCT-----------------------------------------------------//
export function listProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get("/product");
      return dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: json.data,
      });
    } catch (error) {
      
    }
  };
}
//-------------------------------------LIST IN STOCK - OUT STOCK-------------------
// export function stocksProducts(id) {
//   return async function (dispatch) {
//     const response = await axios.put(`/product/${id}`);
//     return dispatch({
//       type: "STOCKS_PRODUCTS",
//       payload: response.data
//     }) 
//   }
// }






// export const updateStockIncrement = (id) => async (dispatch) => {
//   try {
//     const response = await axios.get(`/product/${id}`);
//     const currentStockValue = response.data.stock;

//     const newStockValue = currentStockValue + 1;

//     const updateResponse = await axios.put(`/product/${id}`, {
//       stock: newStockValue,
//     });

//     dispatch({ type: UPDATE_STOCK_PRODUCT_DEC, payload: updateResponse.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// -----------------------------------FILTER_BY_NAME---------------------------------------------------//
export function filterByName(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get("/product?name=" + payload);
      return dispatch({
        type: "FILTER_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      // alert("Dont exits...Are you lost?");
      Swal.fire({
        title: "Dont exits...Are you lost?",
        color: "white",
        icon: "error",
        background: "#1e1e1e",
        // position: "top-end",color: "white",
        showConfirmButton: false,
        // confirmButtonColor: '#224145',
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };
}
// -----------------------------------ORDER_BY_NAME-----------------------------------------------------//
export const orderByName = (criteria) => {
  return { type: ORDER_BY_NAME, payload: criteria };
};
// -----------------------------------ORDER_BY_PRICE----------------------------------------------------//
export const orderByPrice = (criteria) => {
  return { type: ORDER_BY_PRICE, payload: criteria };
};

// -------------------DETAIL----------------------------------------------------------------------------//
export function productsById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/Product/${id}`);
      return dispatch({
        type: "DETAIL_PRODUCT",
        payload: json.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}
// -------------------PAGE-----------------------------------------------------------------//
export function productsData(page) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`product?page=${page}&size=30`);
      return dispatch({
        type: "INFINITY",
        payload: json.data.products,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}
export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENTPAGE,
    payload,
  };
};

// -------------------FILTER-BRAND---------------------------------------------------------------//

export function filterBrand(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`product?brand=${id}`);
      const filterByBrand = response.data;
      return dispatch({
        type: "FILTER_BRAND",
        payload: filterByBrand,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
// -----------------------------------FILTER-BY-TYPE-----------------------------------------//
export function filterType(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/product?type=${id}`);
      const filterByType = response.data;
      return dispatch({
        type: "FILTER_TYPE",
        payload: filterByType,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//---------------------LOGIN---------------------------------------------//
export const registro = (body) => async (dipatch) => {
  const { data } = await axios.post("/user", body);
  try {
    dipatch({
      type: "REGISTRO",
      payload: data,
    });
    Swal.fire({
      icon: "success",
      title: "Register Successful",
      color: "white",
      background: "#1e1e1e",
      confirmButtonColor: '#224145',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redireccionar a la ruta deseada
        window.location.href = "/SectionLogIn";
      }
    });
  } catch (error) {
    
  }
};
// ----------------------------------ADD TO CART-----------------------------------------------//
export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};
// ----------------------------------DELETE TO CART----------------------------------
export const deleteToCart = (id) => {
  return { type: DELETE_TO_CART, payload: id };
};


// ----------------------------------PAYMENT----------------------------------------------------//
export const paymentMercadoPago = (body) => {
  return async (dispatch) => {
    try {
      var json = await axios
        .post("/payment", body)
        .then((res) => {
          window.location.href = res.data.response.body.init_point;
        })
        .catch((error) => {});
      return dispatch({
        type: PAYMENT,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// -----------------------------------UPDATE_STOCK_PRODUCT_DEC-----------------------------------//
export const updateStockDecrement = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/product/${id}`);
    const currentStockValue = response.data.stock;

    const newStockValue = currentStockValue - 1;

    const updateResponse = await axios.put(`/product/${id}`, {
      stock: newStockValue,
    });

    dispatch({ type: UPDATE_STOCK_PRODUCT_INC, payload: updateResponse.data });
  } catch (error) {
    console.log(error);
  }
};
// -----------------------------------UPDATE_STOCK_PRODUCT_INC-----------------------------------
export const updateStockIncrement = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/product/${id}`);
    const currentStockValue = response.data.stock;

    const newStockValue = currentStockValue + 1;

    const updateResponse = await axios.put(`/product/${id}`, {
      stock: newStockValue,
    });

    dispatch({ type: UPDATE_STOCK_PRODUCT_DEC, payload: updateResponse.data });
  } catch (error) {
    console.log(error);
  }
};
// -----------------------------------QUANTITY--------------------------------------------------//
export const incrementQuantity = (id) => {
  return { type: INCREMENT_QUANTITY, payload: id };
};
export const decrementQuantity = (id) => {
  return { type: DECREMENT_QUANTITY, payload: id };
};

export const empty_cart = (product) => {
  return { type: EMPTY_CART, payload: product };
};

export const login = (body) => async (dipatch) => {
  try {
    const { data } = await axios.post("/auth", body);
    dipatch({
      type: "LOGIN",
      payload: data,
    });
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      color: "white",
      background: "#1e1e1e",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    // alert(error.message);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Incorrect Credentials",
      color: "white",
      background: "#1e1e1e",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

//-------------------------------------FAVORITOS-----------------------------------------------------//
export const addToFav = (product) => {
  return { type: ADD_TO_FAV, payload: product };
};
// ----------------------------------DELETE TO CART----------------------------------
export const deleteToFav = (id) => {
  return { type: DELETE_TO_FAV, payload: id };
};


//---------------------------------------PUT USER --------------------------------------------------//

export const putUser = (id, body, token) => async (dispatch) => {
  // const authToken =  window.localStorage.getItem("login");
  const { data } = await axios.put(`/user/${id}`, body);
  return dispatch({
    type: PUTUSER,
    payload: data,
  });
};
//----------------------------------------------GET USERS----------------------------------//


export function users() {
  return async function (dispatch) {
    try {
      var json = await axios.get("/user");
      return dispatch({
        type: "GET_USERS",
        payload: json.data,
      });
    } catch (error) {}
  };
}