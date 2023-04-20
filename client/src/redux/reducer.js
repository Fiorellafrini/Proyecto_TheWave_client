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
  ADD_TO_CART,
  DELETE_TO_CART,
  UPDATE_CART_ITEM_QUANTITY,
} from "./actions";

const initialState = {
  products: [],
  allProduct: [],
  shoppingCart: [],
  types: [],
  detail: [],
  brands: [],
  Infinity: [],
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
      };
    case FILTER_TYPE:
      return {
        ...state,
        products: action.payload,
      };
    //--------------------------------ADD_TO_CART--------------------------------\\
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    //--------------------------------DELETE_TO_CART--------------------------------\\
    case DELETE_TO_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product) => product !== action.payload
        ),
      };
    //--------------------------------UPDATE_CART--------------------------------\\
    default:
      return state;
  }
};

export default reducer;
