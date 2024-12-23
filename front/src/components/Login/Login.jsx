/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Login = ({ text = "Login", className }) => {
  return (
    <div className={`login ${className}`}>
      <div className="text-wrapper-4">{text}</div>
    </div>
  );
};

Login.propTypes = {
  text: PropTypes.string,
};
