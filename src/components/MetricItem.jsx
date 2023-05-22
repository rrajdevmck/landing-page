import React from "react";

import "./MetricItem.css";

const MetricItem = (props) => {
  return (
    <div className="MetricItem">
      <span className="MetricItemNumber">{props.metricItemNumber}</span>
      <div className="MetricItemInfo">
        <span className="MetricItemInfoText">{props.metricItemInfoText}</span>
        <span className="MetricItemInfoSupportingText">
          {props.metricItemInfoSupportingText}
        </span>
      </div>
    </div>
  );
};

export default MetricItem;
