import React from "react";

import SecondaryLink from "~/components/SecondaryLink";
import "./FooterLinksColumn.css";

const FooterLinksColumn = (props) => {
  return (
    <div className="FooterLinksColumn">
      <h1 className="FooterLinkHeading">Product</h1>
      <div className="FooterLinksColumnContainer">
        <SecondaryLink text="Overview"></SecondaryLink>
        <SecondaryLink text="Features"></SecondaryLink>
        <SecondaryLink text="Solutions"></SecondaryLink>
        <SecondaryLink text="Tutorials"></SecondaryLink>
        <SecondaryLink text="Pricing"></SecondaryLink>
        <SecondaryLink text="Releases"></SecondaryLink>
      </div>
    </div>
  );
};

export default FooterLinksColumn;
