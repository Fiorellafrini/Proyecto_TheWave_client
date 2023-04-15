import axios from "axios";
export const POST_PRODUCT = "POST_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_All_TYPES = "GET_ALL_TYPES";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_ASC = "FILTER_BY_ASC";
export const FILTER_BY_DESC = "FILTER_BY_DESC";
export const FILTER_BY_PRICE_ASC = "FILTER_BY_PRICE_ASC";
export const FILTER_BY_PRICE_DESC = "FILTER_BY_PRICE_DESC";

export const createProduct = (body) => async (dipatch) => {
  const { data } = await axios.post("http://localhost:3001/Product", body);
  return dipatch({
    type: "POST_PRODUCT",
    payload: data,
  });
};
export function listProducts() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/product");
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
        "http://localhost:3001/product?name=" + payload
      );
      return dispatch({
        type: "FILTER_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterByNameAsc() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/order/name/asc"
      );
      return dispatch({
        type: "FILTER_BY_ASC",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterByNameDesc() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/order/name/desc"
      );
      return dispatch({
        type: "FILTER_BY_DESC",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
// -----------------------------------FILTER_BY_PRICE-----------------------------------
export function filterByPriceAsc() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/order/price/less"
      );
      return dispatch({
        type: "FILTER_BY_PRICE_ASC",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterByPriceDesc() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/order/price/higher"
      );
      return dispatch({
        type: "FILTER_BY_PRICE_DESC",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}






















export const listTypes = () => async (dispatch) => {
  const { data } = await axios("http://localhost:3001/type");
  return dispatch({
    type: "GET_All_TYPES",
    payload: data,
  });
};
export const listBrands = () => async (dispatch) => {
  const { data } = await axios("http://localhost:3001/brand");
  return dispatch({
    type: "GET_ALL_BRANDS",
    payload: data,
  });
};
