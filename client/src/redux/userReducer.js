import {
  REGISTRO,
  LOGINGOOGLE,
  LOGIN,
  LOGINFACEBOOK,
  RGOOGLE,
} from "./actions";

const initialState = {
  user: [],
  logui:[],
  google:[],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRO:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        logui: window.localStorage.setItem("login", JSON.stringify(action.payload))
      };
    case LOGINGOOGLE:
      return {
        ...state,
       logui: window.localStorage.setItem("login", JSON.stringify(action.payload))
      };
    case LOGINFACEBOOK:
      return {
        ...state,
        logui: window.localStorage.setItem("login", JSON.stringify(action.payload))
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
