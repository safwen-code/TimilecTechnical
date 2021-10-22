import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineSchedule } from "react-icons/ai";

const Navbars = ({ titel, icon }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
