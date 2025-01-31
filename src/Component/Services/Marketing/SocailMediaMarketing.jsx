import React, { useContext, useEffect, useState } from "react";
import "../../../Style/ServicesPageStyle/MarketingStyle/SocailMediaMarketing.css";
import { Link } from "react-router-dom";
import SocailMediaMarketingWhoWeServe from "./marketingSvg/SocailMediaMarketingWhoWeServe";
import SocailMediaMarketingOurServicesSvg from "./marketingSvg/SocailMediaMarketingOurServicesSvg";
import SMMKeyForBusinessGrowthSvg from "./marketingSvg/SMMKeyForBusinessGrowthSvg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppContext } from "../../../AppContext";
gsap.registerPlugin(ScrollTrigger);

const SocailMediaMarketing = () => {
  const { isLargeMobileView } = useContext(AppContext);
  useGSAP(() => {
    // Animation Timeline for Hero Section
    let heroTimeline = gsap.timeline();
    heroTimeline
      .from(".webContentWriting_hero_text_part h1", {
        x: -560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .from(".webContentWriting_hero_text_part p", {
        x: 560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .from(".hero_btn_style", {
        y: 560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });
    // Animation for "Who We Serve" Section with ScrollTrigger
    gsap.from(".socailMediaMarketing_whoWeServe_div", {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: {
        each: 0.1,
        from: "center",
        grid: "auto",
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: ".socailMediaMarketing_whoWeServe_section",
        start: "top 20%",
        end: "bottom 100%",
        scrub: 1,
        once: true,
      },
    });
  }, []);

  return (
    <main className="maindiv">
      {/* TOJO Global Elevating Social Media Marketing for Modern Brands */}
      <section className="socailMediaMarketing_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            <h1>
              TOJO Global Elevating Social Media Marketing for Modern Brands
            </h1>
            <p>
              We design personalized social media marketing strategies that
              generate measurable results, ensuring your brand effectively
              reaches its target audience and fosters long-term growth.
            </p>
            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Lets Make a Call</span>
                </button>
              </Link>

              <a href="https://www.behance.net/TOJO_Global" target="_blank">
                <button className="custombtn hero_btn1 secondBtn">
                  <span>OUR WORKS</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* socailMediaMarketing who we serve  */}
      <section className="container socailMediaMarketing_whoWeServe_section">
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle">Who We Serve?</h1>
          <p className="paraStyle">
            We deliver customized social media marketing solutions across a
            variety of industries, catering to businesses of all sizes.
          </p>
        </div>
        <div className="socailMediaMarketing_whoWeServe_main_div">
          {/* 01 */}
          <div className="socailMediaMarketing_whoWeServe_div">
            <SocailMediaMarketingWhoWeServe />
            <div className="socailMediaMarketing_whoWeServe_text_div">
              <h4 className="whoWeServe_heading_style pb-2">Startups</h4>
              <p className="whoWeServe_para_style">
                We help new businesses create impactful social media campaigns
                that generate buzz and attract their first customers.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div className="socailMediaMarketing_whoWeServe_div">
            <SocailMediaMarketingWhoWeServe />
            <div className="socailMediaMarketing_whoWeServe_text_div">
              <h4 className="whoWeServe_heading_style pb-2">
                eCommerce Businesses
              </h4>
              <p className="whoWeServe_para_style">
                Our targeted campaigns increase brand visibility and drive sales
                conversions for online retailers.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="socailMediaMarketing_whoWeServe_div">
            <SocailMediaMarketingWhoWeServe />
            <div className="socailMediaMarketing_whoWeServe_text_div">
              <h4 className="whoWeServe_heading_style pb-2">
                Corporate Enterprises
              </h4>
              <p className="whoWeServe_para_style">
                We create strategies focused on reputation management, customer
                engagement, and thought leadership, particularly on LinkedIn.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="socailMediaMarketing_whoWeServe_div">
            <SocailMediaMarketingWhoWeServe />
            <div className="socailMediaMarketing_whoWeServe_text_div">
              <h4 className="whoWeServe_heading_style pb-2">
                Entertainment & Lifestyle Brands
              </h4>
              <p className="whoWeServe_para_style">
                Through engaging visuals and creative content, we help build
                strong communities and improve brand loyalty.
              </p>
            </div>
          </div>
          {/* 5*/}
          <div className="socailMediaMarketing_whoWeServe_div">
            <SocailMediaMarketingWhoWeServe />
            <div className="socailMediaMarketing_whoWeServe_text_div">
              <h4 className="whoWeServe_heading_style pb-2">
                Nonprofits & Charities
              </h4>
              <p className="whoWeServe_para_style">
                We help mission-driven organizations tell their stories, raise
                awareness, and engage supporters through social media.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  Our Social Media Marketing Services*/}
      <section className="socailMediaMarketing_OurServices_section">
        {/* text */}
        <div className="sectionTopTextstyle container" data-aos="fade-up">
          <h1 className="topHeadingStyle socailMediaMarketing_OurServices_topText_div">
            Our Social Media Marketing Services
          </h1>
          <p className="socailMediaMarketing_elementParaText">
            At TOJO Global, we offer a full suite of social media services
            designed to boost your brand and grow your online presence.
          </p>
        </div>
        {/* services */}
        <div className="socailMediaMarketing_OurServices_main_div container">
          {/* 01 */}
          <div
            className="socailMediaMarketing_OurServices_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <SocailMediaMarketingOurServicesSvg />
            <div className="socailMediaMarketing_OurServices_Text_icon_div">
              <img
                src="/Images/ServicesImage/Marketing/SocailMediaMarketingOurServicesSvg01.svg"
                alt="Our Social Media Marketing Services"
              />
              <div className="socailMediaMarketing_OurServices_text_div mt-2 md:mt-4">
                <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                  Tailored Social Media Strategy
                </h4>
                <p className="socailMediaMarketing_OurServices_para_style">
                  We develop customized strategies aligned with your business
                  goals and audience. Our plans ensure that your brand’s message
                  is creative, consistent, and impactful.
                </p>
              </div>
            </div>
          </div>
          {/* 02 */}
          <div
            className="socailMediaMarketing_OurServices_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <SocailMediaMarketingOurServicesSvg />
            <div className="socailMediaMarketing_OurServices_Text_icon_div">
              <img
                src="/Images/ServicesImage/Marketing/SocailMediaMarketingOurServicesSvg02.svg"
                alt="Our Social Media Marketing Services"
              />
              <div className="socailMediaMarketing_OurServices_text_div mt-2 md:mt-4">
                <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                  Visual Content Creation
                </h4>
                <p className="socailMediaMarketing_OurServices_para_style">
                  We create compelling content, including high-quality graphics
                  and videos, tailored for social media platforms. Whether it’s
                  posts, reels, or stories, we help your brand stand out.
                </p>
              </div>
            </div>
          </div>
          {/* 03 */}
          <div
            className="socailMediaMarketing_OurServices_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <SocailMediaMarketingOurServicesSvg />
            <div className="socailMediaMarketing_OurServices_Text_icon_div">
              <img
                src="/Images/ServicesImage/Marketing/SocailMediaMarketingOurServicesSvg01.svg"
                alt="Our Social Media Marketing Services"
              />
              <div className="socailMediaMarketing_OurServices_text_div mt-2 md:mt-4">
                <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                  Social Media Advertising
                </h4>
                <p className="socailMediaMarketing_OurServices_para_style">
                  Our targeted ad campaigns on platforms like Facebook,
                  Instagram, and LinkedIn drive traffic, leads, and conversions,
                  ensuring maximum ROI for your business.
                </p>
              </div>
            </div>
          </div>
          {/* 04 */}
          <div
            className="socailMediaMarketing_OurServices_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <SocailMediaMarketingOurServicesSvg />
            <div className="socailMediaMarketing_OurServices_Text_icon_div">
              <img
                src="/Images/ServicesImage/Marketing/SocailMediaMarketingOurServicesSvg04.svg"
                alt="Our Social Media Marketing Services"
              />
              <div className="socailMediaMarketing_OurServices_text_div mt-2 md:mt-4">
                <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                  Social Media Account Management
                </h4>
                <p className="socailMediaMarketing_OurServices_para_style">
                  We manage your daily social media presence, from posting
                  content to interacting with followers, ensuring your brand
                  stays relevant and responsive.
                </p>
              </div>
            </div>
          </div>
          {/* 05 */}
          <div
            className="socailMediaMarketing_OurServices_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <SocailMediaMarketingOurServicesSvg />
            <div className="socailMediaMarketing_OurServices_Text_icon_div">
              <img
                src="/Images/ServicesImage/Marketing/SocailMediaMarketingOurServicesSvg05.svg"
                alt="Our Social Media Marketing Services"
              />
              <div className="socailMediaMarketing_OurServices_text_div mt-2 md:mt-4">
                <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                  Influencer Collaborations
                </h4>
                <p className="socailMediaMarketing_OurServices_para_style">
                  We connect your brand with influencers who align with your
                  values, expanding your reach and building credibility through
                  impactful partnerships.
                </p>
              </div>
            </div>
          </div>
          {/* 06 */}
          <div
            className="socailMediaMarketing_OurServices_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <SocailMediaMarketingOurServicesSvg />
            <div className="socailMediaMarketing_OurServices_Text_icon_div">
              <img
                src="/Images/ServicesImage/Marketing/SocailMediaMarketingOurServicesSvg06.svg"
                alt="Our Social Media Marketing Services"
              />
              <div className="socailMediaMarketing_OurServices_text_div mt-2 md:mt-4">
                <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                  Analytics & Optimization
                </h4>
                <p className="socailMediaMarketing_OurServices_para_style">
                  Our team tracks campaign performance, making data-driven
                  adjustments to optimize results. We provide detailed reports
                  to guide future strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Social Media Marketing is Key for Business Growth */}
      <section className="container">
        {/* text */}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">
            Why Social Media Marketing is Key for Business Growth
          </h1>
        </div>
        {/* socailMediaMarketing Key for Business Growth*/}
        <div className="socailMediaMarketing_KeyForBusinessGrowth_main_div">
          {/* 01 */}
          <div
            className="socailMediaMarketing_KeyForBusinessGrowth_div"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <SMMKeyForBusinessGrowthSvg
              svgIconImage={
                "SMMKeyForBusinessGrowthSvgIncrease_Brand_Awareness01.svg"
              }
            ></SMMKeyForBusinessGrowthSvg>

            <div className="socailMediaMarketing_KeyForBusinessGrowth_text_div">
              <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                Boosts Brand Awareness
              </h4>
              <p className="whoWeServe_para_style">
                Social media exposes your brand to a larger audience, increasing
                visibility and recognition.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="socailMediaMarketing_KeyForBusinessGrowth_div"
            data-aos="fade-up"
            data-aos-delay={2 * 200}
          >
            <SMMKeyForBusinessGrowthSvg
              svgIconImage={"SMMKeyForBusinessGrowthSvgEngagement02.svg"}
            ></SMMKeyForBusinessGrowthSvg>

            <div className="socailMediaMarketing_KeyForBusinessGrowth_text_div">
              <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                Drives Engagement
              </h4>
              <p className="whoWeServe_para_style">
                Regular interaction with your audience builds stronger
                relationships and customer loyalty.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="socailMediaMarketing_KeyForBusinessGrowth_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <SMMKeyForBusinessGrowthSvg
              svgIconImage={"SMMKeyForBusinessGrowthSvgSaveTimeAndMoney03.svg"}
            ></SMMKeyForBusinessGrowthSvg>

            <div className="socailMediaMarketing_KeyForBusinessGrowth_text_div">
              <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                Cost-Effective
              </h4>
              <p className="whoWeServe_para_style">
                Social media ads are more affordable and targeted compared to
                traditional advertising
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="socailMediaMarketing_KeyForBusinessGrowth_div"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <SMMKeyForBusinessGrowthSvg
              svgIconImage={
                "SMMKeyForBusinessGrowthSvgIncreasesWebsiteTraffic04.svg"
              }
            ></SMMKeyForBusinessGrowthSvg>

            <div className="socailMediaMarketing_KeyForBusinessGrowth_text_div">
              <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                Increases Website Traffic
              </h4>
              <p className="whoWeServe_para_style">
                Well-executed campaigns drive high-quality traffic to your
                website, increasing opportunities for conversions.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="socailMediaMarketing_KeyForBusinessGrowth_div"
            data-aos="fade-up"
            data-aos-delay={5 * 200}
          >
            <SMMKeyForBusinessGrowthSvg
              svgIconImage={"SMMKeyForBusinessGrowthSvgProvidesInsight05.svg"}
            ></SMMKeyForBusinessGrowthSvg>

            <div className="socailMediaMarketing_KeyForBusinessGrowth_text_div">
              <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                Provides Insight
              </h4>
              <p className="whoWeServe_para_style">
                Social media analytics offer valuable data on customer behavior,
                helping to refine your marketing strategies.
              </p>
            </div>
          </div>
          {/* 06*/}
          <div
            className="socailMediaMarketing_KeyForBusinessGrowth_div"
            data-aos="fade-up"
            data-aos-delay={6 * 200}
          >
            <SMMKeyForBusinessGrowthSvg
              svgIconImage={
                "SMMKeyForBusinessGrowthSvgStayAheadOfCompetitors06.svg"
              }
            ></SMMKeyForBusinessGrowthSvg>

            <div className="socailMediaMarketing_KeyForBusinessGrowth_text_div">
              <h4 className="socailMediaMarketing_OurServices_heading pb-2">
                Keeps You Competitive
              </h4>
              <p className="whoWeServe_para_style">
                A strong social media presence ensures your brand stays
                competitive in today’s digital marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Here comes TOJO GLOBAL where we specialize in creating unique logos */}
      <section className="smBrandGrowth_hero_part">
        <div
          className="professionalModeration_div socailMediaMarketing_specialize_card"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              We develop impactful social media strategies at TOJO Global,
            </h1>
            <p className="professionalModeration_service_offers_para">
              focused on increasing engagement and driving growth. Reach out to
              us to elevate your brand’s performance.
            </p>

            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="custombtn hero_btn1 secondBtn">
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

export default SocailMediaMarketing;
