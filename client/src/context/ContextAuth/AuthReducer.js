import {
  REGISTER_SUCCESS,
  FAIL_REGISTER,
  CLEAR_ERRORS,
  LOAD_FAIL,
  USER_LOADED,
} from "./Type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAUTH: true,
        loading: true,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAUTH: true,
        loading: false,
      };

    case FAIL_REGISTER:
    case LOAD_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAUTH: false,
        user: null,
        errors: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
};
