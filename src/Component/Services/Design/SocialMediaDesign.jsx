import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../../../Style/ServicesPageStyle/DesignStyle/SocailMediaDesign.css";
import { SMeDFacebookIcon } from "./SvgDesign/SMeDFacebookIcon";
import SMeDPrintarestIcon from "./SvgDesign/SMeDPrintarestIcon";
import SMedInstagramicon from "./SvgDesign/SMedInstagramicon";
import SMeDYoutubeIcon from "./SvgDesign/SMeDYoutubeIcon";
import { SMeDTwitterIcon } from "./SvgDesign/SMeDTwitterIcon";
import SMeDLinkedineIcon from "./SvgDesign/SMeDLinkedineIcon";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
const SocialMediaDesign = () => {
  const { isLargeMobileView } = useContext(AppContext);
  return (
    <main className="maindiv">
      <Helmet>
        <title>TOJO Global - Social Media Design</title>
      </Helmet>
      {/*socail media desgin top part*/}
      <section>
        <div className="socailMediaDesign_top_hero_section">
          <div className="OnePageSeo_hero_part_div container">
            {/* hero text  */}
            <div
              className="searchEngineMarketing_hero_text_div"
              data-aos="fade-right"
            >
              <h1>
                Elevate Your Social Media Presence with our stunning{" "}
                <span className="headdingGradientText">
                  Social Media designs{" "}
                </span>{" "}
              </h1>
              <p>
                TOJO GLOBAL’s extremely talented designers create stunning,
                eye-catching graphics that make your social media profiles look
                professional and unique from others.
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
            {/* hero image  */}
            <div
              className="searchEngineMarketing_hero_image_div"
              data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
            >
              <img
                src="/Images/ServicesImage/banner_images/lead 1.png"
                alt="OnePageSeo_hero_part_image_div.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Services Cover: */}
      <section className="socailMediaDesign_service_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up" className="ouerServiceCoverHeading">
            <h1>Our Services Cover</h1>
          </div>
        </div>
        <div className="socailMediaDesign_services_main_div">
          {/*01 Eye-Catching Thumbnails */}
          <div
            className="socailMediaDesign_services_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/Eye-catching thumbnails 1.svg"
              alt="socailMediaDesign_services_image"
            />
            <h4>Eye-Catching Thumbnails</h4>
            <p>Thumbnails that attract clicks and boost engagement.</p>
          </div>
          {/* Creative Social Media Posts*/}
          <div
            className="socailMediaDesign_services_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/Creative social media posts 1.svg"
              alt="socailMediaDesign_services_image"
            />
            <h4>Creative Social Media Posts</h4>
            <p>Unique posts that resonate with your audience.</p>
          </div>
          {/* Engaging Banners */}
          <div
            className="socailMediaDesign_services_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/Engaging banners 1.svg"
              alt="socailMediaDesign_services_image"
            />
            <h4>Engaging Banners</h4>
            <p>Banners that effectively convey your brand message.</p>
          </div>
          {/* Attractive headers and covers */}
          <div
            className="socailMediaDesign_services_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/Attractive headers and covers 1.svg"
              alt="socailMediaDesign_services_image"
            />
            <h4>Attractive headers and covers</h4>
            <p>Professional headers and covers for a polished profile.</p>
          </div>
          {/* Fun stories and carousels */}
          <div
            className="socailMediaDesign_services_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/icons/Fun stories and carousels 1.svg"
              alt="socailMediaDesign_services_image"
            />
            <h4>Fun stories and carousels</h4>
            <p>Captivating stories and carousels that engage and entertain.</p>
          </div>
        </div>
      </section>

      {/* Why you should utilize social media service */}
      <section className="socailMediaDesign_service_section WhyUtilizeSocialMediaServiceSection">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>Why you should utilize social media service</h1>
          </div>
        </div>
        <div className="univarsal_service_padding communityManagement_features">
          <div className="univarsal_service_padding_second_div communityManagement_features_div">
            {/* leftSide */}
            <div className="left_sideFeatcher">
              {/* left 01 top features */}
              <div
                className="features_div"
                data-aos="fade-right"
                data-aos-delay={1 * 200}
              >
                <div className="features_text_div topBottom_text_left_div_outline">
                  <h6>Create a Strong Brand Identity</h6>
                  <p>
                    Guide your visitors through their journey and increase
                    conversions with proven tactics.
                  </p>
                </div>
                {/* <div className="center_text_left_center_div_outline">
                  <div className="center_text_left_center_frist_outline"></div>
                  <div className="left_text_top_bottom_second_outline"></div>
                </div> */}
                <div className="features_small_circel topBottom_left_cirecel">
                  <img
                    src="/Images/ServicesImage/icons/Create a Strong Brand Identity 1.svg"
                    alt="communication image"
                  />
                </div>
              </div>
              {/* left 02 center features */}
              <div
                className="features_div"
                data-aos="fade-right"
                data-aos-delay={2 * 200}
              >
                <div className="features_text_div center_text_left_div_outline">
                  <h6>Beat the Competition</h6>
                  <p>
                    Social media is crowded. Unique designs will help you stand
                    first in the crowd.
                  </p>
                </div>
                {/* <div className="center_text_left_center_div_outline">
                  <div className="center_text_left_center_frist_outline"></div>
                  <div className="center_text_left_center_second_outline"></div>
                </div> */}
                <div className="features_small_circel">
                  <img
                    src="/Images/ServicesImage/icons/Beat the Competition1.svg"
                    alt=""
                  />
                </div>
              </div>
              {/* left 03 bottom features */}
              <div
                className="features_div"
                data-aos="fade-right"
                data-aos-delay={3 * 200}
              >
                <div className="features_text_div topBottom_text_left_div_outline">
                  <h6>Overcome Short Attention Spans</h6>
                  <p>
                    People scan their timelines quickly. Our designs will make
                    your posts grab attention in seconds.
                  </p>
                </div>
                {/* <div className="center_text_left_center_div_outline">
                  <div className="center_text_left_center_frist_outline"></div>
                  <div className="left_text_top_bottom_second_outline"></div>
                </div> */}
                <div className="features_small_circel topBottom_left_cirecel">
                  <img
                    src="/Images/ServicesImage/icons/Overcome Short Attention Spans1.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* middle circle */}
            <div className="features_circel_div" data-aos="fade-down">
              <div className="socailMediaDesign_features_cirecle">
                <p>Why you should utilize social media service</p>
              </div>
              <div className="socailMediaDesign_features_middle_cirecle"></div>
            </div>

            {/* right side */}
            <div className="right_sideFeatcher">
              {/* right center */}
              {/* right 01 top features */}
              <div
                className="features_div"
                data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
                data-aos-delay={1 * 200}
              >
                <div className="features_small_circel topBottom_right_cirecel">
                  <img
                    src="/Images/ServicesImage/icons/Catch Attention Quickly1.svg"
                    alt=""
                  />
                </div>
                {/* <div className="center_text_left_center_div_outline">
                  <div className="right_text_top_bottom_second_outline"></div>
                  <div className="center_text_left_center_frist_outline"></div>
                </div> */}
                <div className="features_right_text_div topBottom_text_right_div_outline">
                  <h6>Catch Attention Quickly</h6>
                  <p>
                    With an average of 7.6 social media accounts per person, you
                    can reach a wider audience.
                  </p>
                </div>
              </div>
              {/* right 02 center features */}
              <div
                className="features_div"
                data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
                data-aos-delay={2 * 200}
              >
                <div className="features_small_circel">
                  <img
                    src="\Images\ServicesImage\icons\Reach More People 1.svg"
                    alt=""
                  />
                </div>
                {/* <div className="center_text_left_center_div_outline">
                  <div className="center_text_left_center_frist_outline"></div>
                  <div className="center_text_right_center_second_outline"></div>
                </div> */}
                <div className="features_right_text_div center_text_right_div_outline">
                  <h6>Reach More People</h6>
                  <p>
                    With an average of 7.6 social media accounts per person, you
                    can reach a wider audience.
                  </p>
                </div>
              </div>
              {/* right bottom features */}
              <div
                className="features_div"
                data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
                data-aos-delay={3 * 200}
              >
                <div className="features_small_circel topBottom_right_cirecel">
                  <img
                    src="/Images/ServicesImage/icons/Turn Followers Into Customers1.svg"
                    alt="f"
                  />
                </div>
                {/* <div className="center_text_left_center_div_outline">
                  <div className="right_text_top_bottom_second_outline"></div>
                  <div className="center_text_left_center_frist_outline"></div>
                </div> */}
                <div className="features_right_text_div topBottom_text_right_div_outline">
                  <h6>Turn Followers Into Customers</h6>
                  <p>
                    Good design attracts, engages, and converts users into loyal
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Right Design Pulls in Your Audience */}
      <section className="socailMediaDesign_pull_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>The Right Design Pulls in Your Audience</h1>
            <p className="mt-3">
              More than 80% of small businesses use social media, but many of
              them struggle to stand out. One big reason is that they don’t use
              the right graphic designs. With our social media design package,
              we create all the graphics your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* We can design  for every Social  Media platform you use. Some key platforms include: */}
      <section className="socailMediaDesign_mediaKey_section">
        <div className="socailMediaDesign_mediaKey_main_div container">
          {/* left text */}
          <div
            className="socailMediaDesign_mediaKey_text_div"
            data-aos="fade-right"
          >
            <h1>
              We can design for every Social Media platform you use. Some key
              platforms include:
            </h1>
            <p>
              These are popular platforms, but new ones are emerging all the
              time. It’s important to watch for those that can help your
              business grow. For each platform, we create designs that match
              your brand and engage your audience. With our graphic design
              service, your posts will grab attention and keep people
              interested. As they explore more, they’ll be more likely to
              connect and convert.
            </p>
          </div>
          {/* middle circel  */}
          <div
            className="socailMediaDesign_mediaKey_rounded_center_circel_div"
            data-aos="fade-down"
          >
            <div className="socailMediaDesign_mediaKey_rounded_under_circel">
              <div className="socailMediaDesign_mediaKey_rounded_top_circel">
                <h3>
                  SOCIAL MEDIA <span>MARKETING</span>
                </h3>
              </div>
            </div>
          </div>
          {/* right socail icon */}
          <div
            className="socailMediaDesign_mediaKey_rounded_socail_main_div"
            data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
          >
            <div className="socailMediaDesign_mediaKey_rounded_socail_div">
              {/* facebook top icon */}
              <div className="socailMediaDesign_mediaKey_rounded_socail">
                <SMeDFacebookIcon />
              </div>
              {/* instagram top icon */}
              <div className="socailMediaDesign_mediaKey_rounded_socail">
                <SMedInstagramicon />
              </div>
              {/* printarest center icon */}
              <div className="socailMediaDesign_mediaKey_rounded_socail">
                <SMeDPrintarestIcon />
              </div>
              {/* youtube left icon */}

              <div className="socailMediaDesign_mediaKey_rounded_socail">
                <SMeDYoutubeIcon />
              </div>
              {/* twitter x bottom icon */}
              <div className="socailMediaDesign_mediaKey_rounded_socail">
                <SMeDTwitterIcon />
              </div>
              {/* linkedine bottom icon */}
              <div className="socailMediaDesign_mediaKey_rounded_socail">
                <SMeDLinkedineIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Social Media Design Process look like */}
      <section className="socailMediaDesign_Process_section socailMediaDesign_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-up">
            <h1>Our Social Media Design Process look like</h1>
          </div>
        </div>
        <div className="socailMediaDesign_Process_div">
          {/*counter  one number */}
          <div
            className="socailMediaDesign_Process_div_one"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            {/* counter number  */}
            <div className="Process_counter_div">
              <span>1</span>
            </div>
            <div>
              <div className="Process_counter_one_under_circel_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="111"
                  height="97"
                  viewBox="0 0 111 97"
                  fill="none"
                >
                  <path
                    d="M106.486 73.1978L82.9732 77.2048L90.3186 55.6615L106.486 73.1978Z"
                    fill="url(#paint0_linear_1376_4433)"
                  />
                  <circle
                    cx="48.2657"
                    cy="48.573"
                    r="46.1414"
                    transform="rotate(2.70348 48.2657 48.573)"
                    fill="url(#paint1_linear_1376_4433)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1376_4433"
                      x1="105.753"
                      y1="78.6404"
                      x2="86.7644"
                      y2="85.7173"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1376_4433"
                      x1="67.1846"
                      y1="-1.07509"
                      x2="108.944"
                      y2="53.2433"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="Process_one_counter_top_circel_div">
                  <img
                    src="/Images/ServicesImage/icons/Learn about Your Project.svg"
                    alt=""
                  />
                </div>
                <div className="Process_counter_text_div Process_counter_one_text_div">
                  <h3>Learn about Your Project</h3>
                  <p>
                    We start by getting to understand you and your business. We
                    want to learn your vision and goals. We will research your
                    brand and have calls with you to gather all the details we
                    need to create amazing designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*counter  two number */}
          <div
            className="socailMediaDesign_Process_div_two"
            data-aos="fade-right"
            data-aos-delay={2 * 200}
          >
            {/* counter number  */}
            <div className="Process_counter_div">
              <span>2</span>
            </div>
            <div>
              <div className="Process_counter_two_under_circel_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="130"
                  viewBox="0 0 138 130"
                  fill="none"
                >
                  <path
                    d="M105.926 106.135L82.6319 101.008L97.5377 83.8071L105.926 106.135Z"
                    fill="url(#paint0_linear_879_5164)"
                  />
                  <circle
                    cx="61.2353"
                    cy="61.4285"
                    r="46.1414"
                    transform="rotate(24.787 61.2353 61.4285)"
                    fill="url(#paint1_linear_879_5164)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_879_5164"
                      x1="103.2"
                      y1="110.903"
                      x2="82.9446"
                      y2="110.322"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_879_5164"
                      x1="80.1542"
                      y1="11.7803"
                      x2="121.914"
                      y2="66.0988"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="Process_two_counter_top_circel_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M44.8979 29.9584C46.0979 30.1684 47.2979 30.3724 48.4619 30.6064C48.7859 30.6664 48.8459 30.6064 48.8819 30.2824C49.0379 29.0164 49.2239 27.7504 49.3859 26.4784C49.4699 25.8484 49.4579 25.8484 50.0339 26.0464C50.7899 26.3044 51.5519 26.5504 52.3079 26.8204C52.6319 26.9344 52.7879 26.8864 52.8179 26.4964C52.8539 25.9504 52.9739 25.4104 53.0219 24.8584C53.0579 24.4504 53.1839 24.4624 53.4599 24.6904C54.4619 25.5124 55.4759 26.3284 56.4599 27.1444C56.5379 27.2104 56.6099 27.3004 56.7359 27.2704V27.4804C56.2262 27.8901 55.7634 28.3549 55.3559 28.8664C54.5819 29.6704 53.8259 30.4984 52.9559 31.4044C52.8268 30.7698 52.7306 30.1289 52.6679 29.4844C52.6807 29.2731 52.6139 29.0647 52.4806 28.9003C52.3473 28.736 52.1573 28.6275 51.9479 28.5964C51.4019 28.4464 50.8799 28.2184 50.3039 27.9964C50.1479 29.3884 49.9979 30.7324 49.8539 32.0704C49.7699 32.8264 49.7759 32.8384 49.0499 32.8024C47.2499 32.7124 45.3959 32.6104 43.5659 32.5144C44.3043 31.8514 44.7775 30.9434 44.8979 29.9584Z"
                      fill="white"
                    />
                    <path
                      d="M43.3202 26.5498C43.3026 26.5446 43.2839 26.5446 43.2662 26.5498C42.7862 27.4138 41.0882 27.4678 40.3082 26.8078C40.6382 26.6878 40.9082 26.8858 41.1842 26.9218C41.8382 26.9998 42.5102 27.0898 42.9482 26.4838C43.1606 26.1825 43.2844 25.8279 43.3056 25.4599C43.3268 25.0919 43.2446 24.7254 43.0682 24.4018C43.0128 24.2396 42.9087 24.0985 42.7703 23.9976C42.6318 23.8967 42.4656 23.8409 42.2942 23.8378C42.1429 23.8219 41.9903 23.8496 41.8542 23.9177C41.7181 23.9857 41.6043 24.0912 41.5262 24.2218C41.4731 24.3359 41.4528 24.4626 41.4677 24.5877C41.4825 24.7127 41.5319 24.8312 41.6102 24.9298C41.7962 25.2238 42.0482 25.1278 42.3482 24.9298C42.1202 25.4338 41.8382 25.4938 41.5082 25.1998C41.3313 25.0377 41.222 24.8149 41.202 24.5759C41.1819 24.3368 41.2527 24.099 41.4002 23.9098C41.593 23.6948 41.8604 23.5615 42.1481 23.537C42.4357 23.5125 42.7219 23.5986 42.9482 23.7778C43.2242 23.9998 43.2962 24.3358 43.5002 24.5998C43.5212 24.3457 43.48 24.0904 43.3802 23.8558C42.9579 23.0303 42.3164 22.3369 41.5262 21.8518C41.4934 21.8392 41.4638 21.8197 41.4394 21.7945C41.415 21.7692 41.3964 21.739 41.385 21.7058C41.3735 21.6726 41.3695 21.6373 41.3732 21.6024C41.3768 21.5675 41.3881 21.5338 41.4062 21.5038C41.6144 20.9886 41.6539 20.4208 41.5192 19.8818C41.3844 19.3428 41.0823 18.8603 40.6562 18.5038C40.1418 18.1473 39.5857 17.8551 39.0002 17.6338C38.3365 17.4338 37.6474 17.3307 36.9542 17.3278C36.7562 17.3278 36.6782 17.2258 36.5762 17.1058C36.5992 16.7902 36.5282 16.475 36.3722 16.1998C35.9249 15.4488 35.2666 14.846 34.4793 14.4662C33.692 14.0864 32.8104 13.9465 31.9442 14.0638C31.7952 14.0886 31.6552 14.1521 31.5384 14.2479C31.4215 14.3437 31.3318 14.4684 31.2782 14.6098C31.0059 15.3251 30.8441 16.0777 30.7982 16.8418C30.5546 19.4343 30.4525 22.0381 30.4922 24.6418C30.4922 27.1438 30.6062 29.6518 30.6662 32.1598C30.7202 34.4518 30.7802 36.7498 31.0142 39.0298C31.0652 40.1725 31.4014 41.2843 31.9922 42.2638C32.0912 42.445 32.2318 42.6003 32.4023 42.7168C32.5728 42.8333 32.7685 42.9078 32.9734 42.9341C33.1783 42.9605 33.3864 42.9379 33.5809 42.8683C33.7754 42.7987 33.9506 42.6841 34.0922 42.5338C34.3336 42.3268 34.5367 42.079 34.6922 41.8018L35.2382 40.7818L35.3522 40.8778C36.1689 41.0322 37.01 40.9994 37.8122 40.7818C39.0122 40.3978 40.0022 39.8098 40.1462 38.3818C40.1514 38.3285 40.1734 38.2783 40.209 38.2384C40.2446 38.1985 40.2919 38.171 40.3442 38.1598C41.1902 37.8602 41.9602 37.3789 42.6002 36.7498C42.9234 36.3842 43.1441 35.9397 43.24 35.4613C43.3359 34.9829 43.3036 34.4876 43.1462 34.0258C42.5462 33.0238 42.5462 33.0238 43.6082 32.5258C44.3293 31.8513 44.783 30.9396 44.8862 29.9578C45.002 29.2979 44.9142 28.6184 44.6345 28.0097C44.3547 27.4009 43.8963 26.8917 43.3202 26.5498ZM40.3202 32.9158C40.3922 33.1078 40.1882 33.1198 40.0622 33.1618C39.6422 33.3101 39.1997 33.3852 38.7542 33.3838C38.5922 33.3838 38.4302 33.3838 38.2742 33.3838C37.8706 33.333 37.4952 33.1501 37.2065 32.8635C36.9178 32.577 36.732 32.2029 36.6782 31.7998C36.6975 31.3531 36.8568 30.9239 37.1335 30.5729C37.4103 30.2218 37.7905 29.9667 38.2202 29.8438C38.6061 29.7602 39.009 29.8148 39.3588 29.9979C39.7086 30.181 39.983 30.4811 40.1342 30.8458C40.2119 30.9672 40.2579 31.1061 40.2682 31.2498C40.2784 31.3936 40.2526 31.5376 40.1929 31.6688C40.1333 31.8 40.0418 31.9142 39.9267 32.001C39.8117 32.0878 39.6768 32.1444 39.5342 32.1658C39.4084 32.19 39.2783 32.1799 39.1578 32.1365C39.0372 32.0932 38.9304 32.0182 38.8488 31.9194C38.7672 31.8206 38.7137 31.7016 38.6939 31.575C38.6741 31.4484 38.6887 31.3188 38.7362 31.1998C38.7362 31.1218 38.7902 31.0198 38.8982 31.0258C39.0062 31.0318 39.0062 31.1398 39.0062 31.2238C39.0062 31.4758 38.8862 31.7938 39.2702 31.8778C39.3795 31.9117 39.4969 31.9096 39.6049 31.8718C39.7129 31.834 39.8059 31.7624 39.8702 31.6678C39.9442 31.5451 39.9802 31.4034 39.9738 31.2603C39.9674 31.1172 39.9189 30.9793 39.8342 30.8638C39.7034 30.5773 39.4761 30.346 39.1921 30.21C38.9081 30.074 38.5854 30.0421 38.2802 30.1198C37.9065 30.2145 37.5749 30.4311 37.338 30.7354C37.1011 31.0396 36.9724 31.4142 36.9722 31.7998C37.0068 32.1193 37.1472 32.4181 37.3712 32.6486C37.5952 32.8791 37.8898 33.0281 38.2082 33.0718C38.8113 33.1732 39.4302 33.1216 40.0082 32.9218C40.1042 32.8738 40.2602 32.7598 40.3142 32.9158H40.3202ZM36.7922 27.5998C37.3054 27.8169 37.8782 27.8487 38.4122 27.6898C38.6425 27.6126 38.8389 27.458 38.968 27.2524C39.097 27.0467 39.1509 26.8026 39.1202 26.5618C39.1159 26.3283 39.0312 26.1036 38.8803 25.9254C38.7295 25.7472 38.5217 25.6265 38.2922 25.5838C38.1439 25.5474 37.9885 25.551 37.842 25.5942C37.6955 25.6374 37.5631 25.7187 37.4582 25.8298C37.2182 26.0878 37.3082 26.3518 37.4582 26.6158C37.4942 26.6758 37.5242 26.7418 37.4042 26.8738C37.2617 26.7819 37.153 26.6462 37.0945 26.487C37.0361 26.3279 37.031 26.154 37.0802 25.9918C37.1221 25.8174 37.2176 25.6606 37.3532 25.5433C37.4888 25.426 37.6577 25.3541 37.8362 25.3378C38.0072 25.2967 38.185 25.2923 38.3578 25.3247C38.5306 25.3572 38.6946 25.4258 38.8391 25.5261C38.9836 25.6263 39.1052 25.756 39.196 25.9066C39.2869 26.0571 39.3449 26.2252 39.3662 26.3998C39.4064 26.5746 39.4104 26.7558 39.3782 26.9323C39.3459 27.1088 39.278 27.2769 39.1786 27.4262C39.0792 27.5756 38.9504 27.7031 38.8001 27.8011C38.6498 27.899 38.481 27.9652 38.3042 27.9958C37.5816 28.1372 36.8322 28.0023 36.2042 27.6178C36.0397 27.5252 35.8962 27.3996 35.7826 27.2488C35.669 27.098 35.5879 26.9254 35.5442 26.7418C35.2802 25.5418 35.8142 24.5518 36.4322 23.5318C36.6482 23.7778 36.5042 23.8978 36.4322 24.0238C36.0991 24.5913 35.8676 25.2126 35.7482 25.8598C35.7024 26.0426 35.6931 26.2326 35.7208 26.419C35.7485 26.6054 35.8126 26.7846 35.9096 26.9462C36.0065 27.1078 36.1344 27.2487 36.2859 27.3608C36.4373 27.473 36.6094 27.5542 36.7922 27.5998ZM38.1962 22.6378C38.9867 22.6108 39.7487 22.3359 40.3742 21.8518C40.4979 21.7848 40.6035 21.6888 40.6819 21.5721C40.7604 21.4554 40.8094 21.3214 40.8247 21.1816C40.8401 21.0418 40.8213 20.9004 40.77 20.7694C40.7187 20.6385 40.6364 20.5219 40.5302 20.4298C40.2044 20.0621 39.7919 19.7817 39.3302 19.6138C38.9042 19.4218 38.7302 19.5478 38.7302 20.0098C38.7496 20.4735 38.8428 20.9313 39.0062 21.3658C39.0062 21.4738 39.1622 21.6178 39.0062 21.6898C38.8502 21.7618 38.8142 21.5878 38.7782 21.4738C38.5765 20.9761 38.4706 20.4448 38.4662 19.9078C38.4662 19.3498 38.8082 19.1278 39.3242 19.3078C39.9003 19.5002 40.4114 19.8492 40.8002 20.3158C40.913 20.426 41.0002 20.5597 41.0558 20.7073C41.1114 20.8549 41.134 21.0129 41.122 21.1701C41.11 21.3274 41.0637 21.4801 40.9863 21.6176C40.909 21.755 40.8024 21.8739 40.6742 21.9658C40.0593 22.4931 39.2966 22.8179 38.4902 22.8958C37.0082 22.8958 36.0422 22.0078 36.0902 20.8738C36.0902 20.7118 36.0542 20.4358 36.2642 20.4358C36.4742 20.4358 36.3722 20.6938 36.3722 20.8318C36.3637 21.0728 36.4052 21.3129 36.4941 21.5371C36.583 21.7613 36.7173 21.9646 36.8887 22.1343C37.06 22.3039 37.2647 22.4363 37.4897 22.5229C37.7148 22.6096 37.9553 22.6487 38.1962 22.6378ZM32.9282 16.1998C33.0929 16.1434 33.267 16.1204 33.4406 16.1319C33.6142 16.1434 33.7838 16.1893 33.9395 16.2669C34.0953 16.3445 34.234 16.4522 34.3478 16.5839C34.4616 16.7155 34.548 16.8684 34.6022 17.0338C34.7241 17.294 34.7403 17.5913 34.6474 17.8632C34.5545 18.1351 34.3598 18.3604 34.1042 18.4918C33.9722 18.5518 33.7742 18.7018 33.6902 18.4918C33.6062 18.2818 33.8522 18.3178 33.9662 18.2578C34.066 18.2086 34.155 18.1402 34.2283 18.0566C34.3016 17.9729 34.3577 17.8757 34.3933 17.7704C34.429 17.665 34.4435 17.5537 34.4361 17.4428C34.4288 17.3318 34.3996 17.2234 34.3502 17.1238C34.1102 16.5778 33.5102 16.2238 33.0782 16.4218C32.7138 16.5929 32.4067 16.8658 32.1938 17.2075C31.9809 17.5492 31.8713 17.9452 31.8782 18.3478C31.8499 18.6802 31.9306 19.0129 32.1081 19.2955C32.2857 19.578 32.5504 19.795 32.8622 19.9138C33.1926 20.0916 33.5703 20.1618 33.9425 20.1144C34.3148 20.0671 34.6629 19.9046 34.9382 19.6498C35.5435 19.0417 35.9852 18.2904 36.2222 17.4658C36.2882 17.2918 36.2702 17.0518 36.5642 17.0878C36.4003 18.1155 35.9151 19.0649 35.1782 19.7998C34.8832 20.1155 34.4924 20.3253 34.0663 20.3969C33.6401 20.4685 33.2022 20.3978 32.8202 20.1958C32.4459 20.0647 32.1253 19.8137 31.9083 19.4816C31.6913 19.1496 31.59 18.7552 31.6202 18.3598C31.6096 17.9125 31.7271 17.4715 31.9588 17.0888C32.1906 16.706 32.5269 16.3976 32.9282 16.1998ZM31.9442 23.8858C32.0559 24.1274 32.2418 24.3271 32.475 24.4555C32.7082 24.584 32.9763 24.6345 33.2402 24.5998C33.6257 24.5744 33.9918 24.4215 34.2807 24.1651C34.5697 23.9087 34.7651 23.5635 34.8362 23.1838C34.9334 22.8545 34.9108 22.5015 34.7724 22.1874C34.634 21.8732 34.3888 21.6183 34.0802 21.4678C33.6325 21.2093 33.1432 21.0307 32.6342 20.9398C32.5082 20.9398 32.3042 20.9398 32.3462 20.7298C32.3882 20.5198 32.5502 20.6458 32.6702 20.6698C33.2868 20.7745 33.8739 21.0098 34.3922 21.3598C35.2262 21.9598 35.3942 22.8178 34.8662 23.8078C34.6702 24.2342 34.3194 24.57 33.8848 24.7472C33.4502 24.9244 32.9645 24.9296 32.5262 24.7618C32.2769 24.6878 32.0566 24.5386 31.8954 24.3345C31.7343 24.1304 31.6403 23.8814 31.6262 23.6218C31.6098 23.3529 31.6749 23.0854 31.813 22.8542C31.9511 22.623 32.1558 22.4388 32.4002 22.3258C32.5265 22.258 32.6653 22.217 32.8081 22.2052C32.9509 22.1934 33.0946 22.2111 33.2302 22.2573C33.3659 22.3034 33.4906 22.377 33.5965 22.4734C33.7025 22.5699 33.7875 22.6871 33.8462 22.8178C33.8822 22.9078 33.9362 22.9858 33.8462 23.0578C33.8313 23.0683 33.8143 23.0754 33.7963 23.0787C33.7783 23.082 33.7598 23.0814 33.7421 23.0768C33.7244 23.0722 33.7079 23.0639 33.6938 23.0523C33.6797 23.0407 33.6682 23.0262 33.6602 23.0098C33.3542 22.5418 32.9762 22.2658 32.4182 22.6198C32.2109 22.7491 32.052 22.9434 31.9663 23.1723C31.8806 23.4012 31.8728 23.652 31.9442 23.8858ZM31.3442 27.5578C31.6009 27.1678 31.9815 26.8758 32.4246 26.7289C32.8677 26.5819 33.3474 26.5885 33.7862 26.7478C34.1174 26.8632 34.3988 27.0889 34.5834 27.3871C34.768 27.6853 34.8445 28.0379 34.8002 28.3858C34.7255 28.7075 34.5334 28.9898 34.2615 29.1773C33.9896 29.3649 33.6575 29.4442 33.3302 29.3998C33.1933 29.4116 33.0568 29.373 32.9463 29.2912C32.8358 29.2094 32.759 29.0902 32.7302 28.9558C32.7073 28.7895 32.7195 28.6203 32.766 28.4591C32.8125 28.2979 32.8923 28.1482 33.0002 28.0198C33.0002 28.0198 33.1082 28.0198 33.1382 28.0198C33.1691 28.0588 33.1841 28.1081 33.1802 28.1578C33.1802 28.1578 33.1802 28.2178 33.1442 28.2538C33.0902 28.5478 32.7362 28.9138 33.2402 29.1058C33.4918 29.1781 33.7613 29.1528 33.995 29.0349C34.2286 28.9169 34.4091 28.7151 34.5002 28.4698C34.5666 28.2092 34.5435 27.9339 34.4347 27.688C34.3259 27.4421 34.1377 27.2399 33.9002 27.1138C33.5496 26.935 33.1506 26.8741 32.7626 26.94C32.3746 27.006 32.0182 27.1952 31.7462 27.4798C31.4913 27.7589 31.3411 28.1179 31.3214 28.4954C31.3017 28.8729 31.4137 29.2456 31.6382 29.5498C31.9321 29.945 32.3262 30.2546 32.7798 30.4466C33.2333 30.6385 33.7299 30.7059 34.2182 30.6418C34.5309 30.603 34.8278 30.4828 35.0795 30.2933C35.3311 30.1038 35.5286 29.8515 35.6522 29.5618C35.7302 29.4178 35.7302 29.2138 35.9702 29.0938C35.9373 29.5462 35.7482 29.9732 35.4351 30.3016C35.1221 30.6299 34.7046 30.8393 34.2542 30.8938C33.8136 30.9387 33.3684 30.8927 32.9463 30.7585C32.5241 30.6243 32.1341 30.4049 31.8002 30.1138C31.4329 29.8107 31.1874 29.3852 31.1091 28.9154C31.0308 28.4457 31.125 27.9635 31.3742 27.5578H31.3442ZM32.4362 32.3578C32.692 32.0585 33.0236 31.8336 33.3964 31.7069C33.7691 31.5802 34.1691 31.5563 34.5542 31.6378C34.7086 31.6673 34.8553 31.7281 34.9853 31.8164C35.1153 31.9047 35.2259 32.0187 35.3102 32.1513C35.3945 32.284 35.4507 32.4324 35.4755 32.5876C35.5003 32.7428 35.4931 32.9015 35.4542 33.0538C35.3913 33.405 35.2099 33.724 34.9402 33.9577C34.6705 34.1914 34.3289 34.3255 33.9722 34.3378C33.8533 34.3018 33.7437 34.2399 33.6516 34.1566C33.5594 34.0732 33.4869 33.9704 33.4393 33.8556C33.3916 33.7408 33.3701 33.6169 33.3761 33.4928C33.3821 33.3686 33.4157 33.2474 33.4742 33.1378C33.5222 33.0658 33.5822 33.0298 33.6542 33.0598C33.6848 33.0785 33.7077 33.1075 33.7187 33.1416C33.7297 33.1758 33.7281 33.2127 33.7142 33.2458C33.6422 33.5818 33.5222 33.9778 33.9722 34.0918C34.1687 34.1189 34.3686 34.083 34.5433 33.9892C34.718 33.8954 34.8584 33.7485 34.9442 33.5698C35.0895 33.4096 35.1828 33.2092 35.2117 32.9949C35.2407 32.7807 35.2039 32.5627 35.1062 32.3698C34.9915 32.1764 34.8174 32.0252 34.6099 31.9387C34.4023 31.8522 34.1723 31.835 33.9542 31.8898C33.5691 31.9385 33.2025 32.0833 32.8879 32.3108C32.5734 32.5384 32.3211 32.8413 32.1542 33.1918C31.8362 33.8278 32.1542 34.3498 32.5622 34.8358C32.7362 35.0458 33.0422 35.1418 33.1262 35.5318C31.7222 34.8958 31.4102 33.3898 32.4662 32.3998L32.4362 32.3578ZM36.6362 39.6658C36.4069 39.9866 36.0823 40.227 35.7086 40.353C35.3349 40.479 34.931 40.4842 34.5542 40.3678C34.0555 40.2448 33.6236 39.9341 33.3486 39.5003C33.0735 39.0665 32.9767 38.5432 33.0782 38.0398C33.2162 37.5322 33.4782 37.0669 33.8405 36.6857C34.2029 36.3045 34.6543 36.0193 35.1542 35.8558C35.5074 35.7799 35.8762 35.8467 36.1802 36.0418C36.2216 36.0579 36.2552 36.0893 36.2742 36.1295C36.2931 36.1696 36.296 36.2155 36.2822 36.2578C36.2282 36.3658 36.1442 36.2998 36.0602 36.2578C34.7522 35.8498 33.1202 37.2598 33.3062 38.6218C33.3474 38.916 33.4607 39.1955 33.6361 39.4353C33.8114 39.675 34.0435 39.8677 34.3114 39.996C34.5793 40.1244 34.8749 40.1844 35.1717 40.1707C35.4684 40.1571 35.7572 40.0701 36.0122 39.9178C36.2076 39.8227 36.3689 39.6697 36.4741 39.4797C36.5793 39.2896 36.6234 39.0718 36.6002 38.8558C36.5949 38.632 36.5313 38.4135 36.4155 38.222C36.2997 38.0304 36.1359 37.8725 35.9402 37.7638C35.8376 37.7062 35.7204 37.68 35.603 37.6885C35.4857 37.6971 35.3734 37.7399 35.2802 37.8118C35.0642 37.9918 35.1662 38.2258 35.2802 38.4478C35.3942 38.6698 35.4722 38.7058 35.3882 38.9398C34.8902 38.5078 34.7882 37.9918 35.0342 37.6738C35.22 37.5034 35.4656 37.4135 35.7174 37.4236C35.9692 37.4337 36.2068 37.5431 36.3782 37.7278C36.6342 37.9764 36.8034 38.3009 36.8606 38.6532C36.9179 39.0054 36.8603 39.3668 36.6962 39.6838L36.6362 39.6658ZM40.4282 36.7138C39.7202 37.1038 38.9822 37.0438 38.6282 36.5578C38.5408 36.4518 38.482 36.3251 38.4575 36.19C38.4329 36.0548 38.4434 35.9156 38.4879 35.7856C38.5324 35.6556 38.6095 35.5393 38.7118 35.4475C38.8141 35.3558 38.9382 35.2919 39.0722 35.2618C39.0722 35.3278 39.0722 35.3518 39.0722 35.3638C38.7962 35.7298 38.5022 36.1018 38.9702 36.5158C39.2146 36.6463 39.4929 36.6996 39.7683 36.6685C40.0437 36.6375 40.3031 36.5235 40.5122 36.3418C40.6799 36.1927 40.7834 35.9846 40.8013 35.761C40.8192 35.5374 40.75 35.3156 40.6082 35.1418C40.3385 34.7888 39.9721 34.5216 39.5536 34.3725C39.1352 34.2234 38.6824 34.1989 38.2502 34.3018C37.8234 34.4667 37.4629 34.7677 37.2243 35.1581C36.9857 35.5485 36.8823 36.0067 36.9302 36.4618C37.0221 36.8849 37.2459 37.268 37.5694 37.5558C37.8928 37.8437 38.2993 38.0216 38.7302 38.0638C39.1346 38.0996 39.5421 38.0568 39.9302 37.9378C40.0082 38.1358 39.9302 38.1838 39.8102 38.2258C39.2813 38.3954 38.7121 38.3927 38.1848 38.218C37.6575 38.0433 37.1993 37.7057 36.8762 37.2538C36.6265 36.8082 36.5384 36.2901 36.627 35.7871C36.7155 35.2841 36.9753 34.8271 37.3622 34.4938C37.636 34.2764 37.9548 34.1228 38.2954 34.0441C38.636 33.9655 38.9898 33.9637 39.3312 34.039C39.6726 34.1143 39.9928 34.2647 40.2688 34.4794C40.5447 34.694 40.7693 34.9674 40.9262 35.2798C41.0555 35.5314 41.0821 35.8234 41.0004 36.0942C40.9187 36.365 40.7351 36.5936 40.4882 36.7318L40.4282 36.7138ZM43.9502 28.6798C43.7522 28.7338 43.6742 28.5358 43.5542 28.4398C43.4092 28.2791 43.2277 28.1555 43.0251 28.0793C42.8225 28.0031 42.6046 27.9766 42.3896 28.0018C42.1746 28.0271 41.9688 28.1034 41.7894 28.2245C41.61 28.3456 41.4621 28.5079 41.3582 28.6978C41.1736 28.9397 41.0454 29.22 40.9831 29.518C40.9208 29.8159 40.926 30.1241 40.9982 30.4198C41.0173 30.6295 41.1128 30.8248 41.2666 30.9686C41.4204 31.1125 41.6217 31.1947 41.8322 31.1998C42.0533 31.2262 42.2771 31.1825 42.472 31.0748C42.6668 30.9672 42.823 30.801 42.9182 30.5998C43.1762 30.0418 42.8822 29.5858 42.0962 29.4658C42.5102 29.1178 42.7682 29.2498 42.9962 29.4658C43.1895 29.6924 43.2864 29.9856 43.2662 30.2828C43.246 30.5799 43.1104 30.8574 42.8882 31.0558C42.679 31.2906 42.3882 31.4368 42.0749 31.4646C41.7617 31.4925 41.4496 31.3999 41.2022 31.2058C40.4582 30.5338 40.6022 29.1058 41.4902 28.2418C41.6488 28.0699 41.8434 27.9353 42.0602 27.8476C42.2769 27.7598 42.5104 27.7212 42.7438 27.7344C42.9773 27.7476 43.2049 27.8123 43.4104 27.9239C43.6158 28.0354 43.7941 28.1911 43.9322 28.3798C43.9982 28.4638 44.0822 28.5418 44.0102 28.6978L43.9502 28.6798Z"
                      fill="white"
                    />
                    <path
                      d="M28.944 18.2518C28.9142 17.0977 28.745 15.9513 28.44 14.8378C28.3946 14.6283 28.2855 14.4379 28.1276 14.2928C27.9696 14.1478 27.7706 14.0552 27.558 14.0278C26.765 13.9447 25.964 14.0704 25.2346 14.3925C24.5053 14.7146 23.8728 15.2218 23.4 15.8638C23.1265 16.2399 22.9833 16.6949 22.992 17.1598C23.31 16.9918 23.31 17.2798 23.364 17.4358C23.5738 18.1539 23.9246 18.8229 24.396 19.4038C24.6222 19.7172 24.9434 19.9494 25.3118 20.0661C25.6803 20.1828 26.0766 20.1778 26.442 20.0518C26.7837 19.9812 27.0932 19.8014 27.3237 19.5395C27.5542 19.2776 27.6933 18.9477 27.72 18.5998C27.768 18.1903 27.6987 17.7755 27.5203 17.4038C27.3419 17.032 27.0616 16.7185 26.712 16.4998C26.5866 16.4317 26.448 16.3915 26.3057 16.3819C26.1634 16.3723 26.0207 16.3936 25.8873 16.4444C25.754 16.4951 25.6332 16.574 25.5332 16.6757C25.4332 16.7775 25.3564 16.8996 25.308 17.0338C25.2431 17.1399 25.2021 17.2588 25.1877 17.3824C25.1734 17.5059 25.1861 17.631 25.2249 17.7492C25.2637 17.8673 25.3277 17.9756 25.4125 18.0665C25.4973 18.1575 25.6008 18.2289 25.716 18.2758C25.812 18.3238 26.01 18.3178 25.938 18.4918C25.866 18.6658 25.722 18.5698 25.608 18.5278C25.4713 18.4757 25.3473 18.3953 25.2439 18.2919C25.1405 18.1885 25.0601 18.0645 25.008 17.9278C24.9028 17.6794 24.8822 17.4032 24.9495 17.1419C25.0167 16.8806 25.168 16.6487 25.38 16.4818C25.5396 16.2741 25.7682 16.1303 26.0246 16.0764C26.281 16.0225 26.5482 16.062 26.778 16.1878C27.1827 16.4456 27.5088 16.8098 27.7204 17.2405C27.9321 17.6713 28.0212 18.1519 27.978 18.6298C27.9095 19.0457 27.7142 19.4303 27.4189 19.731C27.1235 20.0317 26.7425 20.2339 26.328 20.3098C25.979 20.3949 25.6136 20.3841 25.2703 20.2784C24.9271 20.1728 24.6187 19.9763 24.378 19.7098C23.7353 18.9941 23.2616 18.1432 22.992 17.2198H22.542C21.6299 17.2919 20.7328 17.4939 19.878 17.8198C19.878 17.8198 19.836 17.8798 19.806 17.8918C18.342 18.6838 17.586 19.7878 18.192 21.4918C18.252 21.6598 18.192 21.7198 18.054 21.7858C17.2618 22.265 16.6228 22.9602 16.212 23.7898C16.212 23.9998 16.044 24.1918 16.116 24.3898C16.32 24.1738 16.398 23.8678 16.638 23.6758C16.8629 23.4949 17.1493 23.4082 17.4368 23.434C17.7243 23.4597 17.9907 23.5959 18.18 23.8138C18.3265 23.9957 18.3998 24.2258 18.3854 24.459C18.3709 24.6921 18.2698 24.9114 18.102 25.0738C17.796 25.3798 17.502 25.3438 17.232 24.8938C17.706 25.1218 17.982 24.9598 18.102 24.5398C18.1506 24.4021 18.1432 24.2508 18.0815 24.1185C18.0198 23.9861 17.9087 23.8832 17.772 23.8318C17.5976 23.7207 17.3877 23.6793 17.1842 23.716C16.9807 23.7527 16.7985 23.8648 16.674 24.0298C16.4553 24.3557 16.3287 24.7345 16.3076 25.1263C16.2865 25.5181 16.3716 25.9084 16.554 26.2558C16.986 26.9338 17.658 26.8918 18.324 26.8138C18.63 26.7718 18.924 26.6878 19.314 26.6038C18.666 27.3658 17.196 27.2758 16.314 26.5018C15.8527 26.6936 15.4554 27.0126 15.1686 27.4216C14.8818 27.8307 14.7171 28.3128 14.694 28.8118C14.673 29.1835 14.673 29.5561 14.694 29.9278C14.7398 30.4249 14.8857 30.9076 15.1228 31.3468C15.36 31.7861 15.6835 32.1728 16.074 32.4838C16.362 32.6218 16.776 32.6938 16.896 32.9218C17.016 33.1498 16.584 33.4618 16.506 33.7858C16.459 33.8999 16.3964 34.007 16.32 34.1038C16.2332 34.5659 16.2478 35.0412 16.3628 35.497C16.4778 35.9529 16.6904 36.3783 16.986 36.7438C17.16 36.8638 17.334 36.9718 17.502 37.0978C18.0559 37.5822 18.7221 37.9204 19.44 38.0818C19.476 37.7158 19.692 37.8958 19.866 37.9318C20.231 38.0204 20.6118 38.022 20.9775 37.9365C21.3433 37.851 21.6839 37.6809 21.972 37.4398C22.2733 37.2061 22.4862 36.8768 22.5757 36.5061C22.6651 36.1354 22.6257 35.7452 22.464 35.3998C22.3229 35.0085 22.0532 34.6766 21.6989 34.4586C21.3447 34.2406 20.9269 34.1494 20.514 34.1998C20.2031 34.2374 19.9033 34.3382 19.6329 34.4961C19.3626 34.654 19.1274 34.8656 18.942 35.1178C18.8692 35.2087 18.8155 35.3133 18.7841 35.4255C18.7528 35.5376 18.7444 35.6549 18.7596 35.7704C18.7747 35.8858 18.813 35.997 18.8722 36.0973C18.9314 36.1975 19.0102 36.2848 19.104 36.3538C19.3154 36.5306 19.5774 36.6356 19.8524 36.654C20.1273 36.6723 20.401 36.6029 20.634 36.4558C21.06 36.0058 20.748 35.6518 20.4 35.2558C20.82 35.1598 20.946 35.4298 21.042 35.6758C21.0923 35.8249 21.1048 35.9841 21.0782 36.1391C21.0517 36.2941 20.987 36.4401 20.89 36.5639C20.793 36.6878 20.6667 36.7855 20.5225 36.8483C20.3783 36.9111 20.2207 36.9371 20.064 36.9238C19.7521 36.9304 19.4445 36.8503 19.1755 36.6925C18.9064 36.5346 18.6864 36.3052 18.54 36.0298C18.48 35.7422 18.5113 35.443 18.6297 35.1741C18.748 34.9052 18.9474 34.6799 19.2 34.5298C19.5566 34.2295 19.9942 34.0413 20.4575 33.989C20.9208 33.9367 21.3893 34.0226 21.804 34.2358C22.2015 34.4848 22.5173 34.8448 22.7125 35.2714C22.9076 35.6979 22.9735 36.1723 22.902 36.6358C22.7316 37.2112 22.3574 37.7046 21.8493 38.0238C21.3412 38.343 20.7342 38.4661 20.142 38.3698C19.926 38.3338 19.722 38.2678 19.542 38.2198C19.5029 38.5802 19.562 38.9445 19.713 39.2741C19.8641 39.6036 20.1014 39.8862 20.4 40.0918C20.898 40.4225 21.4446 40.6735 22.02 40.8358C22.7389 41.0119 23.4912 40.9995 24.204 40.7998C24.432 40.7158 24.474 40.8778 24.486 41.0518C24.6009 41.2908 24.7291 41.5232 24.87 41.7478C25.302 42.3478 25.776 43.0078 26.67 42.9058C27.564 42.8038 27.774 42.1498 28.044 41.5018C28.4931 40.2806 28.7345 38.9928 28.758 37.6918C28.896 35.1178 29.022 32.5438 29.064 29.9698C29.106 26.0458 29.196 22.1458 28.944 18.2518ZM18.66 30.8878C18.5837 31.0353 18.4756 31.164 18.3435 31.2646C18.2114 31.3653 18.0586 31.4353 17.8962 31.4698C17.7337 31.5042 17.5657 31.5022 17.4041 31.4638C17.2426 31.4254 17.0916 31.3517 16.962 31.2478C16.8197 31.1661 16.6957 31.056 16.5977 30.9245C16.4996 30.7929 16.4296 30.6426 16.3919 30.4829C16.3542 30.3232 16.3497 30.1575 16.3786 29.996C16.4075 29.8344 16.4692 29.6806 16.56 29.5438C16.818 29.1838 17.082 29.1418 17.526 29.5138C16.926 29.4238 16.674 29.6818 16.638 30.1438C16.6223 30.3768 16.6905 30.6077 16.8303 30.7948C16.97 30.9819 17.1721 31.1128 17.4 31.1638C17.5928 31.2423 17.8086 31.2422 18.0014 31.1638C18.1942 31.0853 18.3487 30.9346 18.432 30.7438C18.6107 30.3336 18.6488 29.8758 18.5403 29.4418C18.4318 29.0077 18.1827 28.6216 17.832 28.3438C17.232 27.8398 16.704 27.8938 15.924 28.5178C15.834 28.5898 15.774 28.7278 15.618 28.6558C15.7682 28.3097 16.0419 28.0319 16.3857 27.8766C16.7296 27.7213 17.119 27.6996 17.478 27.8158C17.7578 27.9394 18.0104 28.1169 18.2214 28.3384C18.4324 28.5598 18.5975 28.8208 18.7073 29.1062C18.8172 29.3917 18.8695 29.696 18.8614 30.0018C18.8533 30.3075 18.7848 30.6086 18.66 30.8878ZM25.23 21.3718C25.7516 21.0251 26.3404 20.7921 26.958 20.6878C27.078 20.6878 27.24 20.6098 27.258 20.7838C27.276 20.9578 27.102 20.9398 26.982 20.9638C26.4727 21.0537 25.9833 21.2324 25.536 21.4918C25.3619 21.5744 25.2061 21.691 25.0777 21.8346C24.9493 21.9783 24.8509 22.1462 24.7883 22.3284C24.7257 22.5106 24.7001 22.7035 24.7131 22.8958C24.7261 23.088 24.7774 23.2757 24.864 23.4478C24.9768 23.8485 25.2384 24.1909 25.5953 24.405C25.9522 24.6192 26.3774 24.6889 26.784 24.5998C26.9618 24.5771 27.1312 24.5102 27.2765 24.4053C27.4219 24.3003 27.5387 24.1607 27.6163 23.999C27.6938 23.8373 27.7297 23.6588 27.7205 23.4798C27.7114 23.3007 27.6576 23.1268 27.564 22.9738C27.5014 22.8345 27.4021 22.7148 27.2766 22.6277C27.1512 22.5406 27.0043 22.4893 26.8519 22.4795C26.6995 22.4696 26.5472 22.5015 26.4116 22.5717C26.2759 22.6419 26.162 22.7477 26.082 22.8778C26.01 22.9678 25.98 23.1178 25.806 23.0698C25.8235 22.9047 25.883 22.7469 25.9788 22.6113C26.0747 22.4757 26.2036 22.3669 26.3534 22.2953C26.5032 22.2237 26.6689 22.1917 26.8346 22.2023C27.0003 22.2129 27.1605 22.2657 27.3 22.3558C27.5463 22.5027 27.7428 22.7203 27.8637 22.9803C27.9846 23.2404 28.0244 23.5308 27.978 23.8138C27.896 24.1074 27.7272 24.3692 27.4938 24.5652C27.2604 24.7611 26.9732 24.882 26.67 24.9118C26.2196 24.9557 25.7678 24.843 25.3907 24.5928C25.0137 24.3425 24.7344 23.9699 24.6 23.5378C24.4202 23.1625 24.3851 22.7341 24.5014 22.3345C24.6176 21.935 24.877 21.5922 25.23 21.3718ZM21.942 25.6678C21.7414 25.5727 21.5151 25.5465 21.2982 25.5931C21.0812 25.6398 20.8857 25.7567 20.742 25.9258C20.6199 26.0666 20.535 26.2357 20.495 26.4177C20.4551 26.5998 20.4613 26.7889 20.5132 26.9679C20.5651 27.1468 20.661 27.31 20.7922 27.4424C20.9233 27.5748 21.0855 27.6722 21.264 27.7258C21.6281 27.8313 22.0122 27.8476 22.384 27.7735C22.7557 27.6993 23.1042 27.5369 23.4 27.2998C24.042 26.8258 23.946 26.0998 23.79 25.4398C23.6615 24.9255 23.4594 24.4324 23.19 23.9758C23.136 23.8678 22.938 23.7418 23.136 23.6218C23.334 23.5018 23.34 23.7178 23.4 23.8138C23.8736 24.5283 24.1452 25.3576 24.186 26.2138C24.1979 26.5365 24.112 26.8553 23.9397 27.1283C23.7673 27.4013 23.5164 27.6159 23.22 27.7438C22.6624 28.0181 22.0335 28.1124 21.42 28.0138C21.2324 27.9941 21.051 27.9355 20.8874 27.8417C20.7237 27.7479 20.5815 27.621 20.4697 27.4691C20.3579 27.3172 20.279 27.1436 20.2381 26.9595C20.1971 26.7754 20.1951 26.5848 20.232 26.3998C20.254 26.2221 20.3134 26.051 20.4061 25.8978C20.4989 25.7445 20.623 25.6126 20.7702 25.5107C20.9175 25.4087 21.0847 25.339 21.2607 25.3061C21.4368 25.2732 21.6178 25.2779 21.792 25.3198C21.9715 25.3394 22.1405 25.4147 22.275 25.5353C22.4095 25.6558 22.5029 25.8155 22.542 25.9918C22.5928 26.1592 22.5799 26.3396 22.5057 26.498C22.4314 26.6564 22.3012 26.7818 22.14 26.8498C22.14 26.7418 22.14 26.6638 22.14 26.6098C22.344 26.2498 22.368 25.9138 21.942 25.6678ZM19.008 22.0018C18.8722 21.9135 18.758 21.796 18.6735 21.6579C18.5891 21.5197 18.5366 21.3644 18.5199 21.2034C18.5032 21.0423 18.5228 20.8796 18.5771 20.727C18.6315 20.5745 18.7192 20.4361 18.834 20.3218C19.2343 19.8381 19.7655 19.4798 20.364 19.2898C20.4244 19.2598 20.4902 19.2423 20.5575 19.2385C20.6249 19.2347 20.6923 19.2445 20.7557 19.2675C20.8191 19.2906 20.8772 19.3262 20.9264 19.3723C20.9756 19.4184 21.0149 19.4741 21.042 19.5358C21.1292 19.9123 21.1319 20.3034 21.0499 20.681C20.968 21.0586 20.8034 21.4134 20.568 21.7198C20.466 21.3358 20.73 21.0358 20.766 20.6998C20.802 20.3638 21.054 19.8478 20.706 19.6078C20.358 19.3678 19.992 19.7578 19.656 19.9378C19.5319 20.0096 19.4171 20.0963 19.314 20.1958C18.57 20.8378 18.612 21.4738 19.446 21.9958C20.0939 22.4475 20.8788 22.6596 21.666 22.5958C21.8985 22.5872 22.1268 22.5309 22.3367 22.4307C22.5467 22.3304 22.7339 22.1882 22.8868 22.0128C23.0397 21.8374 23.1551 21.6325 23.2258 21.4109C23.2965 21.1892 23.3211 20.9554 23.298 20.7238C23.298 20.6218 23.262 20.5138 23.382 20.3938C23.628 20.5498 23.586 20.8018 23.568 20.9938C23.5431 21.2774 23.4596 21.5528 23.3228 21.8025C23.1861 22.0521 22.999 22.2707 22.7734 22.4444C22.5479 22.6181 22.2887 22.7431 22.0124 22.8115C21.736 22.8799 21.4485 22.8902 21.168 22.8418C20.3783 22.7925 19.6235 22.499 19.008 22.0018ZM21.084 33.4018C20.5669 33.4267 20.0498 33.3535 19.56 33.1858C19.434 33.1378 19.224 33.1318 19.29 32.9398C19.356 32.7478 19.506 32.8978 19.62 32.9398C20.2287 33.1529 20.8836 33.1985 21.516 33.0718C21.8309 33.0049 22.1143 32.8344 22.321 32.5875C22.5276 32.3406 22.6456 32.0316 22.656 31.7098C22.6115 31.3272 22.4489 30.9679 22.1909 30.6818C21.9328 30.3958 21.5921 30.1973 21.216 30.1138C20.9042 30.0791 20.5896 30.1463 20.3192 30.3052C20.0488 30.4642 19.8372 30.7065 19.716 30.9958C19.584 31.3138 19.554 31.6378 19.896 31.8538C19.9657 31.9093 20.0502 31.943 20.1389 31.951C20.2276 31.9589 20.3167 31.9407 20.3952 31.8986C20.4737 31.8565 20.5382 31.7923 20.5806 31.714C20.623 31.6356 20.6416 31.5466 20.634 31.4578C20.634 31.3198 20.55 31.1758 20.748 31.0078C20.8668 31.1477 20.932 31.3253 20.932 31.5088C20.932 31.6924 20.8668 31.8699 20.748 32.0098C20.6361 32.1268 20.4876 32.2019 20.3271 32.2226C20.1666 32.2433 20.0039 32.2085 19.866 32.1238C19.698 32.0563 19.5585 31.9328 19.4711 31.7743C19.3836 31.6158 19.3535 31.4319 19.386 31.2538C19.4804 30.8384 19.7191 30.4699 20.0597 30.2139C20.4003 29.9579 20.8206 29.831 21.246 29.8558C21.7037 29.945 22.1185 30.1849 22.424 30.5372C22.7296 30.8896 22.9084 31.3341 22.932 31.7998C22.8643 32.2408 22.6405 32.6427 22.3013 32.9323C21.9621 33.222 21.53 33.3801 21.084 33.3778V33.4018ZM25.47 40.1998C25.1437 40.3892 24.7714 40.4844 24.3943 40.4749C24.0173 40.4653 23.6502 40.3514 23.334 40.1458C23.107 39.9978 22.9329 39.7814 22.8369 39.528C22.7409 39.2745 22.728 38.9971 22.8 38.7358C22.8199 38.4578 22.9185 38.1911 23.0842 37.967C23.2499 37.7428 23.476 37.5704 23.736 37.4698C23.9008 37.3924 24.0881 37.377 24.2634 37.4266C24.4387 37.4762 24.5902 37.5874 24.69 37.7398C24.948 38.1358 24.69 38.4898 24.498 38.8258C24.4915 38.8428 24.4815 38.8583 24.4687 38.8713C24.4559 38.8843 24.4406 38.8944 24.4237 38.9012C24.4068 38.908 24.3887 38.9112 24.3705 38.9106C24.3523 38.91 24.3344 38.9057 24.318 38.8978C24.21 38.8438 24.246 38.7538 24.318 38.6758C24.39 38.5978 24.402 38.5198 24.438 38.4358C24.534 38.2198 24.648 37.9798 24.438 37.8058C24.3289 37.724 24.1963 37.6798 24.06 37.6798C23.9237 37.6798 23.791 37.724 23.682 37.8058C23.4723 37.9471 23.3054 38.1432 23.1996 38.3728C23.0938 38.6024 23.0531 38.8567 23.082 39.1078C23.1026 39.3507 23.2034 39.5797 23.3685 39.759C23.5336 39.9382 23.7536 40.0574 23.994 40.0978C24.3432 40.2096 24.7182 40.212 25.0688 40.1047C25.4194 39.9975 25.729 39.7858 25.956 39.4978C26.1718 39.2206 26.2973 38.8838 26.3155 38.5329C26.3338 38.182 26.2439 37.834 26.058 37.5358C25.796 37.0669 25.4231 36.6693 24.972 36.3778C24.722 36.2274 24.438 36.1424 24.1464 36.1309C23.8549 36.1194 23.5651 36.1816 23.304 36.3118C23.413 36.1322 23.5767 35.9922 23.771 35.9123C23.9653 35.8324 24.1801 35.8168 24.384 35.8678C24.947 36.0355 25.4485 36.3649 25.8261 36.815C26.2037 37.2651 26.4408 37.8162 26.508 38.3998C26.5345 38.7692 26.4498 39.1381 26.2648 39.4589C26.0798 39.7797 25.803 40.0378 25.47 40.1998ZM26.454 35.4538C26.454 35.2078 26.676 35.1538 26.808 35.0338C27.468 34.4338 27.678 33.7558 27.408 33.1438C27.2025 32.7413 26.8844 32.4072 26.4923 32.1824C26.1002 31.9576 25.6512 31.8518 25.2 31.8778C25.0753 31.8896 24.9543 31.9265 24.8442 31.9862C24.7342 32.0459 24.6373 32.1272 24.5594 32.2253C24.4815 32.3233 24.4243 32.4361 24.391 32.5568C24.3578 32.6775 24.3493 32.8037 24.366 32.9278C24.4016 33.2239 24.5318 33.5005 24.7372 33.7167C24.9425 33.9329 25.2121 34.0771 25.506 34.1278C25.812 34.1278 25.884 33.9238 25.908 33.6718C25.932 33.4198 25.806 33.2638 25.908 33.0718C26.0422 33.1984 26.1317 33.365 26.1631 33.5468C26.1945 33.7286 26.166 33.9156 26.082 34.0798C26.0084 34.2143 25.8903 34.319 25.748 34.376C25.6057 34.4329 25.448 34.4385 25.302 34.3918C24.9332 34.2886 24.6118 34.0604 24.3929 33.7462C24.1739 33.4321 24.0711 33.0515 24.102 32.6698C24.1359 32.4943 24.2059 32.3277 24.3077 32.1806C24.4094 32.0335 24.5406 31.9092 24.6929 31.8156C24.8453 31.7219 25.0154 31.6609 25.1926 31.6365C25.3697 31.6121 25.55 31.6248 25.722 31.6738C26.1176 31.7305 26.4941 31.8803 26.8206 32.1108C27.147 32.3413 27.4142 32.646 27.6 32.9998C28.098 33.8698 27.402 35.3218 26.454 35.4418V35.4538ZM27.816 30.1198C27.2901 30.5945 26.6206 30.8797 25.914 30.9298C25.4198 30.9747 24.9247 30.8541 24.5065 30.5869C24.0884 30.3197 23.7709 29.9211 23.604 29.4538C23.568 29.3458 23.454 29.2018 23.604 29.1358C23.754 29.0698 23.766 29.2378 23.814 29.3278C24.702 30.9298 26.406 31.1278 27.702 29.8438C27.9914 29.5619 28.1741 29.1884 28.219 28.7869C28.2639 28.3853 28.1681 27.9807 27.948 27.6418C27.7095 27.3149 27.3678 27.0779 26.9781 26.9691C26.5884 26.8602 26.1733 26.8859 25.8 27.0418C25.5389 27.1394 25.3218 27.3277 25.1885 27.5724C25.0551 27.8171 25.0145 28.1016 25.074 28.3738C25.164 28.8478 25.512 29.0938 26.094 29.1178C26.55 29.1178 26.694 28.9738 26.538 28.5178C26.502 28.3798 26.436 28.2538 26.394 28.1158C26.3903 28.0912 26.3921 28.066 26.3994 28.0421C26.4067 28.0182 26.4192 27.9963 26.436 27.9778C26.4494 27.966 26.4656 27.9578 26.483 27.9538C26.5005 27.9498 26.5187 27.9501 26.5359 27.9549C26.5532 27.9597 26.569 27.9686 26.5819 27.981C26.5948 27.9934 26.6045 28.0088 26.61 28.0258C26.7238 28.1738 26.8002 28.3471 26.8326 28.531C26.8649 28.7149 26.8524 28.9039 26.796 29.0818C26.64 29.4238 26.316 29.4178 26.01 29.3818C25.7107 29.3863 25.4202 29.2815 25.1926 29.0871C24.9651 28.8928 24.8163 28.6221 24.774 28.3258C24.7352 27.9965 24.8066 27.6637 24.977 27.3793C25.1474 27.0948 25.4073 26.8749 25.716 26.7538C26.1574 26.575 26.6471 26.5544 27.1021 26.6955C27.557 26.8366 27.9491 27.1306 28.212 27.5278C28.4752 27.9312 28.5803 28.4175 28.5073 28.8936C28.4342 29.3696 28.188 29.802 27.816 30.1078V30.1198Z"
                      fill="white"
                    />
                    <path
                      d="M42.6001 36.7504C42.9196 36.3827 43.1375 35.9379 43.2322 35.4601C43.3269 34.9824 43.2952 34.4881 43.1401 34.0264C44.5861 34.7944 46.0321 35.5564 47.4601 36.3424C47.7661 36.5104 48.2581 36.5764 48.3181 36.8944C48.3781 37.2124 47.9281 37.3984 47.7181 37.6564C47.1601 38.3224 46.6021 38.9944 46.0201 39.6424C45.9197 39.7253 45.849 39.8386 45.8187 39.9653C45.7884 40.0919 45.8001 40.225 45.8521 40.3444C46.1401 41.0464 46.4041 41.7664 46.6561 42.4864C46.7461 42.7624 46.8781 42.7924 47.1361 42.7084C47.8741 42.4624 48.6241 42.2464 49.3681 42.0004C49.6621 41.8984 49.7401 42.0004 49.6741 42.2584C49.3261 43.7104 48.9721 45.1564 48.6001 46.6024C48.5041 46.9804 48.2221 46.8244 48.0001 46.7404C46.5121 46.1944 45.0001 45.6544 43.5481 45.0964C43.2548 45.0423 42.9801 44.9143 42.7501 44.7244C43.2841 44.3704 43.7821 44.0044 44.3161 43.6924C44.8501 43.3804 44.8621 43.2004 44.5261 42.7444C43.9261 41.9884 43.4761 41.1784 42.9361 40.4044C42.8871 40.3563 42.8488 40.2983 42.8237 40.2344C42.7987 40.1704 42.7875 40.1019 42.7909 40.0333C42.7944 39.9647 42.8123 39.8976 42.8435 39.8364C42.8747 39.7752 42.9185 39.7214 42.9721 39.6784C43.5121 39.0784 44.0941 38.4784 44.6701 37.8784C44.9101 37.6384 44.8801 37.5064 44.5681 37.4044L42.6001 36.7504Z"
                      fill="white"
                    />
                    <path
                      d="M16.3618 34.2002C16.2746 34.6622 16.289 35.1377 16.4041 35.5935C16.5191 36.0494 16.7319 36.4748 17.0278 36.8402L14.9458 37.5662C15.6298 38.2922 16.2718 38.9942 16.9438 39.6722C16.9974 39.7085 17.0421 39.7564 17.0747 39.8123C17.1073 39.8682 17.1269 39.9307 17.1321 39.9952C17.1373 40.0597 17.1279 40.1246 17.1047 40.185C17.0814 40.2454 17.0449 40.2998 16.9978 40.3442C16.3978 41.1842 15.8518 42.0602 15.2578 42.9002C15.0598 43.1822 15.0538 43.3322 15.3658 43.5002C15.9658 43.8722 16.5658 44.2862 17.2258 44.7362C16.8358 44.8862 16.5178 45.0122 16.1938 45.1262L11.7958 46.8002C11.5138 46.9082 11.3338 46.9502 11.2438 46.5542C10.9198 45.1202 10.5658 43.7102 10.1998 42.3002C10.0918 41.8742 10.2418 41.8922 10.5598 42.0002C11.2678 42.2402 11.9938 42.4382 12.6958 42.6842C12.9958 42.7862 13.1338 42.7562 13.2418 42.4382C13.4758 41.7482 13.7278 41.0642 14.0038 40.3862C14.0621 40.2704 14.0814 40.1389 14.0586 40.0112C14.0359 39.8836 13.9725 39.7668 13.8778 39.6782C13.1458 38.8502 12.4438 37.9982 11.7118 37.1702C11.5078 36.9302 11.5198 36.8162 11.8078 36.6662C13.3318 35.8562 14.8438 35.0282 16.3618 34.2002Z"
                      fill="white"
                    />
                    <path
                      d="M14.7358 30.0302C14.7816 30.5273 14.9275 31.0099 15.1647 31.4492C15.4018 31.8884 15.7253 32.2752 16.1158 32.5862C14.2678 32.6642 12.4198 32.7362 10.5778 32.8322C10.1998 32.8322 10.0618 32.7662 10.0258 32.3522C9.91782 31.0622 9.74382 29.7722 9.61182 28.4882C9.57582 28.1522 9.43782 28.0442 9.11982 28.1642C8.60382 28.3562 8.08782 28.5482 7.56582 28.7282C7.47283 28.7543 7.39088 28.81 7.33241 28.8869C7.27394 28.9638 7.24214 29.0576 7.24182 29.1542C7.13982 29.8562 7.02582 30.5582 6.91782 31.2482C6.80382 31.3202 6.73782 31.2482 6.67782 31.1942C5.57982 29.9942 4.48782 28.7942 3.38382 27.6302C3.21582 27.4502 3.16782 27.3302 3.38382 27.1562C4.49382 26.2742 5.59782 25.3562 6.76182 24.4502C6.91355 25.091 7.01189 25.7432 7.05582 26.4002C7.09782 26.8202 7.18782 27.0362 7.70382 26.8202C8.47182 26.4962 9.28182 26.2742 10.0678 25.9922C10.3378 25.8962 10.4398 25.9262 10.4758 26.2382C10.6318 27.5222 10.8658 28.8002 10.9738 30.0902C11.0218 30.6902 11.2918 30.6902 11.6938 30.5942L14.3098 30.1022C14.4478 30.0542 14.5918 30.0482 14.7358 30.0302Z"
                      fill="white"
                    />
                    <path
                      d="M43.5001 24.6001C43.5252 24.3484 43.486 24.0945 43.3861 23.8621C44.1328 23.823 44.8815 23.8471 45.6241 23.9341C45.9781 23.9941 46.1581 23.8921 46.1941 23.4661C46.3021 22.0861 46.4581 20.7121 46.6141 19.3441C46.6561 18.9481 46.5301 18.7921 46.1221 18.8161C45.7486 18.843 45.3736 18.843 45.0001 18.8161C44.8321 18.8161 44.6221 18.7501 44.7661 18.4801L47.2561 13.7881C47.6184 14.2115 47.938 14.6698 48.2101 15.1561C48.8941 16.1921 49.5761 17.2321 50.2561 18.2761C50.3281 18.3901 50.4661 18.5101 50.4061 18.6541C50.3461 18.7981 50.1541 18.7381 50.0281 18.7381C49.5481 18.7743 49.0657 18.7622 48.5881 18.7021C48.1201 18.6121 48.0961 18.7981 48.0961 19.1641C48.0961 20.8201 48.0961 22.4701 48.0961 24.1261C48.0743 24.5258 48.0743 24.9264 48.0961 25.3261C48.1381 25.7221 47.9521 25.8601 47.6041 25.9261L43.3201 26.5501H43.2661C43.4613 26.1253 43.5733 25.667 43.5961 25.2001C43.5961 24.9961 43.6981 24.7801 43.5001 24.6001Z"
                      fill="white"
                    />
                    <path
                      d="M16.332 26.514C15 26.298 13.668 26.07 12.33 25.872C11.91 25.812 11.73 25.668 11.76 25.2C11.76 23.208 11.76 21.216 11.76 19.2C11.76 18.744 11.622 18.6 11.16 18.66C10.56 18.708 9.99005 18.66 9.39605 18.66C9.33605 18.498 9.47405 18.402 9.55205 18.288C10.458 16.89 11.388 15.492 12.282 14.088C12.528 13.698 12.624 13.77 12.81 14.13C13.53 15.518 14.266 16.9 15.018 18.276C15.21 18.63 15.162 18.78 14.73 18.774C14.298 18.768 13.95 18.81 13.53 18.804C13.254 18.804 13.152 18.9 13.188 19.182C13.338 20.634 13.488 22.08 13.626 23.532C13.656 23.838 13.794 23.892 14.082 23.874C14.772 23.838 15.468 23.874 16.164 23.874C16.164 24.084 15.996 24.276 16.068 24.474C15.948 24.558 15.846 24.642 15.96 24.804C15.9297 25.397 16.0581 25.9873 16.332 26.514Z"
                      fill="white"
                    />
                    <path
                      d="M22.566 17.3038C21.6541 17.3768 20.7571 17.5788 19.902 17.9038C19.533 17.5478 19.1957 17.1604 18.894 16.7458C18.666 16.4518 18.504 16.4638 18.294 16.7458C17.808 17.4598 17.298 18.1618 16.716 18.9838C16.548 17.8498 16.398 16.8478 16.248 15.8458C16.152 15.2158 16.074 14.5798 15.96 13.9558C15.894 13.6198 15.96 13.4878 16.338 13.4578C17.484 13.3858 18.63 13.2598 19.776 13.1698C19.938 13.1698 20.16 13.0618 20.268 13.2418C20.376 13.4218 20.178 13.5298 20.112 13.6678C19.938 14.0158 19.77 14.3758 19.572 14.7058C19.374 15.0358 19.482 15.1378 19.734 15.3058C20.688 15.9718 21.6 16.6438 22.566 17.3038Z"
                      fill="white"
                    />
                    <path
                      d="M35.4 40.8421C36.2167 40.9965 37.0578 40.9637 37.86 40.7461C37.86 40.7461 37.86 40.7821 37.86 40.8001C38.112 41.3281 38.238 42.0601 38.658 42.3301C39.078 42.6001 39.726 42.0721 40.284 41.9341C40.404 41.9341 40.524 41.8741 40.722 41.8201C40.416 43.0201 40.122 44.2201 39.834 45.4201C39.642 46.2001 39.642 46.1941 38.856 45.9421L35.046 44.7421C34.8414 44.704 34.652 44.6082 34.5 44.4661L36.498 43.4641C37.224 43.1041 37.23 43.1041 36.702 42.4681C36.2285 41.959 35.7933 41.4155 35.4 40.8421Z"
                      fill="white"
                    />
                    <path
                      d="M22.0321 40.8299C22.7489 40.9994 23.4976 40.9787 24.2041 40.7699C24.4321 40.6859 24.4741 40.8479 24.4861 41.0219C23.8861 41.5619 23.4481 42.2219 22.8901 42.8219C22.6501 43.0799 22.8301 43.1879 23.0461 43.2899L24.8461 44.1779C25.0683 44.2399 25.2656 44.37 25.4101 44.5499L21.9001 45.6659C21.4741 45.8039 21.0541 45.9419 20.6281 46.0679C20.4661 46.1099 20.2501 46.1879 20.1901 45.9299C19.8481 44.5979 19.5241 43.2599 19.1641 41.8259C19.7641 42.0179 20.2441 42.1499 20.7121 42.3479C21.1801 42.5459 21.3121 42.4019 21.4741 42.0059C21.6361 41.6099 21.8521 41.2199 22.0321 40.8299Z"
                      fill="white"
                    />
                    <path
                      d="M40.662 18.5103C40.146 18.1513 39.5878 17.8571 39 17.6343C39.2159 17.3955 39.4769 17.2018 39.768 17.0643C40.224 16.8243 40.26 16.5483 39.984 16.1403C39.708 15.7323 39.612 15.4503 39.426 15.1083C39.24 14.7663 39.39 14.7543 39.66 14.7783C40.914 14.8863 42.174 14.9943 43.428 15.0903C43.656 15.0903 43.752 15.1923 43.716 15.4203C43.47 17.1003 43.218 18.7863 42.948 20.6043C42.402 19.8423 41.934 19.1883 41.454 18.5283C41.058 18.0003 41.052 18.0003 40.662 18.5103Z"
                      fill="white"
                    />
                    <path
                      d="M43.5958 25.1996C43.5036 25.014 43.4701 24.8047 43.4998 24.5996C43.6978 24.7676 43.5898 24.9836 43.5958 25.1996Z"
                      fill="white"
                    />
                    <path
                      d="M16.0322 24.8222C15.9182 24.6602 16.0322 24.5762 16.1402 24.4922C16.1582 24.6002 16.2002 24.7442 16.0322 24.8222Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Process_counter_text_div Process_counter_two_text_div">
                  <h3>Brainstorm Ideas</h3>
                  <p>
                    Great design ideas don’t always come quickly. We brainstorm
                    together to generate new and creative concepts. Our graphic
                    designers work as a team to match your vision with effective
                    design ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* counter three number  */}
          <div
            className="socailMediaDesign_Process_div_threee"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            {/* counter  */}
            <div className="Process_counter_div">
              <span>3</span>
            </div>
            <div>
              <div className="Process_counter_under_circel_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="124"
                  height="134"
                  viewBox="0 0 124 134"
                  fill="none"
                >
                  <path
                    d="M67.4902 121.998L78.3826 100.778L55.6276 101.305L67.4902 121.998Z"
                    fill="url(#paint0_linear_879_5180)"
                  />
                  <circle
                    cx="46.1414"
                    cy="46.1414"
                    r="46.1414"
                    transform="matrix(-0.321091 0.947048 0.947048 0.321091 36 0.28125)"
                    fill="url(#paint1_linear_879_5180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_879_5180"
                      x1="72.9014"
                      y1="122.935"
                      x2="85.361"
                      y2="106.954"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_879_5180"
                      x1="65.0602"
                      y1="-3.50673"
                      x2="106.82"
                      y2="50.8117"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="Process_counter_top_circel_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M11.1361 12.0537C11.2321 11.2617 10.8901 10.1697 12.1321 10.1697C13.3741 10.1697 13.0081 11.2557 13.1101 12.0177H17.8201C17.8201 11.6937 17.8201 11.3817 17.8201 11.0697C17.8201 10.8182 17.92 10.5771 18.0978 10.3993C18.2756 10.2216 18.5167 10.1217 18.7681 10.1217C19.0196 10.1217 19.2607 10.2216 19.4385 10.3993C19.6163 10.5771 19.7161 10.8182 19.7161 11.0697C19.7161 11.3817 19.7161 11.6997 19.7161 12.0477H24.4141C24.5341 11.2857 24.1681 10.1757 25.4341 10.1937C26.7001 10.2117 26.3281 11.2557 26.4001 11.9997H31.0861C31.0861 11.7057 31.0861 11.3997 31.0861 11.1177C31.0787 10.9885 31.098 10.8591 31.1427 10.7377C31.1875 10.6163 31.2568 10.5054 31.3463 10.412C31.4358 10.3185 31.5436 10.2445 31.663 10.1946C31.7824 10.1446 31.9108 10.1198 32.0401 10.1217C32.1711 10.117 32.3015 10.1401 32.4229 10.1894C32.5443 10.2387 32.6539 10.3131 32.7445 10.4077C32.8351 10.5023 32.9048 10.615 32.9488 10.7384C32.9929 10.8618 33.0104 10.9931 33.0001 11.1237C33.0001 11.4177 33.0001 11.7237 33.0001 12.0537H35.1421C35.3058 12.0267 35.4736 12.0391 35.6315 12.0898C35.7894 12.1406 35.933 12.2282 36.0503 12.3455C36.1676 12.4628 36.2552 12.6064 36.306 12.7643C36.3568 12.9222 36.3691 13.09 36.3421 13.2537V39.7557C36.3421 39.8697 36.3421 39.9837 36.3421 40.1577H35.7841C33.7561 40.1577 31.7281 40.1577 29.7061 40.1577C27.3601 40.1577 25.8841 41.6397 25.8781 43.9857C25.8781 45.9957 25.8781 48.0057 25.8781 49.9857V50.5857C25.6681 50.5857 25.4941 50.5857 25.3201 50.5857H9.16814C8.17814 50.5857 7.84814 50.2677 7.84814 49.2837V13.2837C7.84814 12.3237 8.19014 11.9877 9.13214 11.9817L11.1361 12.0537ZM22.0681 29.9997H11.6521C11.4199 29.9901 11.1874 30.0144 10.9621 30.0717C10.7744 30.1392 10.6128 30.2642 10.5002 30.4289C10.3877 30.5936 10.3299 30.7896 10.3352 30.989C10.3406 31.1885 10.4087 31.3811 10.5298 31.5396C10.651 31.6981 10.8191 31.8143 11.0101 31.8717C11.1861 31.9189 11.3681 31.9391 11.5501 31.9317H32.6281C32.7787 31.9338 32.9292 31.9238 33.0781 31.9017C33.3048 31.8702 33.5125 31.7578 33.6628 31.5852C33.813 31.4126 33.8958 31.1915 33.8958 30.9627C33.8958 30.7338 33.813 30.5127 33.6628 30.3401C33.5125 30.1675 33.3048 30.0551 33.0781 30.0237C32.8973 29.9984 32.7147 29.9884 32.5321 29.9937L22.0681 29.9997ZM22.0681 24.7737H11.8021C11.6041 24.7737 11.4001 24.7737 11.2021 24.7737C11.0733 24.7813 10.9475 24.8158 10.8328 24.875C10.7181 24.9342 10.6171 25.0168 10.5363 25.1174C10.4554 25.218 10.3966 25.3344 10.3635 25.4592C10.3304 25.5839 10.3238 25.7142 10.3441 25.8417C10.3538 25.9691 10.3891 26.0933 10.448 26.2067C10.5068 26.3202 10.588 26.4206 10.6866 26.5018C10.7853 26.5831 10.8993 26.6436 11.022 26.6796C11.1446 26.7157 11.2732 26.7266 11.4001 26.7117H32.7781C32.862 26.7176 32.9462 26.7176 33.0301 26.7117C33.263 26.684 33.4779 26.5726 33.6347 26.3981C33.7915 26.2237 33.8794 25.9982 33.8821 25.7637C33.8832 25.5287 33.7964 25.3018 33.6388 25.1275C33.4812 24.9532 33.2641 24.8441 33.0301 24.8217C32.8483 24.8096 32.6659 24.8096 32.4841 24.8217L22.0681 24.7737ZM22.0681 37.1637H32.5261C32.7078 37.1786 32.8905 37.1786 33.0721 37.1637C33.2954 37.1296 33.4993 37.0175 33.6476 36.8472C33.7959 36.6769 33.879 36.4595 33.8821 36.2337C33.8826 36.0158 33.8093 35.8041 33.6742 35.6331C33.5392 35.4621 33.3502 35.3418 33.1381 35.2917C32.9565 35.2767 32.7738 35.2767 32.5921 35.2917H11.5921C11.4601 35.2917 11.3221 35.2917 11.1901 35.2917C11.0655 35.3 10.9437 35.3331 10.8321 35.3892C10.7204 35.4453 10.6211 35.5231 10.54 35.6182C10.459 35.7133 10.3977 35.8236 10.36 35.9427C10.3222 36.0618 10.3087 36.1873 10.3201 36.3117C10.3561 36.9117 10.7581 37.1997 11.4721 37.1997L22.0681 37.1637ZM22.0681 21.4617H26.2021C27.0121 21.4617 27.8281 21.4617 28.6381 21.4617C28.7714 21.4716 28.9053 21.4538 29.0314 21.4094C29.1574 21.365 29.2729 21.2948 29.3705 21.2035C29.468 21.1121 29.5456 21.0015 29.5982 20.8786C29.6508 20.7558 29.6773 20.6233 29.6761 20.4897C29.67 20.357 29.6376 20.2268 29.5807 20.1068C29.5238 19.9867 29.4436 19.8792 29.3448 19.7904C29.246 19.7016 29.1305 19.6334 29.0051 19.5897C28.8796 19.5459 28.7467 19.5276 28.6141 19.5357H15.7141C15.5221 19.5357 15.2641 19.5357 15.1141 19.6377C14.8483 19.8422 14.6413 20.1134 14.5141 20.4237C14.4664 20.6043 14.4871 20.7961 14.5724 20.9623C14.6577 21.1285 14.8015 21.2572 14.9761 21.3237C15.2194 21.424 15.4812 21.471 15.7441 21.4617C17.8861 21.4857 19.9741 21.4797 22.0681 21.4857V21.4617ZM16.8361 42.4437H22.0201C22.9081 42.4437 23.3761 42.1137 23.3941 41.4897C23.4121 40.8657 22.9261 40.4997 22.0141 40.4997H11.6941C11.4932 40.4921 11.2921 40.5062 11.0941 40.5417C10.8615 40.5788 10.6523 40.7044 10.5103 40.8923C10.3682 41.0802 10.3044 41.3158 10.3321 41.5497C10.3681 42.0957 10.7761 42.4377 11.4481 42.4377L16.8361 42.4437ZM16.8841 47.6637H22.2841C22.4205 47.6851 22.5598 47.6771 22.6928 47.6402C22.8258 47.6033 22.9493 47.5382 23.0551 47.4496C23.1608 47.3609 23.2463 47.2505 23.3059 47.126C23.3654 47.0015 23.3975 46.8657 23.4001 46.7277C23.4 46.5905 23.3711 46.4548 23.3154 46.3294C23.2597 46.204 23.1783 46.0917 23.0766 45.9996C22.9749 45.9075 22.8551 45.8377 22.7248 45.7946C22.5945 45.7516 22.4567 45.7363 22.3201 45.7497C18.6801 45.7497 15.0421 45.7497 11.4061 45.7497C11.1766 45.749 10.951 45.809 10.7521 45.9237C10.5753 46.0258 10.4408 46.1876 10.3726 46.3801C10.3044 46.5726 10.3071 46.783 10.3801 46.9737C10.4349 47.1855 10.5635 47.3709 10.7428 47.4963C10.9221 47.6217 11.1404 47.6789 11.3581 47.6577L16.8841 47.6637ZM31.0561 14.4537C30.76 14.6707 30.5485 14.9837 30.4576 15.3394C30.3668 15.6951 30.4023 16.0713 30.5581 16.4037C30.7031 16.7219 30.9446 16.9863 31.2485 17.1593C31.5524 17.3323 31.9032 17.405 32.2508 17.3671C32.5984 17.3293 32.9252 17.1827 33.1847 16.9483C33.4442 16.7139 33.6232 16.4037 33.6961 16.0617C33.7801 15.7727 33.7669 15.4641 33.6585 15.1834C33.5501 14.9026 33.3525 14.6652 33.0961 14.5077C33.0924 14.8863 33.0542 15.2639 32.9821 15.6357C32.9234 15.826 32.8003 15.99 32.6339 16.0994C32.4675 16.2089 32.2682 16.2571 32.0701 16.2357C31.3921 16.2417 31.2001 15.9297 31.0561 14.4537ZM19.7341 14.4537C19.7341 14.7237 19.7341 14.9637 19.7341 15.2037C19.7492 15.3379 19.7358 15.4739 19.6947 15.6026C19.6537 15.7313 19.5859 15.8499 19.4959 15.9506C19.4058 16.0514 19.2955 16.132 19.1722 16.1871C19.0488 16.2423 18.9153 16.2708 18.7801 16.2708C18.645 16.2708 18.5114 16.2423 18.3881 16.1871C18.2648 16.132 18.1545 16.0514 18.0644 15.9506C17.9744 15.8499 17.9066 15.7313 17.8656 15.6026C17.8245 15.4739 17.8111 15.3379 17.8261 15.2037C17.8261 14.9577 17.8261 14.7117 17.8261 14.3817C17.5181 14.5905 17.2907 14.8982 17.1816 15.254C17.0725 15.6097 17.0882 15.9921 17.2261 16.3377C17.3527 16.6732 17.5852 16.9584 17.8883 17.15C18.1914 17.3416 18.5487 17.4293 18.9061 17.3997C19.258 17.3684 19.5913 17.2278 19.8593 16.9975C20.1272 16.7672 20.3163 16.4589 20.4001 16.1157C20.4847 15.8057 20.4654 15.4765 20.3451 15.1785C20.2249 14.8805 20.0102 14.6301 19.7341 14.4657V14.4537ZM11.1361 14.4537C10.8535 14.6467 10.6437 14.9289 10.5404 15.2553C10.437 15.5816 10.4461 15.9331 10.5661 16.2537C10.68 16.586 10.8963 16.8737 11.1838 17.0755C11.4714 17.2772 11.8155 17.3827 12.1668 17.3767C12.518 17.3707 12.8583 17.2535 13.1389 17.0421C13.4194 16.8306 13.6257 16.5357 13.7281 16.1997C13.8274 15.89 13.8225 15.5563 13.7142 15.2496C13.6058 14.9429 13.4 14.6802 13.1281 14.5017C13.1222 14.9046 13.08 15.3063 13.0021 15.7017C12.9407 15.9052 12.8064 16.079 12.6248 16.1897C12.4432 16.3004 12.2273 16.3403 12.0181 16.3017C11.4001 16.1997 11.2141 15.8457 11.1361 14.4657V14.4537ZM26.3941 14.4537C26.3941 14.7357 26.3941 14.9517 26.3941 15.1677C26.3941 15.8457 26.0221 16.2597 25.4401 16.2657C24.8581 16.2717 24.4921 15.8757 24.4621 15.1857C24.4621 14.9577 24.4621 14.7237 24.4261 14.4357C24.2395 14.5758 24.0847 14.754 23.9719 14.9584C23.8592 15.1629 23.7912 15.3889 23.7723 15.6216C23.7534 15.8542 23.7841 16.0883 23.8623 16.3082C23.9406 16.5281 24.0646 16.729 24.2262 16.8974C24.3878 17.0659 24.5833 17.1981 24.7999 17.2854C25.0164 17.3727 25.2489 17.4131 25.4822 17.4038C25.7154 17.3946 25.9441 17.336 26.153 17.2318C26.3619 17.1277 26.5464 16.9804 26.6941 16.7997C26.8439 16.6323 26.956 16.4347 27.0229 16.2203C27.0899 16.0059 27.1101 15.7797 27.0822 15.5568C27.0544 15.3339 26.9791 15.1196 26.8614 14.9283C26.7438 14.737 26.5865 14.5731 26.4001 14.4477L26.3941 14.4537Z"
                      fill="white"
                    />
                    <path
                      d="M38.2798 15.8399C38.6098 15.8399 38.8798 15.8399 39.1018 15.8399C39.3643 15.8364 39.6181 15.9342 39.8103 16.113C40.0025 16.2918 40.1184 16.5379 40.1338 16.7999C40.143 16.9478 40.143 17.0961 40.1338 17.2439C40.1338 29.1719 40.1338 41.0999 40.1338 53.0279C40.1341 53.4174 40.017 53.798 39.7978 54.1199C39.5643 54.3234 39.2612 54.4288 38.9518 54.4139C30.2478 54.4139 21.5418 54.4139 12.8338 54.4139C11.8378 54.4139 11.5138 53.9099 11.6818 52.5659H12.2818C16.9858 52.5659 21.6838 52.5659 26.3878 52.5659C27.201 52.5928 28.0106 52.4462 28.7627 52.1358C29.5148 51.8254 30.1922 51.3585 30.7498 50.7659C32.6818 48.7739 34.6618 46.8299 36.6298 44.8739C37.1623 44.3602 37.5835 43.7426 37.8673 43.0593C38.1512 42.376 38.2916 41.6417 38.2798 40.9019C38.2798 32.7579 38.2798 24.6179 38.2798 16.4819V15.8399Z"
                      fill="white"
                    />
                    <path
                      d="M52.14 38.9279V39.3659C52.14 41.4239 52.176 43.4819 52.14 45.5399C52.1248 46.3983 51.9998 47.2512 51.768 48.0779C51.216 49.8779 50.568 51.6779 49.968 53.4779C49.8512 53.8802 49.6025 54.2315 49.2619 54.4753C48.9212 54.7191 48.5084 54.8412 48.09 54.8219C47.7193 54.8471 47.3504 54.7514 47.0388 54.5491C46.7272 54.3468 46.4897 54.0488 46.362 53.6999C45.588 51.4799 44.886 49.2359 44.154 47.0039C44.1362 46.9391 44.1241 46.8728 44.118 46.8059C43.902 45.2759 43.89 45.2159 45.108 44.2379C47.394 42.4019 49.716 40.6079 52.02 38.7959L52.14 38.9279Z"
                      fill="white"
                    />
                    <path
                      d="M44.0159 22.7344H52.1399V23.8624C52.1399 24.8404 52.1399 25.8184 52.1399 26.7964C52.1404 27.0025 52.0682 27.2022 51.9359 27.3604C49.5137 29.6642 46.9048 31.7634 44.1359 33.6364C44.092 33.6398 44.0478 33.6398 44.0039 33.6364L44.0159 22.7344Z"
                      fill="white"
                    />
                    <path
                      d="M52.14 20.7598H43.938C43.992 19.6798 43.98 18.6238 44.112 17.5858C44.184 17.2673 44.3236 16.9681 44.5214 16.7083C44.7191 16.4484 44.9703 16.2341 45.258 16.0798C45.3418 16.0176 45.4125 15.9395 45.4661 15.8499C45.5196 15.7603 45.5549 15.661 45.57 15.5578C45.618 14.9578 45.57 14.3578 45.63 13.7578C45.6996 13.1299 46.0138 12.5548 46.5047 12.1572C46.9955 11.7596 47.6234 11.5715 48.252 11.6338C48.8641 11.6757 49.4383 11.9453 49.8614 12.3895C50.2845 12.8338 50.5259 13.4204 50.538 14.0338C50.538 14.2318 50.538 14.4298 50.538 14.6338C50.496 15.3598 50.466 16.0198 51.3 16.4338C51.5591 16.6027 51.7703 16.8355 51.9132 17.1098C52.0561 17.3841 52.126 17.6906 52.116 17.9998C52.164 18.7258 52.116 19.4578 52.116 20.1898L52.14 20.7598Z"
                      fill="white"
                    />
                    <path
                      d="M43.98 42.54V39.258C43.98 38.376 43.98 37.5 43.98 36.618C43.9708 36.4627 44.0053 36.3079 44.0795 36.1711C44.1537 36.0343 44.2647 35.921 44.4 35.844C46.62 34.18 48.82 32.506 51 30.822C51.366 30.546 51.702 30.222 52.104 29.874C52.104 30.06 52.146 30.18 52.146 30.3C52.146 32.226 52.146 34.152 52.146 36.078C52.1428 36.186 52.1178 36.2921 52.0724 36.3901C52.027 36.4881 51.9622 36.5758 51.882 36.648C49.32 38.598 46.746 40.53 44.178 42.468C44.1139 42.4971 44.0477 42.5211 43.98 42.54Z"
                      fill="white"
                    />
                    <path
                      d="M36.2338 42.1976C35.9893 42.6048 35.7103 42.9902 35.3998 43.3496C33.3198 45.4776 31.2118 47.5916 29.0758 49.6916C28.6846 50.0155 28.2717 50.3122 27.8398 50.5796C27.8398 50.2796 27.7978 50.1416 27.7978 49.9796V43.9256C27.7681 43.6755 27.7953 43.4219 27.8776 43.1838C27.9598 42.9457 28.095 42.7294 28.2728 42.551C28.4506 42.3726 28.6665 42.2368 28.9043 42.1538C29.1421 42.0707 29.3956 42.0427 29.6458 42.0716C31.8058 42.0716 33.9658 42.0716 36.1258 42.0716L36.2338 42.1976Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Process_counter_text_div Process_counter_three_text_div">
                  <h3>Create Initial Drafts</h3>
                  <p>
                    After brainstorming, we turn our ideas into real designs.
                    These drafts come from our research and creative sessions.
                    We know that edits will be needed, and that’s completely
                    normal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*counter  four number */}
          <div
            className="socailMediaDesign_Process_div_four"
            data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
            data-aos-delay={4 * 200}
          >
            {/* counter number  */}
            <div className="Process_counter_div">
              <span>4</span>
            </div>
            <div>
              <div className="Process_counter_four_under_circel_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="139"
                  height="130"
                  viewBox="0 0 139 130"
                  fill="none"
                >
                  <path
                    d="M32.6547 106.135L55.9492 101.008L41.0433 83.8071L32.6547 106.135Z"
                    fill="url(#paint0_linear_878_5115)"
                  />
                  <circle
                    cx="46.1414"
                    cy="46.1414"
                    r="46.1414"
                    transform="matrix(-0.907872 0.419246 0.419246 0.907872 99.8916 0.193359)"
                    fill="url(#paint1_linear_878_5115)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_878_5115"
                      x1="35.3807"
                      y1="110.903"
                      x2="55.6365"
                      y2="110.322"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_878_5115"
                      x1="65.0602"
                      y1="-3.50673"
                      x2="106.82"
                      y2="50.8117"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="Process_four_counter_top_circel_div">
                  <img
                    src="/Images/ServicesImage/icons/Revise and Improve.svg"
                    alt=""
                  />
                </div>
                <div className="Process_counter_text_div Process_counter_four_text_div">
                  <h3>Revise and Improve</h3>
                  <p>
                    We share the initial drafts with you for feedback. Please
                    let us know what you like or what you want to change. Your
                    input helps us improve the designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*counter  five number */}
          <div
            className="socailMediaDesign_Process_div_five"
            data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
            data-aos-delay={5 * 200}
          >
            {/* counter number  */}
            <div className="Process_counter_div">
              <span>5</span>
            </div>
            <div>
              <div className="Process_counter_five_under_circel_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="114"
                  height="98"
                  viewBox="0 0 114 98"
                  fill="none"
                >
                  <path
                    d="M7.27404 73.1988L30.787 77.2058L23.4417 55.6624L7.27404 73.1988Z"
                    fill="url(#paint0_linear_879_5172)"
                  />
                  <circle
                    cx="46.1414"
                    cy="46.1414"
                    r="46.1414"
                    transform="matrix(-0.998887 0.0471671 0.0471671 0.998887 109.408 0.306641)"
                    fill="url(#paint1_linear_879_5172)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_879_5172"
                      x1="8.00763"
                      y1="78.6414"
                      x2="26.9958"
                      y2="85.7183"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_879_5172"
                      x1="65.0602"
                      y1="-3.50673"
                      x2="106.82"
                      y2="50.8117"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18C8FF" />
                      <stop offset="1" stop-color="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="Process_five_counter_top_circel_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M8.6582 42.5996C8.8502 42.5996 9.0422 42.5996 9.2582 42.5996H51.3422V50.7296H9.0722C8.9342 50.7296 8.7962 50.7296 8.6582 50.7296V42.5996ZM30.8942 47.4356V45.6956H29.1302V47.4356H30.8942Z"
                      fill="white"
                    />
                    <path
                      d="M37.698 35.8197V21.9717H47.58V40.0017H12.438V22.0017H22.332V35.8197H37.698Z"
                      fill="white"
                    />
                    <path
                      d="M39.0841 20.5857H35.0461V30.5997H25.0081V20.5977H20.9341L30.0001 8.13574L39.0841 20.5857Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Process_counter_text_div Process_counter_five_text_div">
                  <h3>Review Final Output</h3>
                  <p>
                    Once we finish the revisions, we send you the final designs.
                    You can use these on your social media pages. Don’t forget
                    to keep a backup of the files for future use.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* svg outline image  */}
          <div className="socailMediaDesign_Process_svg_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="417px"
              height="108px"
              viewBox="0 0 317 108"
              fill="none"
            >
              <path
                d="M314.71 107.231C306.21 86.5875 293.751 67.8303 278.045 52.0303C262.339 36.2304 243.693 23.6972 223.173 15.1463C202.652 6.59541 180.658 2.19433 158.446 2.19434C136.234 2.19434 114.24 6.59542 93.7194 15.1463C73.1985 23.6972 54.5528 36.2304 38.8468 52.0303C23.1408 67.8303 10.6821 86.5876 2.18213 107.231"
                stroke="#ECF2F2"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SOCIAL MEDIA DESIGN SERVICES?*/}
      <section className="socailMediaDesign_whyChooseServices_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-down">
            <h1>WHY CHOOSE OUR SOCIAL MEDIA DESIGN SERVICES? </h1>
          </div>
        </div>
        <div className="socailMediaDesign_whyChooseService_section">
          {/* Affordable Pricing for Social Media Graphics */}
          <div
            className="socailMediaDesign_whyChooseService_card_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="socailMediaDesign_whyChooseService_card_icon">
              <img
                src="/Images/ServicesImage/icons/Affordable Pricing for Social Media Graphics.svg"
                alt="Affordable Pricing for Social Media Graphics.svg"
              />
            </div>
            <h3>Affordable Pricing for Social Media Graphics</h3>
            <p>
              Our skilled social media designers create eye-catching designs
              that boost engagement and brand awareness. We keep our prices
              reasonable, so you don’t have to worry about your budget. You get
              high-quality design services without spending too much. It’s a
              win-win for your business!
            </p>
          </div>
          {/* Dedicated Design Experts */}
          <div
            className="socailMediaDesign_whyChooseService_card_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="socailMediaDesign_whyChooseService_card_icon">
              <img
                src="/Images/ServicesImage/icons/Dedicated Design Experts.svg"
                alt="Dedicated Design Experts.svg"
              />
            </div>
            <h3>Dedicated industry Experts Designer</h3>
            <p>
              Our team of skilled designers specializes in social media design,
              ensuring the best results for your needs. We handle all designs
              in-house, guaranteeing top quality, consistency, and designs that
              truly work to boost your online presence and engagement.
            </p>
          </div>
          {/* Complete Digital Marketing Solutions*/}
          <div
            className="socailMediaDesign_whyChooseService_card_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="socailMediaDesign_whyChooseService_card_icon">
              <img
                src="/Images/ServicesImage/icons/Complete Digital Marketing Solutions.svg"
                alt="Complete Digital Marketing Solutions.svg"
              />
            </div>
            <h3>Complete Digital Marketing Solutions</h3>
            <p>
              Want your designs to make a big impact? We can help! TOJO GLOBAL
              offers more than just social media design. We handle all aspects
              of digital marketing, so you can get everything you need in one
              place. No need to hire multiple agencies; we’ve got you covered!
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Design Services */}
      <section className="socailMediaDesign_Process_section">
        <div className="searchEngineMarketing_WhoHelp_top_text_div">
          <div data-aos="fade-down">
            <h1>Social Media Design Services</h1>
          </div>
        </div>
        <div className="socailMediaDesign_services_section container">
          {/*01 instagram */}
          <div
            className="socailMediaDesign_services_social_card"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            <div className="socailMediaDesign_services_social_card_image">
              <img
                src="/Images/ServicesImage/icons/Mesa de trabajo 1 copy 2 1.svg"
                alt="socailMediaDesign_services_social_card_image"
              />
              <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
            </div>
            <div className="socailMediaDesign_services_social_card_text">
              <h2>Instagram</h2>
              <p>
                Instagram is popular with younger users and focuses on images.
                Each post needs a video, infographic, or photo. We will help
                your brand look great with professional designs.
              </p>
            </div>
          </div>
          {/*02 Facebook */}
          <div
            className="socailMediaDesign_services_social_card"
            data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
            data-aos-delay={2 * 200}
          >
            <div className="socailMediaDesign_services_social_card_image">
              <img
                src="/Images/ServicesImage/icons/Mesa de trabajo 1 1.svg"
                alt="socailMediaDesign_services_social_card_image"
              />
              <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
            </div>
            <div className="socailMediaDesign_services_social_card_text">
              <h2>Facebook</h2>
              <p>
                Facebook is the largest social media platform today. Get your
                business noticed with eye-catching posts and infographics
                designed just for you.
              </p>
            </div>
          </div>
          {/*03 Pinterest */}
          <div
            className="socailMediaDesign_services_social_card"
            data-aos="fade-right"
            data-aos-delay={3 * 200}
          >
            <div className="socailMediaDesign_services_social_card_image">
              <img
                src="/Images/ServicesImage/icons/Pinterest.svg"
                alt="socailMediaDesign_services_social_card_image"
              />
              <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
            </div>
            <div className="socailMediaDesign_services_social_card_text">
              <h2>Pinterest</h2>
              <p>
                Pinterest relies heavily on images. We will create stunning
                designs for you to pin on your boards and attract more viewers.
              </p>
            </div>
          </div>
          {/*04 YouTube */}
          <div
            className="socailMediaDesign_services_social_card"
            data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
            data-aos-delay={4 * 200}
          >
            <div className="socailMediaDesign_services_social_card_image">
              <img
                src="/Images/ServicesImage/icons/Mesa de trabajo 1 copy 4 1.svg"
                alt="socailMediaDesign_services_social_card_image"
              />
              <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
            </div>
            <div className="socailMediaDesign_services_social_card_text">
              <h2>YouTube</h2>
              <p>
                We design logos and thumbnails for your YouTube channel. Make
                your videos engadgingt with attractive visuals.
              </p>
            </div>
          </div>
          {/*05 LinkedIn */}
          <div
            className="socailMediaDesign_services_social_card"
            data-aos="fade-right"
            data-aos-delay={5 * 200}
          >
            <div className="socailMediaDesign_services_social_card_image">
              <img
                src="/Images/ServicesImage/icons/Mesa de trabajo 1 copy 3 1.svg"
                alt="socailMediaDesign_services_social_card_image"
              />
              <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
            </div>
            <div className="socailMediaDesign_services_social_card_text">
              <h2>LinkedIn</h2>
              <p>
                Your LinkedIn posts should always look professional. We will
                help you create polished images that match your content.
              </p>
            </div>
          </div>
          {/*06 Twitter */}
          <div
            className="socailMediaDesign_services_social_card"
            data-aos={isLargeMobileView ? "fade-up" : " fade-left"}
            data-aos-delay={6 * 200}
          >
            <div className="socailMediaDesign_services_social_card_image">
              <img
                src="/Images/ServicesImage/icons/Mesa de trabajo 1 copy 1.svg"
                alt="socailMediaDesign_services_social_card_image"
              />
              <div className="socailMediaDesign_services_social_card_image_under_gradient"></div>
            </div>
            <div className="socailMediaDesign_services_social_card_text">
              <h2>Twitter</h2>
              <p>
                Twitter limits text, so strong images and graphics can help get
                your message across. Let us design visuals that capture
                attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Need any kind of help with your social media design?  */}
      <section className="container">
        <div
          className="professionalModeration_div professionalService_card_socailMediaDesign_page"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Need any kind of help with your social media design?
            </h1>
            <p className="professionalModeration_service_offers_para">
              We are here for you! Our team can create attractive posts,
              banners, and ads that grab attention. Whether you need a fresh
              look for your Facebook page or a stunning Instagram feed, or in
              any other social media platform, we’ve got you covered. Don’t
              worry, trust us & Let us help you shine on social media!
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

export default SocialMediaDesign;
