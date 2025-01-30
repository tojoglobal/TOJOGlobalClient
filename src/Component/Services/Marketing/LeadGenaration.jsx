import React from "react";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/MarketingStyle/leadGenaration.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const LeadGenaration = () => {
  useGSAP(() => {
    gsap.from(".circel_div", {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".approach_leadGenaration_service_container",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
        once: true,
      },
    });
    // Animation for "Who We Serve" Section with ScrollTrigger
    gsap.from(".step", {
      x: -80,
      opacity: 0,
      duration: 2,
      delay: 0.2,
      stagger: {
        each: 0.2,
        from: "top",
        grid: "auto",
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: ".approach_leadGenaration_service_container",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
        once: true,
      },
    });
  }, []);
  return (
    <main className="maindiv">
      {/*service management top part*/}
      <section>
        <div className="searchEngineMarketing_top_hero_section">
          <div className="OnePageSeo_hero_part_div container">
            <div
              className="leadGenaration_service_hero_text_div"
              data-aos="fade-left"
            >
              <h1>
                Supercharge your marketing with TOJO GLOBAL's{" "}
                <span className="headdingGradientText">lead Generation </span>{" "}
                Service
              </h1>
              <p>
                Our talented marketing team will strategically connect you with
                your ideal customers, ensuring your business to reach new
                heights of success and growth
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
            <div
              className="searchEngineMarketing_hero_image_div"
              data-aos="fade-right"
            >
              <img
                src="/Images/ServicesImage/banner_images/lead 1.png"
                alt="OnePageSeo_hero_part_image_div.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TOJO GLOBAL Lead Generation Services */}
      <section className="leadGenaration_service_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>TOJO GLOBAL Lead Generation Services</h1>
            <p>
              Without effective SEM, many brands struggle to be seen online. In
              fact, studies show that over 60% of businesses fail to reach their
              potential because they don’t invest in search engine marketing.
              This means they miss out on valuable traffic, leads, and sales,
              putting their growth at risk
            </p>
          </div>
        </div>
        <div className="searchEngineMarketing_leadGenaration_main_div">
          {/*01 Increased Visibility */}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={1 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/Conversion Rate Optimization 2.svg"
                alt="lead genaration servics card icon image"
              />
            </div>
            <h4>Conversion Rate Optimization</h4>
            <p>
              Guide your visitors through their journey and increase conversions
              with proven tactics.
            </p>
          </div>
          {/*02 Content Marketing*/}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={2 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/Content Marketing 2.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>Content Marketing</h4>
            <p>
              Bring in potential customers with content that speaks to them and
              turns them into valuable leads.
            </p>
          </div>
          {/*03 Email Marketing */}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={3 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/Email Marketing 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>Email Marketing</h4>
            <p>
              Build strong connections and attract new customers with
              personalized email campaigns.
            </p>
          </div>
          {/*04 Account-based Marketing (ABM) */}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={4 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/Account-based Marketing (ABM) 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>Account-based Marketing (ABM)</h4>
            <p>
               Focus on high-value accounts and create relationships that drive
              more revenue.
            </p>
          </div>
          {/*05 Demand Generation */}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={5 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/Demand Generation 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>Demand Generation</h4>
            <p>
              Grow your brand awareness and market share with strategic
              demand-generation methods.
            </p>
          </div>
          {/*06 LinkedIn Lead Generation*/}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={6 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/LinkedIn Lead Generation 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>LinkedIn Lead Generation</h4>
            <p>
              Use LinkedIn to connect with more prospects and build interest in
              your brand.
            </p>
          </div>
          {/*07 B2B Lead Generation*/}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={7 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/B2B 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>B2B Lead Generation</h4>
            <p>
              Reach high-value business clients with our customized B2B lead
              generation approach.
            </p>
          </div>
          {/*08 IT Lead Generation*/}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={8 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/IT Lead Generation 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>IT Lead Generation</h4>
            <p>
              Help your tech company grow with our targeted lead generation
              techniques.
            </p>
          </div>
          {/*09 Analytics & Reporting*/}
          <div
            className="searchEngineMarketing_leadGenaration_card_div"
            data-aos="fade-down"
            data-aos-delay={9 * 100}
          >
            <div className="searchEngineMarketing_leadGenaration_card_div_img">
              <img
                src="/Images/ServicesImage/icons/Analytics & Reporting 1.svg"
                alt="sems servics card icon image"
              />
            </div>
            <h4>Analytics & Reporting</h4>
            <p>
              Track and improve your lead-generation results with detailed
              insights and reports.
            </p>
          </div>
        </div>
      </section>
      {/* Our Approach to Lead Generation */}
      <section className="approach_leadGenaration_service_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>Our Approach to Lead Generation</h1>
            <p className="mt-1 mt-md-5">
              we believe lead generation is an art. Our team understands that
              success comes from a mix of creativity and smart planning. This
              requires skill, precision, and hard work.
              <br />
              With years of experience, our experts know how to find the right
              leads for your business. We didn't achieve this overnight; we have
              spent time perfecting our methods. Now, we are ready to use our
              knowledge to help you grow.
            </p>
          </div>
        </div>

        <div className="approach_leadGenaration_service_container container">
          {/* <!-- Circle with Working Steps --> */}
          <div className="circel_div">
            <div className="beloww_circel"></div>
            <div className="main-circle">
              <div className="circle-text">
                <span>
                  WORKING <br /> STEPS
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Steps with icons and descriptions --> */}
          <div className="steps-container">
            {/* Set Clear Goals  */}
            <div className="step">
              <div className="step-number">1</div>
              <div className="step_text_icon_div">
                <div className="step_buttom_gradinet"> </div>
                <div className="step-icon">
                  <img
                    src="/Images/ServicesImage/icons/goals 1 (1).svg"
                    alt="Set Clear Goals Icon"
                  />
                </div>
                <div className="step-content">
                  <h3>Set Clear Goals</h3>
                  <p>
                    We start by understanding your business objectives and
                    setting measurable goals for the lead-generation process. A
                    strong plan guides every successful campaign.
                  </p>
                </div>
              </div>
            </div>

            {/* Research and Analysis */}

            <div className="step">
              <div className="step-number">2</div>
              <div className="step_text_icon_div">
                <div className="step_buttom_gradinet"> </div>
                <div className="step-icon">
                  <img
                    src="/Images/ServicesImage/icons/reasearch 1.svg"
                    alt="Research and Analysis Icon"
                  />
                </div>
                <div className="step-content">
                  <h3>Research and Analysis</h3>
                  <p>
                    We conduct market research and competitor analysis to
                    identify your target audience and the best platforms to
                    reach them. This ensures our strategies are effective and
                    relevant.
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number stepNumber3">3</div>
              <div className="step_text_icon_div">
                <div className="step_buttom_gradinet"> </div>
                <div className="step-icon">
                  <img
                    src="/Images/ServicesImage/icons/Strategy 1.svg"
                    alt="Custom Strategy Development Icon"
                  />
                </div>
                <div className="step-content">
                  <h3>Custom Strategy Development</h3>
                  <p>
                    We design a balanced lead generation strategy based on your
                    specific needs. From content creation to channel selection,
                    we craft a plan for maximum success.
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step_text_icon_div">
                <div className="step_buttom_gradinet"> </div>
                <div className="step-icon">
                  <img
                    src="/Images/ServicesImage/icons/Execution 1.svg"
                    alt="Execution and Optimization Icon"
                  />
                </div>
                <div className="step-content">
                  <h3>Execution and Optimization</h3>
                  <p>
                    We launch the campaign and continually monitor its
                    performance, making real-time adjustments to optimize
                    results and ensure the best possible outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <div className="step_text_icon_div">
                <div className="step_buttom_gradinet"> </div>
                <div className="step-icon">
                  <img
                    src="/Images/ServicesImage/icons/Reporting 1.svg"
                    alt="Reporting and Insights Icon"
                  />
                </div>
                <div className="step-content">
                  <h3>Reporting and Insights</h3>
                  <p>
                    After the campaign, we provide detailed reports, showing how
                    your business has grown and where improvements can be made,
                    ensuring full transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How lead generation can help your brand? */}
      <section className="brand_leadGenaration_service_section">
        <div
          className="brand_leadGenaration_service_section_gradient"
          data-aos="fade-left"
        ></div>
        <div className="brand_leadGenaration_service_div" data-aos="fade-down">
          <div className="brand_leadGenaration_service_text_div">
            <h1>How lead generation can help your brand?</h1>
            <p>
              A lead generation service can be a game-changer for your business.
              Instead of wasting time on trial and error, you can rely on a
              proven strategy to reach potential customers. At TOJO GLOBAL, we
              help you connect with the right audience by targeting prospects
              who are most likely to turn into buyers. This means better lead
              quality and higher chances of success. With our service, you’ll
              save time and money by avoiding ineffective marketing efforts. We
              focus on boosting your brand visibility and making sure your
              business stands out. Plus, we keep up with the latest trends, so
              your business always stays ahead. Here’s how we help your business
              grow with our lead generation service:
            </p>
          </div>
          <div className="brand_leadGenaration_service_imge_div">
            <img
              src="/Images/ServicesImage/banner_images/Lead-Generation 1.png"
              alt=" How lead generation can help your brand Image"
            />
          </div>
        </div>
      </section>
      {/* lead generation service Items   */}
      <section className="SocailMediaMarketing_OurExpertise_section">
        <div className="leadGenaration_service_card_div container">
          {/*01 Reach the Right People*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div B2C_Influencer_Marketing "
            data-aos="fade-up"
            data-aos-delay={1 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge B2C_Influencer_Marketing_icon">
              <img
                src="/Images/ServicesImage/icons/Reach the Right People 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Reach the Right People</h4>
            <p>
              We help you find and connect with the right prospects who are most
              likely to become customers. This saves you time and effort by
              focusing on leads that matter.
            </p>
          </div>
          {/*02 Get Better Leads*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div  Building_Credibility"
            data-aos="fade-up"
            data-aos-delay={2 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Building_Credibility_icon">
              <img
                src="/Images/ServicesImage/icons/Get Better Leads 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Get Better Leads</h4>
            <p>
              We make sure the leads you receive are high-quality, meaning they
              are more likely to convert. This leads to better results and a
              higher return on investment.
            </p>
          </div>
          {/*03 Save Time and Money*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div Increasing_Campaign_Impact "
            data-aos="fade-up"
            data-aos-delay={3 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Increasing_Campaign_Impact_icon">
              <img
                src="/Images/ServicesImage/icons/Save Time and Money 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Save Time and Money</h4>
            <p>
              With our strategies, you won’t waste resources on ineffective
              marketing. We help you focus on what works, so you can spend less
              and achieve more.
            </p>
          </div>
          {/*04 Increase Brand Awareness*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div B2C_Influencer_Marketing "
            data-aos="fade-up"
            data-aos-delay={4 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge B2C_Influencer_Marketing_icon">
              <img
                src="/Images/ServicesImage/icons/Increase Brand Awareness 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Increase Brand Awareness</h4>
            <p>
              We don’t just help you get leads – we also help boost your brand.
              Our methods improve your visibility, build trust, and create
              lasting connections with your audience
            </p>
          </div>
          {/*05 Stay Ahead of Competitors*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div  Building_Credibility"
            data-aos="fade-up"
            data-aos-delay={5 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Building_Credibility_icon">
              <img
                src="/Images/ServicesImage/icons/Stay Ahead of Competitors 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Stay Ahead of Competitors</h4>
            <p>
              Our team stays up to date on the latest trends and strategies. We
              make sure your business stays competitive with modern, effective
              lead generation.
            </p>
          </div>
          {/*06 Understand Your Audience*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div Increasing_Campaign_Impact "
            data-aos="fade-up"
            data-aos-delay={6 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Increasing_Campaign_Impact_icon">
              <img
                src="/Images/ServicesImage/icons/Understand Your Audience 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Understand Your Audience</h4>
            <p>
              We use data to give you a clear picture of who your audience is
              and what they want. This helps you make smarter marketing
              decisions.
            </p>
          </div>
          {/*07 Maximize Your ROI*/}
          <div
            className="tailoredInfluencer_OurExpertise_Text_card_div Increasing_Campaign_Impact "
            data-aos="fade-up"
            data-aos-delay={7 * 100}
          >
            <div className="InfluencerMarketing_OurExpertise_card_imge Increasing_Campaign_Impact_icon">
              <img
                src="/Images/ServicesImage/icons/Maximize Your ROI 1.svg"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Maximize Your ROI</h4>
            <p>
              We provide detailed performance data, so you know which tactics
              work best. This helps you invest in the right areas and get the
              most out of your marketing budget.
            </p>
          </div>
        </div>
      </section>

      {/*TOJO GLOBAL comes here to help you close this gap by using the power of influencers */}
      <section className="container">
        <div
          className="professionalModeration_div professionalService_card_onSeo_page"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Our lead generation service is designed to help your business grow
            </h1>
            <p className="professionalModeration_service_offers_para">
              by connecting you with the right prospects, optimizing your
              marketing efforts, and delivering measurable results. With our
              expertise and data-driven approach, you’ll see higher-quality
              leads, increased brand visibility, and a better return on
              investment. We’re here to guide you every step of the way,
              ensuring your success and long-term growth.
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

export default LeadGenaration;
