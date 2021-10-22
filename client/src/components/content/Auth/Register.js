import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../context/ContextAlert/AlertContext";
import AuthContext from "../../../context/ContextAuth/AuthContext";
import { useHistory } from "react-router-dom";
const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { AddAlert } = alertContext;
  const { registerUser, errors, ClearErrors, isAUTH } = authContext;

  const [Forma, setForma] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  let history = useHistory();
  useEffect(() => {
    if (isAUTH) {
      history.push("/");
    }
    if (errors === "user All ready exist") {
      AddAlert(errors, "danger");
      ClearErrors();
    }
    // eslint-disable-next-line
  }, [errors, history, isAUTH]);

  const { name, email, password, password2 } = Forma;

  const hundlerChange = (e) => {
    console.log("hundelChange");
    setForma({ ...Forma, [e.target.name]: e.target.value });
  };
  
  const hundlerSubmit = (e) => {
    e.preventDefault();
    registerUser({ name, email, password });
  };

  return (
    <div className="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 mt-3">
          <h4 className="d-flex justify-content-center"> Register User</h4>
          <form className="">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                name
              </label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="formGroupExampleInput"
                placeholder="name please"
                value={name}
                onChange={hundlerChange}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="email please"
                value={email}
                onChange={hundlerChange}
              />
            </div>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  placeholder="password"
                  aria-label="First name"
                  value={password}
                  onChange={hundlerChange}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  name="password2"
                  class="form-control"
                  placeholder="password2"
                  aria-label="Last name"
                  value={password2}
                  onChange={hundlerChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn btn-primary"
                type="button"
                onClick={hundlerSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
