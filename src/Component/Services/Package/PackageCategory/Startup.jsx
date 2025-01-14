import React from "react";
import PackageCard from "../PackageCard";

const Startup = () => {
  return (
    <div className="package_main_div">
      {/* gradient */}
      <div className="topLeftGradientRoundedDiv">
        <div className="gradientRoundedDiv"></div>
      </div>
      <div className="startup_center_right_gradient">
        <div className="gradientRoundedDiv"></div>
      </div>
      {/* gradient and icon absolute positon */}
      <div className="startup_top_right_img">
        <img
          src="/Images/smallicons/Growth-02.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="startup_bottom_left_img">
        <img
          src="/Images/smallicons/Growth-01.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="package_top_text_div" data-aos="fade-up">
        <div className="package_top_text_style">
          <h1>Startup Success Packages</h1>
          <p>
            Launch and grow your startup with our comprehensive packages
            designed to give you the tools and support needed to thrive in a
            competitive market.
          </p>
        </div>
      </div>
      <div className="row  justify-content-md-center package_card_row">
        <PackageCard
          Package={{
            packageName: "Startup Essentials",
            packageInfo:
              "Startup Essentials is a guide for entrepreneurs covering business planning, marketing, finance, team building, and legal compliance.",
            packageBudget: "300",
            packageService: [
              "Basic Marketing Strategy Development",
              "Content Creation (3 Social Media Posts/Week)",
              "Basic Graphics and Visuals (3 Designs/Week)",
              "Brand Identity Consultation",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Growth Accelerator",
            packageInfo:
              "Essentials Growth Accelerator is a guide for startups, covering business planning, marketing, finance, team building, and legal compliance. It includes resources to accelerate growth.",
            packageBudget: "600",
            packageService: [
              "Integrated Marketing Strategy (Social Media + Email Campaigns)",
              "Content Creation (6 Social Media Posts/Week)",
              "Custom Graphics and Visuals (6 Designs/Week)",
              "Community Engagement & Moderation Support",
              "Monthly Performance Review",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Market Expansion",
            packageInfo:
              "Startup Essentials Market Expansion is a guide for startups, helping them expand into new markets.",
            packageBudget: "900",
            packageService: [
              "Comprehensive Marketing Strategy (Social Media, Email, SEO)",
              "Full Content Creation Support (Daily Posts + Video Content)",
              "Advanced Graphics and Visuals (Unlimited Designs/Month)",
              "Full Community Moderation and Engagement",
              "Bi-Weekly Strategy Sessions and Reporting",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Startup Powerhouse",
            packageInfo:
              "Startup Essentials Powerhouse is a guide for startups, helping them build powerful businesses.",
            packageBudget: "1500",
            packageService: [
              "Full-Service Marketing & Growth Strategy (All Platforms + Paid Ads)",
              "Premium Content Creation (Daily Posts, Videos, Blog Writing)",
              "Professional Graphics and Visuals (Unlimited Designs/Month)",
              "24/7 Community Moderation and Engagement",
              "Dedicated Account Manager with Weekly Consultations",
              "Quarterly Market Analysis and Strategic Adjustments",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Startup;
