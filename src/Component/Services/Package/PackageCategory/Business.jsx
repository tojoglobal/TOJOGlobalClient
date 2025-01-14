import React from "react";
import PackageCard from "../PackageCard";

const Business = () => {
  return (
    <div className="package_main_div">
      {/* gradient */}
      <div className="bussness_top_right_gradient">
        <div className="gradientRoundedDiv"></div>
      </div>
      <div className="bussness_left_bottom_gradient">
        <div className="gradientRoundedDiv"></div>
      </div>
      {/* gradient and icon absolute positon */}
      <div className="bussness_top_right_img">
        <img
          src="/Images/smallicons/Marketing-01.png"
          alt="startup package image"
          className="background_img_bottom"
          id="bussness_top_right_img"
        />
      </div>
      <div className="bussness_bottom_left_img">
        <img
          src="/Images/smallicons/Marketing-03.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="bussness_bottom_right_img">
        <img
          src="/Images/smallicons/Marketing-02.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="package_top_text_div" data-aos="fade-down">
        <div className="package_top_text_style">
          <h1>Business Owner Packages</h1>
          <p>
            Enhance your online presence and drive growth with our comprehensive
            packages designed specifically for online business owners. From
            marketing to content creation, we've got everything you need to
            succeed.
          </p>
        </div>
      </div>
      <div className="row justify-content-md-center package_card_row">
        <PackageCard
          Package={{
            packageName: "Starter Growth",
            packageInfo:
              "Startup Growth is a guide for startups, providing resources to accelerate their growth.",
            packageBudget: "200",
            packageService: [
              "Social Media Marketing (Up to 2 Platforms)",
              "Basic Content Creation (4 Posts/Week)",
              "Basic Graphics and Visuals (4 Designs/Week)",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Business Boost",
            packageInfo:
              "Business Boost is a guide for startups, offering resources to accelerate their growth and achieve significant business success.",
            packageBudget: "300",
            packageService: [
              "Social Media Marketing (Up to 4 Platforms)",
              "Advanced Content Creation (6 Posts/Week)",
              "Custom Graphics and Visuals (6 Designs/Month)",
              "Basic Community Moderation",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Professional Growth",
            packageInfo:
              "Professional Growth is a guide for startups, providing resources to help their team members develop professionally and contribute to the company's success.",
            packageBudget: "500",
            packageService: [
              "Comprehensive Marketing Strategy (All Major Platforms)",
              "Full Content Creation Support (Daily Posts/Week)",
              "Advanced Graphics and Visuals (Unlimited Designs/Month)",
              "Custom Graphics and Visuals (8 Designs/Month)",
              "Full Community Moderation (24/7 Monitoring)",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Ultimate Brand Elevation",
            packageInfo:
              "Startup Essentials Powerhouse is a guide for startups, helping them build powerful businesses.",
            packageBudget: "700",
            packageService: [
              "Full-Service Marketing (All Platforms + Paid Ads Management)",
              "Premium Content Creation (Daily Posts + Blog/Article Writing)",
              "Professional Graphics and Visuals (Unlimited Designs/Month)",
              "Advanced Graphics and Visuals (Unlimited Designs/Month)",
              "Full Community Moderation & Engagement",
              "Monthly Strategy Consultation and Analytics Reporting",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Business;
