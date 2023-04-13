import { POST_PRODUCT, GET_ALL_PRODUCTS, GET_All_TYPES, GET_ALL_BRANDS} from "./actions";

const initialState = {
    products: [],
    types:[],
    detail:[],
    brands:[],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products:action.payload
            };
        case GET_All_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case GET_ALL_BRANDS:
            return {
                ...state,
                brands : action.payload
            }
        default: return state;
    }
};

export default reducer;
