import React from "react";

import "./FAQDetail.css";

const FAQDetail = (props) => {
  return (
    <details className="FaqDetail">
      <summary className="DetailSummary">
        <span className="FaqDetailSummaryText">
          Is there a free trial available?
        </span>
        <img
          className="MinusCircle"
          src="public/assets/icons/playcircle.svg"
        ></img>
      </summary>
      <span className="FaqDetailParagraph">
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up
      </span>
    </details>
  );
};

export default FAQDetail;
