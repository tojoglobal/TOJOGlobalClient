import React from "react";
import PackageCard from "../PackageCard";

const Crypto = () => {
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
          src="/Images/smallicons/Coin-01.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="crypto_bottom_left_img">
        <img
          src="/Images/smallicons/Coin-02.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="package_top_text_div" data-aos="fade-down">
        <div className="package_top_text_style">
          <h1>Cryptocurrency Services</h1>
          <p>
            Buy, sell, and trade cryptocurrencies securely and efficiently.
            Access a wide range of digital assets, explore investment
            opportunities, and stay up-to-date with market trends.
          </p>
        </div>
      </div>
      <div className="row justify-content-md-center package_card_row crypto_div">
        <PackageCard
          Package={{
            packageName: "Launch Plan",
            packageInfo:
              "Building a new cryptocurrency project is time-consuming, especially when searching for top designers, developers, and coders. Avoid the hassle with our comprehensive service package.",
            packageBudget: "699",
            packageService: [
              "Unique Logo Design",
              "Token Creation",
              "White Paper Writing & Design",
              "Social Media Creation & Setup",
              "Website Design & Development",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "Moderation Plan",
            packageInfo:
              "Effective community management is crucial for stability in a crowded market. Our expert team provides 24/7 moderation and management for your social media platforms, ensuring your community stays engaged.",
            packageBudget: "799",
            packageService: [
              "24/7 Telegram Management",
              "24/7 Discord Management",
            ],
          }}
        />
        <PackageCard
          Package={{
            packageName: "All in one Plan",
            packageInfo:
              "This all-in-one package provides everything needed to run your cryptocurrency project smoothly, with zero hassle.",
            packageBudget: "999",
            packageService: [
              "24/7 Telegram Management",
              "24/7 Discord Management",
              "Social Media Management",
              "Content Writing for Media",
              "Graphic Design for Social Media Posts",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Crypto;
