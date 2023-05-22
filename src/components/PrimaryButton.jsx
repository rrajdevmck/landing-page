import React from "react";

import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  return (
    <button className="PrimaryButton">
      <span className="PrimaryButtonText">{props.text}</span>
    </button>
  );
};

export default PrimaryButton;
