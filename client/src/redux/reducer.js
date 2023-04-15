import {
  POST_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_All_TYPES,
  GET_ALL_BRANDS,
  FILTER_BY_NAME,
  FILTER_BY_ASC,
  FILTER_BY_DESC,
  FILTER_BY_PRICE_ASC,
  FILTER_BY_PRICE_DESC,
} from "./actions";

const initialState = {
  products: [],
  types: [],
  detail: [],
  brands: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //--------------------------------POST_PRODUCT--------------------------------\\
    case POST_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    //--------------------------------GET_ALL_PRODUCTS--------------------------------\\
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------FILTER_BY_NAME--------------------------------\\
    case FILTER_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------FILTER_BY_NAME_ASC--------------------------------\\
    case FILTER_BY_ASC:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------FILTER_BY_NAME_DESC--------------------------------\\
    case FILTER_BY_DESC:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------FILTER_BY_PRICE_ASC--------------------------------\\
    case FILTER_BY_PRICE_ASC:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------FILTER_BY_PRICE_DESC--------------------------------\\
    case FILTER_BY_PRICE_DESC:
      return {
        ...state,
        products: action.payload,
      };
      
    case GET_All_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_ALL_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
      
    default:
      return state;
  }
};

export default reducer;
