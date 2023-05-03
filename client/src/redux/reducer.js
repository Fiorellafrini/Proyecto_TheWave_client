import {
  GET_ALL_PRODUCTS,
  POST_PRODUCT,
  GET_All_TYPES,
  GET_ALL_BRANDS,
  FILTER_BY_NAME,
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
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  GET_ALL_DETAILS,
  UPDATE_STOCK_PRODUCT_DEC,
  EMPTY_CART,
  ADD_TO_FAV,
  DELETE_TO_FAV,
  GET_FAV,
  GET_USERS,
  PUT_PRODUCT,
  CLEAR_FILTERS,
  CLEAR_CART,
  REMOVE_ALL_FAV,
  EDITAR_PRODUCT,
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
    //--------------------------------GET_ALL_BRANDS-----------------------------------------\\


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
      console.log('hola', action.payload);
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

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {},
        setPage: 1,
      };

    //--------------------------------CART--------------------------------\\
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    case DELETE_TO_CART:
      const deleteCar = state.shoppingCart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        shoppingCart: deleteCar,
      };

    case CLEAR_CART:
      return {
        ...state,
        shoppingCart: [], // Reinicia el carrito
      };

    //--------------------------------EMPTY_CART--------------------------------\\
    case EMPTY_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product) => product !== action.payload
        ),
      };
    //--------------------------------FAV-------------------------------\\
    case ADD_TO_FAV:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case DELETE_TO_FAV:
      const newFavorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    case GET_FAV:
      return {
        ...state,
        favorites: action.payload,
      };

    case REMOVE_ALL_FAV:
      return {
        ...state,
        favorites: [],
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
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    case EDITAR_PRODUCT:{
      return{
        ...state,
        editarProduct: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
