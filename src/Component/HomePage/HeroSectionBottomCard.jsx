import React, { useEffect } from "react";
import GlassEffectSvg from "./HomePageSvg/GlassEffectSvg";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeroSectionBottomCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
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
  );
};
