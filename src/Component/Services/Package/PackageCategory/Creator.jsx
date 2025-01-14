import React from "react";
import PackageCard from "../PackageCard";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Creator = () => {
  return (
    <div className="package_main_div">
      {/* creator gradient */}
      <div className="creator_top_right_gradient">
        <div className="gradientRoundedDiv"></div>
      </div>
      <div className="creator_right_bottom_gradient">
        <div className="gradientRoundedDiv"></div>
      </div>
      {/* gradient and icon absolute positon */}
      <div className="creator_top_right_img">
        <img
          src="/Images/smallicons/Social-02.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="creator_bottom_left_img">
        <img
          src="/Images/smallicons/Social-03.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="creator_bottom_right_img">
        <img
          src="/Images/smallicons/Social-01.png"
          alt="startup package image"
          className="background_img_bottom"
        />
      </div>
      <div className="package_top_text_div" data-aos="fade-up">
        <div className="package_top_text_style">
          <h1>Content Creator Packages</h1>
          <p>
            Are you a content creator looking to enhance your videos for
            YouTube, Facebook, or other social media platforms? Our tailored
            packages are designed to meet your needs!
          </p>
        </div>
      </div>
      <div className="row justify-content-md-center package_card_row">
        {/* 01 content frist package */}
        <div
          className="col-sm-12 col-md-6 col-lg-4 package_col_style"
          data-aos="fade-down"
        >
          <div className="package_col_div_style">
            <div className="package_col_text_style">
              {/* Display package name dynamically */}
              <p className="plan_text_div">Popular</p>
              <h2 className="section_hour">Video Vanguard</h2>

              {/* Display package info dynamically */}
              <p className="section_txt">
                Get started with basic video production services, including
                scriptwriting, shooting, and editing.
              </p>

              {/* Display package price dynamically */}
              <p className="section_price">
                <span>&#65284; </span>
                <span>25</span>
                <span>/video</span>
              </p>

              {/* Button */}
              <Link to="">
                <button type="button" className="contactBtn packageCard_btn">
                  <span className="multiple_text">Get Started</span>
                </button>
              </Link>

              {/* Package services dynamically listed */}
              <div className="package-basics-benefits-content">
                <div className="package_basics_benefits_item">
                  <FaCheckCircle className="package_basics_item_icon" />
                  <span>Professional Video Editing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*02 content second package */}
        <div
          className="col-sm-12 col-md-6 col-lg-4 package_col_style"
          data-aos="fade-down"
        >
          <div className="package_col_div_style">
            <div className="package_col_text_style">
              {/* Display package name dynamically */}
              <p className="plan_text_div">Popular</p>
              <h2 className="section_hour">Visual Virtuoso</h2>

              {/* Display package info dynamically */}
              <p className="section_txt">
                Take your video content to the next level with advanced features
                like animation, motion graphics, and sound design.
              </p>

              {/* Display package price dynamically */}
              <p className="section_price">
                <span>&#65284; </span>
                <span>40</span>
                <span>/video</span>
              </p>

              {/* Button */}
              <Link to="">
                <button type="button" className="contactBtn packageCard_btn">
                  <span className="multiple_text">Get Started</span>
                </button>
              </Link>

              {/* Package services dynamically listed */}
              <div className="package-basics-benefits-content">
                <div className="package_basics_benefits_item">
                  <FaCheckCircle className="package_basics_item_icon" />
                  <span>Professional Video Editing</span>
                </div>
                <div className="package_basics_benefits_item">
                  <FaCheckCircle className="package_basics_item_icon" />
                  <span>Content Creation Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 03 content third package */}
        <div
          className="col-sm-12 col-md-6 col-lg-4 package_col_style"
          data-aos="fade-down"
        >
          <div className="package_col_div_style">
            <div className="package_col_text_style">
              {/* Display package name dynamically */}
              <p className="plan_text_div">Popular</p>
              <h2 className="section_hour">Video Maestro</h2>

              {/* Display package info dynamically */}
              <p className="section_txt">
                Experience the ultimate video production experience with premium
                services, including drone footage, professional voiceovers, and
                custom music.
              </p>

              {/* Display package price dynamically */}
              <p className="section_price">
                <span>&#65284; </span>
                <span>45</span>
                <span>/video</span>
              </p>

              {/* Button */}
              <Link to="">
                <button type="button" className="contactBtn packageCard_btn">
                  <span className="multiple_text">Get Started</span>
                </button>
              </Link>

              {/* Package services dynamically listed */}
              <div className="package-basics-benefits-content">
                <div className="package_basics_benefits_item">
                  <FaCheckCircle className="package_basics_item_icon" />
                  <span>Professional Video Editing</span>
                </div>
                <div className="package_basics_benefits_item">
                  <FaCheckCircle className="package_basics_item_icon" />
                  <span>Content Creation Assistance</span>
                </div>
                <div className="package_basics_benefits_item">
                  <FaCheckCircle className="package_basics_item_icon" />
                  <span>Custom Thumbnail Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*04 content fourth package */}
        <PackageCard
          Package={{
            packageName: "Video Visionary",
            packageInfo:
              "Partner with our top-tier video creators for exclusive, personalized services tailored to your unique brand and goals.",
            packageBudget: "150",
            packageService: [
              "4 videos monthly ",
              "Video Editing",
              "Content Creation Strategy Consultation",
              "Custom Thumbnail Design for Each Video ",
            ],
          }}
        />
        {/* 05 content fifth package */}
        <PackageCard
          Package={{
            packageName: "Video Vanguard Plus",
            packageInfo:
              "Enjoy all the benefits of Video Maestro, plus additional perks like priority scheduling, exclusive content ideas, and ongoing support.",
            packageBudget: "250",
            packageService: [
              "8 videos monthly",
              "Video Editing",
              "Full Content Creation Support",
              "Custom Thumbnail Design for Each Video",
              "Social Media Management for Video Promotion",
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Creator;
