import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/DesignStyle/UiuxDesign.Style.css";
import { Helmet } from "react-helmet-async";
import { WhatIsUiUxDesignSvg } from "./SvgDesign/WhatIsUiUxDesignSvg";
import BenefitsUXUIDesignService from "./SvgDesign/BenefitsUXUIDesignService";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
gsap.registerPlugin(ScrollTrigger);

const UxUi = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);
  useGSAP(() => {
    // Animation Timeline for Hero Section
    let heroTimeline = gsap.timeline();
    heroTimeline
      .from(".webContentWriting_hero_text_part h1", {
        x: -560,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      .from(".webContentWriting_hero_text_part p", {
        x: 560,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      .from(".hero_btn_style", {
        y: 560,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
  }, []);
  return (
    <main className="maindiv">
      <Helmet>
        <title>TOJO Global - UI/UX Design</title>
      </Helmet>
      {/*Engage your audience with stunning motion graphics by TOJO Global */}
      <section className="uiuxDesign_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                <div className="hero_page_strongText">
                  <h2>
                    TOJO Global {""}
                    <span className="headdingGradientText">Crafting </span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    Engaging UX-UI{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    Experiences
                  </h3>
                </div>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                    }),
                  }}
                >
                  TOJO Global offers user-friendly  UX/UI design services that
                  raise user engagement, smooth  navigation, and drive business
                  growth with ideal digital experiences.
                </p>{" "}
              </>
            ) : (
              <>
                <h1>
                  TOJO Global Crafting and Engaging  Digital Experiences Through
                  Expert UX/UI Design
                </h1>
                <p>
                  TOJO Global offers user-friendly  UX/UI design services that
                  raise user engagement, smooth  navigation, and drive business
                  growth with ideal digital experiences.
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

      {/* What is UX/UI Design? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "30px",
                marginBottom: "10px",
              }),
            }}
          >
            {" "}
            What is UX/UI Design?
          </h1>
        </div>
        <div className="whatIs_uiuxDesign_main_div">
          {/* gradient center */}
          <div className="whatIs_uiuxDesign_gradient_center_div"></div>
          {/* 01 */}
          <div
            className="whatIs_uiuxDesign_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <WhatIsUiUxDesignSvg />
            <div className="whatIs_uiuxDesign_text_div">
              <h2 className="whatIs_uiuxDesign_services_text_Heading">
                {" "}
                User Experience (UX) Design
              </h2>
              <p
                className="whatIs_uiuxDesign_services_text_subHeading"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                    marginTop: "15px",
                    padding: "0px	10px",
                  }),
                }}
              >
                UX design focuses on the overall functionality and ease of use
                of a digital product. It involves understanding user behaviors,
                needs, and challenges through research and testing. The goal is
                to create a smooth journey from the first interaction to task
                completion, reducing friction along the way.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="whatIs_uiuxDesign_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <WhatIsUiUxDesignSvg />
            <div className="whatIs_uiuxDesign_text_div">
              <h2 className="whatIs_uiuxDesign_services_text_Heading">
                {" "}
                User Interface (UI) Design
              </h2>
              <p
                className="whatIs_uiuxDesign_services_text_subHeading"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                    marginTop: "15px",
                    padding: "0px	10px",
                  }),
                }}
              >
                UI design is all about the visual elements of a digital product,
                such as typography, color schemes, icons, and navigation menus.
                A great UI ensures that the interface is visually appealing,
                easy to use, and encourages users to engage more deeply with the
                platform.
              </p>
            </div>
          </div>
        </div>

        <div
          className="sectionBottomTextstyle"
          style={{
            ...(isMobileView && {
              paddingTop: "1.5rem",
              paddingBottom: "0rem",
            }),
          }}
        >
          <h1
            className="whatIs_uiuxDesign_paratextStyle"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "15px",
                lineHeight: "125%",
              }),
            }}
          >
            {" "}
            A successful balance between UX and UI ensures that a product is
            both attractive and highly functional.
          </h1>
        </div>
      </section>
      {/* Our UX/UI Design Services at TOJO Global */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">
            {" "}
            Our UX/UI Design Services at TOJO Global
          </h1>
          <p
            className="paraTextStyle mt-md-4"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "13px",
                lineHeight: "120%",
              }),
            }}
          >
            We offer end-to-end services from discovery to launch, tailored to
            your business needs. Our offerings include:
          </p>
        </div>
        <div
          className="uiuxDesig_services_card_main_div"
          style={{
            ...(isMobileView && {
              paddingTop: "20px",
            }),
          }}
        >
          {/* card 01 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-01.jpg"
                alt="ux-ui-design-services-01"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                User research and planning
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We conduct thorough research to understand your audience,
                business goals, and industry trends, allowing us to develop a UX
                strategy that ensures user satisfaction while driving growth.
              </p>
            </div>
          </div>
          {/* card 02 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-02.jpg"
                alt="ux-ui-design-services-01"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Layout & prototype
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Before finalizing the design, we create wireframes and
                prototypes to map out the structure and layout. This allows for
                quick iterations based on feedback, saving time and resources
              </p>
            </div>
          </div>
          {/* card 03 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-03.png"
                alt="ux-ui-design-services-03"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Visual Design
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our team designs visually appealing interfaces that align with
                your brand and create a seamless user experience with intuitive
                navigation and consistent design elements.
              </p>
            </div>
          </div>
          {/* card 04 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-04.png"
                alt="ux-ui-design-services-04"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                User Interaction Design
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We focus on how users interact with the platform, ensuring
                smooth, intuitive interactions at every point, enhancing the
                overall user experience
              </p>
            </div>
          </div>
          {/* card 05 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-05.png"
                alt="ux-ui-design-services-05"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Usability Tasting
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We conduct rigorous testing with real users to identify and
                eliminate pain points, ensuring the final product is both
                functional and easy to use.
              </p>
            </div>
          </div>
          {/* card 06 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-06.png"
                alt="ux-ui-design-services-06"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Responsive & Adaptive Design
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We create designs that work flawlessly on any device, from
                desktops to mobile, ensuring a consistent and satisfying
                experience for all users.
              </p>
            </div>
          </div>
          {/* card 07 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-07.png"
                alt="ux-ui-design-services-07"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Design System & Branding
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We build comprehensive design systems to ensure consistency
                across all digital products, enhancing brand recognition and
                simplifying future development.
              </p>
            </div>
          </div>
          {/* card 08 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-03.png"
                alt="ux-ui-design-services-03"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Accessibility Design
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We design with inclusivity in mind, ensuring your platform is
                accessible to everyone, including users with disabilities, by
                following best practices and accessibility standards.
              </p>
            </div>
          </div>
          {/* card 09 */}
          <div
            className="uiuxDesig_services_card_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <div className="uiuxDesig_services_card_content">
              <img
                src="/Images/ServicesImage/Design/ux-ui-design-services-02.jpg"
                alt="ux-ui-design-services-02"
              />
              <h4 className="appDev_industries_services_subHeading mt-3">
                Performance Optimization
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We optimize the design for speed and performance, ensuring fast
                load times and smooth navigation for an improved user experience
                across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TOJO Global for UX/UI Design? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "35px",
                marginBottom: "20px",
              }),
            }}
          >
            {" "}
            Why Choose TOJO Global for UX/UI Design?
          </h1>
        </div>

        <div className="whyChoose_ux_ui_design_main_div">
          {/* 01 */}
          <div
            className="whyChoose_ux_ui_design_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg_ux_ui_design_why_choose"
                viewBox="0 0 329 320"
                fill="none"
              >
                <path
                  d="M329 314L318.693 308.049V319.951L329 314ZM32.9216 3.03072H259.085V0.969279H32.9216V3.03072ZM319.724 312.969H32.9216V315.031H319.724V312.969ZM3.03072 283.078V32.9216H0.969279V283.078H3.03072ZM288.976 32.9216V172.479H291.038V32.9216H288.976ZM288.976 172.479V257.719H291.038V172.479H288.976ZM32.9216 312.969C16.4133 312.969 3.03072 299.587 3.03072 283.078H0.969279C0.969279 300.725 15.2748 315.031 32.9216 315.031V312.969ZM259.085 3.03072C275.593 3.03072 288.976 16.4133 288.976 32.9216H291.038C291.038 15.2748 276.732 0.969279 259.085 0.969279V3.03072ZM32.9216 0.969279C15.2748 0.969279 0.969279 15.2748 0.969279 32.9216H3.03072C3.03072 16.4133 16.4133 3.03072 32.9216 3.03072V0.969279Z"
                  fill="url(#paint0_linear_2408_5179)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2408_5179"
                    x1="232.538"
                    y1="-9.85595"
                    x2="371.887"
                    y2="180.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* icon and text div  */}
            <div className="whyChoose_ux_ui_design_div_text">
              <div className="whyChoose_ux_ui_design_text_icon_div">
                <img
                  src="/Images/ServicesImage/Design/ux-ui-design-why-choose-01.svg"
                  alt="ux-ui-design-why-choose-01"
                />
              </div>
              <h2 className="elementHeadingText">User-Focused Process</h2>
              <p className="whatIs_uiuxDesign_services_text_subHeading ">
                We put real users at the center of our design approach, making
                sure every element fits their needs and preferences.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="whyChoose_ux_ui_design_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg_ux_ui_design_why_choose"
                viewBox="0 0 329 320"
                fill="none"
              >
                <path
                  d="M329 314L318.693 308.049V319.951L329 314ZM32.9216 3.03072H259.085V0.969279H32.9216V3.03072ZM319.724 312.969H32.9216V315.031H319.724V312.969ZM3.03072 283.078V32.9216H0.969279V283.078H3.03072ZM288.976 32.9216V172.479H291.038V32.9216H288.976ZM288.976 172.479V257.719H291.038V172.479H288.976ZM32.9216 312.969C16.4133 312.969 3.03072 299.587 3.03072 283.078H0.969279C0.969279 300.725 15.2748 315.031 32.9216 315.031V312.969ZM259.085 3.03072C275.593 3.03072 288.976 16.4133 288.976 32.9216H291.038C291.038 15.2748 276.732 0.969279 259.085 0.969279V3.03072ZM32.9216 0.969279C15.2748 0.969279 0.969279 15.2748 0.969279 32.9216H3.03072C3.03072 16.4133 16.4133 3.03072 32.9216 3.03072V0.969279Z"
                  fill="url(#paint0_linear_2408_5179)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2408_5179"
                    x1="232.538"
                    y1="-9.85595"
                    x2="371.887"
                    y2="180.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* icon and text div  */}
            <div className="whyChoose_ux_ui_design_div_text">
              <div className="whyChoose_ux_ui_design_text_icon_div">
                <img
                  src="/Images/ServicesImage/Design/ux-ui-design-why-choose-02.svg"
                  alt="ux-ui-design-why-choose-02"
                />
              </div>
              <h2 className="elementHeadingText">Experienced Professionals</h2>
              <p className="whatIs_uiuxDesign_services_text_subHeading ">
                Our team has broad experience across industries like e-commerce,
                fintech and education, delivering creative and practical designs
                for your business.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="whyChoose_ux_ui_design_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg_ux_ui_design_why_choose"
                viewBox="0 0 329 320"
                fill="none"
              >
                <path
                  d="M329 314L318.693 308.049V319.951L329 314ZM32.9216 3.03072H259.085V0.969279H32.9216V3.03072ZM319.724 312.969H32.9216V315.031H319.724V312.969ZM3.03072 283.078V32.9216H0.969279V283.078H3.03072ZM288.976 32.9216V172.479H291.038V32.9216H288.976ZM288.976 172.479V257.719H291.038V172.479H288.976ZM32.9216 312.969C16.4133 312.969 3.03072 299.587 3.03072 283.078H0.969279C0.969279 300.725 15.2748 315.031 32.9216 315.031V312.969ZM259.085 3.03072C275.593 3.03072 288.976 16.4133 288.976 32.9216H291.038C291.038 15.2748 276.732 0.969279 259.085 0.969279V3.03072ZM32.9216 0.969279C15.2748 0.969279 0.969279 15.2748 0.969279 32.9216H3.03072C3.03072 16.4133 16.4133 3.03072 32.9216 3.03072V0.969279Z"
                  fill="url(#paint0_linear_2408_5179)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2408_5179"
                    x1="232.538"
                    y1="-9.85595"
                    x2="371.887"
                    y2="180.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* icon and text div  */}
            <div className="whyChoose_ux_ui_design_div_text">
              <div className="whyChoose_ux_ui_design_text_icon_div">
                <img
                  src="/Images/ServicesImage/Design/ux-ui-design-why-choose-03.svg"
                  alt="ux-ui-design-why-choose-01"
                />
              </div>
              <h2 className="elementHeadingText">Collaborative Workflow</h2>
              <p className="whatIs_uiuxDesign_services_text_subHeading ">
                We work closely with you, adjusting designs based on feedback to
                ensure the final product matches your vision and business goals.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="whyChoose_ux_ui_design_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg_ux_ui_design_why_choose"
                viewBox="0 0 329 320"
                fill="none"
              >
                <path
                  d="M329 314L318.693 308.049V319.951L329 314ZM32.9216 3.03072H259.085V0.969279H32.9216V3.03072ZM319.724 312.969H32.9216V315.031H319.724V312.969ZM3.03072 283.078V32.9216H0.969279V283.078H3.03072ZM288.976 32.9216V172.479H291.038V32.9216H288.976ZM288.976 172.479V257.719H291.038V172.479H288.976ZM32.9216 312.969C16.4133 312.969 3.03072 299.587 3.03072 283.078H0.969279C0.969279 300.725 15.2748 315.031 32.9216 315.031V312.969ZM259.085 3.03072C275.593 3.03072 288.976 16.4133 288.976 32.9216H291.038C291.038 15.2748 276.732 0.969279 259.085 0.969279V3.03072ZM32.9216 0.969279C15.2748 0.969279 0.969279 15.2748 0.969279 32.9216H3.03072C3.03072 16.4133 16.4133 3.03072 32.9216 3.03072V0.969279Z"
                  fill="url(#paint0_linear_2408_5179)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2408_5179"
                    x1="232.538"
                    y1="-9.85595"
                    x2="371.887"
                    y2="180.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* icon and text div  */}
            <div className="whyChoose_ux_ui_design_div_text">
              <div className="whyChoose_ux_ui_design_text_icon_div">
                <img
                  src="/Images/ServicesImage/Design/ux-ui-design-why-choose-04.svg"
                  alt="ux-ui-design-why-choose-01"
                />
              </div>
              <h2 className="elementHeadingText">Modern Design Techniques</h2>
              <p className="whatIs_uiuxDesign_services_text_subHeading ">
                We stay on top of the latest design trends and technology to
                ensure your product remains visually appealing and ahead of the
                competition
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="whyChoose_ux_ui_design_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg_ux_ui_design_why_choose"
                viewBox="0 0 329 320"
                fill="none"
              >
                <path
                  d="M329 314L318.693 308.049V319.951L329 314ZM32.9216 3.03072H259.085V0.969279H32.9216V3.03072ZM319.724 312.969H32.9216V315.031H319.724V312.969ZM3.03072 283.078V32.9216H0.969279V283.078H3.03072ZM288.976 32.9216V172.479H291.038V32.9216H288.976ZM288.976 172.479V257.719H291.038V172.479H288.976ZM32.9216 312.969C16.4133 312.969 3.03072 299.587 3.03072 283.078H0.969279C0.969279 300.725 15.2748 315.031 32.9216 315.031V312.969ZM259.085 3.03072C275.593 3.03072 288.976 16.4133 288.976 32.9216H291.038C291.038 15.2748 276.732 0.969279 259.085 0.969279V3.03072ZM32.9216 0.969279C15.2748 0.969279 0.969279 15.2748 0.969279 32.9216H3.03072C3.03072 16.4133 16.4133 3.03072 32.9216 3.03072V0.969279Z"
                  fill="url(#paint0_linear_2408_5179)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2408_5179"
                    x1="232.538"
                    y1="-9.85595"
                    x2="371.887"
                    y2="180.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* icon and text div  */}
            <div className="whyChoose_ux_ui_design_div_text">
              <div className="whyChoose_ux_ui_design_text_icon_div">
                <img
                  src="/Images/ServicesImage/Design/ux-ui-design-why-choose-05.svg"
                  alt="ux-ui-design-why-choose-05"
                />
              </div>
              <h2 className="elementHeadingText">Comprehensive Service</h2>
              <p className="whatIs_uiuxDesign_services_text_subHeading">
                From research to final design and testing, we handle the entire
                process so you can focus on growing your business.
              </p>
            </div>
          </div>
          {/* 06 */}
          <div
            className="whyChoose_ux_ui_design_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg_ux_ui_design_why_choose"
                viewBox="0 0 329 320"
                fill="none"
              >
                <path
                  d="M329 314L318.693 308.049V319.951L329 314ZM32.9216 3.03072H259.085V0.969279H32.9216V3.03072ZM319.724 312.969H32.9216V315.031H319.724V312.969ZM3.03072 283.078V32.9216H0.969279V283.078H3.03072ZM288.976 32.9216V172.479H291.038V32.9216H288.976ZM288.976 172.479V257.719H291.038V172.479H288.976ZM32.9216 312.969C16.4133 312.969 3.03072 299.587 3.03072 283.078H0.969279C0.969279 300.725 15.2748 315.031 32.9216 315.031V312.969ZM259.085 3.03072C275.593 3.03072 288.976 16.4133 288.976 32.9216H291.038C291.038 15.2748 276.732 0.969279 259.085 0.969279V3.03072ZM32.9216 0.969279C15.2748 0.969279 0.969279 15.2748 0.969279 32.9216H3.03072C3.03072 16.4133 16.4133 3.03072 32.9216 3.03072V0.969279Z"
                  fill="url(#paint0_linear_2408_5179)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2408_5179"
                    x1="232.538"
                    y1="-9.85595"
                    x2="371.887"
                    y2="180.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* icon and text div  */}
            <div className="whyChoose_ux_ui_design_div_text">
              <div className="whyChoose_ux_ui_design_text_icon_div">
                <img
                  src="/Images/ServicesImage/Design/ux-ui-design-why-choose-03.svg"
                  alt="ux-ui-design-why-choose-03"
                />
              </div>
              <h2 className="elementHeadingText">Clear Communication</h2>
              <p className="whatIs_uiuxDesign_services_text_subHeading">
                We prioritize clear, open communication throughout the design
                process to ensure all your needs are met and you’re always
                updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of TOJO Global's UX/UI Design Services */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "35px",
                marginBottom: "20px",
              }),
            }}
          >
            {" "}
            Benefits of TOJO Global's UX/UI Design Services
          </h1>
        </div>
        <div className="benefits_UX_UI_Design_main_div">
          {/* 01 */}
          <div
            className="benefits_UX_UI_Design_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <BenefitsUXUIDesignService
              imgeUrl={"benefits-ux-ui-design-01.svg"}
            />
            <div className="benefits_UX_UI_Design_text_div">
              <h2 className="elementHeadingText">Raise User Engagement</h2>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    marginTop: "10px",
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                A well-crafted interface encourages users to stay longer,
                explore more, and engage more deeply with your platform, leading
                to higher conversions and customer retention.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div
            className="benefits_UX_UI_Design_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <BenefitsUXUIDesignService
              imgeUrl={"benefits-ux-ui-design-02.svg"}
            />
            <div className="benefits_UX_UI_Design_text_div">
              <h2 className="elementHeadingText">Increase Conversion Rates</h2>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    marginTop: "10px",
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                By reducing friction and making it easier for users to complete
                actions, we help drive higher conversion rates, translating
                directly into increased revenue.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="benefits_UX_UI_Design_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <BenefitsUXUIDesignService
              imgeUrl={"benefits-ux-ui-design-03.svg"}
            />
            <div className="benefits_UX_UI_Design_text_div">
              <h2 className="elementHeadingText">
                Improve Customer Satisfaction
              </h2>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    marginTop: "10px",
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                When users find your platform intuitive and enjoyable, they are
                more likely to return, creating loyal customers and long-term
                success.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="benefits_UX_UI_Design_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <BenefitsUXUIDesignService
              imgeUrl={"benefits-ux-ui-design-04.svg"}
            />
            <div className="benefits_UX_UI_Design_text_div">
              <h2 className="elementHeadingText">Enhance Brand Reputation</h2>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    marginTop: "10px",
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                A visually appealing, easy-to-use product reflects positively on
                your brand, helping you stand out in a crowded marketplace
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="benefits_UX_UI_Design_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <BenefitsUXUIDesignService
              imgeUrl={"benefits-ux-ui-design-05.svg"}
            />
            <div className="benefits_UX_UI_Design_text_div">
              <h2 className="elementHeadingText">Reduce Development Cost</h2>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    marginTop: "10px",
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Starting with good UX/UI design helps prevent costly redesigns,
                streamline development and reduce the need for major changes in
                the future.
              </p>
            </div>
          </div>
          {/* 06 */}
          <div
            className="benefits_UX_UI_Design_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <BenefitsUXUIDesignService
              imgeUrl={"benefits-ux-ui-design-05.svg"}
            />
            <div className="benefits_UX_UI_Design_text_div">
              <h2 className="elementHeadingText">Improve Accessibility</h2>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    marginTop: "10px",
                    textAlign: "justify",
                    fontSize: "13px",
                    lineHeight: "120%",
                  }),
                }}
              >
                A user-friendly design ensures that everyone, including those
                with disabilities, can easily navigate and interact with your
                platform, expanding your audience and promoting inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*We develop impactful social media strategies at TOJO Global,
       */}
      <section
        className="container"
        style={{
          ...(isMobileView && {
            marginTop: "3rem",
            marginBottom: "2.2rem",
          }),
        }}
      >
        <div
          className="professionalModeration_div blockChainSolution_specialize_card"
          data-aos="fade-up"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              We develop impactful social media strategies at TOJO Global,
            </h1>
            <p
              className="professionalModeration_service_offers_para"
              style={{
                ...(isMobileView && {
                  marginTop: "10px",
                  textAlign: "justify",
                  fontSize: "13px",
                  lineHeight: "120%",
                }),
              }}
            >
              {" "}
              focused on increasing engagement and driving growth. Reach out to
              us to elevate your brand’s performance.
            </p>

            <div className="hero_btn_style">
              <Link to="/contact">
                <button class="custombtn hero_btn1 secondBtn">
                  <span>Get Started Now </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UxUi;
