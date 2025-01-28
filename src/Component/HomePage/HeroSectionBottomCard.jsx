import React, { useEffect } from "react";
import GlassEffectSvg from "./HomePageSvg/GlassEffectSvg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroPageWhyus } from "../UniversalComponent/JSON/HeroPageWhyus";

export const HeroSectionBottomCard = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000,
  //     once: true,
  //   });
  // }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      {/* <div className="hero_bottom_card_div">
        <div>
          <h2 className="headdingGradientText HeroPageWhyus_heading_text">
            Why Us
          </h2>
        </div>
        <div className="HeroPageWhyus_card_image_container">
          <div className="logo-slider ">
            <Slider {...settings}>
              {HeroPageWhyus.map((logo, index) => (
                <div key={index} className="slide">
                  <img
                    src={logo.logo}
                    alt={`Logo ${index + 1}`}
                    className="HeroPageWhyus-logo"
                  />
                  <h3 className="HeroPageWhyus_text">
                    Comprehensive Digital Solutions
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}

      <section className="container home_hero_card_section">
        {/* 01 */}
        <div
          className="home_hero_card"
          data-aos="fade-up"
          data-aos-delay={1 * 200}
        >
          <div className="hero_card_image_container">
            <img
              src="/Images/homePage/homePageHeroPartCardImage.png"
              alt="homePageHeroPartCardImage.png"
            />
            {/* <GlassEffectSvg /> */}
          </div>
          {/* image and text div */}
          <div className="hero_card_div">
            <img
              src="/Images/homePage/homePageHeroCardSvg01.svg"
              alt="crypto-icon"
            />
            <h3>Comprehensive Digital Solutions</h3>
          </div>
        </div>
        {/* 02 */}
        <div
          className="home_hero_card"
          data-aos="fade-up"
          data-aos-delay={2 * 200}
        >
          <div className="hero_card_image_container">
            <img
              src="/Images/homePage/homePageHeroPartCardImage.png"
              alt="homePageHeroPartCardImage.png"
            />
          </div>
          {/* image and text div */}
          <div className="hero_card_div">
            <img
              src="/Images/homePage/homePageHeroCardSvg02.svg"
              alt="crypto-icon"
            />
            <h3>Industry Expert Team</h3>
          </div>
        </div>
        {/* 03 */}
        <div
          className="home_hero_card"
          data-aos="fade-up"
          data-aos-delay={3 * 200}
        >
          <div className="hero_card_image_container">
            <img
              src="/Images/homePage/homePageHeroPartCardImage.png"
              alt="homePageHeroPartCardImage.png"
            />
          </div>
          {/* image and text div */}
          <div className="hero_card_div">
            <img
              src="/Images/homePage/homePageHeroCardSvg03.svg"
              alt="crypto-icon"
            />
            <h3>
              Client-Centric <br /> Focus
            </h3>
          </div>
        </div>
        {/* 04 */}
        <div
          className="home_hero_card"
          data-aos="fade-up"
          data-aos-delay={4 * 200}
        >
          <div className="hero_card_image_container">
            <img
              src="/Images/homePage/homePageHeroPartCardImage.png"
              alt="homePageHeroPartCardImage.png"
            />
          </div>
          {/* image and text div */}
          <div className="hero_card_div">
            <img
              src="/Images/homePage/homePageHeroCardSvg04.svg"
              alt="crypto-icon"
            />
            <h3>Transparent Communication </h3>
          </div>
        </div>
        {/* 05 */}
        <div
          className="home_hero_card"
          data-aos="fade-up"
          data-aos-delay={5 * 200}
        >
          <div className="hero_card_image_container">
            <img
              src="/Images/homePage/homePageHeroPartCardImage.png"
              alt="homePageHeroPartCardImage.png"
            />
          </div>
          {/* image and text div */}
          <div className="hero_card_div">
            <img
              src="/Images/homePage/homePageHeroCardSvg05.svg"
              alt="crypto-icon"
            />
            <h3>Reliable & Timely Delivery</h3>
          </div>
        </div>
        {/* 06 */}
        <div
          className="home_hero_card"
          data-aos="fade-up"
          data-aos-delay={6 * 200}
        >
          <div className="hero_card_image_container">
            <img
              src="/Images/homePage/homePageHeroPartCardImage.png"
              alt="homePageHeroPartCardImage.png"
            />
          </div>
          {/* image and text div */}
          <div className="hero_card_div">
            <img
              src="/Images/homePage/homePageHeroCardSvg06.svg"
              alt="crypto-icon"
            />
            <h3>Affordable Pricing</h3>
          </div>
        </div>
      </section>
    </>
  );
};
