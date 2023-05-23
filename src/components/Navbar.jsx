import React from "react";

import SecondaryLink from "~/components/SecondaryLink";
import PrimaryButton from "~/components/PrimaryButton";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <div className="LeftNavItems">
        <img
          className="UntitledUiLogo"
          src="public/assets/images/untitleduilogo.png"
          alt="untitleduilogo"
        ></img>
        <div className="LeftNavLinks">
          <SecondaryLink text="Home"></SecondaryLink>
          <SecondaryLink text="Products"></SecondaryLink>
          <SecondaryLink text="Resources"></SecondaryLink>
          <SecondaryLink text="Pricing"></SecondaryLink>
        </div>
      </div>
      <div className="RightNavItems">
        <SecondaryLink text="Log in"></SecondaryLink>
        <PrimaryButton text="Sign up"></PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;
