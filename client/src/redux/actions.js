import axios from "axios";
export const POST_PRODUCT = "POST_PRODUCT";
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
export const EMPTY_CART= "EMPTY CART";

export const LOGIN = "LOGIN";
export const REGISTRO = "REGISTRO";
export const LOGINGOOGLE = "LOGINGOOGLE";
export const LOGINFACEBOOK = "LOGINFACEBOOK";
export const RGOOGLE = "RGOOGLE";
export const createProduct = (body) => async (dipatch) => {
  const { data } = await axios.post("/product", body);
  console.log(data);
  console.log(body);
  return dipatch({
    type: "POST_PRODUCT",
    payload: data,
  });
};
export function listProducts() {
  return async function (dispatch) {
    var json = await axios.get("/product");
    return dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: json.data,
    });
  };
}
// -----------------------------------FILTER_BY_NAME-----------------------------------
// export function filterByName(payload) {
//   return async function (dispatch) {
//     try {
//       var json = await axios.get(
//         "http://localhost:3001/product?name=" + payload
//       );
//       return dispatch({
//         type: "FILTER_BY_NAME",
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

export const filterByName = (name) => {
  return {type: FILTER_BY_NAME, payload: name}
}


// ----------------------------------

export const orderByName = (criteria) => {
  return { type: ORDER_BY_NAME, payload: criteria };
};

// ----------------------------------

// ----------------------------------


export const orderByPrice = (criteria) => {
  return { type: ORDER_BY_PRICE, payload: criteria };
};

// ----------------------------------

// -------------------DETAIL----------------------------------

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


// -------------------PAGE----------------------------------


export function productsData(page) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `product?page=${page}&size=30`
      );
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

// -------------------FILTER-BRAND----------------------------------


export function filterBrand(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `product?brand=${id}`
      );
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

export function filterType(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `/product?type=${id}`
      );
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
  return dipatch({
    type: "REGISTRO",
    payload: data,
  });
};
// ----------------------------------ADD TO CART----------------------------------
export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};
// ----------------------------------UPDATE CART----------------------------------
// ----------------------------------DELETE TO CART----------------------------------
export const deleteToCart = (product) => {
  return { type: DELETE_TO_CART, payload: product };
};

export const empty_cart = (product) => {
  return { type: EMPTY_CART, payload: product };
};


export const login = (body) => async (dipatch) => {
  try {
    const { data } = await axios.post("/auth", body);
    return dipatch({
      type: "LOGIN",
      payload: data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export function google() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/auth/google`);
      return dispatch({
        type: "LOGINGOOGLE",
        payload: data,
      });
    } catch (error) {
      alert("laruta no esta autorizada");
    }
  };
}

export function facebook() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/auth/facebook`);
      return dispatch({
        type: "LOGINFACEBOOK",
        payload: data,
      });
    } catch (error) {
      alert("laruta no rata autorizada");
    }
  };
}

export function googleR() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/auth//google/callback`);
      return dispatch({
        type: "RGOOGLE",
        payload: data,
      });
    } catch (error) {
      alert("laruta no rata autorizada");
    }
  };
}