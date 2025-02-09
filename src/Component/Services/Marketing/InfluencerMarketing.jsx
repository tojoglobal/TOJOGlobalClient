import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/MarketingStyle/InfluencerMarketing.css";
import SurffessImageInfluncer from "./SurffessImage";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
const InfluencerMarketing = () => {
  const { isMobileView } = useContext(AppContext);
  return (
    <main className="maindiv">
      {/* Inspire social choices and increase sales with Tojo Global’s
          influencer marketing services */}
      <section className="InfluencerMarketing_hero_section">
        <div
          className="InfluencerMarketing_hero_text_div container"
          data-aos="fade-left"
        >
          <h1>
            Inspire social choices and increase sales with Tojo Global’s
            influencer marketing services
          </h1>
          <p>
            Connect with the right influencers to get your brand noticed and
            grow your audience.
          </p>
          <div className="hero_btn_style">
            <Link to="/contact">
              <button className="customFooterBoxbtn1 custombtn secondBtn">
                <span>Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Our Expertise */}
      <section className="InfluencerMarketing_OurExpertise_section">
        <h1
          className="smModaration_service_offers_heading"
          data-aos="fade-down"
        >
          Our Expertise
        </h1>
        <div className="InfluencerMarketing_OurExpertise_card_div container">
          {/* B2C Influencer Marketing*/}
          <div
            className="InfluencerMarketing_OurExpertise_Text_card_div"
            data-aos={isMobileView ? "fade-down" : "fade-left"}
          >
            <div className="InfluencerMarketing_OurExpertise_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Popular woman.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>B2C Influencer Marketing</h4>
            <p>
              Engage with your target consumers through trusted voices, boost
              brand awareness, and drive sales with effective influencer
              partnerships.
            </p>
          </div>
          {/* Crypto-Influencer Marketing*/}
          <div
            className="InfluencerMarketing_OurExpertise_Text_card_div"
            data-aos="fade-right"
          >
            <div className="InfluencerMarketing_OurExpertise_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Small Business (1).png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Crypto-Influencer Marketing</h4>
            <p>
              Grow your crypto project by using influencer marketing to reach
              more people and build strong connections with your audience.
            </p>
          </div>
        </div>
      </section>

      {/*Connect with talented influencers to easily connect and grow engagement with your customer */}
      <SurffessImageInfluncer></SurffessImageInfluncer>

      {/* We specialize in creating tailored influencer marketing strategies
        that*/}
      <section className="InfluencerMarketing_OurExpertise_section">
        <h1 className="smModaration_service_offers_heading" data-aos="fade-up">
          We specialize in creating tailored influencer marketing strategies
          that
        </h1>
        <div className="tailoredInfluencer_OurExpertise_card_div container">
          {/* B2C Influencer Marketing*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div B2C_Influencer_Marketing "
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge B2C_Influencer_Marketing_icon">
              <img
                src="/Images/ServicesImage/Allicons/Popular woman.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>B2C Influencer Marketing</h4>
            <p>
              Engage with your target consumers through trusted voices, boost
              brand awareness, and drive sales with effective influencer
              partnerships.
            </p>
          </div>
          {/* Building Credibility*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div  Building_Credibility"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Building_Credibility_icon">
              <img
                src="/Images/ServicesImage/Allicons/Trust.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Building Credibility</h4>
            <p>
              Partnering with respected influencers helps to build trust for
              your brand. When these influencers share your products or
              services, their followers see them as trustworthy recommendations.
              This association boosts your brand's credibility because people
              tend to listen to voices they know and admire. As a result, your
              brand gains more respect in the market, making customers more
              likely to choose your products over others
            </p>
          </div>
          {/* Increasing Campaign Impact*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div Increasing_Campaign_Impact "
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Increasing_Campaign_Impact_icon">
              <img
                src="/Images/ServicesImage/Allicons/Expand Influence.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Increasing Campaign Impact</h4>
            <p>
              In today's world, many ads go unnoticed due to ad fatigue, where
              people become tired of seeing the same messages. We help your
              brand cut through this clutter by using influencers to share your
              message in a fresh and engaging way. Influencers create authentic
              content that resonates with their audience, making your marketing
              efforts more impactful. This approach not only captures attention
              but also encourages action, leading to higher engagement and
              better results for your campaigns.
            </p>
          </div>
        </div>
      </section>
      {/* socail-media-marketing We Offer section */}
      <section className="InfluencerMarketing_weOffer_section">
        <div className="InfluencerMarketing_weOffer_section_div container">
          <div
            className="InfluencerMarketing_weOffer_section_left_text_div"
            data-aos="fade-right"
          >
            <h1>We Offer</h1>
            <p>
              Without proper influencer marketing, your brand can struggle to
              keep up with the competition. Research shows that brands without a
              good influencer strategy can lose up to 30% in customer engagement
              and reach. This can mean missing out on chances for growth and
              recognition.
            </p>
          </div>
          <div className="InfluencerMarketing_weOffer_section_right_div">
            {/*01 Finding the Right Influencers */}
            <div
              className="InfluencerMarketing_weOffer_section_right_card_div"
              data-aos="fade-left"
              data-aos-delay={1 * 200}
            >
              <h4>Finding the Right Influencers</h4>
              <p>
                We connect your brand with the best influencers to maximize
                results, using data and our experience
              </p>
            </div>
            {/* Managing Your Campaign */}
            <div
              className="InfluencerMarketing_weOffer_section_right_card_div"
              data-aos="fade-left"
              data-aos-delay={2 * 200}
            >
              <h4>Managing Your Campaign</h4>
              <p>
                We take care of everything from planning to managing influencer
                relationships, keeping you involved for the best results.
              </p>
            </div>
            {/*Handling Contracts*/}
            <div
              className="InfluencerMarketing_weOffer_section_right_card_div"
              data-aos="fade-left"
              data-aos-delay={3 * 200}
            >
              <h4>Handling Contracts</h4>
              <p>
                Our experts manage influencer contracts, ensuring all terms are
                clear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*TOJO GLOBAL comes here to help you close this gap by using the power of influencers */}
      <section className="container">
        <div
          className="professionalModeration_div professionalService_card_onSeo_page"
          data-aos="fade-up"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              TOJO GLOBAL comes here to help you close this gap by using the
              power of influencers
            </h1>
            <p className="professionalModeration_service_offers_para">
              Our custom strategies connect your brand with the right people,
              build trust, and improve your visibility. Don’t let your brand
              fall behind, work with us to stay strong in the market!
            </p>

            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="customFooterBoxbtn2 custombtn frisBtn">
                  <span>Make a Intro Call </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InfluencerMarketing;
