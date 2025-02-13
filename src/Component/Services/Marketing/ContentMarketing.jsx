import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/MarketingStyle/ContentMarketing.Style.css";
import WhatisWhitePapeContertSvg from "../Content/SvgContent/WhatisWhitePapeContertSvg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppContext } from "../../../AppContext";
gsap.registerPlugin(ScrollTrigger);

const ContentMarketing = () => {
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
        <title>TOJO Global - Content Marketing </title>
      </Helmet>
      {/*   Establish Your Business with TOJO Global's Content Marketing */}
      <section className="uiuxDesign_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                {" "}
                <div className="hero_page_strongText">
                  <h2
                    style={{
                      ...(isMobileView && {
                        paddingRight: "0rem",
                      }),
                    }}
                  >
                    Establish Your{" "}
                    <span className="headdingGradientText"> Business </span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    with TOJO Global's{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    Content Marketing
                  </h3>
                </div>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                    }),
                  }}
                >
                  TOJO Global offers complete content marketing services
                  designed to help businesses create, distribute, and optimize
                  content that engages audiences and drives growth.
                </p>
              </>
            ) : (
              <>
                {" "}
                <h1>
                  Establish Your Business with TOJO Global's Content Marketing
                </h1>
                <p>
                  TOJO Global offers complete content marketing services
                  designed to help businesses create, distribute, and optimize
                  content that engages audiences and drives growth.
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

      {/*   What is Content Marketing? */}
      <section className="container what_isContentMarketing_section">
        <div className="what_is_whitepaperContent_div " data-aos="fade-down">
          {/* 01 */}
          <div className="what_is_contentMarketing_div">
            <div className="what_is_contentMarketing_image_div">
              <img src="/Images/ServicesImage/Marketing/create-an-image--content-marketing.svg" />
            </div>
            <div className="align-self-md-center">
              <h1 className="contentMarketing_topHeadingStyle text-md-start">
                What is Content Marketing?
              </h1>
              <p className="contentMarketing_para_text">
                A well-designed white paper does more than just organize
                information. It keeps your audience engaged by using carefully
                chosen fonts, colors, and images to make the reading experience
                pleasant and immersive. Through strategic use of design, TOJO
                Global ensures that your white paper not only delivers the facts
                but also strengthens your brand identity and credibility.
              </p>
            </div>
          </div>

          {/* <WhatisWhitePapeContertSvg /> */}
        </div>
      </section>

      {/* Our Content Marketing Services */}
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
            Our Content Marketing Services
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "14px",
              }),
            }}
          >
            We provide a range of services that support your content marketing
            efforts at every stage:
          </p>
        </div>
        <div className="our_contentMarketing_services_main_div">
          {/*  1.Content Strategy Development */}
          <div
            className="our_contentMarketing_services_div"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <div className="our_contentMarketing_services_text_div">
              <h2
                className="elementHeadingText"
                style={{
                  ...(isMobileView && {
                    fontSize: "20px",
                  }),
                }}
              >
                Content Strategy Development{" "}
              </h2>
              <p>
                We start creating a comprehensive content plan by analyzing your
                business goals and target audience. This ensures your content
                aligns with your objectives and consistently delivers value to
                your audience, helping you stay relevant across all platforms.
              </p>
            </div>
          </div>
          {/* 2.Content Creation */}
          <div
            className="our_contentMarketing_services_div"
            data-aos="fade-up"
            data-aos-delay={2 * 200}
          >
            <div className="our_contentMarketing_services_text_div">
              <h2
                className="elementHeadingText"
                style={{
                  ...(isMobileView && {
                    fontSize: "20px",
                  }),
                }}
              >
                Content Creation{" "}
              </h2>
              <p>
                Our team of professional writers, designers, and content
                creators develop high-quality content tailored to your brand’s
                voice and message. Whether you need blog posts, videos, or
                infographics, we produce content that resonates with your
                audience and strengthens your brand presence.
              </p>
            </div>
          </div>
          {/*3.Search Engine Optimization (SEO)
           */}
          <div
            className="our_contentMarketing_services_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <div className="our_contentMarketing_services_text_div">
              <h2
                className="elementHeadingText"
                style={{
                  ...(isMobileView && {
                    fontSize: "20px",
                  }),
                }}
              >
                Search Engine Optimization (SEO)
              </h2>
              <p>
                We optimize your content to rank well in search results,
                conducting keyword research and implementing SEO best practices.
                This helps your content reach a broader audience, improving your
                online visibility and bringing more traffic to your website.
              </p>
            </div>
          </div>
          {/* 4.Content Distribution*/}
          <div
            className="our_contentMarketing_services_div"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <div className="our_contentMarketing_services_text_div">
              <h2
                className="elementHeadingText"
                style={{
                  ...(isMobileView && {
                    fontSize: "20px",
                  }),
                }}
              >
                Content Distribution
              </h2>
              <p>
                To ensure your content reaches the right people, we distribute
                it across the most relevant channels, including social media,
                email newsletters, and third-party platforms. This increases
                your content’s visibility, maximizing its impact and engagement.
              </p>
            </div>
          </div>
          {/*5. Performance Tracking and Reporting
           */}
          <div
            className="our_contentMarketing_services_div"
            data-aos="fade-up"
            data-aos-delay={5 * 200}
          >
            <div className="our_contentMarketing_services_text_div">
              <h2
                className="elementHeadingText"
                style={{
                  ...(isMobileView && {
                    fontSize: "20px",
                  }),
                }}
              >
                Performance Tracking and Reporting
              </h2>
              <p>
                We monitor the performance of your content using advanced
                analytics, tracking key metrics like traffic, engagement, and
                lead generation. Our regular reports provide insights into
                what’s working and where improvements can be made to optimize
                your content strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TOJO Global for Content Marketing? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle">
            Why Choose TOJO Global for Content Marketing?
          </h1>
        </div>
        <div className="contentMarketingService_whyChoose_main_div">
          {/* 01 */}
          <div
            className="contentMarketingService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/contentMarketingService_whyChooseSvg.svg"
              alt=""
              className="img-fluid whyChooseContentMarketingIcon"
            />
            <div className="contentMarketingService_whyChoose_center_div">
              <div className="contentMarketingService_whyChoose_number_div">
                <h1>01</h1>
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Effective Solutions
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                TOJO Global helps businesses create, distribute, and optimize
                content that engages audiences and drives growth, increasing
                online visibility and attracting more customers.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="contentMarketingService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/contentMarketingService_whyChooseSvg.svg"
              alt=""
              className="img-fluid whyChooseContentMarketingIcon"
            />
            <div className="contentMarketingService_whyChoose_center_div">
              <div className="contentMarketingService_whyChoose_number_div">
                <h1>02</h1>
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Experienced Team
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                Our skilled team of content creators, SEO specialists, and
                marketers ensures your content is high-quality, relevant, and
                competitive, keeping your brand ahead of the market trends.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="contentMarketingService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/contentMarketingService_whyChooseSvg.svg"
              alt=""
              className="img-fluid whyChooseContentMarketingIcon"
            />
            <div className="contentMarketingService_whyChoose_center_div">
              <div className="contentMarketingService_whyChoose_number_div">
                <h1>03</h1>
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Data-Driven Approach
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                We base our content marketing strategies on data and analytics,
                ensuring every decision is backed by solid insights. This
                enables us to refine and improve strategies over time for
                maximum effectiveness.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="contentMarketingService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/contentMarketingService_whyChooseSvg.svg"
              alt=""
              className="img-fluid whyChooseContentMarketingIcon"
            />
            <div className="contentMarketingService_whyChoose_center_div">
              <div className="contentMarketingService_whyChoose_number_div">
                <h1>04</h1>
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Proven Results
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                Our content marketing services have driven measurable
                improvements in website traffic, search rankings, and lead
                generation for our clients across different industries.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="contentMarketingService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/contentMarketingService_whyChooseSvg.svg"
              alt=""
              className="img-fluid whyChooseContentMarketingIcon"
            />
            <div className="contentMarketingService_whyChoose_center_div">
              <div className="contentMarketingService_whyChoose_number_div">
                <h1>05</h1>
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Comprehensive Services
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                We handle everything from planning, content creation, and
                distribution to optimization, providing you with a complete
                content marketing service that drives business growth.
              </p>
            </div>
          </div>
          {/* 06 */}
          <div
            className="contentMarketingService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/contentMarketingService_whyChooseSvg.svg"
              alt=""
              className="img-fluid whyChooseContentMarketingIcon"
            />
            <div className="contentMarketingService_whyChoose_center_div">
              <div className="contentMarketingService_whyChoose_number_div">
                <h1>06</h1>
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Customizable Strategies
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                We create tailored content marketing strategies that suit your
                business needs. Our flexible approach ensures your unique goals
                are met, helping you grow and stand out in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Content Marketing with TOJO Global*/}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">
            Benefits of Content Marketing with TOJO Global
          </h1>
        </div>
        <div className="contentMarketing_services_main_div">
          {/* 01 */}
          <div
            className="contentMarketing_services_div"
            data-aos={isMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={1 * 200}
          >
            <div className="contentMarketing_services_textNumber_div">
              <h1>01</h1>
            </div>
            <div className="contentMarketing_services_text_div">
              <h4
                className="appDev_industries_services_subHeading"
                style={{
                  ...(isMobileView && {
                    paddingLeft: "6px",
                  }),
                }}
              >
                Increased Brand Awareness
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }),
                }}
              >
                By consistently producing valuable content, you make your brand
                more visible to your target audience. This will help you to grow
                your brand’s recognition and trust.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="contentMarketing_services_div"
            data-aos={isMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={2 * 200}
          >
            <div className="contentMarketing_services_textNumber_div">
              <h1>04</h1>
            </div>
            <div className="contentMarketing_services_text_div">
              <h4 className="appDev_industries_services_subHeading">
                Better Search Engine Rankings
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                  }),
                }}
              >
                Our SEO-optimized content improves your website’s ranking on
                search engines like Google, making it easier for potential
                customers to find you.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="contentMarketing_services_div"
            data-aos={isMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={3 * 200}
          >
            <div className="contentMarketing_services_textNumber_div">
              <h1>02</h1>
            </div>
            <div className="contentMarketing_services_text_div">
              <h4 className="appDev_industries_services_subHeading">
                Enhanced Customer Engagement
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                  }),
                }}
              >
                Engaging content encourages your audience to interact with your
                brand, fostering stronger relationships and building customer
                loyalty.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="contentMarketing_services_div"
            data-aos={isMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={4 * 200}
          >
            <div className="contentMarketing_services_textNumber_div">
              <h1>05</h1>
            </div>
            <div className="contentMarketing_services_text_div">
              <h4 className="appDev_industries_services_subHeading">
                Lead Generation
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                  }),
                }}
              >
                Content marketing attracts qualified leads who are genuinely
                interested in your products or services. This will increase the
                chances of converting them into customers.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="contentMarketing_services_div"
            data-aos={isMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={5 * 200}
          >
            <div className="contentMarketing_services_textNumber_div">
              <h1>03</h1>
            </div>
            <div className="contentMarketing_services_text_div">
              <h4 className="appDev_industries_services_subHeading">
                Cost-Effective Marketing
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                  }),
                }}
              >
                Compared to traditional advertising, content marketing is more
                affordable and sustainable. Once developed, content keeps
                attracting traffic and generating leads over time, offering
                long-term value.
              </p>
            </div>
          </div>
          {/* 06 */}
          <div
            className="contentMarketing_services_div"
            data-aos={isMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={6 * 200}
          >
            <div className="contentMarketing_services_textNumber_div">
              <h1>06</h1>
            </div>
            <div className="contentMarketing_services_text_div">
              <h4 className="appDev_industries_services_subHeading">
                Long-Term Impact
              </h4>
              <p
                className="contentMarketingService_paraTextStyle"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                  }),
                }}
              >
                Content remains online long after it’s published, continuing to
                attract visitors and generate leads well beyond its initial
                release, unlike paid ads that only work while the budget is
                active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Ready to Elevate Your White Papers?*/}
      <section
        className="container"
        style={{
          ...(isMobileView && {
            marginTop: "3rem",
            marginBottom: "2.5rem",
          }),
        }}
      >
        <div
          className="professionalModeration_div blockChainSolution_specialize_card"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Ready to Elevate Your White Papers?
            </h1>
            <p
              className="professionalModeration_service_offers_para"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
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

export default ContentMarketing;
