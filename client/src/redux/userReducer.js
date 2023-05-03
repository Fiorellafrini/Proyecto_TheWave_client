import { REGISTRO, LOGIN, PUTUSER, GET_BY_ID, CLEAN_USER } from "./actions";

const initialState = {
  user: [],
  logui: [],
  google: [],
  userID:[]
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
    case GET_BY_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case CLEAN_USER:
      return{
        ...state,
        userID:[]
      }
    default:
      return state;
  }
};

export default authReducer;
