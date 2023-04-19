import {
  GET_ALL_PRODUCTS,
  POST_PRODUCT,
  GET_All_TYPES,
  GET_ALL_BRANDS,
  FILTER_BY_NAME,
  // FILTER_BY_ASC,
  // FILTER_BY_DESC,
  // FILTER_BY_PRICE_ASC,
  // FILTER_BY_PRICE_DESC,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  FILTER_BRAND,
  FILTER_TYPE,
  DETAIL_PRODUCT,
  INFINITY,
  SET_CURRENTPAGE,
} from "./actions";

const initialState = {
  products: [],
  allProduct: [],
  types: [],
  detail: [],
  brands: [],
  infinity: [],
  setPage: 0,
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
    // case FILTER_BY_ASC:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    //--------------------------------FILTER_BY_NAME_DESC--------------------------------\\
    // case FILTER_BY_DESC:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    //--------------------------------ORDER_BY_NAME--------------------------------\\
    case ORDER_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------FILTER_BY_PRICE_ASC--------------------------------\\
    // case FILTER_BY_PRICE_ASC:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    //--------------------------------FILTER_BY_PRICE_DESC--------------------------------\\
    // case FILTER_BY_PRICE_DESC:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    //--------------------------------ORDER_BY_PRICE--------------------------------\\
    case ORDER_BY_PRICE:
      return {
        ...state,
        products: action.payload
      }
      //----------------------------//
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
        infinity: action.payload,
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
      };
    case FILTER_TYPE:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
