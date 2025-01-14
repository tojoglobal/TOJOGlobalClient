import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrustedClientList } from "../UniversalComponent/JSON/TrustedClientList";

export const TrustedClient = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="container homePage_trustedClient_section">
      <div className="homePage_trustedClient_textDiv" data-aos="fade-down">
        <h1 className="headdingGradientText homePage_trustedClient_heading_text">
          Clients
        </h1>
        <h1 className="homePage_trustedClient_heading_text mobile_homePage_tustedClientText">
          Trusted by <span className="headdingGradientText">15+ Companies</span>{" "}
          Here's How We Deliver Results
        </h1>
      </div>

      <div className="OurTrustedClient_card_image_container">
        <div className="logo-slider ">
          <Slider {...settings}>
            {TrustedClientList.map((logo, index) => (
              <div key={index} className="slide">
                <img
                  src={logo.logo}
                  alt={`Logo ${index + 1}`}
                  className="trusted-client-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
