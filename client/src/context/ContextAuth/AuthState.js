import {
  REGISTER_SUCCESS,
  FAIL_REGISTER,
  USER_LOADED,
  LOAD_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  LOG_OUT,
} from "./Type.js";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAUTH: false,
    loading: false,
    errors: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Register User
  const registerUser = async (forma) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/users/", forma, config);
      console.log("register User", res.data);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      LoadUser();
    } catch (err) {
      dispatch({ type: FAIL_REGISTER, payload: err.response.data.msg });
    }
  };
  //Load User
  const LoadUser = async () => {
    //to do get the token from the headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: LOAD_FAIL });
    }
  };
  //Login User
  const LogUser = async (Forma) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/auth", Forma, config);
      console.log("resultat de login user", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      LoadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.msg });
    }
  };
  //Logout
  const LogOut = () => {
    dispatch({ type: LOG_OUT });
  };
  //Clear errors
  const ClearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAUTH: state.isAUTH,
        loading: state.loading,
        errors: state.errors,
        user: state.user,
        registerUser,
        LogUser,
        LogOut,
        ClearErrors,
        LoadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
