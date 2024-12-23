/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Frame = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "light",
  });

  return (
    <div className={`frame ${className}`}>
      <div className="text-wrapper-6">Light</div>

      <div className={`ellipse-wrapper ${state.property1}`}>
        <div
          className="ellipse"
          onClick={() => {
            dispatch("click");
          }}
        />
      </div>

      <div className="text-wrapper-6">Dark</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "dark") {
    switch (action) {
      case "click":
        return {
          property1: "light",
        };
    }
  }

  if (state.property1 === "light") {
    switch (action) {
      case "click":
        return {
          property1: "dark",
        };
    }
  }

  return state;
}

Frame.propTypes = {
  property1: PropTypes.oneOf(["dark", "light"]),
};
