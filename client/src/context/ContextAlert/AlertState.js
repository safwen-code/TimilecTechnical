import AlertContext from "./AlertContext";
import { SET_ALERT, REMOVE_ALERT } from "./Types.js";
import { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import { v4 as uuidv4 } from "uuid";

const AlertState = ({ children }) => {
  const initialState = {
    alerts:[]
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const AddAlert = ( msg, type ) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, 5000);
  };
  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        AddAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
export default AlertState;
