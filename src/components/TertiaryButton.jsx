import React from "react";

import "./TertiaryButton.css";

const TertiaryButton = (props) => {
  return (
    <button className="TertiaryButton">
      <span className="TertiaryButtonText">{props.text}</span>
    </button>
  );
};

export default TertiaryButton;
