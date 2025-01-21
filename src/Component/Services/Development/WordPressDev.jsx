import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/Development/WordPressDevStyle.css";
import WordpressWebsiteDevelopmentWhyExpertiseKeyPoint from "./SVGDev/wordpressWebsiteDevelopmentWhyExpertiseKeyPoint";
import { AppContext } from "../../../AppContext";

export const WordPressDev = () => {
  const { isLargeMobileView } = useContext(AppContext);
  return (
    <main className="maindiv">
      <Helmet>
        <title>TOJO Global - Wordpress Development </title>
      </Helmet>

      {/* service wordpress developmnet top part  */}
      <section className="smModaration_top_part">
        <div className="container wordpressDevelopment_hero_part">
          <div className="wordpressDevelopment_hero_part_div">
            {/* hero text */}
            <div
              className="communityManagement_hero_text_div"
              data-aos="fade-right"
            >
              <h1>
                Build Cutting-Edge websites for the modern world with TOJO
                Global
              </h1>
              <p>
                Our goal is to boost your online presence and ensure your
                business stands out in the digital marketplace.
              </p>
              <div className="hero_btn_style">
                <Link to="/contact">
                  <button className="custombtn hero_btn2 fristBtn">
                    <span>Lets Make a Call</span>
                  </button>
                </Link>

                <button className="custombtn hero_btn1 secondBtn">
                  <span>OUR WORKS</span>
                </button>
              </div>
            </div>
            {/* hero image  */}
            <div
              className="communityManagement_hero_part_image_div wordpressDevelopment_hero_part_image_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/wordpressDevelopment_hero_partImage.svg"
                alt="communityManagement_hero_part_div_Image.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Our WordPress Development Service? */}
      <section className="container wordpressDevelopment_whyChoose_section">
        <div className="wordpressDevelopment_whyChoose_main_topGradient_div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="230"
            height="233"
            viewBox="0 0 230 233"
            fill="none"
          >
            <path
              d="M115 218.5C59.672 218.5 14.5 173.011 14.5 116.5C14.5 59.9892 59.672 14.5 115 14.5C170.328 14.5 215.5 59.9892 215.5 116.5C215.5 173.011 170.328 218.5 115 218.5Z"
              stroke="url(#paint0_linear_1830_4807)"
              stroke-width="29"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1830_4807"
                x1="205.478"
                y1="188.456"
                x2="40.1646"
                y2="25.271"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="wordpressDevelopment_whyChoose_center_topGradient02_div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="230"
            height="233"
            viewBox="0 0 230 233"
            fill="none"
          >
            <path
              d="M115 218.5C59.672 218.5 14.5 173.011 14.5 116.5C14.5 59.9892 59.672 14.5 115 14.5C170.328 14.5 215.5 59.9892 215.5 116.5C215.5 173.011 170.328 218.5 115 218.5Z"
              stroke="url(#paint0_linear_1830_4807)"
              stroke-width="29"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1830_4807"
                x1="205.478"
                y1="188.456"
                x2="40.1646"
                y2="25.271"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="wordpressDevelopment_whyChoose_bottom_topGradient03_div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 230 233"
            fill="none"
          >
            <path
              d="M115 218.5C59.672 218.5 14.5 173.011 14.5 116.5C14.5 59.9892 59.672 14.5 115 14.5C170.328 14.5 215.5 59.9892 215.5 116.5C215.5 173.011 170.328 218.5 115 218.5Z"
              stroke="url(#paint0_linear_1830_4807)"
              stroke-width="29"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1830_4807"
                x1="205.478"
                y1="188.456"
                x2="40.1646"
                y2="25.271"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className="wordpressDevelopment_whyChoose_main_div"
          data-aos="fade-up"
        >
          <div className="wordpressDevelopment_whyChoose_image_div">
            <img
              src="/Images/ServicesImage/development/professionally-developed-responsive-website-in-dif 1.png"
              alt=""
            />
          </div>
          {/*wordpressDevelopment_whyChoose text   */}
          <div className="wordpressDevelopment_whyChoose_text_div">
            <h2>Why Choose Our WordPress Development Service?</h2>
            <p>
              Agencies like you trust us because we have the skills and a
              professional team to build your client’s websites. This way, you
              can focus on growing your business. Here’s how we help you:
            </p>
          </div>
        </div>
      </section>
      {/* wordpress web development key point of service  */}
      <section className="container wordpressDevelopment_whyChoose_keyPoint_main_div">
        {/* 01 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={1 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg01.svg" />
            </g>
          </svg>

          <h4>Boost Your Profits</h4>
          <p>
            Increase your profits without spending extra on long interviews and
            training new hires.
          </p>
        </div>
        {/* 02 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={2 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg02.svg" />
            </g>
          </svg>
          <h4>Save Time and Effort</h4>
          <p>
            Increase your profits without spending extra on long interviews and
            training new hires.
          </p>
        </div>
        {/* 03 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={3 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg03.svg" />
            </g>
          </svg>
          <h4>Protect Your Privacy with NDAs</h4>
          <p>
            We take your privacy and data security seriously. We offer clear
            NDAs to protect your business information.
          </p>
        </div>
        {/* 04 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={4 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg04.svg" />
            </g>
          </svg>
          <h4>Focus on Core Tasks</h4>
          <p>
            Our experts integrate into your workflow, handling your client’s
            needs and freeing you up to focus on essential areas like client
            communication.
          </p>
        </div>
        {/* 05 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={5 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg05.svg" />
            </g>
          </svg>
          <h4>Affordable Rates & On-Demand Service</h4>
          <p>
            We charge a flat rate of $20/hour for any WordPress task. You can
            hire us only when you need work done, and you don’t pay until the
            job is finished.
          </p>
        </div>
        {/* 06 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={6 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg06.svg" />
            </g>
          </svg>
          <h4>Expert WordPress Developers with Dedicated Project Managers</h4>
          <p>
            Our team consists of skilled WordPress developers, and you’ll have a
            dedicated project manager to oversee your projects.
          </p>
        </div>
        {/* 07 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={7 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg07.svg" />
            </g>
          </svg>
          <h4>Easy Communication</h4>
          <p>
            We know clear communication is key. Our team speaks fluent English,
            making it easy to connect with you.
          </p>
        </div>
        {/* 08 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={8 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg08.svg" />
            </g>
          </svg>
          <h4>Top-Quality Services</h4>
          <p>
            We always deliver high-quality work because we believe that quality
            leads to happy, returning clients.
          </p>
        </div>
        {/* 09 */}
        <div
          className="wordpressDevelopment_whyChoose_keyPoint_div"
          data-aos="fade-up"
          data-aos-delay={9 * 200}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
          >
            <g filter="url(#filter0_f_2041_4743)">
              <circle
                cx="62"
                cy="62"
                r="42"
                fill="url(#paint0_linear_2041_4743)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2041_4743"
                x="0"
                y="0"
                width="124"
                height="124"
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
                  stdDeviation="10"
                  result="effect1_foregroundBlur_2041_4743"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2041_4743"
                x1="79.2208"
                y1="16.808"
                x2="117.232"
                y2="66.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18C8FF" />
                <stop offset="1" stop-color="#C608FF" />
              </linearGradient>
            </defs>
            <g className="wordpressDevelopment_whyChoose_keyPoint_svgIcon">
              <image href="/Images/ServicesImage/development/wordpressDevelopmentWhyChoosekeyPointSvg09.svg" />
            </g>
          </svg>
          <h4>On-Time Delivery in Any Time Zone</h4>
          <p>
            We meet deadlines 24/7, regardless of your time zone. You can always
            find us available on live chat for support.
          </p>
        </div>
      </section>

      {/* How we develop your customer’s WordPress website */}
      <section className="container">
        <div className="wordpressWebsiteDevelopment_customer_keyPoint_main_div">
          {/* text part in customer website development  */}
          <div
            className="wordpressWebsiteDevelopment_customer_keyPoint_text_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
          >
            <h1>How we develop your customer’s WordPress website</h1>
            <p>
              At TOJO Global, we offer full-cycle crypto token development
              services, from conceptualization to post-launch support. Our team
              works closely with clients to deliver custom token solutions that
              align with their business objectives.
            </p>
            <strong>
              “A GREAT WEBSITE IS USELESS IF IT DOESN'T GET RESULTS.”
            </strong>
            <p>
              Here’s how we build a WordPress website in our simple 7-step
              process to ensure it works well for you
            </p>
            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Lets Make a Call</span>
                </button>
              </Link>
            </div>
          </div>
          {/* keypoint in customer website development */}
          <div className="wordpressWebsiteDevelopment_customer_keyPoint_div">
            {/* 01 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={1 * 200}
            >
              <h4>Analysis:</h4>
              <p>
                We assess your needs and goals to understand what your website
                should achieve.
              </p>
            </div>
            {/* 02 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={2 * 200}
            >
              <h4>Planning:</h4>
              <p>
                We create a clear roadmap, outlining the steps and timeline for
                your website development.
              </p>
            </div>
            {/* 03 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={3 * 200}
            >
              <h4>Design:</h4>
              <p>
                We craft a visually appealing layout that aligns with your brand
                and engages visitors.
              </p>
            </div>
            {/* 04 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={4 * 200}
            >
              <h4>Content:</h4>
              <p>
                We develop compelling content that communicates your message and
                encourages action.
              </p>
            </div>
            {/* 05 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={5 * 200}
            >
              <h4>Testing:</h4>
              <p>
                We thoroughly test your site to ensure everything works smoothly
                and is user-friendly.
              </p>
            </div>
            {/* 06 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={6 * 200}
            >
              <h4>Development:</h4>
              <p>
                We thoroughly test your site to ensure everything works smoothly
                and is user-friendly.
              </p>
            </div>
            {/* 07 */}
            <div
              className="wordpressWebsiteDevelopment_customer_keyPoint"
              data-aos="fade-right"
              data-aos-delay={7 * 200}
            >
              <h4>Support::</h4>
              <p>
                We provide ongoing support to keep your website updated and
                running at its best.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WordPress Why Expertise  */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">Our Expertise</h1>
          <p className="paraStyle">
            Our deep understanding of WordPress allows us to create unique
            websites that look great and work well. Whether you need a
            well-coded WordPress theme, a custom plugin, site maintenance, or a
            complete rebuild, our team has the skills to make your ideas a
            reality.
          </p>
        </div>
        {/* WordPress Why Expertise keypoint */}
        <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_main_div">
          <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_main_gradinetDiv"></div>
          {/* 01 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon01.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Custom WordPress Build
              </h4>
            </div>
          </div>

          {/* 02 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon02.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Personalized WordPress Themes
              </h4>
            </div>
          </div>
          {/* 03 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon03.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Turning PSD/Figma Designs into Websites
              </h4>
            </div>
          </div>
          {/* 04 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon04.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Online Shop Development
              </h4>
            </div>
          </div>
          {/* 05 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon05.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Website Maintenance and Support
              </h4>
            </div>
          </div>
          {/* 06 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon06.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Plugin Development and Tweaking
              </h4>
            </div>
          </div>
          {/* 07 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon07.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Connecting APIs and Services
              </h4>
            </div>
          </div>
          {/* 08 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={8 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon08.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                Managing Multiple WordPress Sites
              </h4>
            </div>
          </div>
          {/* 09 */}
          <div
            className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_div"
            data-aos="fade-down"
            data-aos-delay={8 * 200}
          >
            <WordpressWebsiteDevelopmentWhyExpertiseKeyPoint />
            <div className="wordpressWebsiteDevelopment_whyExpertise_keyPoint_text_div">
              <img
                src="/Images/ServicesImage/development/wordpressWebsiteDevelopmentOurExpertisekeyPointIcon03.svg"
                alt="wordpressWebsiteDevelopmentOurExpertisekeyPointIcon"
              />
              <h4 className="wordpressWebsiteDevelopmentOurExpertisekeyPointSmallHeadingStyle mt-1">
                SEO Optimization for WordPress Websites
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* WordPressDevelopment Target Companies*/}
      <section className="container">
        <div
          className="WordPressDevelopment_Target_Companies_main_div"
          data-aos="fade-up"
        >
          {/* text */}
          <div className="WordPressDevelopment_Target_Companies_text_div">
            <h2>Target Companies</h2>
            <div className="WordPressDevelopment_target_companies_bottom_borderInText_div"></div>
            <p>
              At Tojo Global, we are passionate about helping businesses thrive
              in the digital age. We focus on a diverse range of sectors that
              are driving innovation and growth.We understand the unique
              challenges each of these sectors faces and are committed to
              providing solutions that drive growth and innovation. Our target
              companies include:
            </p>
          </div>
          {/* point */}
          <div className="WordPressDevelopment_Target_Companies_keyPoint_div">
            <h4>B2B Companies</h4>
            <h4>Small Businesses</h4>
            <h4>Startups</h4>
            <h4>Blockchain Companies</h4>
            <h4>Cryptocurrency Companies</h4>
            <h4>Fintech Companies</h4>
          </div>
        </div>
      </section>

      {/*Here comes TOJO GLOBAL where we specialize in creating unique logos */}
      <section className="container">
        <div
          className="professionalModeration_div socailMediaMarketing_specialize_card"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              We develop impactful social media strategies at TOJO Global
            </h1>
            <p className="professionalModeration_service_offers_para">
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
