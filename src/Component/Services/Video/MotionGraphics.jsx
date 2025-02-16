import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/Video/MotionGraphices.style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../../../AppContext";
gsap.registerPlugin(ScrollTrigger);

export const MotionGraphics = () => {
  const { isMobileView } = useContext(AppContext);
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
        <title>TOJO Global - Motion Graphices</title>
      </Helmet>
      {/*Engage your audience with stunning motion graphics by TOJO Global */}
      <section className="blockchaniDev_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                <div className="hero_page_strongText">
                  <h2>
                    Engage your {""}
                    <span className="headdingGradientText">audience </span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    with stunning motion{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    Graphics by TOJO Global
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
                  Engage your audience with stunning motion graphics by TOJO
                  Global
                </h1>
                <p>
                  TOJO Global produces dynamic motion graphics that elevate your
                  visuals, boost marketing efforts, and engage your audience
                  effectively.
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

      {/* In Our Motion Graphics Services We Offer You */}
      <section className="container">
        <div className="sectionTopTextstyle">
          <h1
            className="topHeadingStyle"
            data-aos="fade-up"
            style={{
              ...(isMobileView && {
                marginTop: "30px",
              }),
            }}
          >
            {" "}
            In Our Motion Graphics Services We Offer You
          </h1>
        </div>
        {/* motion graphices Our Services Include */}
        <div>
          <div
            className="blockchain_dev_OurServicesInclude_keyPoint_mainDiv"
            style={{
              ...(isMobileView && {
                paddingTop: "0.5rem",
                rowGap: "1rem",
              }),
            }}
          >
            {/* 01 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-down"
              data-aos-delay={1 * 200}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsOurServiceIcon01.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Explainer Videos
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    marginTop: "-8px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Simplify complex ideas or products with visually compelling
                explainer videos. Whether you need to demonstrate a process or
                explain your services, we create videos that make it easy for
                your audience to understand
              </p>
            </div>
            {/* 02 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-down"
              data-aos-delay={2 * 200}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsOurServiceIcon02.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Corporate Presentations
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    marginTop: "-8px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Enhance your business presentations with dynamic motion graphics
                that captivate your audience. From internal meetings to client
                pitches, our visually appealing designs help convey your message
                effectively.
              </p>
            </div>
            {/* 03 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-down"
              data-aos-delay={3 * 200}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsOurServiceIcon03.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Social Media Content
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    marginTop: "-8px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Stand out on social media with eye-catching animations that grab
                attention. We create short, impactful motion graphics tailored
                for platforms like Instagram, Facebook, and LinkedIn, boosting
                engagement and shares.
              </p>
            </div>
            {/* 04 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-down"
              data-aos-delay={4 * 200}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsOurServiceIcon04.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Product Demos
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    marginTop: "-8px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Showcase your products in action with sleek, animated product
                demo videos. These can highlight the features and benefits of
                your offerings, making it easier for customers to see the value
                you provide
              </p>
            </div>
            {/* 05 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-down"
              data-aos-delay={5 * 200}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsOurServiceIcon05.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Title Sequences & Intros
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    marginTop: "-8px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Set the tone for your videos with professional title sequences
                and intros. We craft animations that match your brand’s
                identity, making your content more memorable.
              </p>
            </div>
            {/* 06 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-down"
              data-aos-delay={6 * 200}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsOurServiceIcon06.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                 Animated Infographics
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    marginTop: "-8px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Make data more digestible with animated infographics. Our motion
                graphics can turn complex statistics and figures into visually
                engaging content, perfect for presentations, reports, or digital
                marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TOJO Global for Motion Graphics? */}
      <section className="container">
        <div className="sectionTopTextstyle">
          <h1
            className="topHeadingStyle"
            data-aos="fade-up"
            style={{
              ...(isMobileView && {
                marginTop: "22px",
                marginBottom: "25px",
              }),
            }}
          >
            {" "}
            Why Choose TOJO Global for Motion Graphics?
          </h1>
        </div>
        {/* motion graphices Why Choose TOJO Global */}
        <div className="motionGraphices_WhyChoose_TOJOGlobal_main_div">
          {/* 01 */}
          <div
            className="motionGraphices_WhyChoose_TOJOGlobal_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="motionGraphices_WhyChoose_TOJOGlobal_text_icon_div">
              <div className="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon_svg pb-4">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsWhyChooseTOJOGlobalIcon01.png"
                  alt="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon"
                  className="img-fluid"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                 Expert Team of Designers
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our team consists of talented designers and animators with a
                deep understanding of visual storytelling. We use the latest
                technologies and creative techniques to deliver high-quality
                motion graphics that align with your brand’s vision.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="motionGraphices_WhyChoose_TOJOGlobal_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="motionGraphices_WhyChoose_TOJOGlobal_text_icon_div">
              <div className="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon_svg pb-4">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsWhyChooseTOJOGlobalIcon02.png"
                  alt="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon"
                  className="img-fluid"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Tailored Solutions
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We don’t believe in one-size-fits-all. Every project we take on
                is tailored to meet your unique needs. Whether you're looking
                for an explainer video, social media content, or a product demo,
                we craft custom solutions to ensure your objectives are met.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="motionGraphices_WhyChoose_TOJOGlobal_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="motionGraphices_WhyChoose_TOJOGlobal_text_icon_div">
              <div className="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon_svg pb-4">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsWhyChooseTOJOGlobalIcon03.png"
                  alt="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon"
                  className="img-fluid"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Seamless Collaboration
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We work closely with our clients throughout the entire process,
                from conceptualization to final delivery. This ensures that the
                final product reflects your vision and exceeds your
                expectations.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="motionGraphices_WhyChoose_TOJOGlobal_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="motionGraphices_WhyChoose_TOJOGlobal_text_icon_div">
              <div className="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon_svg pb-4">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsWhyChooseTOJOGlobalIcon04.png"
                  alt="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon"
                  className="img-fluid"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Fast Turnaround Times
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our efficient workflow and dedicated team allow us to deliver
                top-quality motion graphics without unnecessary delays, helping
                you stay on schedule.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="motionGraphices_WhyChoose_TOJOGlobal_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="motionGraphices_WhyChoose_TOJOGlobal_text_icon_div">
              <div className="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon_svg pb-4">
                <img
                  src="/Images/ServicesImage/videoEditing/motionGraphicsWhyChooseTOJOGlobalIcon05.png"
                  alt="blockchainCryptoTokenDevWhyChooseTOJOGlobalIcon"
                  className="img-fluid"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Cost-Effective Solutions
              </h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We offer competitive pricing without compromising on quality.
                Our motion graphics services are designed to deliver maximum
                value, helping you get the most out of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TOJO Global for Motion Graphics? */}
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
            Benefits of{" "}
            <span className="headdingGradientText">Motion Graphics</span> for
            Your Business
          </h1>
          <p
            className="paraStyle mt-3"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            Motion graphics are an excellent way to enhance your marketing and
            communication strategies. Here are some key benefits of
            incorporating motion graphics into your content:
          </p>
        </div>
        <div
          className="appDev_industries_services_main_div"
          style={{
            ...(isMobileView && {
              marginTop: "25px",
            }),
          }}
        >
          <div className="appDev_industries_services_div">
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos="fade-right"
            >
              <img
                src="/Images/ServicesImage/videoEditing/motionGraphicsProgressYourBrand.png"
                className="img-fluid"
                alt="appDev_industries_services_img"
              />
            </div>
            {/* benifit key point text */}
            <div className="appDev_industries_services_text_div motionGraphicesBenifit_text_div_main">
              {/* 01 */}
              <div
                className="motionGraphicesBenifit_text_div"
                data-aos={isMobileView ? "fade-up" : "fade-left"}
                data-aos-delay={1 * 200}
              >
                <h4 className="appDev_industries_services_subHeading">
                   Increased Engagement
                </h4>
                <p
                  className="elementParaText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Visual content is more engaging than text alone, and motion
                  graphics take it a step further by adding movement and
                  dynamism. This helps capture and hold your audience’s
                  attention longer, increasing the likelihood of them
                  interacting with your content.
                </p>
              </div>
              {/* 02 */}
              <div
                className="motionGraphicesBenifit_text_div"
                data-aos={isMobileView ? "fade-up" : "fade-left"}
                data-aos-delay={2 * 200}
              >
                <h4 className="appDev_industries_services_subHeading">
                  Simplified Messaging
                </h4>
                <p
                  className="elementParaText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Motion graphics allows you to understand complex information
                  in simple-easy way. This is particularly helpful for
                  explaining intricate products, services, or concepts to your
                  audience in a way that is both informative and engaging.
                </p>
              </div>
              {/* 03 */}
              <div
                className="motionGraphicesBenifit_text_div"
                data-aos={isMobileView ? "fade-up" : "fade-left"}
                data-aos-delay={3 * 200}
              >
                <h4 className="appDev_industries_services_subHeading">
                   Brand Awareness
                </h4>
                <p
                  className="elementParaText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  By incorporating motion graphics into your digital marketing
                  efforts, you can make your brand more memorable. Animated
                  content has a higher recall value, helping to strengthen your
                  brand identity and leave a lasting impression on viewers.
                </p>
              </div>
              {/* 04 */}
              <div
                className="motionGraphicesBenifit_text_div"
                data-aos={isMobileView ? "fade-up" : "fade-left"}
                data-aos-delay={4 * 200}
              >
                <h4 className="appDev_industries_services_subHeading">
                  Versatility
                </h4>
                <p
                  className="elementParaText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Motion graphics can be used across a variety of platforms,
                  from your website and social media to presentations and
                  advertisements. This makes them a versatile tool for reaching
                  a wide range of audiences
                </p>
              </div>
              {/* 05 */}
              <div
                className="motionGraphicesBenifit_text_div"
                data-aos={isMobileView ? "fade-up" : "fade-left"}
                data-aos-delay={5 * 200}
              >
                <h4 className="appDev_industries_services_subHeading">
                  Boost Conversion Rates
                </h4>
                <p
                  className="elementParaText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  By creating visually appealing and engaging content, motion
                  graphics can help improve your conversion rates. Whether it's
                  an explainer video or product demo, motion graphics make it
                  easier for potential customers to understand your offerings,
                  leading to increased sales and sign-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Get Started with TOJO Global with motion Graphics */}
      <section
        className="container"
        style={{
          ...(isMobileView && {
            marginTop: "-8px",
            marginBottom: "30px",
          }),
        }}
      >
        <div
          className="professionalModeration_div blockChainSolution_specialize_card"
          data-aos="fade-up"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Get Started with TOJO Global
            </h1>
            <p className="professionalModeration_service_offers_para">
              {" "}
              Ready to enhance your brand with stunning motion graphics? Partner
              with TOJO Global to create captivating visual content that tells
              your story and engages your audience. Whether you need an
              explainer video, a product demo, or social media animations, we
              have the expertise to bring your vision to life.
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
