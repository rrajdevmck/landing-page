import React from "react";

import "./FAQDetail.css";

const FAQDetail = (props) => {
  return (
    <details className="FaqDetail">
      <summary className="DetailSummary">
        <span className="FaqDetailSummaryText">{props.detailSummaryText}</span>
        <img
          className="MinuxCircle1"
          src="public/assets/images/minuxcircle.png"
          alt="minuxcircle"
        ></img>
      </summary>
      <span className="FaqDetailParagraph">{props.detailText}</span>
    </details>
  );
};

export default FAQDetail;
