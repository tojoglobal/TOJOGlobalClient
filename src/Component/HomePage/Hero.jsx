import { Link } from "react-router-dom";
import HeroRightSvg from "./HomePageSvg/HeroRightSvg";
import { HeroSectionBottomCard } from "./HeroSectionBottomCard";

const Hero = () => {
  return (
    <>
      <div className="hero_div">
        <div className="heroTopGradinet"></div>
        <div className="container hero_row_style">
          <div className="hero_text_style" data-aos="fade-right">
            <h1>Transforming Brands with Innovative Digital Solutions</h1>

            <p className="hero_seconde_para">
              Tojo Global empowers startups to stand out and thrive with a full
              suite of digital services. Whether you're looking to explore
              crypto opportunities, elevate your marketing, craft stunning
              designs, build seamless applications, or create captivating
              videos, our team is here to drive your vision forward. Discover
              the power of a partnership that builds brands people remember
              {/* <span className="hero_multiple_text"></span> */}
            </p>

            <div className="hero_btn_style" style={{ paddingRight: "10px" }}>
              <a
                className="footer_social_media_link"
                href="https://www.behance.net/TOJO_Global"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="custombtn hero_btn1 secondBtn">
                  <span>Portfolio</span>
                </button>
              </a>
              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Get Started</span>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="hero_img_style"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <HeroRightSvg />
          </div>
        </div>
        <div className="heroBottomGradinet"></div>
        {/* card */}
        <HeroSectionBottomCard />
      </div>
    </>
  );
};

export default Hero;
