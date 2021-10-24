import React, { useContext } from "react";
import AlertContext from "../../context/ContextAlert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.lenght > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`} role="alert">
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
