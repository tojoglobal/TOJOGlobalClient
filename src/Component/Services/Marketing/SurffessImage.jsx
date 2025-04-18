import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../AppContext";

const SurffessImageInfluncer = () => {
  const { isMobileView } = useContext(AppContext);
  const [bigImagesUrl, setBigImagesUrl] = useState(
    "/Images/ServicesImage/banner_images/male-influencer--bluish-banckground-amobile-in-her.jpg"
  );
  const [smallImageUrl, setSmallImageUrl] = useState(
    "/Images/ServicesImage/banner_images/a-music-influencer-with-a-guiter.jpg"
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = [
    "/Images/ServicesImage/banner_images/female-influencer-light-.jpg",
    "/Images/ServicesImage/banner_images/male-influencer--bluish-banckground-amobile-in-her.jpg",
    "/Images/ServicesImage/banner_images/a-music-influencer-with-a-guiter.jpg",
    "/Images/ServicesImage/banner_images/an-influencer-playing-basket-ball-.jpg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % imageArray.length;
      setBigImagesUrl(imageArray[currentImageIndex]);
      setSmallImageUrl(imageArray[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, imageArray]);

  return (
    <section
      className="InfluencerMarketing_OurExpertise_section"
      data-aos="fade-down"
      style={{
        ...(isMobileView && {
          paddingTop: "1.8rem",
        }),
      }}
    >
      <div className="InfluencerMarketing_talented_card_div container">
        {/* Talented Text Card Image */}
        <div className="InfluencerMarketing_talented_Text_card_div InfluencerMarketing_talented_image_card">
          {/* <div className="talented_image_card_small_gradient"></div>
          <div className="talented_image_card_big_gradient"></div> */}

          {/* Icon Image */}
          <div className="InfluencerMarketing_talented_card_icon">
            <img key={bigImagesUrl} src={bigImagesUrl} alt="Influencer Icon" />
          </div>

          {/* Bottom image */}
          <div className="InfluencerMarketing_talented_card_bottom_small_img">
            <img
              key={smallImageUrl}
              src={smallImageUrl}
              alt="Influencer Bottom"
            />
          </div>
        </div>

        {/* Talented Text Card 
        Connect with talented influencers to easily connect and grow engagement with your customer*/}
        <div className="InfluencerMarketing_talented_Text_card_div">
          <h2>Connect with Influencers to Boost Engagement Effortlessly</h2>
          <h3 className="influencerMarketing_talented_second_text_card_div">
            We link you with influencers who match your brand’s values. From
            nano to macro influencers, reach new audiences and build trust
            through their recommendations.
          </h3>
          <p className="mt-0 mt-md-4">
            We connect you with influencers who genuinely align with your
            brand’s values and goals. Whether you need nano, micro, or macro
            influencers, we help you reach new audiences that trust and follow
            their recommendations.
          </p>
          <div className="hero_btn_style">
            <a href="/contact">
              <button className="customFooterBoxbtn1 custombtn secondBtn">
                <span>Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurffessImageInfluncer;
