import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/ContextAuth/AuthContext";
import AlertContext from "../../../context/ContextAlert/AlertContext";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { AddAlert } = alertContext;
  const { LogUser, errors, ClearErrors, isAUTH } = authContext;

  let history = useHistory();

  useEffect(() => {
    if (isAUTH) {
      history.push("/");
    }
    if (errors === "invalid password") {
      AddAlert(errors, "danger");
      ClearErrors();
    }
    //eslint-disable-next-line
  }, [errors, isAUTH, history]);

  const { email, password } = Form;
  const hundelChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log("hundel change");
  };

  const hundelSubmit = (e) => {
    e.preventDefault();

    LogUser({ email, password });

    console.log("sign in forma ", Form);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-3">
          <h4 className="d-flex justify-content-center"> Sign User</h4>
          <form className="">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                email
              </label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="formGroupExampleInput"
                placeholder="email please"
                value={email}
                onChange={hundelChange}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                password
              </label>
              <input
                name="password"
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="email please"
                value={password}
                onChange={hundelChange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success" onClick={hundelSubmit}>
                sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
