import {
  REGISTRO,
  LOGIN,
  PUTUSER
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
    case PUTUSER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
