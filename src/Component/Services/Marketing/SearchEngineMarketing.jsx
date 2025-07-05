import React, { useContext } from "react";
import "../../../Style/ServicesPageStyle/MarketingStyle/SearchEngineMarketing.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import SearchEngineMarketingWhoWeHelp from "../ServicesSmallComponent/SearchEngineMarketingWhoWeHelp";
import SearchEngineMarketingWhoWeHelpDeskTop from "../ServicesSmallComponent/SearchEngineMarketingWhoWeHelpDeskTop";
const SearchEngineMarketing = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);

  return (
    <main className="maindiv">
      {/*service management top part*/}
      <section>
        <div className="searchEngineMarketing_top_hero_section">
          <div className="OnePageSeo_hero_part_div container">
            <div
              className="searchEngineMarketing_hero_text_div"
              data-aos="fade-left"
            >
              {isMobileView ? (
                <>
                  <div className="hero_page_strongText">
                    <h2
                      style={{
                        ...(isMobileView && {
                          paddingRight: "0rem",
                        }),
                      }}
                    >
                      {" "}
                      Maximize Your{" "}
                      <span className="headdingGradientText"> Visibility </span>
                    </h2>
                    <h3 className="homePageHeroSubHeadingFristText">
                      with TOJO Global's
                    </h3>
                    <h3 className="homePageHeroSubHeadingSecondText">
                      customized SEM Strategies
                    </h3>
                  </div>
                  <p
                    style={{
                      ...(isMobileView && {
                        textAlign: "justify",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    Our expert team delivers targeted SEM solutions that drive
                    traffic, boost conversions, and elevate your online
                    presence, ensuring your brand reaches the right audience
                    efficiently.
                  </p>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <h1>
                    Maximize Your Visibility with TOJO Global's customized{" "}
                    <span className="headdingGradientText">SEM </span>{" "}
                    Strategies
                  </h1>
                  <p>
                    Our expert team delivers targeted SEM solutions that drive
                    traffic, boost conversions, and elevate your online
                    presence, ensuring your brand reaches the right audience
                    efficiently.
                  </p>{" "}
                </>
              )}

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
            <div
              className="searchEngineMarketing_hero_image_div"
              data-aos="fade-right"
            >
              <img
                src="/Images/ServicesImage/banner_images/SEM 1.png"
                alt="OnePageSeo_hero_part_image_div.png"
              />
            </div>
          </div>
        </div>
        <div
          className="container searchEngineMarketing_second_part"
          style={{
            ...(isMobileView && {
              marginTop: "1.8rem",
            }),
          }}
        >
          {/* grid frist text card */}
          <div
            className="searchEngineMarketing_second_part_frist_text"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <h2>
              What Do Tojo Global's{" "}
              <span className="headdingGradientText">SEM</span> Services
              Include?
            </h2>
            <div className="searchEngineMarketing_second_part_frist_text_bottom_border"></div>
          </div>
          {/*02 PPC Management */}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude01.png"
              alt="icons/PPC Management 1.svg"
            />
            <h4>PPC Management</h4>
            <p>
              PPC management needs more than just automatic settings. It
              requires careful research, planning, and tracking. We create
              engaging ad copy and constantly optimize campaigns to ensure you
              get the best results
            </p>
          </div>
          {/*03 Search Engine Optimization (SEO) */}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude02.png"
              alt="icons/Search Engine Optimization (SEO) 1.svg"
            />
            <h4>Search Engine Optimization (SEO)</h4>
            <p>
              Our SEO services focus on improving your website’s ranking in
              search results. We monitor your site and make changes to enhance
              site speed, keyword usage, and content quality, helping you
              attract more organic traffic.
            </p>
          </div>
          {/*04 Content Marketing */}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude03.png"
              alt="icons/Content Marketing 1.svg"
            />
            <h4>Content Marketing</h4>
            <p>
              Strong content marketing establishes your brand as a trusted
              expert. We create informative content that builds trust and helps
              improve your SEO, ensuring you stand out in your industry.
            </p>
          </div>
          {/*05 Conversion Rate Optimization */}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude04.png"
              alt="icons/Conversion Rate Optimization 1 (1).svg"
            />
            <h4>Conversion Rate Optimization</h4>
            <p>
              Our SEM strategy analyzes data from every part of the buying
              journey to increase your conversion rates. We use tools like A/B
              testing and funnel analysis to find what works best for your
              audience
            </p>
          </div>
          {/*06 Paid Social Media Marketing */}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude05.png"
              alt="icons/Paid Social Media Marketing 1.svg"
            />
            <h4>Paid Social Media Marketing</h4>
            <p>
              We incorporate targeted paid social campaigns into your SEM
              strategy. This helps strengthen your online presence, attract
              quality traffic, and understand your customers better.
            </p>
          </div>
          {/*07 Performance Display Advertisingtent*/}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude06.png"
              alt="icons/Performance Display Advertisingtent 1.svg"
            />
            <h4>Performance Display Advertisingtent</h4>
            <p>
              Our display campaigns use clear calls-to-action (CTAs) to guide
              users. We focus on effective ad placement and compelling messaging
              to drive immediate responses.
            </p>
          </div>
          {/*08 Remarketing*/}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={8 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude07.png"
              alt="icons/Remarketing 1.svg"
            />
            <h4>Remarketing</h4>
            <p>
              We keep your ads in front of people who have shown interest in
              your products or services. This helps ensure your brand is
              top-of-mind when they're ready to make a purchase.
            </p>
          </div>
          {/*09 Shopping & Feed Management*/}
          <div
            className="searchEngineMarketing_second_part_card"
            data-aos="fade-down"
            data-aos-delay={9 * 200}
          >
            <img
              src="/Images/ServicesImage/Marketing/searchEngineMarketingServicesInclude08.png"
              alt="icons/Shopping & Feed Management 1.svg"
            />
            <h4>Shopping & Feed Management</h4>
            <p>
              For e-commerce businesses, effective shopping feed management is
              crucial. We optimize product descriptions and images to help you
              stand out in the competitive online marketplace.
            </p>
          </div>
        </div>
      </section>
      {/* How Can TOJO GLOBAL’s Strategic Search Engine Marketing Increase Your Revenue? We’re Happy to Explain. */}
      <section className="searchEngineMarketing_IncreaseRevenue_section">
        <div className="searchEngineMarketing_IncreaseRevenue_main_div container">
          <div
            className="searchEngineMarketing_IncreaseRevenue_main_div_image"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={1 * 200}
            style={{
              ...(isMobileView && {
                display: "none",
              }),
            }}
          >
            <div className="searchEngineMarketing_IncreaseRevenue_main_div_image_buttom_gradient"></div>
            <img
              src="/Images/ServicesImage/banner_images/earn-reveneu-from-search-engine-marketing-service- 1.png"
              alt="earn-reveneu-from-search-engine-marketing-serviceimage"
            />
          </div>
          <div
            className="searchEngineMarketing_hero_text_div searchEngineMarketing_IncreaseRevenue_text_div "
            data-aos="fade-right"
            data-aos-delay={2 * 200}
          >
            <h2
              className="searchEngineMarketing_IncreaseRevenue_headingtext"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "125%",
                  fontSize: "20px",
                }),
              }}
            >
              How Can TOJO GLOBAL’s Strategic Search Engine Marketing
              Increaseing Your Revenue? We are Happy to Explain.
            </h2>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                  fontSize: "13px",
                }),
              }}
            >
              our SEM services are designed to help you stand out in search
              results, connect with your target audience, and increase your
              revenue. We believe in delivering results that matter. Our goal is
              to help businesses grow through effective SEM campaigns that
              elevate your brand in both organic and paid search results.
              <br />
              On average, clients who work with TOJO Global see significant
              returns on their investments. Our advanced marketing tools help us
              continuously enhance your results by providing valuable insights,
              ensuring accurate tracking, and driving high-quality conversions.
              Let us help you reach new heights with our targeted SEM
              strategies!
            </p>
            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Call Us Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="searchEngineMarketing_IncreaseRevenue_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>Who We Help</h1>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                  fontSize: "13px",
                  marginTop: "0px",
                }),
              }}
            >
              For over a decade, TOJO Global has partnered with hundreds of
              clients across various industries to achieve their marketing
              goals. We are proud to serve a diverse range of businesses, from
              small startups to established brands. Here’s how we help:
            </p>
          </div>
        </div>
        {isLargeMobileView ? (
          <SearchEngineMarketingWhoWeHelp />
        ) : (
          <>
            <SearchEngineMarketingWhoWeHelpDeskTop />
          </>
        )}
      </section>

      {/* How Your Brand Grows with Our SEM Service */}
      <section
        className="searchEngineMarketing_SEMService_section"
        style={{
          ...(isMobileView && {
            paddingTop: "2rem",
          }),
        }}
      >
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>How Your Brand Grows with Our SEM Service</h1>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "13px",
                  marginTop: "0px",
                  lineHeight: "120%",
                }),
              }}
            >
              Without effective SEM, many brands struggle to be seen online. In
              fact, studies show that over 60% of businesses fail to reach their
              potential because they don’t invest in search engine marketing.
              This means they miss out on valuable traffic, leads, and sales,
              putting their growth at risk
            </p>
          </div>
        </div>
        <div className="searchEngineMarketing_SEMService_main_div">
          {/*01 Increased Visibility */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Increase Profits.png"
              alt="sems servics card icon image"
            />
            <h4>Increased Visibility</h4>
          </div>
          {/*02 Targeted Audience*/}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Targeted Audience 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Targeted Audience</h4>
          </div>
          {/*03 Boosted Website Traffic */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Boosted website trrafic 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Boosted Website Traffic</h4>
          </div>
          {/*04 Higher Conversion Rates */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Higher Conversion 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Higher Conversion Rates</h4>
          </div>
          {/*05 Cost-Effective Marketing */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Cost-Effective 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Cost-Effective Marketing</h4>
          </div>
          {/*06 Measurable Results */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Measurable Results 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Measurable Results</h4>
          </div>
          {/*07 Brand Trust and Credibility */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Brand Trust and 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Brand Trust and Credibility</h4>
          </div>
          {/*08 Competitive Advantage */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={8 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Competitive 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Competitive Advantage</h4>
          </div>
          {/* just gap  */}
          <div className=""></div>
          {/*09 Flexible Campaigns */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={9 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Flexible Campaigns 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Flexible Campaigns</h4>
          </div>
          {/*10 Long-Term Growth */}
          <div
            className="searchEngineMarketing_SEMService_card_div"
            data-aos="fade-down"
            data-aos-delay={10 * 200}
          >
            <img
              src="/Images/ServicesImage/Allicons/Long-Term Growth 1.svg"
              alt="sems servics card icon image"
            />
            <h4>Long-Term Growth</h4>
          </div>
          {/* just gap  */}
          <div className=""></div>
        </div>
      </section>

      {/*TOJO GLOBAL comes here to help you close this gap by using the power of influencers */}
      <section
        className="container"
        style={{
          ...(isMobileView && {
            marginTop: "2.5rem",
            marginBottom: "2rem",
          }),
        }}
      >
        <div
          className="professionalModeration_div professionalService_card_onSeo_page"
          data-aos="fade-up"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              TOJO GLOBAL comes here to help you close this gap by using the
              power of influencers
            </h1>
            <p
              className="professionalModeration_service_offers_para"
              style={{
                ...(isMobileView && {
                  marginTop: "0.5rem",
                  textAlign: "justify",
                }),
              }}
            >
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

export default SearchEngineMarketing;
