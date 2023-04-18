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
  DETAIL_PRODUCT,
  INFINITY,
  SET_CURRENTPAGE,
  FILTER_BRAND,
  FILTER_TYPE,
  FILTER_ALL,
} from "./actions";

const initialState = {
  products: [],
  allProduct: [],
  types: [],
  detail: [],
  brands: [],
  Infinity: [],
  setPage: 0,
  filters: {},
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
        allProduct: action.payload
      };
    //--------------------------------FILTER_BY_NAME--------------------------------\\
    case FILTER_BY_NAME:
      return {
        ...state,
        products: action.payload,
    // filters: { ...state.filters, name: action.payload }
      };
    //--------------------------------FILTER_BY_NAME_ASC--------------------------------\\
    case FILTER_BY_ASC:
      return {
        ...state,
        products: action.payload,
        // filters: { ...state.filters, orderBy: "ASC" }
      };
    //--------------------------------FILTER_BY_NAME_DESC--------------------------------\\
    case FILTER_BY_DESC:
      return {
        ...state,
        products: action.payload,
        // filters: { ...state.filters, orderBy: "DESC" }
      };
    //--------------------------------FILTER_BY_PRICE_ASC--------------------------------\\
    case FILTER_BY_PRICE_ASC:
      return {
        ...state,
        products: action.payload,
        // filters: { ...state.filters, orderBy: "PRICE_ASC" }
      };
    //--------------------------------FILTER_BY_PRICE_DESC--------------------------------\\
    case FILTER_BY_PRICE_DESC:
      return {
        ...state,
        products: action.payload,
        // filters: { ...state.filters, orderBy: "PRICE_DESC" }
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
    case DETAIL_PRODUCT:
      return {
        ...state,
        detail: action.payload,
      };
    case INFINITY:
      return {
        ...state,
        Infinity: action.payload,
      };
    case SET_CURRENTPAGE:
      return {
        ...state,
        setPage: action.payload,
      };
    case FILTER_BRAND:
      return {
        ...state,
        products: action.payload,
        // filters: { ...state.filters, brand: action.payload }
      };
    case FILTER_TYPE:
      return {
        ...state,
        products: action.payload,
        // filters: { ...state.filters, type: action.payload },
      };

    case FILTER_ALL:
      return {
        ...state,
        // filters: {},
      };
    default:
      return state;
  }
};

export default reducer;