import React from "react";

import "./MetricItem.css";

const MetricItem = (props) => {
  return (
    <div className="MetricItem">
      <span className="MetricItemNumber">4000+</span>
      <div className="MetricItemInfo">
        <span className="MetricItemInfoText">Global customers</span>
        <span className="MetricItemInfoSupportingText">
          We’ve helped over 4,000 amazing global companies.
        </span>
      </div>
    </div>
  );
};

export default MetricItem;
