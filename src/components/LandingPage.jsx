import React from "react";

import "../index.css";
import "./LandingPage.css";
import SecondaryLink from "~/components/SecondaryLink";
import PrimaryButton from "~/components/PrimaryButton";

const LandingPage = (props) => {
  return (
    <div className="RootWrapperLandingPage">
      <div className="WhitePaddingContainer">
        <div className="Navbar">
          <div className="LeftNavItems">
            <img
              className="UntitledUiLogo"
              src="public/assets/images/untitleduilogo.png"
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
        </div>
        <div className="LandingSection">
          <div className="LandingSectionContent">
            <div className="Badge">
              <div className="BadgeBase">
                <span className="BadgeBaseText">New feature</span>
              </div>
              <div className="Content">
                <span className="BadgeSideText">
                  Check out the team dashboard
                </span>
                <img
                  className="ArrowRight"
                  src="public/assets/icons/arrowright.svg"
                ></img>
              </div>
            </div>
            <span className="LandingHeading">
              Beautiful analytics to grow smarter
            </span>
            <span className="LandingSupportingText">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </span>
          </div>
          <div className="LandingSectionButtonGroup">
            <div className="TertiaryIconButton">
              <img
                className="PlayCircle"
                src="public/assets/icons/playcircle.svg"
              ></img>
              <span className="TertiaryIconButtonText">Demo</span>
            </div>
            <div className="BigPrimaryButton">
              <span className="Text">Sign up</span>
            </div>
          </div>
          <img
            className="ImageWithAnalytics"
            src="public/assets/images/imageWithAnalytics.png"
          ></img>
        </div>
        <div className="SocialProofSection">
          <span className="SocialProofSectionText">
            Join 4,000+ companies already growing
          </span>
          <div className="Logos">
            <img
              className="LayersLogo"
              src="public/assets/images/LayersLogo.png"
            ></img>
            <img
              className="SisyphusLogo"
              src="public/assets/images/SisyphusLogo.png"
            ></img>
            <img
              className="CircoolesLogo"
              src="public/assets/images/CircoolesLogo.png"
            ></img>
            <img
              className="CatalogLogo"
              src="public/assets/images/CatalogLogo.png"
            ></img>
            <img
              className="QuotientLogo"
              src="public/assets/images/QuotientLogo.png"
            ></img>
          </div>
        </div>
        <hr className="Divider"></hr>
        <div className="FeatureSectionInfo">
          <span className="FetaureSectionName">Features</span>
          <span className="FeatureSectionHeading">
            Analytics that feels like it’s from the future
          </span>
          <span className="FeatureSectionSubHeading">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </span>
          <div className="Features">
            <div className="FeaturesRow">
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img
                    className="Mail"
                    src="public/assets/icons/mail.svg"
                  ></img>
                </div>
                <div className="TextAndSupportingText">
                  <span className="Text">Share team inboxes</span>
                  <span className="SupportingText">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </span>
                </div>
              </div>
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img className="Zap" src="public/assets/icons/zap.svg"></img>
                </div>
                <div className="TextAndSupportingText">
                  <span className="Text">Deliver instant answers</span>
                  <span className="SupportingText">
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </span>
                </div>
              </div>
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img
                    className="BarChart2"
                    src="public/assets/icons/barchart.svg"
                  ></img>
                </div>
                <div className="TextAndSupportingText">
                  <span className="Text">Manage your team with reports</span>
                  <span className="SupportingText">
                    Measure what matters with Untitled’s easy-to-use reports.
                    You can filter, export, and drilldown on the data in a
                    couple clicks.
                  </span>
                </div>
              </div>
            </div>
            <div className="FeaturesRow">
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img
                    className="Smile"
                    src="public/assets/icons/playcircle.svg"
                  ></img>
                </div>
                <div className="TextAndSupportingText">
                  <span className="Text">Connect with customers</span>
                  <span className="SupportingText">
                    Solve a problem or close a sale in real-time with chat. If
                    no one is available, customers are seamlessly routed to
                    email without confusion.
                  </span>
                </div>
              </div>
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img
                    className="Command"
                    src="public/assets/icons/command.svg"
                  ></img>
                </div>
                <div className="TextAndSupportingText">
                  <span className="Text">
                    Connect the tools you already use
                  </span>
                  <span className="SupportingText">
                    Explore 100+ integrations that make your day-to-day workflow
                    more efficient and familiar. Plus, our extensive developer
                    tools.
                  </span>
                </div>
              </div>
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img
                    className="MessageCircle"
                    src="public/assets/icons/messagecircle.svg"
                  ></img>
                </div>
                <div className="TextAndSupportingText">
                  <span className="Text">Our people make the difference</span>
                  <span className="SupportingText">
                    We’re an extension of your customer service team, and all of
                    our resources are free. Chat to our friendly team 24/7 when
                    you need help.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="GrayPaddingContainer">
        <div className="QuoteSection">
          <img
            className="SisyphusLogoRemovebgPreview1"
            src="public/assets/images/SisyphusLogoremovebgpreview.png"
          ></img>
          <div className="QuoteAndAttribution">
            <span className="Quote">
              We’ve been using Untitled to kick start every new project and
              can’t imagine working without it.
            </span>
            <div className="QuoteAvatar">
              <img
                className="AvatarImage"
                src="public/assets/images/AvatarImage.png"
              ></img>
              <div className="AvatarInfo">
                <span className="AvatarName">Candice Wu</span>
                <span className="AvatarDescription">
                  Product Manager, Sisyphus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
