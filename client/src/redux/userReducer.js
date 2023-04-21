import { REGISTRO, LOGIN, LOGINGOOGLE,LOGINFACEBOOK,RGOOGLE} from "./actions";

const initialState = {
  user: [],
  login: [],
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
      console.log(action.payload);
      return {
        ...state,
        login: action.payload,
      };
    case LOGINGOOGLE:
      console.log(action.payload);
      return {
        ...state,
       google: action.payload,
      };
    case LOGINFACEBOOK:
      console.log(action.payload);
      return {
        ...state,
        login: action.payload,
      };
    case RGOOGLE:
      console.log(action.payload);
      return {
        ...state,
        google: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
