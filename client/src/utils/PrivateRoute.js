import  { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/ContextAuth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAUTH, loading } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAUTH && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PrivateRoute;
