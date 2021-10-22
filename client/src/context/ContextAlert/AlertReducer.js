import { SET_ALERT, REMOVE_ALERT } from "./Types.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: action.payload,
      };
    case REMOVE_ALERT:
      return state.alerts.filter((alert) => alert.id !== action.payload.id);

    default:
      return state;
  }
};
