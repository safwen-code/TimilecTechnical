import React from "react";
import PropTypes from "prop-types";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">
        this is a full stack app for keeping contacts of timelec
      </p>
      <p className="bg-dark p">
        <strong> Version :</strong> 1.0.0
      </p>
    </div>
  );
};

About.propTypes = {};

export default About;
