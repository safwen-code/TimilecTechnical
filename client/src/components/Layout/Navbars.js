import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../context/ContextAuth/AuthContext";
import ContactContext from "../../context/contextContact/contactContext";
import { FaUserInjured } from "react-icons/fa";
import { TiExport } from "react-icons/ti";
import { AiOutlineSchedule } from "react-icons/ai";

const Navbars = ({ titel, icon }) => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAUTH, LogOut, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogOut = () => {
    LogOut();
    clearContacts();
    if (isAUTH) {
      history.push("/login");
    }
  };
  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <h6>
          <FaUserInjured />{" "}
          <span className="d-flex align-itmes-end">{user && user.name}</span>
        </h6>
      </li>
      <li className="nav-item">
        <TiExport />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onLogOut}
          size="sm"
        >
          logOut
        </button>
      </li>
    </Fragment>
  );
  const GuestLinks = (
    <Fragment>
      <li class="nav-item">
        <Link class="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          {icon}
          {"  "}
          {titel}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            {isAUTH ? authLinks : GuestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};
Navbars.propTypes = {
  titel: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

Navbars.defaultProps = {
  titel: "Contact List",
  icon: <AiOutlineSchedule />,
};

export default Navbars;
