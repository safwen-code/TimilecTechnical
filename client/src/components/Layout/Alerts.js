import React, { useContext } from "react";
import AlertContext from "../../context/ContextAlert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.lenght > 0 &&
    alerts.map((alert) => (
      <div class={`alert alert-${alert.type}`} role="alert" key={alert.id}>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
