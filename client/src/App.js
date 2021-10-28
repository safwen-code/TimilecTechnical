import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./components/Layout/Navbars.js";
import Home from "./components/content/pages/Home.js";
import About from "./components/content/pages/About.js";
import ErrorPage from "./components/content/Error/ErrorPage.js";
import ContactState from "./context/contextContact/ContactState.js";
import AuthState from "./context/ContextAuth/AuthState.js";
import Register from "./components/content/Auth/Register.js";
import Login from "./components/content/Auth/Login.js";
import AlertState from "./context/ContextAlert/AlertState.js";
import Alerts from "./components/Layout/Alerts";
import setAuthToken from "./utils/setAuthToken.js";
import PrivateRoute from "./utils/PrivateRoute.js";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbars />
            <div className="container">
              <Alerts />
              <Switch>
                {/* <PrivateRoute exact path="/">
                  <Home />
                </PrivateRoute> */}
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
