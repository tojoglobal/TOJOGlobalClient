import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/Management/SocialMediaManagement.css";
import ServiceContactUs from "../ContactUsServiceSection/ServiceContactUs";
import { AppContext } from "../../../AppContext";

const SocailMediaManagement = () => {
  const { apiUrl, isLargeMobileView } = useContext(AppContext);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(apiUrl, isLargeMobileView);

  return (
    <main className="maindiv">
      {/* social service management top part  */}
      <div className="socialMediaManagement_hero_part">
        <div className="socialMediaManagement_hero_part_div container">
          <div
            className="socialMediaManagement_hero_text_div "
            data-aos="fade-left"
          >
            <h1>
              Elevate Your Brand with TOJO Global’s{" "}
              <span className="headdingGradientText">
                Social Media Management
              </span>{" "}
            </h1>
            <p>
              In today's digital age, a strong social media presence is
              essential. Tojo Global offers top-tier Social Media Management
              services that elevate your brand, foster engagement, and deliver
              real results. Our expert team ensures your business thrives on
              ever-changing digital platforms, standing out in a competitive
              online environment.
            </p>
            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Book a Intro Call</span>
                </button>
              </Link>

              <button className="custombtn hero_btn1 secondBtn">
                <span>Check Packages</span>
              </button>
            </div>
          </div>
          <div
            className="socialMediaManagement_hero_part_image_div"
            data-aos="fade-right"
          >
            <img
              src="/Images/ServicesImage/banner_images/12296433_4886674 1.png"
              alt="socail media management_hero_part_div_Image.png"
            />
          </div>
        </div>
      </div>
      {/* socail service We Offer Services */}
      <section className="WeOfferServices_hero_part">
        <div className="WeOfferServices_hero_part_div container">
          {/* 01 */}
          <div data-aos="zoom-in-up" data-aos-delay={1 * 200}>
            <h2 className="WeOfferServices_card_heading">
              We Offer <br />
              Services for
            </h2>
          </div>
          {/* 02 Small Businesses */}
          <div
            className="WeOfferServices_card_one"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <div className="WeOfferServices_card_iconTitle">
              <img
                src="/Images/ServicesImage/icons/Small Business.png"
                alt="WeOfferServices_card_imgae"
              />
              <h4>Small Businesses</h4>
            </div>
            <p className="WeOfferServices_card_para">
              To increase brand awareness and compete in a crowded market, small
              businesses benefit from a well-managed social media presence that
              reaches local and broader audiences.
            </p>
          </div>
          {/* 03 Startups */}
          <div
            className="WeOfferServices_card_two"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <div className="WeOfferServices_card_iconTitle">
              <img
                src="/Images/ServicesImage/icons/Spaceship Launch Documentation.png"
                alt="WeOfferServices_card_imgae"
              />
              <h4>Startups</h4>
            </div>
            <p className="WeOfferServices_card_para">
              Startups need to build online visibility fast. Social media helps
              them create buzz and attract investors, customers, and partners
              early on
            </p>
          </div>
          {/* 04 Established Brands */}
          <div
            className="WeOfferServices_card_one"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <div className="WeOfferServices_card_iconTitle">
              <img
                src="/Images/ServicesImage/icons/Brand.svg"
                alt="WeOfferServices_card_imgae"
              />
              <h4>Established Brands</h4>
            </div>
            <p className="WeOfferServices_card_para">
              Even established businesses must engage with their audience to
              retain loyalty and stay top-of-mind. A strong social media
              presence fosters customer retention and satisfaction
            </p>
          </div>
          {/* 05 E-commerce Stores */}
          <div
            className="WeOfferServices_card_two"
            data-aos="fade-up"
            data-aos-delay={5 * 200}
          >
            <div className="WeOfferServices_card_iconTitle">
              <img
                src="/Images/ServicesImage/icons/Group 9105.svg"
                alt="WeOfferServices_card_imgae"
              />
              <h4>E-commerce Stores</h4>
            </div>
            <p className="WeOfferServices_card_para">
              For businesses selling online, social media can drive direct
              traffic to their websites, encourage sales through shoppable
              posts, and provide a platform for product promotion
            </p>
          </div>
          {/* 07 */}
          <div data-aos="flip-down" data-aos-delay={7 * 200}>
            <p className="WeOfferServices_card_last_para">
              Each of these businesses can leverage social media management to
              build stronger relationships with their audiences, enhance brand
              visibility, and ultimately drive success in their respective
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* socail service We Offer Services */}
      <section className="WeOfferServices_hero_part">
        <h1
          className="WeOfferServices_service_offers_heading"
          data-aos="zoom-in"
        >
          The reason you need Social Media Management Service.
        </h1>
        <div className="scmServices_grid_part_div container">
          {/*01 Consistency */}
          <div
            className="scmServices_circel_div"
            data-aos="zoom-in-down"
            data-aos-delay={1 * 200}
          >
            <div className="scmServices_circel_text_div">
              <img
                src="/Images/ServicesImage/icons/Consistency 1.svg"
                alt="scm services image "
              />
              <div className="scmServices_text_div">
                <h4>Consistency</h4>
                <p>Ensures regular and high-quality content across platforms</p>
              </div>
            </div>
          </div>
          {/*02 Brand Visibility */}
          <div
            className="scmServices_circel_div"
            data-aos="zoom-in-down"
            data-aos-delay={2 * 200}
          >
            <div className="scmServices_circel_text_div">
              <img
                src="/Images/ServicesImage/icons/Vector.svg"
                alt="scm services image "
              />
              <div className="scmServices_text_div">
                <h4>Brand Visibility</h4>
                <p>
                   Increase brand presence and recognition in a crowded market
                </p>
              </div>
            </div>
          </div>
          {/* 03 Data-driven Growth */}
          <div
            className="scmServices_circel_div"
            data-aos="zoom-in-down"
            data-aos-delay={3 * 200}
          >
            <div className="scmServices_circel_text_div">
              <img
                src="/Images/ServicesImage/icons/Growth 1.svg"
                alt="scm services image "
              />
              <div className="scmServices_text_div">
                <h4>Data-driven Growth</h4>
                <p>
                  provides actionable insights to improve strategy over time
                </p>
              </div>
            </div>
          </div>
          {/*04  Audience engagement*/}
          <div
            className="scmServices_circel_div"
            data-aos="zoom-in-down"
            data-aos-delay={4 * 200}
          >
            <div className="scmServices_circel_text_div">
              <img
                src="/Images/ServicesImage/icons/Engagement 1.svg"
                alt="scm services image "
              />
              <div className="scmServices_text_div">
                <h4>Audience engagement</h4>
                <p>Builds stronger relationships with customers</p>
              </div>
            </div>
          </div>
          {/*05 Lead Generation */}
          <div
            className="scmServices_circel_div"
            data-aos="zoom-in-down"
            data-aos-delay={5 * 200}
          >
            <div className="scmServices_circel_text_div">
              <img
                src="/Images/ServicesImage/icons/Lead 1.svg"
                alt="scm services image "
              />
              <div className="scmServices_text_div">
                <h4>Lead Generation</h4>
                <p>Attracts potential customers and drives sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Social Media Management Services*/}
      <section className="WeOfferServices_hero_part socail_media_mangement_Services_hero_part">
        <div className="ourSocialServices_grid_part_div container">
          {/* 01 */}
          <div
            className="ourSocialServices_left_text_grid_part_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={1 * 200}
          >
            <h2>Our Social Media Management Services</h2>
            <p>
              Tojo Global offers a comprehensive range of social media
              management services designed to suit businesses of all sizes. We
              tailor our approach to meet your specific goals, ensuring you get
              the most out of your social media presence.
            </p>
            <div className="hero_btn_style">
              <Link to="/packages">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Check Our Packages</span>
                </button>
              </Link>
            </div>
          </div>
          {/*02 Content Creation and Curation */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/content.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Content Creation and Curation</h4>
            <p>
              We create engaging, shareable content that resonates with your
              target audience while aligning with your brand voice.
            </p>
          </div>
          {/*03 Social Media Strategy Development */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/social media 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Social Media Strategy Development</h4>
            <p>
              Our team will design a customized social media strategy that
              focuses on your business objectives, whether it’s increasing
              followers, boosting engagement, or driving conversions
            </p>
          </div>
          {/*04  Platform Management*/}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/platform 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Platform Management</h4>
            <p>
              We manage your accounts across all major platforms, including
              Facebook, Instagram, LinkedIn, Twitter, and more, ensuring
              consistent and impactful posting schedules
            </p>
          </div>
          {/*05  Community Management*/}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/community 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Community Management</h4>
            <p>
              Our team actively engages with your followers, responding to
              comments, questions, and messages to build stronger relationships
            </p>
          </div>
          {/* 06 Social Media Advertising */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={6 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/ads 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Social Media Advertising</h4>
            <p>
              With expertise in paid social campaigns, we handle everything from
              ad creation to performance tracking, ensuring you get the best
              return on your advertising spend
            </p>
          </div>
          {/*07 Performance Analytics and Reporting */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={7 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/report 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Performance Analytics and Reporting</h4>
            <p>
              We provide regular reports and insights into how your social media
              efforts are performing, with data-driven adjustments to improve
              results continuously
            </p>
          </div>
        </div>
      </section>
      {/* socail Media management service faq  */}
      {/* <section className="univarsal_service_padding">
        <h1 className="communityManagement_service_offers_heading">FAQs</h1>
        <div className="univarsal_service_padding_second_div services_management_faqs">
          <div className="accordion">
            <FaqItem
              accordion={{
                title: "What is community management for crypto projects?",
                content:
                  "Community management includes connecting, engaging, and supporting your members on platforms like Discord and Telegram to build a strong, loyal community around your crypto project.",
              }}
            />
            <FaqItem
              accordion={{
                title: "Why is community management important?",
                content: "?",
              }}
            />
            <FaqItem
              accordion={{
                title: " How does TOJO Global help with community management?",
                content: "?",
              }}
            />
            <FaqItem
              accordion={{
                title: "Can I customize the services you offer?",
                content: "?",
              }}
            />
          </div>
        </div>
      </section> */}
      {/* contact us featcher  */}
      <ServiceContactUs />
    </main>
  );
};

export default SocailMediaManagement;
