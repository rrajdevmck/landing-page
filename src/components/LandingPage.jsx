import React from "react";

import "../index.css";
import "./LandingPage.css";
import Navbar from "~/components/Navbar";
import Avatar from "~/components/Avatar";
import FAQDetail from "~/components/FAQDetail";
import PrimaryButton from "~/components/PrimaryButton";
import MetricItem from "~/components/MetricItem";
import TertiaryButton from "~/components/TertiaryButton";
import FooterLinksColumn from "~/components/FooterLinksColumn";

const LandingPage = (props) => {
  return (
    <div className="RootWrapperLandingPage">
      <div className="WhitePaddingContainer">
        <Navbar></Navbar>
        <section className="LandingSection">
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
            <h1 className="LandingHeading">
              Beautiful analytics to grow smarter
            </h1>
            <span className="LandingSupportingText">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </span>
          </div>
          <div className="LandingSectionButtonGroup">
            <button className="TertiaryIconButton">
              <img
                className="PlayCircleIcon1"
                src="public/assets/images/playcircleicon.png"
              ></img>
              <span className="TertiaryIconButtonText">Demo</span>
            </button>
            <button className="BigPrimaryButton">
              <span className="Text">Sign up</span>
            </button>
          </div>
          <img
            className="ImageWithAnalytics"
            src="public/assets/images/imageWithAnalytics.png"
          ></img>
        </section>
        <section className="SocialProofSection">
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
        </section>
        <hr className="Divider"></hr>
        <section className="FeatureSection">
          <span className="FetaureSectionName">Features</span>
          <h1 className="FeatureSectionHeading">
            Analytics that feels like it’s from the future
          </h1>
          <h1 className="FeatureSectionSubHeading">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </h1>
          <div className="Features">
            <div className="FeaturesRow">
              <div className="FeatureGroup">
                <div className="FeaturedIcon">
                  <img
                    className="MailIcon1"
                    src="public/assets/images/mailIcon.png"
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
                  <img
                    className="ZapIcon1"
                    src="public/assets/images/ZapIcon.png"
                  ></img>
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
                  <div className="BarChart2">
                    <img
                      className="BarChart21"
                      src="public/assets/images/barchart.png"
                    ></img>
                  </div>
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
                    className="SmileIcon"
                    src="public/assets/images/SmileIcon.png"
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
                    className="CommandIcon"
                    src="public/assets/images/CommandIcon.png"
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
                  <div className="MessageCircle">
                    <img
                      className="MessageCircle1"
                      src="public/assets/images/messagecircle.png"
                    ></img>
                  </div>
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
        </section>
      </div>
      <div className="GrayPaddingContainer">
        <section className="QuoteSection">
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
              <Avatar></Avatar>
              <div className="AvatarInfo">
                <span className="AvatarName">Candice Wu</span>
                <span className="AvatarDescription">
                  Product Manager, Sisyphus
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="WhiteContainerPadding">
        <section className="FaqSection">
          <div className="FaqInfo">
            <h1 className="FaqHeading">Frequently asked questions</h1>
            <span className="FaqSupportingText">
              Everything you need to know about the product and billing.
            </span>
          </div>
          <div className="FaQs">
            <FAQDetail
              detailSummaryText="Is there a free trial available?"
              detailText="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up"
            ></FAQDetail>
            <FAQDetail
              detailSummaryText="Is there a free trial available?"
              detailText="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up"
            ></FAQDetail>
            <FAQDetail
              detailSummaryText="Is there a free trial available?"
              detailText="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up"
            ></FAQDetail>
          </div>
          <div className="FaqContact">
            <div className="AvatarGroup">
              <div className="AvatarGroupImage3">
                <Avatar></Avatar>
              </div>
              <div className="AvatarGroupImage2">
                <Avatar></Avatar>
              </div>
              <div className="AvatarGroupImage1">
                <Avatar></Avatar>
              </div>
            </div>
            <div className="HeadingAndSupportingText">
              <h1 className="Heading">Still have questions?</h1>
              <span className="SupportingText">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </span>
            </div>
            <div className="Actions">
              <PrimaryButton text="Get In Touch"></PrimaryButton>
            </div>
          </div>
        </section>
        <hr className="Divider"></hr>
        <section className="MetricsSection">
          <div className="MetricsSectionHeadingContainer">
            <div className="MetricsSectionHeadingContent">
              <div className="MetricsSectionHeadingContentContainer">
                <h1 className="MetricsSectionSubheading">Launch faster</h1>
                <h1 className="MetricsSectionHeading">Build something great</h1>
              </div>
              <span className="HeadingSupportingText">
                We’ve done all the heavy lifting so you don’t have to — get all
                the data you need to launch and grow your business faster.
              </span>
            </div>
          </div>
          <div className="MetricsSectionInfoContainer">
            <div className="MetricItemContent">
              <div className="MetricItemRow">
                <MetricItem
                  metricItemInfoSupportingText="We’ve helped over 4,000 amazing global companies."
                  metricItemInfoText="Global customers"
                  metricItemNumber="4000+"
                ></MetricItem>
                <MetricItem
                  metricItemInfoSupportingText="Our customers have reported an average of ~600% ROI."
                  metricItemInfoText="Return on investment"
                  metricItemNumber="600%"
                ></MetricItem>
              </div>
              <div className="MetricItemRow">
                <MetricItem
                  metricItemInfoSupportingText="Our app has been downloaded over 10k times."
                  metricItemInfoText="Global downloads"
                  metricItemNumber="10k"
                ></MetricItem>
                <MetricItem
                  metricItemInfoSupportingText="We’re proud of our 5-star rating with over 200 reviews."
                  metricItemInfoText="5-star reviews"
                  metricItemNumber="200+"
                ></MetricItem>
              </div>
            </div>
            <img
              className="MetricSectionImage"
              src="public/assets/images/MetricSectionImage.png"
            ></img>
          </div>
        </section>
      </div>
      <div className="GrayPaddingContainer">
        <section className="CtaSection">
          <div className="CtaSectionContentContainer">
            <div className="CtaSectionContent">
              <h1 className="CtaSectionHeading">Start your free trial</h1>
              <h1 className="CtaSectionSubHeading">
                Join over 4,000+ startups already growing with Untitled.
              </h1>
            </div>
            <div className="CtaSectionActions">
              <TertiaryButton text="Learn More"></TertiaryButton>
              <PrimaryButton text="Get Started"></PrimaryButton>
            </div>
          </div>
        </section>
      </div>
      <div className="WhiteContainerPadding">
        <footer className="Footer">
          <div className="FooterLinksContainer">
            <div className="FooterLinksGroup">
              <FooterLinksColumn footerHeading="Product"></FooterLinksColumn>
              <FooterLinksColumn footerHeading="Company"></FooterLinksColumn>
              <FooterLinksColumn footerHeading="Resources"></FooterLinksColumn>
            </div>
            <div className="FooterLinksGroup">
              <FooterLinksColumn footerHeading="Use Cases"></FooterLinksColumn>
              <FooterLinksColumn footerHeading="Social"></FooterLinksColumn>
              <FooterLinksColumn footerHeading="Legal"></FooterLinksColumn>
            </div>
          </div>
          <div className="FooterContentContainer">
            <hr className="Divider"></hr>
            <div className="FooterContent">
              <img
                className="UntitledUiLogo"
                src="public/assets/images/untitleduilogo.png"
              ></img>
              <span className="FooterText">
                © 2077 Untitled UI. All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
