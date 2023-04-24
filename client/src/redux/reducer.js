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
  ADD_TO_CART,
  DELETE_TO_CART,
  PAYMENT,
  UPDATE_STOCK_PRODUCT_INC,
  UPDATE_STOCK_PRODUCT_DEC,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  EMPTY_CART,
  ADD_TO_FAV,
  DELETE_TO_FAV,
  // LOGIN,
} from "./actions";

const initialState = {
  products: [],
  allProduct: [],
  shoppingCart: [],
  types: [],
  detail: [],
  brands: [],
  infinity: [],
  setPage: 0,
  filters: {},
  favorites: [],
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
        allProduct: action.payload.slice(),
      };
    //--------------------------------FILTER_BY_NAME--------------------------------\\
    // case FILTER_BY_NAME:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    case FILTER_BY_NAME:
      return {
        ...state,
        products: state.allProduct.filter(
          (prod) =>
            prod.name &&
            prod.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
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
    // case ORDER_BY_NAME:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    case ORDER_BY_NAME:
      return {
        ...state,
        products: [...state.products].sort((a, b) => {
          if (action.payload === "nameAsc") {
            if (a.name < b.name) return -1;
            return 0;
          } else if (action.payload === "nameDesc") {
            if (a.name > b.name) return -1;
            return 0;
          } else if (action.payload === "nameAsc") {
            if (a.name < b.name) return -1;
            return 0;
          } else if (action.payload === "nameDesc") {
            if (a.name > b.name) return -1;
            return 0;
          }
          return 0;
        }),
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
    // case ORDER_BY_PRICE:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    case ORDER_BY_PRICE:
      const sortName = [...state.products].sort((a, b) => {
        if (action.payload === "priceAsc") {
          if (a.price < b.price) return -1;
          return 0;
        } else if (action.payload === "priceDesc") {
          if (a.price > b.price) return -1;
          return 0;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        products: sortName,
      };
    //-----------------------------------------------------------------------------\\
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

    case EMPTY_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product) => product !== action.payload
        ),
      };
    //---------------------------------------------------------------------------------//
    case ADD_TO_FAV:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    //--------------------------------DELETE_TO_CART--------------------------------\\
    case DELETE_TO_FAV:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product !== action.payload
        ),
      };
    //--------------------------------PAYMENT--------------------------------\\
    case PAYMENT:
      return {
        ...state,
        shoppingCart: action.payload,
      };
    //--------------------------------UPDATE_STOCK_PRODUCT_DEC--------------------------------\\
    case UPDATE_STOCK_PRODUCT_DEC:
      const updatedProductDec = action.payload;
      const updatedProductsDec = state.products.map((product) => {
        if (product.id === updatedProductDec.id) {
          return updatedProductDec;
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: updatedProductsDec,
      };
    //--------------------------------UPDATE_STOCK_PRODUCT_INC--------------------------------\\
    case UPDATE_STOCK_PRODUCT_INC:
      const updatedProductInc = action.payload;
      const updatedProductsInc = state.products.map((product) => {
        if (product.id === updatedProductInc.id) {
          return updatedProductInc;
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: updatedProductsInc,
      };
    //--------------------------------INCREMENT_QUANTITY--------------------------------\\
    case INCREMENT_QUANTITY:
      const id = action.payload;
      const currentQuantity =
        state.shoppingCart.find((item) => item.id === id)?.quantity || 0;
      const updatedCart = state.shoppingCart.map((item) => {
        if (item.id === id) {
          const updatedProduct = { ...item, quantity: currentQuantity + 1 };
          return updatedProduct;
        } else {
          return Object.assign({}, item, { page: undefined });
        }
      });
      return {
        ...state,
        shoppingCart: updatedCart,
      };

    //--------------------------------DECREMENT_QUANTITY--------------------------------\\
    case DECREMENT_QUANTITY:
      const idLess = action.payload;
      const currentQuantityLess =
        state.shoppingCart.find((item) => item.id === idLess)?.quantity || 0;
      const updatedCartLess = state.shoppingCart.map((item) => {
        if (item.id === idLess) {
          const updatedProduct = { ...item, quantity: currentQuantityLess - 1 };
          if (updatedProduct.quantity < 1) {
            updatedProduct.quantity = 1;
          }
          return updatedProduct;
        } else {
          return Object.assign({}, item, { page: undefined });
        }
      });
      return {
        ...state,
        shoppingCart: updatedCartLess,
      };
    default:
      return state;
  }
};

export default reducer;
