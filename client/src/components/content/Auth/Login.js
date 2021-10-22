import React, { useState } from "react";

const Login = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = Form;
  const hundelChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log("hundel change");
  };
  const hundelSubmit = (e) => {
    e.preventDefault();
    console.log("hundel Submit");
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
                type="email"
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
                type="password"
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
