import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/Management/SocialMediaManagement.css";
import ServiceContactUs from "../ContactUsServiceSection/ServiceContactUs";
import { AppContext } from "../../../AppContext";

const SocailMediaManagement = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);

  return (
    <main className="maindiv">
      {/* social service management top part  */}
      <div
        className="socialMediaManagement_hero_part"
        style={{
          ...(isMobileView && {
            paddingTop: "6.98rem",
            paddingBottom: "3.19rem",
          }),
        }}
      >
        <div className="socialMediaManagement_hero_part_div container">
          <div
            className="socialMediaManagement_hero_text_div "
            data-aos="fade-left"
          >
            {/* <h1
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "1.4rem",
                }),
              }}
            >
              Elevate Your Brand with TOJO Global’s{" "}
              <span className="headdingGradientText">
                Social Media Management
              </span>{" "}
            </h1> */}

            <div className="hero_page_strongText">
              <h2>
                {" "}
                Elevate Your{" "}
                <span className="headdingGradientText">Brand </span>
              </h2>
              <h3 className="homePageHeroSubHeadingFristText">
                with TOJO Global’s
              </h3>
              <h3 className="homePageHeroSubHeadingSecondText">
                Social Media Management
              </h3>
            </div>

            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "14px",
                  lineHeight: "125%",
                }),
              }}
            >
              In today's digital age, a strong social media presence is
              essential. Tojo Global offers top tier Social Media Management
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
              <Link to="/packages">
                <button className="custombtn hero_btn1 secondBtn">
                  <span>Check Packages</span>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="socialMediaManagement_hero_part_image_div"
            data-aos="fade-right"
          >
            <img
              src="https://i.ibb.co.com/Q3FvYfZj/12296433-4886674.png"
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
            <h2
              className="WeOfferServices_card_heading"
              style={{
                ...(isMobileView && {
                  textAlign: "center",
                  paddingTop: "1.2rem",
                  paddingBottom: "0.8rem",
                }),
              }}
            >
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
                src="/Images/ServicesImage/Allicons/Small Business.png"
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
                src="/Images/ServicesImage/Allicons/Spaceship Launch Documentation.png"
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
                src="/Images/ServicesImage/Allicons/Brand.svg"
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
                src="/Images/ServicesImage/Allicons/Group 9105.svg"
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
          style={{
            ...(isMobileView && {
              textAlign: "center",
              fontFamily: "var(--font-poppins)",
              paddingTop: "0.2rem",
              paddingBottom: "0.8rem",
              lineHeight: "125%",
            }),
          }}
        >
          The reason you need{" "}
          <span className="headdingGradientText">Social Media Management </span>{" "}
          Service.
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
                src="/Images/ServicesImage/Allicons/Consistency 1.svg"
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
                src="/Images/ServicesImage/Allicons/Vector.svg"
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
                src="/Images/ServicesImage/Allicons/Growth 1.svg"
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
                src="/Images/ServicesImage/Allicons/Engagement 1.svg"
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
                src="/Images/ServicesImage/Allicons/Lead 1.svg"
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
            <h2
              style={{
                ...(isMobileView && {
                  marginTop: "-1.4rem",
                }),
              }}
            >
              Our Social Media Management Services
            </h2>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontFamily: "var(--font-poppins)",
                  paddingTop: "0.5rem",
                  paddingBottom: "1.6rem",
                  lineHeight: "125%",
                }),
              }}
            >
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
              src="/Images/ServicesImage/Allicons/content.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Content Creation and Curation</h4>
            <p>
              We create engaging, shareable content that connects with your
              audience and reflects your brand's voice.
            </p>
          </div>
          {/*03 Social Media Strategy Development */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/social media 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Social Media Strategy Development</h4>
            <p>
              Our team designs custom social media strategies to meet your
              business goals, like increasing followers or driving conversions.
            </p>
          </div>
          {/*04  Platform Management*/}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/platform 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Platform Management</h4>
            <p>
              We manage your social media accounts across platforms, ensuring
              consistent posts that engage your audience and maintain impact.
            </p>
          </div>
          {/*05  Community Management*/}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/community 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Community Management</h4>
            <p>
              We engage with your followers, responding to comments and
              messages, building strong relationships, and fostering brand
              loyalty.
            </p>
          </div>
          {/* 06 Social Media Advertising */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={6 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/ads 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Social Media Advertising</h4>
            <p>
              We manage paid social campaigns, creating ads and tracking
              performance to ensure you get the best return on investment.
            </p>
          </div>
          {/*07 Performance Analytics and Reporting */}
          <div
            className="ourSocialServices_card_text_div"
            data-aos="fade-up"
            data-aos-delay={7 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/report 1.svg"
              alt="ourSocialServices_card_text_div_icon"
            />
            <h4>Performance Analytics and Reporting</h4>
            <p>
              We provide regular performance reports and adjust strategies based
              on data to improve your social media results.
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
