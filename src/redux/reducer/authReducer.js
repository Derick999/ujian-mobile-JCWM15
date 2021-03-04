import { Switch } from "native-base"
import { AUTH_LOGOUT, AUTH_SIGN, NULLIFY_ERROR } from "../type";

const INITIAL_STATE = {
   isSignedIn: false,
   isError: false,
   errorMessage: null,
   username: null
}

const authReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case NULLIFY_ERROR:
      return {
        ...state,
        isError: false,
        errorMessage: null,
      };
      case AUTH_SIGN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        isSignedIn: true
      };
    case AUTH_LOGOUT:
      return INITIAL_STATE;

      default: return state
   }
}

export default authReducer;