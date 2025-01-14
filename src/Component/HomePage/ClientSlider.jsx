import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrustedClientList } from "../UniversalComponent/JSON/TrustedClientList";

const ClientSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
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
    <div className="logo-slider">
      <h2 className="slider-title">Our Partners</h2>
      <Slider {...settings}>
        {TrustedClientList.map((logo, i) => (
          <div key={i} className="slide">
            <img src={logo.logo} alt={`Logo ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
