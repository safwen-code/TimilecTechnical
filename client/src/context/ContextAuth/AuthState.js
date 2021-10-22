import {
  REGISTER_SUCCESS,
  FAIL_REGISTER,
  USER_LOADED,
  LOAD_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./Type.js";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { useReducer } from "react";
import axios from "axios";

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAUTH: null,
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
    } catch (err) {
      dispatch({ type: FAIL_REGISTER, payload: err.response.data.msg });
    }
  };
  //Load User
  const LoadUser = async () => {
    //to do get the token from the headers
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
  const LogUser = () => console.log("login user");
  //Logout
  const LogOut = () => console.log("logOut User");
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
        LoadUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
