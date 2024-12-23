/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Text = ({ property1, className }) => {
  return (
    <div className={`text ${className}`}>
      <div className="planification">
        {property1 === "variant-5" && <>Planification</>}

        {property1 === "variant-4" && <>Relation client</>}

        {property1 === "variant-3" && <>Vacation</>}

        {property1 === "variant-2" && <>Cahier de texte</>}

        {property1 === "default" && <>Absences</>}
      </div>
    </div>
  );
};

Text.propTypes = {
  property1: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
  ]),
};
