import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../../../Style/ServicesPageStyle/MarketingStyle/AmazonMarketing.Style.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KeyComponentsAmazonMarketingSvg from "./marketingSvg/KeyComponentsAmazonMarketingSvg";
gsap.registerPlugin(ScrollTrigger);

const AmazonMarketing = () => {
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

  const pathName = location.pathname;

  useEffect(() => {
    const professionalModeration = document.querySelector(
      ".amazonMarketing_professionalModeration_section"
    );
    if (
      pathName === "/services/marketing/amazon-marketing" &&
      professionalModeration
    ) {
      professionalModeration.style.paddingTop = "5rem";
    }
  }, [pathName]);

  return (
    <main className="maindiv">
      <Helmet>
        <title>TOJO Global - white Paper Conetent</title>
      </Helmet>
      {/*Scale your Amazon Business  with TOJO Global */}
      <section className="uiuxDesign_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            <h1>Scale your Amazon Business  with TOJO Global</h1>
            <p>
              we focus on strategic Amazon marketing designed to enhance your
              product’s presence, refine listings, and accelerate sales growth
              on the platform.
            </p>
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

      {/* What is Amazon Marketing? */}
      <section className="container whatIs_amazon_marketing_section">
        <div
          className="wordpressDevelopment_whyChoose_main_div whatIs_amazon_marketing_main_div"
          data-aos="fade-up"
        >
          {/*What is Amazon Marketing?   */}
          <div className="amazonMarketing_whatIsAmazonM_para_text">
            <h2>What is Amazon Marketing?</h2>
            <p>
              Amazon marketing involves promoting products on the Amazon
              marketplace through a range of tools and strategies. These include
              Amazon Ads, Search Engine Optimization (SEO) for listings, and
              improving product pages to enhance visibility and boost sales.
              With millions of customers visiting Amazon every day, it’s crucial
              for businesses to implement a strong marketing plan that targets
              their audience effectively and stands out from the competition.
            </p>
          </div>
          <div className="whatIs_amazon_marketing_image_div">
            <img
              src="/Images/ServicesImage/development/professionally-developed-responsive-website-in-dif 1.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Key Components of Amazon Marketing include  */}
      <section className="container keyComponents_amazon_marketing_section">
        <div
          className="keyComponents_amazon_marketing_main_div"
          data-aos="fade-left"
        >
          <KeyComponentsAmazonMarketingSvg />
        </div>
      </section>

      {/*  Our Amazon Marketing Services*/}
      <section className="amazonMediaMarketing_OurServices_section container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">Our Amazon Marketing Services</h1>
          <p className="paraStyle">
            We offer a suite of services tailored to help your business succeed
            on Amazon:
          </p>
        </div>
        <div className="amazonMediaMarketing_OurService_main_div">
          {/* 01 */}
          <div
            className="amazonMediaMarketing_OurService_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="amazonMediaMarketing_OurService_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingOurServiceSvg.svg"
                alt=""
              />
              <h3>01</h3>
            </div>
            <div className="amazonMediaMarketing_OurService_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Amazon Ads Management
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                We manage your Amazon pay-per-click (PPC) campaigns to boost
                product visibility. Our team optimizes Sponsored Products and
                Sponsored Brands ads to ensure your budget is spent efficiently,
                driving sales and maximizing return on investment (ROI).
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="amazonMediaMarketing_OurService_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="amazonMediaMarketing_OurService_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingOurServiceSvg.svg"
                alt=""
              />
              <h3>02</h3>
            </div>
            <div className="amazonMediaMarketing_OurService_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Amazon SEO & Listing Optimization
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                Through keyword research, enhanced descriptions, and
                high-quality images, we improve your product listings to help
                them rank higher in Amazon search results, boosting visibility
                and driving conversions.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="amazonMediaMarketing_OurService_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="amazonMediaMarketing_OurService_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingOurServiceSvg.svg"
                alt=""
              />
              <h3>03</h3>
            </div>
            <div className="amazonMediaMarketing_OurService_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Amazon Store Creation & Management
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                We design and manage your Amazon Store to showcase your brand
                and products, boosting recognition and creating a smooth
                customer shopping experience.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="amazonMediaMarketing_OurService_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="amazonMediaMarketing_OurService_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingOurServiceSvg.svg"
                alt=""
              />
              <h3>04</h3>
            </div>
            <div className="amazonMediaMarketing_OurService_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Review & Reputation Management
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                Customer reviews are essential for success on Amazon. We help
                manage reviews and ratings, maintaining a positive brand
                reputation that builds trust with customers.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="amazonMediaMarketing_OurService_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="amazonMediaMarketing_OurService_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingOurServiceSvg.svg"
                alt=""
              />
              <h3>05</h3>
            </div>
            <div className="amazonMediaMarketing_OurService_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Performance Monitoring & Reporting
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                We continuously track your Amazon performance, analyzing key
                metrics such as traffic, sales, and ad efficiency. Our reports
                provide actionable insights, helping you make adjustments that
                improve results.
              </p>
            </div>
          </div>
          {/* 06 Amazon Inventory & Order Management */}
          <div
            className="amazonMediaMarketing_OurService_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="amazonMediaMarketing_OurService_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingOurServiceSvg.svg"
                alt=""
              />
              <h3>06</h3>
            </div>
            <div className="amazonMediaMarketing_OurService_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Amazon Inventory & Order Management
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                We help you manage inventory levels and streamline order
                processing on Amazon, ensuring your products stay in stock and
                customers receive timely deliveries for a seamless shopping
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TOJO Global for Amazon Marketing?  */}
      <section className="container WhyChooseTojoGlobalAmazonMarketing_section ">
        <div
          className="keyComponents_amazon_marketing_main_div"
          data-aos="fade-right"
        >
          <img
            src="/Images/ServicesImage/Marketing/whyChooseTojoGlobalAmazonMarketing.svg"
            className="KeyComponentsAmazonMarketingSvg"
            alt="WhyChooseTojoGlobalAmazonMarketing"
          />
        </div>
      </section>

      {/*  Benefits of Working with TOJO Global for Amazon Marketing*/}
      <section className="amazonMediaMarketing_OurServices_section container">
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle">
            Benefits of Working with TOJO Global for Amazon Marketing
          </h1>
        </div>
        <div className="amazonMediaMarketing_OurService_main_div">
          {/* 01 */}
          <div
            className="amazonMediaMarketing_Benifits_div"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <div className="amazonMediaMarketing_Benifits_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingBenifitsSvg.svg"
                alt=""
              />
              <h3>01</h3>
            </div>
            <div className="amazonMediaMarketing_Benifits_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Improved Product Visibility
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                By optimizing your listings and managing targeted ads, we ensure
                your products are seen by the right audience, increasing your
                chances of making sales.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="amazonMediaMarketing_Benifits_div"
            data-aos="fade-up"
            data-aos-delay={2 * 200}
          >
            <div className="amazonMediaMarketing_Benifits_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingBenifitsSvg.svg"
                alt=""
              />
              <h3>02</h3>
            </div>
            <div className="amazonMediaMarketing_Benifits_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Better Search Rankings
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                Our SEO strategies improve your product rankings on Amazon,
                making it easier for potential customers to discover your
                offerings.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="amazonMediaMarketing_Benifits_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <div className="amazonMediaMarketing_Benifits_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingBenifitsSvg.svg"
                alt=""
              />
              <h3>03</h3>
            </div>
            <div className="amazonMediaMarketing_Benifits_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Higher Conversion Rates
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                By optimizing your listings and managing targeted ads, we ensure
                your products are seen by the right audience, increasing your
                chances of making sales.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="amazonMediaMarketing_Benifits_div"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <div className="amazonMediaMarketing_Benifits_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingBenifitsSvg.svg"
                alt=""
              />
              <h3>04</h3>
            </div>
            <div className="amazonMediaMarketing_Benifits_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Enhanced Brand Presence
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                A well-managed Amazon Store, coupled with consistent
                advertising, strengthens your brand’s visibility and builds
                trust with your target audience.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="amazonMediaMarketing_Benifits_div"
            data-aos="fade-up"
            data-aos-delay={5 * 200}
          >
            <div className="amazonMediaMarketing_Benifits_number_box_div">
              <img
                src="/Images/ServicesImage/Marketing/AmazonMediaMarketingBenifitsSvg.svg"
                alt=""
              />
              <h3>05</h3>
            </div>
            <div className="amazonMediaMarketing_Benifits_Text_div">
              <h3 className="appDev_industries_services_subHeading">
                Continuous Improvement
              </h3>
              <p className="contentMarketingService_paraTextStyle">
                By optimizing your listings and managing targeted ads, we ensure
                your products are seen by the right audience, increasing your
                chances of making sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Ready to Elevate Your White Papers?*/}
      <section className="container amazonMarketing_professionalModeration_section">
        <div
          className="professionalModeration_div blockChainSolution_specialize_card  mt-1 mt-md-5"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Ready to Elevate Your White Papers?
            </h1>
            <p className="professionalModeration_service_offers_para">
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

export default AmazonMarketing;
