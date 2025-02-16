import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../../../Style/ServicesPageStyle/ContentWrting/WhitePaperContentWrting.style.css";
import WhatisWhitePapeContertSvg from "./SvgContent/WhatisWhitePapeContertSvg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AppContext } from "../../../AppContext";

const WhitePaperContentWrting = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".webContentWriting_hero_text_part h1", {
      x: -560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
    tl.from(".webContentWriting_hero_text_part p", {
      x: 560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
    tl.from(".hero_btn_style", {
      y: 560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
  });
  return (
    <main className="maindiv">
      <Helmet>
        <title>TOJO Global - white Paper Conetent</title>
      </Helmet>
      {/*Engage your audience with stunning motion graphics by TOJO Global */}
      <section className="uiuxDesign_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                <div className="hero_page_strongText">
                  <h2>
                    Brand {""}
                    <span className="headdingGradientText">Communication</span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    with TOJO Global’s{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    White Paper Design
                  </h3>
                </div>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                    }),
                  }}
                >
                  TOJO Global produces dynamic motion graphics that elevate your
                  visuals, boost marketing efforts, and engage your audience
                  effectively.
                </p>{" "}
              </>
            ) : (
              <>
                <h1>
                  Enhance Your Brand Communication with TOJO Global’s Innovative
                  White Paper Design
                </h1>
                <p>
                  TOJO Global transforms complex ideas into visually compelling,
                  easy-to-read white papers that enhance your message and
                  strengthen your brand
                </p>
              </>
            )}

            <div className="hero_btn_style">
              <a href="https://www.behance.net/TOJO_Global" target="_blank">
                <button className="custombtn hero_btn1 secondBtn">
                  <span>OUR WORKS</span>
                </button>
              </a>

              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Lets Make a Call</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is White Paper Design? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "32px",
                marginBottom: "20px",
              }),
            }}
          >
            What is White Paper Design?
          </h1>
        </div>
        {isLargeMobileView ? (
          <div
            className="what_is_whitepaperContent_mobile_div"
            data-aos="fade-down"
          >
            <div className="what_is_whitepaperContent_mobile_text_div">
              <p
                className="whitepaperContent_para_text mb-2 md:mb-5 "
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                White paper design is the art of transforming detailed, often
                complex information into a visually compelling, reader-friendly
                document. It involves a blend of layout, typography, and visual
                elements, working together to guide the reader through your
                content with ease. When done correctly, white paper design
                enhances your document's readability and professionalism, while
                ensuring your message is communicated effectively.
              </p>
              <p
                className="whitepaperContent_para_text"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                A well-designed white paper does more than just organize
                information. It keeps your audience engaged by using carefully
                chosen fonts, colors, and images to make the reading experience
                pleasant and immersive. Through strategic use of design, TOJO
                Global ensures that your white paper not only delivers the facts
                but also strengthens your brand identity and credibility.
              </p>
            </div>
          </div>
        ) : (
          <div className="what_is_whitepaperContent_div" data-aos="fade-down">
            {/* 01 */}
            <div className="what_is_whitepaperContent_text_div">
              <p className="whitepaperContent_para_text">
                White paper design is the art of transforming detailed, often
                complex information into a visually compelling, reader-friendly
                document. It involves a blend of layout, typography, and visual
                elements, working together to guide the reader through your
                content with ease. When done correctly, white paper design
                enhances your document's readability and professionalism, while
                ensuring your message is communicated effectively.
              </p>
              <p className="whitepaperContent_para_text">
                A well-designed white paper does more than just organize
                information. It keeps your audience engaged by using carefully
                chosen fonts, colors, and images to make the reading experience
                pleasant and immersive. Through strategic use of design, TOJO
                Global ensures that your white paper not only delivers the facts
                but also strengthens your brand identity and credibility.
              </p>
            </div>
            <WhatisWhitePapeContertSvg />
          </div>
        )}
      </section>
      {/* Our White Paper Design Service */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "35px",
              }),
            }}
          >
            Our White Paper Design Service
          </h1>
          <p
            className="paraStyle mt-2"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            We understand that each white paper is unique and demands a designed
            approach. Our expert design team works closely with you to create a
            solution that best fits your content, target audience, and branding.
            Here’s what our service includes:
          </p>
        </div>
        <div
          className="our_whitepaperContent_designService_maindiv"
          style={{
            ...(isMobileView && {
              marginTop: "25px",
              marginBottom: "20px",
            }),
          }}
        >
          {/* 01 */}
          <div className="our_whitepaperContent_designService_text_div">
            <h4 className="appDev_industries_services_subHeading mt-3">
              Custom Layout & Formatting
            </h4>
            <p
              className="whitepaperContent_subPara_text"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We create professional and clean layouts that allow your content
              to flow logically and smoothly, making it easier for your audience
              to digest even the most technical information.
            </p>
          </div>
          {/* 02 */}
          <div className="our_whitepaperContent_designService_text_div">
            <h4 className="appDev_industries_services_subHeading mt-3">
              Brand Consistency
            </h4>
            <p
              className="whitepaperContent_subPara_text"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Your brand’s identity is crucial, and we ensure that the design of
              your white paper reflects your established colors, fonts, and
              overall visual style, creating a cohesive look across all your
              materials.
            </p>
          </div>
          {/* 03 */}
          <div className="our_whitepaperContent_designService_text_div">
            <h4 className="appDev_industries_services_subHeading mt-3">
              Engaging Visual Elements
            </h4>
            <p
              className="whitepaperContent_subPara_text"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Incorporating infographics, charts, and other imagery helps break
              up large blocks of text, making information more digestible and
              keeping your readers engaged.
            </p>
          </div>
          {/* 04 */}
          <div className="our_whitepaperContent_designService_text_div">
            <h4 className="appDev_industries_services_subHeading mt-3">
              Typography Optimization
            </h4>
            <p
              className="whitepaperContent_subPara_text"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
               The fonts we select are chosen with care to match the tone of
              your content, improve readability, and create a professional feel.
            </p>
          </div>
          {/* 05 */}
          <div className="our_whitepaperContent_designService_text_div">
            <h4 className="appDev_industries_services_subHeading mt-3">
              Responsive and Print Friendly Design
            </h4>
            <p
              className="whitepaperContent_subPara_text"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
               Our designs are flexible, ensuring that your white paper looks
              fantastic whether viewed on a digital platform or printed as a
              physical document.
            </p>
          </div>
        </div>
      </section>

      {/*Benefits of Professional White Paper Design*/}
      <section
        className="benefits_of_professional_whitepaperDesign_section"
        style={{
          ...(isMobileView && {
            paddingTop: "15px",
            paddingBottom: "21px",
          }),
        }}
      >
        <div className="container benefits_of_professional_whitepaperDesign_div">
          {/* grid frist text card */}
          <div className="searchEngineMarketing_second_part_frist_text">
            <h2>
              Benefits of Professional <span>White Paper</span> Design
            </h2>
            <p
              className="whitepaperContent_subPara_text"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Investing in professional white paper design brings tangible
              benefits to your business communications. These include:
            </p>
            <div
              className="searchEngineMarketing_second_part_frist_text_bottom_border"
              style={{
                ...(isMobileView && {
                  marginBottom: "22px",
                }),
              }}
            ></div>
          </div>
          {/* Enhanced Readability */}
          <div className="searchEngineMarketing_second_part_card benefits_of_professional_whitepaperDesign_card ">
            <h4>Enhanced Readability</h4>
            <p>
               A well-structured design simplifies complex information, allowing
              your audience to absorb key insights without feeling overwhelmed
              by dense text.
            </p>
          </div>
          {/* Improved Credibility */}
          <div className="searchEngineMarketing_second_part_card benefits_of_professional_whitepaperDesign_card">
            <h4>Improved Credibility</h4>
            <p>
              A polished, professional white paper enhances the perception of
              your brand. Clean, visually engaging documents reflect positively
              on your company’s expertise and attention to detail.
            </p>
          </div>
          {/* Stronger Brand Identity */}
          <div className="searchEngineMarketing_second_part_card benefits_of_professional_whitepaperDesign_card">
            <h4>Stronger Brand Identity</h4>
            <p>
              Consistent use of your brand's visual elements strengthens
              recognition. A cohesive, well-branded white paper positions your
              business as professional and reliable.
            </p>
          </div>
          {/* Increased Engagement */}
          <div className="searchEngineMarketing_second_part_card benefits_of_professional_whitepaperDesign_card">
            <h4>Increased Engagement</h4>
            <p>
              Dynamic visual elements, such as charts and infographics, keep
              your audience interested. These tools help explain data visually,
              increasing reader retention and comprehension.
            </p>
          </div>
          {/* Higher Conversion Rates */}
          <div className="searchEngineMarketing_second_part_card benefits_of_professional_whitepaperDesign_card">
            <h4>Higher Conversion Rates</h4>
            <p>
              An appealing and easy-to-follow design encourages readers to act,
              whether it’s contacting your business, signing up for services, or
              purchasing a product. A well-designed white paper leads to better
              engagement and higher conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/*Why Choose TOJO Global?*/}
      <section className="container">
        <div className="sectionTopTextstyle">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "25px",
              }),
            }}
          >
            Why Choose TOJO Global?
          </h1>
          <p
            className="paraStyle mt-2"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            TOJO Global brings an expert approach to white paper design, driven
            by a focus on functionality, aesthetics, and your business goals. 
          </p>
        </div>
        {/* card */}
        <div
          className="whyChoose_whitepaperContent_designService_maindiv"
          style={{
            ...(isMobileView && {
              paddingTop: "15px",
            }),
          }}
        >
          {/* Expert Design Team*/}
          <div className="tailoredInfluencer_OurExpertise_Text_card_div whyChoose_whitepaperContent_designService_card_div ">
            <div className="InfluencerMarketing_OurExpertise_card_imge whyChoose_whitepaperContent_designService_icon">
              <img
                src="/Images/ServicesImage/content/whyChoose_whitepaperContent_designService_icon01.svg"
                alt="whyChoose_whitepaperContent_designService_icon01"
              />
            </div>
            <h4>Expert Design Team</h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
               Our experienced team of designers specializes in white papers,
              combining knowledge of design principles with a keen understanding
              of content flow and audience engagement.
            </p>
          </div>
          {/* Tailored Solutions*/}
          <div className="tailoredInfluencer_OurExpertise_Text_card_div whyChoose_whitepaperContent_designService_card_div ">
            <div className="InfluencerMarketing_OurExpertise_card_imge whyChoose_whitepaperContent_designService_icon">
              <img
                src="/Images/ServicesImage/content/whyChoose_whitepaperContent_designService_icon02.svg"
                alt="whyChoose_whitepaperContent_designService_icon"
              />
            </div>
            <h4>Tailored Solutions</h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
               Each white paper design is customized to align with your
              project’s goals, whether you’re communicating technical
              information or marketing a new product.
            </p>
          </div>
          {/* Attention to Detail*/}
          <div className="tailoredInfluencer_OurExpertise_Text_card_div whyChoose_whitepaperContent_designService_card_div ">
            <div className="InfluencerMarketing_OurExpertise_card_imge whyChoose_whitepaperContent_designService_icon">
              <img
                src="/Images/ServicesImage/content/whyChoose_whitepaperContent_designService_icon03.svg"
                alt="whyChoose_whitepaperContent_designService_icon"
              />
            </div>
            <h4>Attention to Detail</h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
               Every design element is crafted with care, from the choice of
              fonts to the placement of images, ensuring that the final product
              is both visually appealing and highly functional.
            </p>
          </div>
          {/* Fast Turnaround*/}
          <div className="tailoredInfluencer_OurExpertise_Text_card_div whyChoose_whitepaperContent_designService_card_div ">
            <div className="InfluencerMarketing_OurExpertise_card_imge whyChoose_whitepaperContent_designService_icon">
              <img
                src="/Images/ServicesImage/content/whyChoose_whitepaperContent_designService_icon04.svg"
                alt="whyChoose_whitepaperContent_designService_icon"
              />
            </div>
            <h4>Fast Turnaround</h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We know that time is of the essence in business, which is why we
              pride ourselves on delivering high-quality white paper designs
              within your deadline—typically within 1-2 weeks, depending on the
              complexity of the project.
            </p>
          </div>
          {/* Collaborative Process*/}
          <div className="tailoredInfluencer_OurExpertise_Text_card_div whyChoose_whitepaperContent_designService_card_div ">
            <div className="InfluencerMarketing_OurExpertise_card_imge whyChoose_whitepaperContent_designService_icon">
              <img
                src="/Images/ServicesImage/content/whyChoose_whitepaperContent_designService_icon05.svg"
                alt="whyChoose_whitepaperContent_designService_icon"
              />
            </div>
            <h4>Collaborative Process</h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We believe in open communication and close collaboration with our
              clients. Throughout the design process, we work with you to ensure
              that the final product aligns with your vision and effectively
              communicates your message.
            </p>
          </div>
        </div>
      </section>

      {/*Ready to Elevate Your White Papers?*/}
      <section
        className="smBrandGrowth_hero_part"
        style={{
          ...(isMobileView && {
            marginTop: "5px",
            marginBottom: "-27px",
          }),
        }}
      >
        <div className="professionalModeration_div blockChainSolution_specialize_card">
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Ready to Elevate Your White Papers?
            </h1>
            <p
              className="professionalModeration_service_offers_para"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              {" "}
              A well-designed white paper can be a powerful tool for your
              business, helping you communicate complex ideas while reinforcing
              your brand’s identity. At TOJO Global, we take the stress out of
              design, delivering polished, professional white papers that make a
              lasting impact on your audience. Ready to get started?
            </p>
            {/* <p className="appDev_industries_services_subHeading md:w-50 mt-3">
              {" "}
              A Contact TOJO Global today and let us help you create a standout
              white paper that drives results.
            </p> */}
            <div className="hero_btn_style">
              <Link to="/contact">
                <button class="custombtn hero_btn1 secondBtn">
                  <span>Get Started </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhitePaperContentWrting;
