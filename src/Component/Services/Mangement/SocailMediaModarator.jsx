import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/Management/SocailMediaModarator.css";

import ServiceContactUs from "../ContactUsServiceSection/ServiceContactUs";
import { AppContext } from "../../../AppContext";

function SocailMediaModarator() {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);

  return (
    <main className="maindiv">
      {/* social media modarator top part  */}
      <section className="smModaration_top_part">
        <div
          className="communityManagement_hero_part"
          style={{
            ...(isMobileView && {
              paddingBottom: "3.19rem",
            }),
          }}
        >
          <div className="communityManagement_hero_part_div container">
            <div
              className="communityManagement_hero_text_div"
              data-aos="fade-right"
            >
              {/* <h1>
                Transform Your Online Business with TOJO GLOBAL’s Professional{" "}
                <span className="headdingGradientText">Moderation </span>
                service
              </h1> */}

              <div className="hero_page_strongText">
                <h2>
                  {" "}
                  Transform your{" "}
                  <span className="headdingGradientText"> Online </span>
                </h2>
                <h3 className="homePageHeroSubHeadingFristText">
                  Business with TOJO GLOBAL’s
                </h3>
                <h3 className="homePageHeroSubHeadingSecondText">
                  Professional Moderation
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
                We offer 24/7 moderation services that enhance your business,
                provide instant replies, manage posts seamlessly, engage your
                audience, and drive your brand's success, all at unbeatable
                prices
              </p>
              <div className="hero_btn_style">
                <Link to="/contact">
                  <button className="custombtn hero_btn2 fristBtn">
                    <span>Lets Make a Call</span>
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
              className="communityManagement_hero_part_image_div"
              data-aos="fade-left"
            >
              <img
                src="https://i.ibb.co.com/ftqxZLN/Moderation-5.gif"
                alt="communityManagement_hero_part_div_Image.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our services */}
      <section className="smModaration_hero_part">
        <h1
          className="smModaration_service_offers_heading"
          data-aos="fade-down"
          style={{
            ...(isMobileView && {
              fontFamily: "var(--font-poppins)",
            }),
          }}
        >
          Our services
        </h1>
        {/* <div className="smModaration_services">
          facebook modaration
          <div className="smModaration_services_text_div" data-aos="zoom-in">
            <div className="smModaration_services_social_iconDiv">
              <img
                src="/Images/ServicesImage/Allicons/facebook-icon.png"
                alt="facebok  ico"
              />
            </div>
            <h3>Facebook Moderation Service</h3>
            <p>
              Our Facebook moderation service keeps your page active by replying
              to comments and messages around the clock. This helps create a
              lively community for your brand, making customers feel valued
              while we also remove any inappropriate content to keep things
              positive
            </p>
          </div>
          instargram  modaration
          <div className="smModaration_services_text_div" data-aos="zoom-in">
            <div className="smModaration_services_social_iconDiv">
              <img
                src="/Images/ServicesImage/Allicons/social 1.png"
                alt="facebok  ico"
              />
            </div>
            <h3>Instagram Moderation Services</h3>
            <p>
              With our Instagram moderation service, we quickly respond to
              comments from your followers, making your brand feel more
              connected. We also manage your hashtags to help more people see
              your posts, allowing you to reach a wider audience and build a
              loyal fanbase
            </p>
          </div>
        </div> */}

        <div className="OnePageSeo_second_part_Card">
          {/* facebook modaration */}
          <div
            className="OnePageSeo_second_part_Card_div smModaration_services_text_div"
            data-aos="fade-right"
            style={{
              ...(isMobileView && {
                paddingTop: "4rem",
                height: "18rem",
              }),
            }}
          >
            <div className="OnePageSeo_second_part_Card_icon">
              <img
                src="https://i.ibb.co.com/WNYBDpcs/Social-FB.png"
                alt="facebok  ico"
                style={{
                  ...(isMobileView && {
                    width: "91px",
                    height: "92px",
                  }),
                }}
              />
            </div>
            <h3
              style={{
                ...(isMobileView && {
                  fontFamily: "var(--font-poppins)",
                  fontSize: "20px",
                  lineHeight: "120%",
                  paddingBottom: "0.5rem",
                }),
              }}
            >
              Facebook Moderation Service
            </h3>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Our Facebook moderation service keeps your page active by replying
              to comments and messages around the clock. This helps create a
              lively community for your brand, making customers feel valued
              while we also remove any inappropriate content to keep things
              positive
            </p>
          </div>
          {/* instargram  modaration */}
          <div
            className="OnePageSeo_second_part_Card_div smModaration_services_text_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            style={{
              ...(isMobileView && {
                paddingTop: "4rem",
                height: "18rem",
              }),
            }}
          >
            <div className="OnePageSeo_second_part_Card_icon">
              <img
                src="https://i.ibb.co.com/3xMhCLf/Social-Insta.png"
                alt="facebok  ico"
                style={{
                  ...(isMobileView && {
                    width: "91px",
                    height: "92px",
                  }),
                }}
              />
            </div>
            <h3
              style={{
                ...(isMobileView && {
                  fontFamily: "var(--font-poppins)",
                  fontSize: "20px",
                  lineHeight: "120%",
                  paddingBottom: "0.5rem",
                }),
              }}
            >
              Instagram Moderation Services
            </h3>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              With our Instagram moderation service, we quickly respond to
              comments from your followers, making your brand feel more
              connected. We also manage your hashtags to help more people see
              your posts, allowing you to reach a wider audience and build a
              loyal fanbase
            </p>
          </div>
        </div>
      </section>
      {/* We Elevate your brand’s growth with */}
      <section className="smBrandGrowth_hero_part">
        <h1
          className="smModaration_service_offers_heading"
          data-aos="fade-down"
          style={{
            ...(isMobileView && {
              fontFamily: "var(--font-poppins)",
              fontSize: "1.4rem",
              lineHeight: "120%",
              paddingTop: "0rem",
              marginBottom: "-0.7rem",
            }),
          }}
        >
          We Elevate your brand’s growth with
        </h1>
        <div className="smBrandGrowth_services_card_div">
          {/* 01 */}
          <div
            className="smBrandGrowth_services_card"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            <div className="smBrandGrowth_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/247 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <div className="smBrandGrowth_services_card_icon">
              <h5>24/7 Service</h5>
              <p>
                We are always available to support your brand, day and night
              </p>
            </div>
          </div>
          {/*02 Instant Replies */}
          <div
            className="smBrandGrowth_services_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={2 * 200}
          >
            <div className="smBrandGrowth_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Instant reply 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <div className="smBrandGrowth_services_card_icon">
              <h5>Instant Replies</h5>
              <p>
                Keep your audience engaged with quick responses to comments and
                messages that show you care
              </p>
            </div>
          </div>
          {/*03 Post Management */}
          <div
            className="smBrandGrowth_services_card"
            data-aos="fade-right"
            data-aos-delay={3 * 200}
          >
            <div className="smBrandGrowth_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Post Manage 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <div className="smBrandGrowth_services_card_icon">
              <h5>Post Management</h5>
              <p>
                We expertly handle your posts, making sure they shine and go
                live at the perfect moments to capture attention
              </p>
            </div>
          </div>
          {/*04 Content Management */}
          <div
            className="smBrandGrowth_services_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={4 * 200}
          >
            <div className="smBrandGrowth_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/COntent Mangement 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <div className="smBrandGrowth_services_card_icon">
              <h5>Content Management</h5>
              <p>
                We elevate your content by organizing and enhancing it, ensuring
                it engages with your audience and keeps them coming back for
                more
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Serve section smBrandGrowth_hero_part */}
      <section className="container">
        <h1
          className="smModaration_service_offers_heading"
          data-aos="fade-down"
          style={{
            ...(isMobileView && {
              fontFamily: "var(--font-poppins)",
              fontSize: "1.4rem",
              lineHeight: "120%",
              paddingTop: "0.5rem",
              marginBottom: "1.8rem",
            }),
          }}
        >
          Industries We Serve
        </h1>
        <div className="smIndustries_services_card_div">
          {/*01 B2B Companies*/}
          <div
            className="smIndustries_services_Text_card_div Small_Businesses_div"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
                style={{
                  ...(isMobileView && {
                    width: "3rem",
                    height: "3rem",
                  }),
                }}
              />
            </div>
            <h4
              style={{
                ...(isMobileView && {
                  fontSize: "20px",
                  lineHeight: "120%",
                  width: "100%",
                }),
              }}
            >
              B2B Companies
            </h4>
            <p
              style={{
                ...(isMobileView && {
                  fontFamily: "var(--font-poppins)",
                  fontSize: "14px",
                  textAlign: "justify",
                  lineHeight: "120%",
                  width: "100%",
                }),
              }}
            >
              Enhance your brand's presence and build strong relationships with
              clients through effective moderation
            </p>
          </div>
          {/*02 Small Businesses */}
          <div
            className="smIndustries_services_Text_card_div Small_Businesses_div "
            data-aos="fade-up"
            data-aos-delay={2 * 250}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Small Business (1).png"
                alt="smBrandGrowth_services_card image"
                style={{
                  ...(isMobileView && {
                    width: "3rem",
                    height: "3rem",
                  }),
                }}
              />
            </div>
            <h4
              style={{
                ...(isMobileView && {
                  fontSize: "20px",
                  lineHeight: "120%",
                  width: "100%",
                }),
              }}
            >
              Small Businesses
            </h4>
            <p
              style={{
                ...(isMobileView && {
                  fontFamily: "var(--font-poppins)",
                  fontSize: "14px",
                  textAlign: "justify",
                  lineHeight: "120%",
                  width: "100%",
                }),
              }}
            >
              Engage with your local audience and create a loyal customer base
              while we manage your online interactions
            </p>
          </div>
          {/* 03 Startups*/}
          <div
            className="smIndustries_services_Text_card_div"
            data-aos="fade-up"
            data-aos-delay={3 * 300}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/management/socailMediaModarationStartup.svg"
                alt="smBrandGrowth_services_card image"
                style={{
                  ...(isMobileView && {
                    width: "3rem",
                    height: "3rem",
                  }),
                }}
              />
            </div>
            <h4
              style={{
                ...(isMobileView && {
                  fontSize: "20px",
                  lineHeight: "120%",
                  width: "100%",
                }),
              }}
            >
              Startups
            </h4>
            <p
              style={{
                ...(isMobileView && {
                  fontFamily: "var(--font-poppins)",
                  fontSize: "14px",
                  textAlign: "justify",
                  lineHeight: "120%",
                  width: "100%",
                }),
              }}
            >
              Establish your brand identity and foster community growth as you
              focus on scaling your business
            </p>
          </div>
        </div>
      </section>
      {/* Why Your Business Needs Moderation Services Now */}
      <section className="smBrandGrowth_hero_part">
        <div
          data-aos="fade-down"
          style={{
            ...(isMobileView && {
              marginTop: "-1.2rem",
              marginBottom: "1rem",
            }),
          }}
        >
          <h1
            className="smModaration_service_offers_heading"
            style={{
              ...(isMobileView && {
                fontFamily: "var(--font-poppins)",
                fontSize: "1.4rem",
                lineHeight: "120%",
              }),
            }}
          >
            Why Your Business Needs Moderation Services Now
          </h1>
          <p
            className="smModaration_service_offers_para"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "14px",
                lineHeight: "125%",
              }),
            }}
          >
            Without expert moderation, businesses face major challenges that
            hurt their growth. Negative or inappropriate content can damage your
            brand's reputation, and slow responses to customer inquiries can
            lead to a drop in engagement and up to 30% in lost sales. Hiring and
            training in-house moderators can also increase your costs by 40%,
            making it harder to focus on business growth.
          </p>
        </div>
        <div className="BusinessModeration_div">
          <div className="BusinessModeration_items_div">
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={1 * 200}
            >
              <span>Protect Brand Reputation</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={2 * 200}
            >
              <span>Ensure a Positive Community</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={3 * 200}
            >
              <span>Increase Audience Engagement</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={4 * 200}
            >
              <span>Remove Inappropriate Content</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={5 * 200}
            >
              <span>Maintain Professionalism</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={6 * 200}
            >
              <span>Respond Quickly to Customers</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={7 * 200}
            >
              <span>Higher User Trust</span>
            </div>
            <div
              className="BusinessModeration_service_item"
              data-aos="fade-right"
              data-aos-delay={8 * 200}
            >
              <span>Enhance Customer Experience</span>
            </div>
          </div>
          <div className="BusinessModeration_image_div" data-aos="fade-right">
            <img
              src="/Images/ServicesImage/banner_images/Moderation-2 1.png"
              alt="Moderation-2 1.png"
            />
          </div>
        </div>
      </section>
      {/* Here comes TOJO GLOBAL with affordable, professional moderation services. */}
      <section className="container">
        <div
          className="professionalModeration_div professionalService_card_modaration_page"
          data-aos="fade-down"
          style={{
            ...(isMobileView && {
              marginTop: "1rem",
              marginBottom: "2rem",
            }),
          }}
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Here comes TOJO GLOBAL with affordable, professional moderation
              services.
            </h1>
            <p className="professionalModeration_service_offers_para">
              We provide 24/7 support, ensuring your brand stays positive,
              customer interactions are quick, and you save money. This allows
              your business to grow without the extra stress or high costs.
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
      {/* contact us featcher  */}
      <ServiceContactUs />
    </main>
  );
}

export default SocailMediaModarator;
