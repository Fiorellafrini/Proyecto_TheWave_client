import axios from "axios";
export const POST_PRODUCT = "POST_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_All_TYPES = "GET_ALL_TYPES";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
// export const FILTER_BY_ASC = "FILTER_BY_ASC";
// export const FILTER_BY_DESC = "FILTER_BY_DESC";
// export const FILTER_BY_PRICE_ASC = "FILTER_BY_PRICE_ASC";
// export const FILTER_BY_PRICE_DESC = "FILTER_BY_PRICE_DESC";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const FILTER_BRAND = "FILTER_BRAND";
export const FILTER_TYPE = "FILTER_TYPE";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const INFINITY = "INFINITY";
export const SET_CURRENTPAGE = "SET_CURRENTPAGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_TO_CART = "DELETE_TO_CART";


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
export function filterByName(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "/product?name=" + payload
      );
      return dispatch({
        type: "FILTER_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      alert("Dont exits...Are you lost?");
    }
  };
}
// export function filterByNameAsc() {
//   return async function (dispatch) {
//     try {
//       var json = await axios.get("http://localhost:3001/order/name/asc");
//       return dispatch({
//         type: "FILTER_BY_ASC",
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
// export function filterByNameDesc() {
//   return async function (dispatch) {
//     try {
//       var json = await axios.get("http://localhost:3001/order/name/desc");
//       return dispatch({
//         type: "FILTER_BY_DESC",
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function orderByName(order) {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/product?sort=${order}`
//       );
//       const orderByName = response.data;
//       return dispatch({
//         type: "ORDER_BY_NAME",
//         payload: orderByName,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// ----------------------------------

export const orderByName = (criteria) => {
  return { type: ORDER_BY_NAME, payload: criteria };
};

// ----------------------------------

// -----------------------------------FILTER_BY_PRICE-----------------------------------
// export function filterByPriceAsc() {
//   return async function (dispatch) {
//     try {
//       var json = await axios.get("http://localhost:3001/order/price/less");
//       return dispatch({
//         type: "FILTER_BY_PRICE_ASC",
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
// export function filterByPriceDesc() {
//   return async function (dispatch) {
//     try {
//       var json = await axios.get("http://localhost:3001/order/price/higher");
//       return dispatch({
//         type: "FILTER_BY_PRICE_DESC",
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function orderByPrice(order) {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/product?sort=${order}`
//       );
//       const orderByPrice = response.data;
//       return dispatch({
//         type: "ORDER_BY_PRICE",
//         payload: orderByPrice,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

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

export function productsData(page) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `product?page=${page}&size=30`
      );
      return dispatch({
        type: "INFINITY",
        payload: json.data.products,
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
// ----------------------------------ADD TO CART----------------------------------
export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};
// ----------------------------------UPDATE CART----------------------------------
// ----------------------------------DELETE TO CART----------------------------------
export const deleteToCart = (product) => {
  return { type: DELETE_TO_CART, payload: product };
};
