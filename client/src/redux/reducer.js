import {
  ADD_TO_CART,
  ADD_TO_FAV,
  CLEAN_PRODUCT,
  CLEAR_FILTERS,
  DECREMENT_QUANTITY,
  DELETE_TO_CART,
  DELETE_TO_FAV,
  DETAIL_PRODUCT,
  EDITAR_PRODUCT,
  EMPTY_CART,
  FILTER_BRAND,
  FILTER_BY_NAME,
  FILTER_TYPE,
  GET_ALL_BRANDS,
  GET_ALL_DETAILS,
  GET_ALL_PRODUCTS,
  GET_All_TYPES,
  GET_FAV,
  // LOGIN,
  // STOCKS_PRODUCTS,
  // STOCKS_PRODUCTS,
  GET_USERS,
  INCREMENT_QUANTITY,
  INFINITY,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  PAYMENT,
  POST_PRODUCT,
  PUT_PRODUCT,
  SAVE_FILTERS_AND_PAGE,
  SET_CURRENTPAGE,
  SET_FAVORITES,
  UPDATE_STOCK_PRODUCT_DEC
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
  shop: [],
  users: [],
  editarProduct:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //--------------------------------POST_PRODUCT---------------------------------------------\\
    case POST_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    //--------------------------------GET_ALL_PRODUCTS-----------------------------------------\\
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProduct: action.payload.slice(),
      };

    // case STOCKS_PRODUCTS:
    //   return {
    //     ...state,
    //     products: action.payload,
    //     allProduct: action.payload,

    //   }
    //--------------------------------FILTROS--------------------------------------------------\\
    case FILTER_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

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

    case SAVE_FILTERS_AND_PAGE:
      return {
        ...state,
        filters: action.payload.filters,
        setPage: action.payload.page,
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

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {},
        setPage: 1,
      };
    //--------------------------------ADD_TO_CART--------------------------------\\
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    //--------------------------------DELETE_TO_CART--------------------------------\\
    case DELETE_TO_CART:
      const deleteCar = state.shoppingCart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        shoppingCart: deleteCar,
      };
    //--------------------------------EMPTY_CART--------------------------------\\
    case EMPTY_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product) => product !== action.payload
        ),
      };
    //--------------------------------ADD_TO_FAV-------------------------------\\
    case ADD_TO_FAV:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    //--------------------------------DELETE_TO_FAV-------------------------------\\
    case DELETE_TO_FAV:
      const newFavorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    // //--------------------------------GET FAV------------------------------------------//
    case GET_FAV:
      return {
        ...state,
        favorites: action.payload,
      };
    // //--------------------------------SET FAV------------------------------------------//

    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    //--------------------------------PAYMENT------------------------------------------------------\\
    case PAYMENT:
      return {
        ...state,
        shoppingCart: action.payload,
      };
    //--------------------------------GET_ALL_DETAILS------------------------------------------------------\\
    case GET_ALL_DETAILS:
      return {
        ...state,
        shop: action.payload,
      };
    //--------------------------------INCREMENT_QUANTITY------------------------------------------------\\
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
    //--------------------------------DECREMENT_QUANTITY-----------------------------------------------\\
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
    //--------------------------------UPDATE_STOCK_PRODUCT_DEC----------------------------------------\\
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
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case PUT_PRODUCT:
    
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case EDITAR_PRODUCT:{
      return{
        ...state,
        editarProduct: action.payload
      }
    }
    case CLEAN_PRODUCT:
      return{
        ...state,
        editarProduct:[]
      }
    default:
      return state;
  }
};

export default reducer;
