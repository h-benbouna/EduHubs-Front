/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const About = ({
  property1,
  className,
  divClassName,
  icon = "/img/icon-5.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`about property-1-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.property1 === "drop-down" && (
        <>
          <div className="menu-2" />

          <div className="item-down-2">
            <div className="text-wrapper-2">About</div>

            <img className="img" alt="Icon" src="/img/icon-4.png" />
          </div>
        </>
      )}

      {state.property1 === "default" && (
        <div className="item-up-2">
          <div className={`text-wrapper-2 ${divClassName}`}>About</div>

          <img className="img" alt="Icon" src={icon} />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "drop-down",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

About.propTypes = {
  property1: PropTypes.oneOf(["drop-down", "default"]),
  icon: PropTypes.string,
};
