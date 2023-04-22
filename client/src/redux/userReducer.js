import { REGISTRO, LOGINGOOGLE,LOGINFACEBOOK,RGOOGLE} from "./actions";

const initialState = {
  user: [],
  
  google:[],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRO:
      return {
        ...state,
        user: action.payload,
      };
    // case LOGIN:
    //   return {
    //     ...state,
    //     logui: action.payload
    //   };
    case LOGINGOOGLE:
      return {
        ...state,
       google: action.payload,
      };
    case LOGINFACEBOOK:
      return {
        ...state,
        login: action.payload,
      };
    case RGOOGLE:
      return {
        ...state,
        google: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
