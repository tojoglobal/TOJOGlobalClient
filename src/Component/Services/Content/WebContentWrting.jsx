import React, { useContext } from "react";
import "../../../Style/ServicesPageStyle/ContentWrting/WebContentWrting.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
const WebContentWrting = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);
  return (
    <main className="maindiv webContentWriting_top_main">
      {/* web content writing hero section  */}
      <section className="webContentWriting_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                <div className="hero_page_strongText">
                  <h2>
                    Strengthen Your{" "}
                    <span className="headdingGradientText">Brand</span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    with TOJO Global’s{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    Content Writing Services
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
                  Strengthen Your Brand with Tojo Global’s Expert Content
                  Writing Services
                </h1>
                <p>
                  Tojo Global creates powerful content writing solutions that
                  enhance your brand's voice and resonate with your audience.
                </p>
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
        </div>
      </section>
      {/* Blog Writing */}
      <section>
        <div
          className="searchEngineMarketing_WhoHelp_top_text_div"
          style={{
            ...(isMobileView && {
              marginTop: "27px",
            }),
          }}
        >
          <h1>
            {" "}
            <span className="headdingGradientText">Blog</span> Writing
          </h1>
        </div>
        <div className="webContentWriting_blogWriting_div container">
          <div className="webContentWriting_blogWriting_text_div">
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              Great blog content is essential for content marketing, it grabs
              your audience's attention, drives traffic to your website, and
              positions your brand as an expert in your industry. While creating
              effective content takes time and skill, our blog writing services
              can speed up the process. Let our talented team of writers assist
              your in-house team or handle all your blogging needs.
            </p>
            <h2
              style={{
                ...(isMobileView && {
                  fontSize: "18px",
                  lineHeight: "120%",
                }),
              }}
            >
              Why Choose Tojo Global for Blog Writing Services?
            </h2>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              At Tojo Global, we provide a user-friendly platform where talented
              freelance writers create blog content tailored to your brand’s
              voice and goals. They follow your guidelines and deliver engaging
              blog posts that are ready to be published and shared on your
              social media and email newsletters.
            </p>
          </div>
          <div>
            <div className="webContentWriting_blogWriting_card_div">
              <div className="webContentWriting_blogWriting_card_text_div">
                <img
                  src="/Images/ServicesImage/Allicons/top quality 1.svg"
                  alt="webContentWriting_blogWriting_card_div image"
                />
                <h4>Top Quality</h4>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We handpick only the best writers for our platform, ensuring
                  you receive content from the very best in the industry.
                </p>
              </div>
            </div>
            <div className="webContentWriting_blogWriting_card_div">
              <div className="webContentWriting_blogWriting_card_text_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon01.svg"
                  alt="webContentWriting_blogWriting_card_div image"
                />
                <h4>100% Unique</h4>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We guarantee that all content is completely original, so you
                  never have to worry about duplication.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="webContentWriting_blogWriting_card_div">
              <div className="webContentWriting_blogWriting_card_text_div">
                <img
                  src="/Images/ServicesImage/Allicons/polish 1.svg"
                  alt="webContentWriting_blogWriting_card_div image"
                />
                <h4>Extra Polish</h4>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  With our copyediting service, your content gets an additional
                  review to make it shine and stand out.
                </p>
              </div>
            </div>
            <div className="webContentWriting_blogWriting_card_div">
              <div className="webContentWriting_blogWriting_card_text_div">
                <img
                  src="/Images/ServicesImage/Allicons/seo 1.svg"
                  alt="webContentWriting_blogWriting_card_div image"
                />
                <h4>SEO-Friendly Writing</h4>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Boost your online presence with blog posts crafted to align
                  with the latest search engine optimization trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Product Description*/}
      <section>
        <div className="container webContentWriting_product_heading_text">
          <h1
            style={{
              ...(isMobileView && {
                textAlign: "center",
              }),
            }}
          >
            <span className="headdingGradientText">Product</span> Description
          </h1>
          <p
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            Effective product descriptions are key to successful online sales,
            they attract attention, inform customers, and encourage purchases.
            Crafting persuasive descriptions takes time and skill, but our
            product description writing services can streamline the process. Let
            our skilled writers enhance your product listings or take care of
            all your description needs.
          </p>
        </div>
        <div className="webContentWriting_products_container container">
          {/* frist columns */}
          <div className="webContentWriting_products_container_card_one">
            {/* 01 */}
            <div className="webContentWriting_products_container_card">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon01.svg"
                  alt="card_image_icon "
                />
                <h4>Unique Content</h4>
                <p>
                  We write original product descriptions that match your brand's
                  style and connect with your customers.
                </p>
              </div>
            </div>
            {/* 02 */}
            <div className="webContentWriting_products_container_card">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon02.svg"
                  alt="card_image_icon "
                />
                <h4>Engaging Stories:</h4>
                <p>
                  Our team tells stories that help customers imagine using your
                  products in their daily lives.
                </p>
              </div>
            </div>
          </div>
          {/* second colurms */}
          <div className="webContentWriting_products_container_card_two">
            {/* 03 */}
            <div className="webContentWriting_products_container_card">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon03.svg"
                  alt="card_image_icon "
                />
                <h4>Features and Benefits:</h4>
                <p>
                  We focus on the important features of your products and
                  explain how they can help your customers.
                </p>
              </div>
            </div>
            {/* 04 */}
            <div className="webContentWriting_products_container_card">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon04.svg"
                  alt="card_image_icon "
                />
                <h4>Clear Details:</h4>
                <p>
                  We provide essential information, like sizes and materials, in
                  a simple and easy-to-read way.
                </p>
              </div>
            </div>
          </div>
          {/* third colums  */}
          <div className="webContentWriting_products_container_card_three">
            {/* 05 */}
            <div className="webContentWriting_products_container_card">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon05.svg"
                  alt="card_image_icon "
                />
                <h4>SEO-Friendly Writing:</h4>
                <p>
                  We add relevant keywords to make your product pages easier to
                  find on search engines.
                </p>
              </div>
            </div>
            {/* 06 */}
            <div className="webContentWriting_products_container_card">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingProductDesIcon06.svg"
                  alt="card_image_icon "
                />
                <h4>Descriptive Language:</h4>
                <p>
                  We use colorful and lively words to make your products sound
                  exciting and attractive to shoppers.
                </p>
              </div>
            </div>
          </div>

          <div className="webContentWriting_products_container_text">
            <h1>What We Offer in Product Description Services</h1>
          </div>
        </div>
      </section>

      {/* Web Content Writing */}
      <section className="webContentWriting_service_section">
        <div className="container webContentWriting_service_div">
          <div className="webContentWriting_service_frist_text_div">
            <h1>
              {" "}
              <span className="headdingGradientText">Web Content</span> Writing
            </h1>
            <p>
              a website's content plays a crucial role in capturing your
              audience's interest, improving your SEO rankings, and building
              trust in your brand. Creating engaging and well-structured web
              content requires expertise and time, but with our web content
              writing services, you can get high-quality content quickly. Our
              skilled writers will work with your team or take care of all your
              content needs.
            </p>
          </div>
          <div className="webContentWriting_service_second_text_div">
            <h3>Why Choose Tojo Global for Web Content Writing Services?</h3>
            <p>
              We offer a simple platform where expert writers create customized
              content that matches your brand’s tone and goals. Our team
              delivers clear, engaging content that is ready to go live on your
              site and can be used across other platforms like social media or
              newsletters.
            </p>
          </div>
        </div>
        <div className="container webContentWriting_service_card_div">
          {/* 01 */}
          <div className="webContentWriting_service_card">
            <div className="webContentWriting_service_card_text">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingServiceCardIcon01.svg"
                  alt="card_image_icon "
                />
              </div>
              <h4>High-Quality Writing</h4>
              <p>
                We carefully select experienced writers to ensure you receive
                professional content that meets your needs.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div className="webContentWriting_service_card">
            <div className="webContentWriting_service_card_text">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingServiceCardIcon02.svg"
                  alt="card_image_icon "
                />
              </div>
              <h4>100% Original Content</h4>
              <p>
                All our content is unique and tailored to your brand, so you
                won’t have to worry about duplicated material.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div className="webContentWriting_service_card">
            <div className="webContentWriting_service_card_text">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingServiceCardIcon03.svg"
                  alt="card_image_icon "
                />
              </div>
              <h4>Thorough Editing</h4>
              <p>
                Our copyediting service ensures your content is refined and
                polished, giving it a professional edge.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div className="webContentWriting_service_card">
            <div className="webContentWriting_service_card_text">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingServiceCardIcon04.svg"
                  alt="card_image_icon "
                />
              </div>
              <h4>SEO-Optimized Content</h4>
              <p>
                WWe write content that follows the latest SEO trends to help
                your website rank higher on search engines.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* seo content writing  */}
      <section>
        <div className="container webContentWriting_product_heading_text">
          <h1
            style={{
              ...(isMobileView && {
                textAlign: "center",
                lineHeight: "120%",
              }),
            }}
          >
            <span className="headdingGradientText">SEO Content </span> Writing
            Services
          </h1>
          <p>
            SEO content is designed to improve your website's visibility on
            search engines like Google. It involves using relevant keywords that
            potential customers are searching for, creating high-quality content
            that answers their questions, and optimizing the structure of your
            site to make it easier for search engines to find. This way, your
            content ranks higher in search results, attracting more visitors to
            your website.
          </p>
        </div>
        <div className="webContentWriting_seoContent_main_div container">
          {/* image section */}
          <div className="webContentWriting_seoContent_image_div">
            <div></div>
            <div className="displayNoneMobile"></div>
            <div className="displayNoneMobile"></div>
            <div className="displayNoneMobile"></div>
          </div>
          {/* top center gradient */}
          <div className="webContentWriting_seoContent_div_top_center_gradient"></div>
          {/* bottom left gradient */}
          <div className="webContentWriting_seoContent_div_bottom_left_gradient"></div>
          {/* right text grid  */}
          <div className="webContentWriting_seoContent_main_text_div">
            {/* top text heding */}
            <div>
              <h3>What Tojo Global Offers</h3>
              <div className="bottom_divider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="8"
                  viewBox="0 0 250 8"
                  fill="none"
                >
                  <g filter="url(#filter0_f_1234_4462)">
                    <path d="M3 4H247" stroke="#01B5E8" stroke-width="2" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1234_4462"
                      x="0"
                      y="0"
                      width="250"
                      height="8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="1.5"
                        result="effect1_foregroundBlur_1234_4462"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Keyword Research div */}
            <div className="webContentWriting_seoContent_text_div">
              <div className="webContentWriting_seoContent_icon">
                <img
                  src="/Images/ServicesImage/Allicons/keyword 1.svg"
                  alt="webContentWriting_seoContent_icon"
                />
              </div>
              <div className="webContentWriting_seoContent_text">
                <h4>Keyword Research</h4>
                <p>
                  We find the right keywords to target your audience
                  effectively.
                </p>
              </div>
            </div>
            {/* High-Quality Content Creation: */}
            <div className="webContentWriting_seoContent_text_div">
              <div className="webContentWriting_seoContent_icon">
                <img
                  src="/Images/ServicesImage/Allicons/content creation 1.svg"
                  alt="webContentWriting_seoContent_icon"
                />
              </div>
              <div className="webContentWriting_seoContent_text">
                <h4>High-Quality Content Creation:</h4>
                <p>
                  Our writers produce engaging content that meets SEO standards.
                </p>
              </div>
            </div>
            {/* On-Page Optimization: */}
            <div className="webContentWriting_seoContent_text_div">
              <div className="webContentWriting_seoContent_icon">
                <img
                  src="/Images/ServicesImage/Allicons/optimaization 1.svg"
                  alt="webContentWriting_seoContent_icon"
                />
              </div>
              <div className="webContentWriting_seoContent_text">
                <h4>On-Page Optimization:</h4>
                <p>
                  We optimize your website's layout, headings, and meta tags for
                  better visibility.
                </p>
              </div>
            </div>
            {/* Content Strategy: */}
            <div className="webContentWriting_seoContent_text_div">
              <div className="webContentWriting_seoContent_icon">
                <img
                  src="/Images/ServicesImage/Allicons/strategy 1 (1).svg"
                  alt="webContentWriting_seoContent_icon"
                />
              </div>
              <div className="webContentWriting_seoContent_text">
                <h4>Content Strategy:</h4>
                <p>
                  We develop a plan to ensure your content aligns with your
                  business goals.
                </p>
              </div>
            </div>
            {/* Performance Tracking: */}
            <div className="webContentWriting_seoContent_text_div">
              <div className="webContentWriting_seoContent_icon">
                <img
                  src="/Images/ServicesImage/Allicons/performance 1.svg"
                  alt="webContentWriting_seoContent_icon"
                />
              </div>
              <div className="webContentWriting_seoContent_text">
                <h4>Performance Tracking:</h4>
                <p>
                  We monitor your SEO progress and make adjustments for
                  continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artical writing offers */}
      <section className="webContentWriting_articalWriteOffers_section displayNoneMobile">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div>
            <h1>Article writing service:</h1>
            <p>
              our article writing process is simple and effective. First, we
              understand your topic and target audience. Then, our skilled
              writers create well-researched and engaging articles that meet
              your needs. Finally, we provide revisions to ensure you are happy
              with the final result.
            </p>
          </div>
        </div>
        {/* light system */}
        <div className="container webContentWriting_articalWriteOffers_light_text_div">
          <div className="webContentWriting_articalWriteOffers_light_text">
            <h1>What Tojo Global Offers:</h1>
          </div>
          <div className="webContentWriting_articalWriteOffers_light_outline">
            {/* frist outline  */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="141"
                viewBox="0 0 12 141"
                fill="none"
              >
                <path
                  d="M0.432286 135.316C0.432286 138.262 2.8201 140.649 5.76562 140.649C8.71114 140.649 11.099 138.262 11.099 135.316C11.099 132.37 8.71114 129.983 5.76562 129.983C2.8201 129.983 0.432286 132.37 0.432286 135.316ZM4.76562 0.975586L4.76562 135.316L6.76562 135.316L6.76562 0.975586L4.76562 0.975586Z"
                  fill="url(#paint0_linear_1238_4535)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1238_4535"
                    x1="6.47063"
                    y1="-4.12933"
                    x2="7.68867"
                    y2="-4.11754"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
              {/* outline one light and text div */}
              <div className="webContentWriting_articalWriteOffers_light_outlineBottom_text_div">
                <div className="webContentWriting_articalWriteOffers_light_svg_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="106"
                    height="108"
                    viewBox="0 0 106 108"
                    fill="none"
                  >
                    <path
                      d="M52.7671 106.61C81.5837 106.61 104.936 83.0387 104.936 53.9711C104.936 24.9036 81.5837 1.33203 52.7671 1.33203C23.9504 1.33203 0.597656 24.9036 0.597656 53.9711C0.597656 83.0387 23.9504 106.61 52.7671 106.61Z"
                      fill="#18C8FF"
                      fill-opacity="0.15"
                      stroke="url(#paint0_linear_1238_4543)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1238_4543"
                        x1="73.9525"
                        y1="-2.13053"
                        x2="121.248"
                        y2="58.8349"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#18C8FF" />
                        <stop offset="1" stop-color="#C608FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <img
                    src="/Images/ServicesImage/Allicons/article 1.svg"
                    alt="webContentWriting_articalWriteOffers_light_outline-icon"
                  />
                  {/* Custom Articles */}
                  <div className="webContentWriting_articalWriteOffers_text_div">
                    <h3>Custom Articles</h3>
                    <p>Tailored content to fit your brand and audience.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second outline */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="486"
                viewBox="0 0 12 486"
                fill="none"
              >
                <path
                  d="M0.779927 480.092C0.779927 483.037 3.16774 485.425 6.11326 485.425C9.05878 485.425 11.4466 483.037 11.4466 480.092C11.4466 477.146 9.05878 474.758 6.11326 474.758C3.16774 474.758 0.779927 477.146 0.779927 480.092ZM5.11328 0.975586L5.11326 480.092L7.11326 480.092L7.11328 0.975586L5.11328 0.975586Z"
                  fill="url(#paint0_linear_1238_4538)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1238_4538"
                    x1="6.81829"
                    y1="-17.2308"
                    x2="8.03643"
                    y2="-17.2275"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
              {/* outline second light and text div */}
              <div className="webContentWriting_articalWriteOffers_light_outlineBottom_text_div">
                <div className="webContentWriting_articalWriteOffers_light_svg_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="106"
                    height="108"
                    viewBox="0 0 106 108"
                    fill="none"
                  >
                    <path
                      d="M52.7671 106.61C81.5837 106.61 104.936 83.0387 104.936 53.9711C104.936 24.9036 81.5837 1.33203 52.7671 1.33203C23.9504 1.33203 0.597656 24.9036 0.597656 53.9711C0.597656 83.0387 23.9504 106.61 52.7671 106.61Z"
                      fill="#18C8FF"
                      fill-opacity="0.15"
                      stroke="url(#paint0_linear_1238_4543)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1238_4543"
                        x1="73.9525"
                        y1="-2.13053"
                        x2="121.248"
                        y2="58.8349"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#18C8FF" />
                        <stop offset="1" stop-color="#C608FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <img
                    src="/Images/ServicesImage/Allicons/delevery 1.svg"
                    alt="webContentWriting_articalWriteOffers_light_outline-icon"
                  />
                  {/* Timely Delivery */}
                  <div className="webContentWriting_articalWriteOffers_text_div">
                    <h3>Timely Delivery</h3>
                    <p>We meet deadlines to keep your content on schedule.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* third outline */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="140"
                viewBox="0 0 12 140"
                fill="none"
              >
                <path
                  d="M0.846348 134.377C0.846348 137.322 3.23416 139.71 6.17968 139.71C9.1252 139.71 11.513 137.322 11.513 134.377C11.513 131.431 9.1252 129.043 6.17968 129.043C3.23416 129.043 0.846348 131.431 0.846348 134.377ZM5.17969 0.975586L5.17968 134.377L7.17968 134.377L7.17969 0.975586L5.17969 0.975586Z"
                  fill="url(#paint0_linear_1238_4536)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1238_4536"
                    x1="6.8847"
                    y1="-4.09363"
                    x2="8.10273"
                    y2="-4.08175"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
              {/* outline third light and text div */}
              <div className="webContentWriting_articalWriteOffers_light_outlineBottom_text_div">
                <div className="webContentWriting_articalWriteOffers_light_svg_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="106"
                    height="108"
                    viewBox="0 0 106 108"
                    fill="none"
                  >
                    <path
                      d="M52.7671 106.61C81.5837 106.61 104.936 83.0387 104.936 53.9711C104.936 24.9036 81.5837 1.33203 52.7671 1.33203C23.9504 1.33203 0.597656 24.9036 0.597656 53.9711C0.597656 83.0387 23.9504 106.61 52.7671 106.61Z"
                      fill="#18C8FF"
                      fill-opacity="0.15"
                      stroke="url(#paint0_linear_1238_4543)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1238_4543"
                        x1="73.9525"
                        y1="-2.13053"
                        x2="121.248"
                        y2="58.8349"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#18C8FF" />
                        <stop offset="1" stop-color="#C608FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <img
                    src="/Images/ServicesImage/Allicons/seo 2.svg"
                    alt="webContentWriting_articalWriteOffers_light_outline-icon"
                  />
                  {/* SEO Optimization */}
                  <div className="webContentWriting_articalWriteOffers_text_div">
                    <h3>SEO Optimization</h3>
                    <p>
                      Articles optimized for search engines to increase
                      visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* fouth outline */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="486"
                viewBox="0 0 12 486"
                fill="none"
              >
                <path
                  d="M0.983052 480.092C0.983052 483.037 3.37087 485.425 6.31639 485.425C9.2619 485.425 11.6497 483.037 11.6497 480.092C11.6497 477.146 9.2619 474.758 6.31639 474.758C3.37087 474.758 0.983052 477.146 0.983052 480.092ZM5.31641 0.975586L5.31639 480.092L7.31639 480.092L7.31641 0.975586L5.31641 0.975586Z"
                  fill="url(#paint0_linear_1238_4539)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1238_4539"
                    x1="7.02142"
                    y1="-17.2308"
                    x2="8.23955"
                    y2="-17.2275"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
              {/* outline fouth light and text div */}
              <div className="webContentWriting_articalWriteOffers_light_outlineBottom_text_div">
                <div className="webContentWriting_articalWriteOffers_light_svg_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="106"
                    height="108"
                    viewBox="0 0 106 108"
                    fill="none"
                  >
                    <path
                      d="M52.7671 106.61C81.5837 106.61 104.936 83.0387 104.936 53.9711C104.936 24.9036 81.5837 1.33203 52.7671 1.33203C23.9504 1.33203 0.597656 24.9036 0.597656 53.9711C0.597656 83.0387 23.9504 106.61 52.7671 106.61Z"
                      fill="#18C8FF"
                      fill-opacity="0.15"
                      stroke="url(#paint0_linear_1238_4543)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1238_4543"
                        x1="73.9525"
                        y1="-2.13053"
                        x2="121.248"
                        y2="58.8349"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#18C8FF" />
                        <stop offset="1" stop-color="#C608FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <img
                    src="/Images/ServicesImage/Allicons/Unlimited rivision 1.svg"
                    alt="webContentWriting_articalWriteOffers_light_outline-icon"
                  />
                  {/* Revisions*/}
                  <div className="webContentWriting_articalWriteOffers_text_div">
                    <h3>Revisions</h3>
                    <p>
                      We work with you until you are satisfied with the article.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* fifth outline */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="141"
                viewBox="0 0 11 141"
                fill="none"
              >
                <path
                  d="M0.139317 135.316C0.139317 138.262 2.52713 140.649 5.47265 140.649C8.41817 140.649 10.806 138.262 10.806 135.316C10.806 132.37 8.41817 129.983 5.47265 129.983C2.52713 129.983 0.139317 132.37 0.139317 135.316ZM4.47266 0.975586L4.47265 135.316L6.47265 135.316L6.47266 0.975586L4.47266 0.975586Z"
                  fill="url(#paint0_linear_1238_4540)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1238_4540"
                    x1="6.17767"
                    y1="-4.12933"
                    x2="7.3957"
                    y2="-4.11754"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
              {/* outline fifht light and text div */}
              <div className="webContentWriting_articalWriteOffers_light_outlineBottom_text_div">
                <div className="webContentWriting_articalWriteOffers_light_svg_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="106"
                    height="108"
                    viewBox="0 0 106 108"
                    fill="none"
                  >
                    <path
                      d="M52.7671 106.61C81.5837 106.61 104.936 83.0387 104.936 53.9711C104.936 24.9036 81.5837 1.33203 52.7671 1.33203C23.9504 1.33203 0.597656 24.9036 0.597656 53.9711C0.597656 83.0387 23.9504 106.61 52.7671 106.61Z"
                      fill="#18C8FF"
                      fill-opacity="0.15"
                      stroke="url(#paint0_linear_1238_4543)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1238_4543"
                        x1="73.9525"
                        y1="-2.13053"
                        x2="121.248"
                        y2="58.8349"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#18C8FF" />
                        <stop offset="1" stop-color="#C608FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <img
                    src="/Images/ServicesImage/Allicons/research 1.svg"
                    alt="webContentWriting_articalWriteOffers_light_outline-icon"
                  />
                  {/* Research-Based Content */}
                  <div className="webContentWriting_articalWriteOffers_text_div">
                    <h3>Research-Based Content</h3>
                    <p>In-depth research to ensure accuracy and relevance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* socail media post  */}
      <section className="webContentWriting_articalWriteOffers_section container">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div>
            <h1>
              {" "}
              <span className="headdingGradientText">Social Media</span> Posts
            </h1>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                  marginTop: "0px",
                }),
              }}
            >
              Social media posts are a great way to connect with your audience
              and share your brand's message. They work by grabbing attention
              and encouraging interaction. With the right content, you can
              increase your followers and drive more traffic to your website.
            </p>
          </div>
        </div>
        {/* socail media post  */}
        <div className="webContentWriting_socailMediaPost_main_div">
          <h1>At Tojo Global offer</h1>
          <div className="webContentWriting_socailMediaPost_rounded_main_div">
            <div className="webContentWriting_socailMediaPost_rounded_div">
              {/* 01 */}
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingSocailMediaPostRoundedIcon01.svg"
                  alt="webContentWriting_socailMediaPost_rounded_div_icon"
                  style={{
                    ...(isMobileView && {
                      widows: "1rem",
                      height: "3.5rem",
                    }),
                  }}
                />
                <h4>Custom Content Creation</h4>
                <p>Tailored posts that reflect your brand's voice and goals.</p>
              </div>
            </div>
            {/* 02 */}
            <div className="webContentWriting_socailMediaPost_rounded_div">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingSocailMediaPostRoundedIcon02.svg"
                  alt="webContentWriting_socailMediaPost_rounded_div_icon"
                />
                <h4>Engagement Strategies</h4>
                <p>Ta Techniques to boost likes, shares, and comments.</p>
              </div>
            </div>
            {/* 03 */}
            <div className="webContentWriting_socailMediaPost_rounded_div">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingSocailMediaPostRoundedIcon03.svg"
                  alt="webContentWriting_socailMediaPost_rounded_div_icon"
                  style={{
                    ...(isMobileView && {
                      widows: "1rem",
                      height: "3rem",
                    }),
                  }}
                />
                <h4>Content Scheduling</h4>
                <p>A plan to post at the best times for maximum reach.</p>
              </div>
            </div>
            {/* 04 */}
            <div className="webContentWriting_socailMediaPost_rounded_div">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingSocailMediaPostRoundedIcon04.svg"
                  alt="webContentWriting_socailMediaPost_rounded_div_icon"
                  style={{
                    ...(isMobileView && {
                      widows: "1rem",
                      height: "3.5rem",
                    }),
                  }}
                />
                <h4>Analytics Tracking</h4>
                <p>
                  Monitoring your post performance to improve future content.
                </p>
              </div>
            </div>
            {/* 05 */}
            <div className="webContentWriting_socailMediaPost_rounded_div">
              <div>
                <img
                  src="/Images/ServicesImage/content/webContentWritingSocailMediaPostRoundedIcon05.svg"
                  alt="webContentWriting_socailMediaPost_rounded_div_icon"
                />
                <h4>Social Media Management</h4>
                <p>TaComprehensive support for all your social media needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* provide social media post services for major platforms including*/}
      <section className="webContentWriting_articalWriteOffers_section container displayNoneMobile">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div className="webContentWriting_socail_media_platforms_section">
            <h1>
              We provide social media post services for major platforms
              including
            </h1>
          </div>
        </div>
        {/* circle div */}
        <div className="communityManagement_features_div">
          {/* middel circel  */}
          <div className="webContentWriting_features_circel_div">
            <div className="webContentWriting_features_cirecle">
              <p>
                With Our Expertise, We Can Help You Shine on Every Platform!
              </p>
            </div>
            <div className="webContet_features_middle_cirecle"></div>
            <div className="webContentWriting_features_socail_icon">
              {/* facebook */}
              <div className="socailMediaDesign_services_social_card_image one">
                <img
                  src="/Images/ServicesImage/Allicons/Mesa de trabajo 1 1.svg"
                  alt="socailMediaDesign_services_social_card_image"
                />
                <div className="socailMediaDesign_services_social_card_image_under_gradient "></div>
              </div>
              {/* instragram */}
              <div className="socailMediaDesign_services_social_card_image two">
                <img
                  src="/Images/ServicesImage/Allicons/Mesa de trabajo 1 copy 2 1.svg"
                  alt="socailMediaDesign_services_social_card_image"
                />
                <div className="socailMediaDesign_services_social_card_image_under_gradient "></div>
              </div>
              {/* twitter */}
              <div className="socailMediaDesign_services_social_card_image three">
                <img
                  src="/Images/ServicesImage/Allicons/Mesa de trabajo 1 copy 1.svg"
                  alt="socailMediaDesign_services_social_card_image"
                />
                <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
              </div>
              {/* linkedin */}
              <div className="socailMediaDesign_services_social_card_image four">
                <img
                  src="/Images/ServicesImage/Allicons/Mesa de trabajo 1 copy 3 1.svg"
                  alt="socailMediaDesign_services_social_card_image"
                />
                <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tojo Global for White Paper Writing Services? */}
      <section className="container">
        {isMobileView ? (
          <>
            <div className="searchEngineMarketing_WhoHelp_top_text_div">
              <h1>
                {" "}
                <span className="headdingGradientText">White Paper</span>{" "}
                content
              </h1>
            </div>
            <div className="webContentWriting_blogWriting_div container">
              <div className="webContentWriting_blogWriting_text_div">
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  White papers are powerful tools for educating your audience,
                  building trust, and establishing your business as an industry
                  leader. At Tojo Global, we make it easy for you to create
                  high-quality white papers that reflect your brand and resonate
                  with your audience. Whether you need support for your in-house
                  team or want us to manage the entire process, our talented
                  writers are here to help.
                </p>
                <h2
                  style={{
                    ...(isMobileView && {
                      fontSize: "18px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Why Choose Tojo Global for White Paper Writing Services?
                </h2>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We offer a simple platform where expert writers create
                  customized content that matches your brand’s tone and goals.
                  Our team delivers clear, engaging content that is ready to go
                  live on your site and can be used across other platforms like
                  social media or newsletters.
                </p>
              </div>
              <div>
                <div className="webContentWriting_blogWriting_card_div">
                  <div className="webContentWriting_blogWriting_card_text_div">
                    <img
                      src="/Images/ServicesImage/Allicons/top quality 1.svg"
                      alt="webContentWriting_blogWriting_card_div image"
                    />
                    <h4>Top Quality</h4>
                    <p
                      style={{
                        ...(isMobileView && {
                          textAlign: "justify",
                          fontSize: "12px",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      We handpick only the best writers for our platform,
                      ensuring you receive content from the very best in the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="webContentWriting_blogWriting_card_div">
                  <div className="webContentWriting_blogWriting_card_text_div">
                    <img
                      src="/Images/ServicesImage/content/webContentWritingProductDesIcon01.svg"
                      alt="webContentWriting_blogWriting_card_div image"
                    />
                    <h4>100% Unique</h4>
                    <p
                      style={{
                        ...(isMobileView && {
                          textAlign: "justify",
                          fontSize: "12px",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      We guarantee that all content is completely original, so
                      you never have to worry about duplication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="webContentWriting_whitePaperContent_main_div">
              <h1>White Paper content</h1>
              <p>
                White papers are powerful tools for educating your audience,
                building trust, and establishing your business as an industry
                leader. At Tojo Global, we make it easy for you to create
                high-quality white papers that reflect your brand and resonate
                with your audience. Whether you need support for your in-house
                team or want us to manage the entire process, our talented
                writers are here to help.
              </p>
            </div>
            <div className="webContentWriting_whitePaperContent_text_div">
              <h2>Why Choose Tojo Global for White Paper Writing Services?</h2>
              <p>
                We offer a simple platform where expert writers create
                customized content that matches your brand’s tone and goals. Our
                team delivers clear, engaging content that is ready to go live
                on your site and can be used across other platforms like social
                media or newsletters.
              </p>
            </div>{" "}
          </>
        )}

        <div className="webContentWriting_whitePaperContent_card_main_div">
          {/* 01 Expert Writers*/}
          <div className="webContentWriting_whitePaperContent_card_div">
            <div className="webContentWriting_whitePaperContent_card_top_gradient">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 251 116"
                fill="none"
              >
                <path
                  d="M243.632 107.996L154.229 21.976C138.305 6.65484 113.121 6.65485 97.1969 21.976L7.7937 107.996"
                  stroke="url(#paint0_linear_1257_4511)"
                  stroke-width="20.0368"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1257_4511"
                    x1="174.062"
                    y1="-9.7723"
                    x2="208.631"
                    y2="83.6951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* 01 */}
            <div className="webContentWriting_whitePaperContent_card_text_div">
              <img
                src="/Images/ServicesImage/content/webContentWritingWhitePaperContentIcon01.svg"
                alt=""
              />
              <h3>Expert Writers</h3>
              <p>
                We collaborate with skilled professionals to create white papers
                that are clear, informative, and engaging.
              </p>
            </div>
          </div>
          {/* 02 Completely Original*/}
          <div className="webContentWriting_whitePaperContent_card_div">
            <div className="webContentWriting_whitePaperContent_card_top_gradient">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="251"
                height="116"
                viewBox="0 0 251 116"
                fill="none"
              >
                <path
                  d="M243.632 107.996L154.229 21.976C138.305 6.65484 113.121 6.65485 97.1969 21.976L7.7937 107.996"
                  stroke="url(#paint0_linear_1257_4511)"
                  stroke-width="20.0368"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1257_4511"
                    x1="174.062"
                    y1="-9.7723"
                    x2="208.631"
                    y2="83.6951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_whitePaperContent_card_text_div">
              <img
                src="/Images/ServicesImage/content/webContentWritingWhitePaperContentIcon02.svg"
                alt=""
              />
              <h3>Completely Original</h3>
              <p>
                All our content is fresh and unique, making sure your white
                paper stands out from the rest.
              </p>
            </div>
          </div>
          {/* 03 Perfectly Polished*/}
          <div className="webContentWriting_whitePaperContent_card_div">
            <div className="webContentWriting_whitePaperContent_card_top_gradient">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="251"
                height="116"
                viewBox="0 0 251 116"
                fill="none"
              >
                <path
                  d="M243.632 107.996L154.229 21.976C138.305 6.65484 113.121 6.65485 97.1969 21.976L7.7937 107.996"
                  stroke="url(#paint0_linear_1257_4511)"
                  stroke-width="20.0368"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1257_4511"
                    x1="174.062"
                    y1="-9.7723"
                    x2="208.631"
                    y2="83.6951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_whitePaperContent_card_text_div">
              <img
                src="/Images/ServicesImage/content/webContentWritingWhitePaperContentIcon03.svg"
                alt=""
              />
              <h3>Perfectly Polished</h3>
              <p>
                 Our copyediting service adds the final touches, ensuring your
                white paper is flawless and professional.
              </p>
            </div>
          </div>
          {/* 04 Insightful and Informed*/}
          <div className="webContentWriting_whitePaperContent_card_div">
            <div className="webContentWriting_whitePaperContent_card_top_gradient">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="251"
                height="116"
                viewBox="0 0 251 116"
                fill="none"
              >
                <path
                  d="M243.632 107.996L154.229 21.976C138.305 6.65484 113.121 6.65485 97.1969 21.976L7.7937 107.996"
                  stroke="url(#paint0_linear_1257_4511)"
                  stroke-width="20.0368"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1257_4511"
                    x1="174.062"
                    y1="-9.7723"
                    x2="208.631"
                    y2="83.6951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_whitePaperContent_card_text_div">
              <img
                src="/Images/ServicesImage/content/webContentWritingWhitePaperContentIcon04.svg"
                alt=""
              />
              <h3>Insightful and Informed</h3>
              <p>
                Our white papers are based on thorough research, providing data,
                facts, and insights to support your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Technical writing  webContentWriting_whitePaperContent_main_div*/}
      <section className="container">
        {isMobileView ? (
          <>
            <div className="searchEngineMarketing_WhoHelp_top_text_div">
              <h1>
                {" "}
                <span className="headdingGradientText">
                  Technical content
                </span>{" "}
                writing
              </h1>
            </div>
            <div className="webContentWriting_blogWriting_div container">
              <div className="webContentWriting_blogWriting_text_div">
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Creating clear and precise technical content is a must for
                  explaining complex ideas and guiding users through products or
                  processes. At TOJO GLOBAL, we make technical writing easy by
                  offering expert writers who can produce documents that are
                  accurate, clear, and user-friendly.
                </p>
                <h2
                  style={{
                    ...(isMobileView && {
                      fontSize: "18px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Why Work With Us?
                </h2>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We provide a effortless platform where skilled technical
                  writers deliver content that aligns with your specific goals.
                  Whether you need manuals, user guides, or technical
                  documentation, we’ll make sure it meets your standards.
                </p>
              </div>
              <div>
                <div className="webContentWriting_blogWriting_card_div">
                  <div className="webContentWriting_blogWriting_card_text_div">
                    <img
                      src="/Images/ServicesImage/Allicons/top quality 1.svg"
                      alt="webContentWriting_blogWriting_card_div image"
                    />
                    <h4>Top Quality</h4>
                    <p
                      style={{
                        ...(isMobileView && {
                          textAlign: "justify",
                          fontSize: "12px",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      We handpick only the best writers for our platform,
                      ensuring you receive content from the very best in the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="webContentWriting_blogWriting_card_div">
                  <div className="webContentWriting_blogWriting_card_text_div">
                    <img
                      src="/Images/ServicesImage/content/webContentWritingProductDesIcon01.svg"
                      alt="webContentWriting_blogWriting_card_div image"
                    />
                    <h4>100% Unique</h4>
                    <p
                      style={{
                        ...(isMobileView && {
                          textAlign: "justify",
                          fontSize: "12px",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      We guarantee that all content is completely original, so
                      you never have to worry about duplication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="webContentWriting_whitePaperContent_main_div">
              <h1> Technical writing:</h1>
              <p>
                Creating clear and precise technical content is a must for
                explaining complex ideas and guiding users through products or
                processes. At TOJO GLOBAL, we make technical writing easy by
                offering expert writers who can produce documents that are
                accurate, clear, and user-friendly.
              </p>
            </div>
            <div className="webContentWriting_whitePaperContent_text_div">
              <h2>Why Work With Us?</h2>
              <p>
                We provide a effortless platform where skilled technical writers
                deliver content that aligns with your specific goals. Whether
                you need manuals, user guides, or technical documentation, we’ll
                make sure it meets your standards.
              </p>
            </div>
          </>
        )}

        <div className="webContentWriting_technicalWriting_card_main_div">
          {/* 01 Expert Writers */}
          <div className="webContentWriting_technicalWriting_card_div">
            <div className="webContentWriting_technicalWriting_card_gradinetAndImage_div">
              <div className="webContentWriting_technicalWriting_card_image_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentIcon01.svg"
                  alt=""
                />
              </div>
              <div className="webContentWriting_technicalWriting_card_top_gradinet_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="webContentWriting_technicalWriting_card_top_gradinet_svg"
                  viewBox="0 0 172 86"
                  fill="none"
                >
                  <path
                    d="M170.134 85.961C170.686 85.961 171.134 85.5133 171.128 84.961C171 74.0702 168.794 63.3007 164.624 53.2326C160.326 42.8564 154.026 33.4284 146.084 25.4868C138.143 17.5452 128.715 11.2455 118.339 6.94759C107.962 2.64963 96.8412 0.4375 85.6101 0.4375C74.379 0.4375 63.2578 2.64963 52.8816 6.94759C42.5054 11.2456 33.0774 17.5452 25.1358 25.4868C17.1942 33.4284 10.8946 42.8564 6.59664 53.2326C2.42628 63.3007 0.219735 74.0702 0.0923939 84.961C0.0859367 85.5133 0.534263 85.961 1.08655 85.961H14.8114C15.3637 85.961 15.8107 85.5133 15.8186 84.961C15.945 76.1354 17.7444 67.4105 21.1245 59.2502C24.6322 50.7819 29.7736 43.0873 36.255 36.6059C42.7364 30.1245 50.4309 24.9832 58.8993 21.4755C67.3676 17.9678 76.444 16.1624 85.6101 16.1624C94.7762 16.1624 103.852 17.9678 112.321 21.4755C120.789 24.9832 128.484 30.1245 134.965 36.6059C141.447 43.0873 146.588 50.7819 150.096 59.2502C153.476 67.4105 155.275 76.1353 155.402 84.961C155.409 85.5132 155.856 85.961 156.409 85.961H170.134Z"
                    fill="url(#paint0_linear_1263_4539)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1263_4539"
                      x1="120.676"
                      y1="-6.06226"
                      x2="198.078"
                      y2="94.6175"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="webContentWriting_technicalWriting_card_text_div">
              <h3>Expert Writers</h3>
              <p>
                Our writers have experience in different technical fields,
                ensuring you get content written by industry professionals.
              </p>
            </div>
          </div>
          {/* 02  100% Accuracy */}
          <div className="webContentWriting_technicalWriting_card_div">
            <div className="webContentWriting_technicalWriting_card_gradinetAndImage_div">
              <div className="webContentWriting_technicalWriting_card_image_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentIcon02.svg"
                  alt=""
                />
              </div>
              <div className="webContentWriting_technicalWriting_card_top_gradinet_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="webContentWriting_technicalWriting_card_top_gradinet_svg"
                  viewBox="0 0 172 86"
                  fill="none"
                >
                  <path
                    d="M170.134 85.961C170.686 85.961 171.134 85.5133 171.128 84.961C171 74.0702 168.794 63.3007 164.624 53.2326C160.326 42.8564 154.026 33.4284 146.084 25.4868C138.143 17.5452 128.715 11.2455 118.339 6.94759C107.962 2.64963 96.8412 0.4375 85.6101 0.4375C74.379 0.4375 63.2578 2.64963 52.8816 6.94759C42.5054 11.2456 33.0774 17.5452 25.1358 25.4868C17.1942 33.4284 10.8946 42.8564 6.59664 53.2326C2.42628 63.3007 0.219735 74.0702 0.0923939 84.961C0.0859367 85.5133 0.534263 85.961 1.08655 85.961H14.8114C15.3637 85.961 15.8107 85.5133 15.8186 84.961C15.945 76.1354 17.7444 67.4105 21.1245 59.2502C24.6322 50.7819 29.7736 43.0873 36.255 36.6059C42.7364 30.1245 50.4309 24.9832 58.8993 21.4755C67.3676 17.9678 76.444 16.1624 85.6101 16.1624C94.7762 16.1624 103.852 17.9678 112.321 21.4755C120.789 24.9832 128.484 30.1245 134.965 36.6059C141.447 43.0873 146.588 50.7819 150.096 59.2502C153.476 67.4105 155.275 76.1353 155.402 84.961C155.409 85.5132 155.856 85.961 156.409 85.961H170.134Z"
                    fill="url(#paint0_linear_1263_4539)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1263_4539"
                      x1="120.676"
                      y1="-6.06226"
                      x2="198.078"
                      y2="94.6175"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="webContentWriting_technicalWriting_card_text_div">
              <h3>100% Accuracy</h3>
              <p>
                We focus on delivering error-free, accurate content that
                simplifies even the most complex topics.
              </p>
            </div>
          </div>
          {/*03  Tailored for Your Audience */}
          <div className="webContentWriting_technicalWriting_card_div">
            <div className="webContentWriting_technicalWriting_card_gradinetAndImage_div">
              <div className="webContentWriting_technicalWriting_card_image_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentIcon03.svg"
                  alt=""
                />
              </div>
              <div className="webContentWriting_technicalWriting_card_top_gradinet_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="webContentWriting_technicalWriting_card_top_gradinet_svg"
                  viewBox="0 0 172 86"
                  fill="none"
                >
                  <path
                    d="M170.134 85.961C170.686 85.961 171.134 85.5133 171.128 84.961C171 74.0702 168.794 63.3007 164.624 53.2326C160.326 42.8564 154.026 33.4284 146.084 25.4868C138.143 17.5452 128.715 11.2455 118.339 6.94759C107.962 2.64963 96.8412 0.4375 85.6101 0.4375C74.379 0.4375 63.2578 2.64963 52.8816 6.94759C42.5054 11.2456 33.0774 17.5452 25.1358 25.4868C17.1942 33.4284 10.8946 42.8564 6.59664 53.2326C2.42628 63.3007 0.219735 74.0702 0.0923939 84.961C0.0859367 85.5133 0.534263 85.961 1.08655 85.961H14.8114C15.3637 85.961 15.8107 85.5133 15.8186 84.961C15.945 76.1354 17.7444 67.4105 21.1245 59.2502C24.6322 50.7819 29.7736 43.0873 36.255 36.6059C42.7364 30.1245 50.4309 24.9832 58.8993 21.4755C67.3676 17.9678 76.444 16.1624 85.6101 16.1624C94.7762 16.1624 103.852 17.9678 112.321 21.4755C120.789 24.9832 128.484 30.1245 134.965 36.6059C141.447 43.0873 146.588 50.7819 150.096 59.2502C153.476 67.4105 155.275 76.1353 155.402 84.961C155.409 85.5132 155.856 85.961 156.409 85.961H170.134Z"
                    fill="url(#paint0_linear_1263_4539)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1263_4539"
                      x1="120.676"
                      y1="-6.06226"
                      x2="198.078"
                      y2="94.6175"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="webContentWriting_technicalWriting_card_text_div">
              <h3>Tailored for Your Audience</h3>
              <p>
                Our writers adapt their tone and style to match your audience,
                making sure the content is easy to understand.
              </p>
            </div>
          </div>
          {/*04  SEO-Optimized Content */}
          <div className="webContentWriting_technicalWriting_card_div">
            <div className="webContentWriting_technicalWriting_card_gradinetAndImage_div">
              <div className="webContentWriting_technicalWriting_card_image_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentIcon04.svg"
                  alt=""
                />
              </div>
              <div className="webContentWriting_technicalWriting_card_top_gradinet_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="webContentWriting_technicalWriting_card_top_gradinet_svg"
                  viewBox="0 0 172 86"
                  fill="none"
                >
                  <path
                    d="M170.134 85.961C170.686 85.961 171.134 85.5133 171.128 84.961C171 74.0702 168.794 63.3007 164.624 53.2326C160.326 42.8564 154.026 33.4284 146.084 25.4868C138.143 17.5452 128.715 11.2455 118.339 6.94759C107.962 2.64963 96.8412 0.4375 85.6101 0.4375C74.379 0.4375 63.2578 2.64963 52.8816 6.94759C42.5054 11.2456 33.0774 17.5452 25.1358 25.4868C17.1942 33.4284 10.8946 42.8564 6.59664 53.2326C2.42628 63.3007 0.219735 74.0702 0.0923939 84.961C0.0859367 85.5133 0.534263 85.961 1.08655 85.961H14.8114C15.3637 85.961 15.8107 85.5133 15.8186 84.961C15.945 76.1354 17.7444 67.4105 21.1245 59.2502C24.6322 50.7819 29.7736 43.0873 36.255 36.6059C42.7364 30.1245 50.4309 24.9832 58.8993 21.4755C67.3676 17.9678 76.444 16.1624 85.6101 16.1624C94.7762 16.1624 103.852 17.9678 112.321 21.4755C120.789 24.9832 128.484 30.1245 134.965 36.6059C141.447 43.0873 146.588 50.7819 150.096 59.2502C153.476 67.4105 155.275 76.1353 155.402 84.961C155.409 85.5132 155.856 85.961 156.409 85.961H170.134Z"
                    fill="url(#paint0_linear_1263_4539)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1263_4539"
                      x1="120.676"
                      y1="-6.06226"
                      x2="198.078"
                      y2="94.6175"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="webContentWriting_technicalWriting_card_text_div">
              <h3>SEO-Optimized Content</h3>
              <p>
                Our technical writing services not only educate but also help
                boost your search engine visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="container">
        <div className="webContentWriting_caseStudies_main_div">
          {isMobileView ? (
            <>
              <div className="searchEngineMarketing_WhoHelp_top_text_div">
                <h1>
                  {" "}
                  <span className="headdingGradientText">Case</span> studies
                </h1>
              </div>
              <div className="webContentWriting_blogWriting_div">
                <div className="webContentWriting_blogWriting_text_div">
                  <p
                    style={{
                      ...(isMobileView && {
                        textAlign: "justify",
                        fontSize: "12px",
                        lineHeight: "120%",
                      }),
                    }}
                  >
                    Case studies are powerful tools for showcasing your
                    business's success stories. They help you highlight
                    real-world results, build trust with potential clients, and
                    demonstrate your expertise in the industry. At Tojo Global,
                    we understand the importance of well-crafted case studies.
                    Our skilled team is ready to create compelling stories that
                    show the value of your products or services.
                  </p>
                  <h2
                    style={{
                      ...(isMobileView && {
                        fontSize: "18px",
                        lineHeight: "120%",
                      }),
                    }}
                  >
                    Why Choose Tojo Global for Case Study Writing?
                  </h2>
                  <p
                    style={{
                      ...(isMobileView && {
                        textAlign: "justify",
                        fontSize: "12px",
                        lineHeight: "120%",
                      }),
                    }}
                  >
                    We offer a smooth, user-friendly service where experienced
                    writers produce case studies tailored to your business
                    needs. Following your guidelines, we create detailed,
                    engaging content that you can proudly share on your website
                    and with potential clients.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div>
                {/* Case studies */}
                <div className="webContentWriting_caseStudies_top_text_div">
                  <h2>Case studies</h2>
                  <p>
                    Case studies are powerful tools for showcasing your
                    business's success stories. They help you highlight
                    real-world results, build trust with potential clients, and
                    demonstrate your expertise in the industry. At Tojo Global,
                    we understand the importance of well-crafted case studies.
                    Our skilled team is ready to create compelling stories that
                    show the value of your products or services.
                  </p>
                </div>
                {/*Why Choose Tojo Global for Case Study Writing?
                 */}
                <div className="webContentWriting_caseStudies_bottom_text_div">
                  <h2>Why Choose Tojo Global for Case Study Writing? </h2>
                  <p>
                    We offer a smooth, user-friendly service where experienced
                    writers produce case studies tailored to your business
                    needs. Following your guidelines, we create detailed,
                    engaging content that you can proudly share on your website
                    and with potential clients.
                  </p>
                </div>
              </div>
            </>
          )}

          <div>
            {/* 01 */}
            <div className="webContentWriting_caseStudies_card_div">
              {/* icon */}
              <div className="webContentWriting_caseStudies_card_icon_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentCaseStudiesIcon01.svg"
                  alt=""
                />
              </div>
              {/* text  */}
              <div className="webContentWriting_caseStudies_card_text_div">
                <h3>Professional Expertise</h3>
                <p>
                  Our team of expert writers knows how to turn data and client
                  experiences into powerful case studies that captivate your
                  audience.
                </p>
              </div>
            </div>
            {/* 02 */}
            <div className="webContentWriting_caseStudies_card_div">
              {/* icon */}
              <div className="webContentWriting_caseStudies_card_icon_div iconTwoDiv">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentCaseStudiesIcon02.svg"
                  alt=""
                />
              </div>
              {/* text  */}
              <div className="webContentWriting_caseStudies_card_text_div">
                <h3>100% Original Content</h3>
                <p>
                  We guarantee that all our case studies are unique and
                  customized to fit your brand’s story.
                </p>
              </div>
            </div>
            {/* 03 */}
            <div className="webContentWriting_caseStudies_card_div">
              {/* icon */}
              <div className="webContentWriting_caseStudies_card_icon_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentCaseStudiesIcon03.svg"
                  alt=""
                />
              </div>
              {/* text  */}
              <div className="webContentWriting_caseStudies_card_text_div">
                <h3>Clear and Engaging Writing</h3>
                <p>
                  We focus on writing that is simple, clear, and direct, making
                  sure your case studies are easy to read and understand.
                </p>
              </div>
            </div>
            {/* 04 */}
            <div className="webContentWriting_caseStudies_card_div">
              {/* icon */}
              <div className="webContentWriting_caseStudies_card_icon_div">
                <img
                  src="/Images/ServicesImage/content/webContentWritingTechnicalContentCaseStudiesIcon04.svg"
                  alt=""
                />
              </div>
              {/* text  */}
              <div className="webContentWriting_caseStudies_card_text_div">
                <h3>SEO-Optimized Content</h3>
                <p>
                  Our case studies are written with SEO in mind, helping you
                  improve your online visibility and attract more clients.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brand content writing */}
      <section className="container webContentWriting_brandContent_section">
        <div
          className="webContentWriting_whitePaperContent_text_div"
          style={{
            ...(isMobileView && {
              paddingTop: "0px",
              fontSize: "20px",
            }),
          }}
        >
          <h2>Grow Your Brand with Our Content Writing Service</h2>
        </div>
        <div className="webContentWriting_brandContent_main_div">
          {/* one , Increase Brand Awareness */}
          <div className="webContentWriting_brandContent_div">
            <div className="webContentWriting_brandContent_top_circel">
              <h1>01</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="webContentWriting_brandContent_top_circel_svg"
                viewBox="0 0 169 175"
                fill="none"
              >
                <path
                  d="M168.525 87.6431C168.525 64.5023 159.7 42.3093 143.991 25.9463C128.283 9.58327 106.978 0.390627 84.7624 0.390625C62.5472 0.390623 41.2419 9.58327 25.5334 25.9463C9.82494 42.3093 1 64.5023 1 87.6431L12.8275 87.6431C12.8275 67.7698 20.4063 48.7106 33.8967 34.6581C47.3871 20.6055 65.6841 12.7109 84.7624 12.7109C103.841 12.7109 122.138 20.6056 135.628 34.6581C149.118 48.7106 156.697 67.7699 156.697 87.6431H168.525Z"
                  fill="url(#paint0_linear_1263_4596)"
                />
                <g filter="url(#filter0_d_1263_4596)">
                  <circle
                    cx="84.7623"
                    cy="86.4807"
                    r="77.9455"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1263_4596"
                    x="0.816772"
                    y="6.53516"
                    width="167.891"
                    height="167.891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0958334 0 0 0 0 0.783 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1263_4596"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1263_4596"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1263_4596"
                    x1="119.107"
                    y1="-6.24054"
                    x2="198.843"
                    y2="93.328"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="59"
                viewBox="0 0 14 59"
                fill="none"
              >
                <path
                  d="M6.92578 58.4105L13.6425 46.7768L0.209081 46.7768L6.92578 58.4105ZM5.76241 0.242187L5.76241 47.9402L8.08915 47.9402L8.08915 0.242188L5.76241 0.242187Z"
                  fill="url(#paint0_linear_1263_4610)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1263_4610"
                    x1="7.63079"
                    y1="-1.9682"
                    x2="8.84833"
                    y2="-1.94097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_text_box">
              <div className="webContentWriting_brandContent_bottom_text">
                <h3>Increase Brand Awareness</h3>
                <p>
                  More people will know about your brand with engaging content.
                </p>
              </div>
            </div>
          </div>
          {/* two  Support Business Growth */}
          <div className="webContentWriting_brandContent_div">
            <div className="webContentWriting_brandContent_top_circel">
              <h1>02</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="webContentWriting_brandContent_top_circel_svg"
                viewBox="0 0 169 175"
                fill="none"
              >
                <path
                  d="M168.525 87.6431C168.525 64.5023 159.7 42.3093 143.991 25.9463C128.283 9.58327 106.978 0.390627 84.7624 0.390625C62.5472 0.390623 41.2419 9.58327 25.5334 25.9463C9.82494 42.3093 1 64.5023 1 87.6431L12.8275 87.6431C12.8275 67.7698 20.4063 48.7106 33.8967 34.6581C47.3871 20.6055 65.6841 12.7109 84.7624 12.7109C103.841 12.7109 122.138 20.6056 135.628 34.6581C149.118 48.7106 156.697 67.7699 156.697 87.6431H168.525Z"
                  fill="url(#paint0_linear_1263_4596)"
                />
                <g filter="url(#filter0_d_1263_4596)">
                  <circle
                    cx="84.7623"
                    cy="86.4807"
                    r="77.9455"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1263_4596"
                    x="0.816772"
                    y="6.53516"
                    width="167.891"
                    height="167.891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0958334 0 0 0 0 0.783 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1263_4596"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1263_4596"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1263_4596"
                    x1="119.107"
                    y1="-6.24054"
                    x2="198.843"
                    y2="93.328"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="59"
                viewBox="0 0 14 59"
                fill="none"
              >
                <path
                  d="M6.92578 58.4105L13.6425 46.7768L0.209081 46.7768L6.92578 58.4105ZM5.76241 0.242187L5.76241 47.9402L8.08915 47.9402L8.08915 0.242188L5.76241 0.242187Z"
                  fill="url(#paint0_linear_1263_4610)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1263_4610"
                    x1="7.63079"
                    y1="-1.9682"
                    x2="8.84833"
                    y2="-1.94097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_text_box">
              <div className="webContentWriting_brandContent_bottom_text">
                <h3>Support Business Growth</h3>
                <p>
                  Quality writing attracts new customers and helps your business
                  expand.
                </p>
              </div>
            </div>
          </div>
          {/*three  Build Customer Loyalty */}
          <div className="webContentWriting_brandContent_div">
            <div className="webContentWriting_brandContent_top_circel">
              <h1>03</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="webContentWriting_brandContent_top_circel_svg"
                viewBox="0 0 169 175"
                fill="none"
              >
                <path
                  d="M168.525 87.6431C168.525 64.5023 159.7 42.3093 143.991 25.9463C128.283 9.58327 106.978 0.390627 84.7624 0.390625C62.5472 0.390623 41.2419 9.58327 25.5334 25.9463C9.82494 42.3093 1 64.5023 1 87.6431L12.8275 87.6431C12.8275 67.7698 20.4063 48.7106 33.8967 34.6581C47.3871 20.6055 65.6841 12.7109 84.7624 12.7109C103.841 12.7109 122.138 20.6056 135.628 34.6581C149.118 48.7106 156.697 67.7699 156.697 87.6431H168.525Z"
                  fill="url(#paint0_linear_1263_4596)"
                />
                <g filter="url(#filter0_d_1263_4596)">
                  <circle
                    cx="84.7623"
                    cy="86.4807"
                    r="77.9455"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1263_4596"
                    x="0.816772"
                    y="6.53516"
                    width="167.891"
                    height="167.891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0958334 0 0 0 0 0.783 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1263_4596"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1263_4596"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1263_4596"
                    x1="119.107"
                    y1="-6.24054"
                    x2="198.843"
                    y2="93.328"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="59"
                viewBox="0 0 14 59"
                fill="none"
              >
                <path
                  d="M6.92578 58.4105L13.6425 46.7768L0.209081 46.7768L6.92578 58.4105ZM5.76241 0.242187L5.76241 47.9402L8.08915 47.9402L8.08915 0.242188L5.76241 0.242187Z"
                  fill="url(#paint0_linear_1263_4610)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1263_4610"
                    x1="7.63079"
                    y1="-1.9682"
                    x2="8.84833"
                    y2="-1.94097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_text_box">
              <div className="webContentWriting_brandContent_bottom_text">
                <h3>Build Customer Loyalty</h3>
                <p>
                  Consistent, helpful content keeps your audience interested in
                  your brand.
                </p>
              </div>
            </div>
          </div>
          {/* four  Drive Growth: */}
          <div className="webContentWriting_brandContent_div">
            <div className="webContentWriting_brandContent_top_circel">
              <h1>04</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="webContentWriting_brandContent_top_circel_svg"
                viewBox="0 0 169 175"
                fill="none"
              >
                <path
                  d="M168.525 87.6431C168.525 64.5023 159.7 42.3093 143.991 25.9463C128.283 9.58327 106.978 0.390627 84.7624 0.390625C62.5472 0.390623 41.2419 9.58327 25.5334 25.9463C9.82494 42.3093 1 64.5023 1 87.6431L12.8275 87.6431C12.8275 67.7698 20.4063 48.7106 33.8967 34.6581C47.3871 20.6055 65.6841 12.7109 84.7624 12.7109C103.841 12.7109 122.138 20.6056 135.628 34.6581C149.118 48.7106 156.697 67.7699 156.697 87.6431H168.525Z"
                  fill="url(#paint0_linear_1263_4596)"
                />
                <g filter="url(#filter0_d_1263_4596)">
                  <circle
                    cx="84.7623"
                    cy="86.4807"
                    r="77.9455"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1263_4596"
                    x="0.816772"
                    y="6.53516"
                    width="167.891"
                    height="167.891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0958334 0 0 0 0 0.783 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1263_4596"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1263_4596"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1263_4596"
                    x1="119.107"
                    y1="-6.24054"
                    x2="198.843"
                    y2="93.328"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="59"
                viewBox="0 0 14 59"
                fill="none"
              >
                <path
                  d="M6.92578 58.4105L13.6425 46.7768L0.209081 46.7768L6.92578 58.4105ZM5.76241 0.242187L5.76241 47.9402L8.08915 47.9402L8.08915 0.242188L5.76241 0.242187Z"
                  fill="url(#paint0_linear_1263_4610)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1263_4610"
                    x1="7.63079"
                    y1="-1.9682"
                    x2="8.84833"
                    y2="-1.94097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_text_box">
              <div className="webContentWriting_brandContent_bottom_text">
                <h3>Drive Growth:</h3>
                <p>
                  Strong content leads to more sales and faster business growth.
                </p>
              </div>
            </div>
          </div>
          {/*five Strengthen Brand Identity: */}
          <div className="webContentWriting_brandContent_div">
            <div className="webContentWriting_brandContent_top_circel">
              <h1>05</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="webContentWriting_brandContent_top_circel_svg"
                viewBox="0 0 169 175"
                fill="none"
              >
                <path
                  d="M168.525 87.6431C168.525 64.5023 159.7 42.3093 143.991 25.9463C128.283 9.58327 106.978 0.390627 84.7624 0.390625C62.5472 0.390623 41.2419 9.58327 25.5334 25.9463C9.82494 42.3093 1 64.5023 1 87.6431L12.8275 87.6431C12.8275 67.7698 20.4063 48.7106 33.8967 34.6581C47.3871 20.6055 65.6841 12.7109 84.7624 12.7109C103.841 12.7109 122.138 20.6056 135.628 34.6581C149.118 48.7106 156.697 67.7699 156.697 87.6431H168.525Z"
                  fill="url(#paint0_linear_1263_4596)"
                />
                <g filter="url(#filter0_d_1263_4596)">
                  <circle
                    cx="84.7623"
                    cy="86.4807"
                    r="77.9455"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1263_4596"
                    x="0.816772"
                    y="6.53516"
                    width="167.891"
                    height="167.891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0958334 0 0 0 0 0.783 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1263_4596"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1263_4596"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1263_4596"
                    x1="119.107"
                    y1="-6.24054"
                    x2="198.843"
                    y2="93.328"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="59"
                viewBox="0 0 14 59"
                fill="none"
              >
                <path
                  d="M6.92578 58.4105L13.6425 46.7768L0.209081 46.7768L6.92578 58.4105ZM5.76241 0.242187L5.76241 47.9402L8.08915 47.9402L8.08915 0.242188L5.76241 0.242187Z"
                  fill="url(#paint0_linear_1263_4610)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1263_4610"
                    x1="7.63079"
                    y1="-1.9682"
                    x2="8.84833"
                    y2="-1.94097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18C8FF" />
                    <stop offset="1" stop-color="#C608FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="webContentWriting_brandContent_bottom_text_box">
              <div className="webContentWriting_brandContent_bottom_text">
                <h3>Strengthen Brand Identity:</h3>
                <p>
                  Clear, professional writing makes sure your brand's message
                  stays consistent.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="webContentWriting_brandContent_bottom_div">
          <p
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            More than 60% of brands fall behind because of poor content
            strategies. Without engaging and clear content, it’s hard to stand
            out and grow. Tojo Global is here to fix that. Our expert content
            writing services help your brand connect with the right audience and
            build trust. Let us guide your brand toward success with impactful
            content.
          </p>
        </div>
      </section>
    </main>
  );
};

export default WebContentWrting;
