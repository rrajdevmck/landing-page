import React from "react";

import "./SecondaryLink.css";

const SecondaryLink = (props) => {
  return (
    <a className="SecondaryLink">
      <span className="SecondaryLinkText">{props.text}</span>
    </a>
  );
};

export default SecondaryLink;
