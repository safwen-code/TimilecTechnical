import {
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  FAIL_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./Type.js";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { useReducer } from "react";

const AuthState = ({ Children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAUTH: null,
    loading: false,
    errors: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Load User
  //Register User
  //Login User
  //Logout
  //Clear errors
  return <AuthContext.Provider value={{}}>{Children}</AuthContext.Provider>;
};
