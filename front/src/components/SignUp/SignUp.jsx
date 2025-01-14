/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SignUp = ({ className, overlapGroupClassName, divClassName }) => {
  return (
    <div className={`sign-up ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`text-wrapper-5 ${divClassName}`}>Sign Up</div>
      </div>
    </div>
  );
};
