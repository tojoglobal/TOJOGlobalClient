import React, { useContext } from "react";
import "../../../Style/ServicesPageStyle/Video/VideoEditing.style.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// all svg file paths are relative to
import ExplainerVideoEditingWhyChooseIcon from "./svg/ExplainerVideoEditingWhyChooseIcon";
import DocumentaryVideoEditingProcesSvg from "./svg/DocumentaryVideoEditingProcesSvg";
import DocumentaryVideoEditingWhyChooseSvg from "./svg/DocumentaryVideoEditingWhyChooseSvg";
import DocumentaryVideoEditingBestFeatureSvg from "./svg/DocumentaryVideoEditingBestFeatureSvg";
import DocumentaryVideoEditingWhyYouNeedSvg from "./svg/DocumentaryVideoEditingWhyYouNeedSvg";
import VfxVideo from "./VfxVideo";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../../../AppContext";

const VideoEditting = () => {
  // appcontex import
  const { isLargeMobileView, isMobileView } = useContext(AppContext);
  // vidoe url
  const VfxVideoUrl =
    "https://res.cloudinary.com/dzhlc6ue8/video/upload/v1731237598/TojoGloablVideo/c7givr2l3htusbwvp5ty.mp4";
  const youtbeVideoUrl =
    "https://res.cloudinary.com/dzhlc6ue8/video/upload/v1731237145/TojoGloablVideo/smtrbefyyew35vngl3ma.mp4";
  const brandVideoUrl =
    "https://res.cloudinary.com/dzhlc6ue8/video/upload/v1731237112/TojoGloablVideo/e03gl5obsfnwopge8eor.mp4";
  const VideoEditVideoUrl =
    "https://res.cloudinary.com/dzhlc6ue8/video/upload/v1731237122/TojoGloablVideo/fly8rtbqlowohvlrwjjh.mp4";

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".webContentWriting_hero_text_part h1", {
      x: -560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
    tl.from(".webContentWriting_hero_text_part p", {
      x: 560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
    tl.from(".hero_btn_style", {
      y: 560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
  });

  return (
    <main className="maindiv">
      <Helmet>
        <title>TOJO Global-Video Editing</title>
      </Helmet>
      {/* web content writing hero section  */}
      <section className="videoEditing_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                <div className="hero_page_strongText">
                  <h2>
                    Bring Your{" "}
                    <span className="headdingGradientText">Vision</span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    to life with TOJO GLOBAL's{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    Video Editing
                  </h3>
                </div>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                    }),
                  }}
                >
                  We deliver professional video editing solutions that turn your
                  raw footage into engaging, high-quality content tailored to
                  captivate your audience.
                </p>{" "}
              </>
            ) : (
              <>
                <h1>
                  Bring Your Vision to Life with TOJO GLOBAL’s Powerful Video
                  Editing
                </h1>
                <p>
                  We deliver professional video editing solutions that turn your
                  raw footage into engaging, high-quality content tailored to
                  captivate your audience.
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
      {/* Video editing may take time, and hiring an editor can be costly.  */}
      <section className="videoEditing_hiring_section container">
        <div className="videoEditing_hiring_main_div">
          <div className="searchEngineMarketing_IncreaseRevenue_main_div_image logoDesign_start_journey_div">
            <div className="videoEditing_hiring_img_div">
              {/* Video editing vidoe  */}
              <div
                className="videoEditong_hiring_video_div"
                data-aos="fade-right"
              >
                <VfxVideo videoUrl={VideoEditVideoUrl} />
              </div>
            </div>
          </div>
          <div
            className="ideoEditing_hiring_text_div "
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
          >
            <h1 className="ideoEditing_hiringTextHeddingStyle">
              Video editing may take time, and hiring an editor can be costly.
            </h1>
            <p
              className="heroTextParaStyle"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              If you’re a YouTuber, digital marketer, or small business creating
              online videos, a video editor is your most valuable asset. You
              might have thought about hiring an in-house editor (which can cost
              a lot), tried managing a freelancer (who might not be reliable),
              or even edited your own videos (like I did before I got burned
              out).{" "}
            </p>
            <p
              className="heroTextParaStyle"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              In the end, these options often fall short. You make videos to
              earn money, enjoy freedom, and have fun creating amazing content,
              not to spend all day at your computer and risk burnout.
            </p>
            <p
              className="heroTextParaStyle"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              With our flat-rate video editing service, you can focus on making
              more videos and better videos. This service will add more value to
              your business than any other tool you’ve tried before. It’s a bold
              claim, but it’s true!
            </p>
          </div>
        </div>
      </section>

      {/*VFX video section */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "-5px",
              }),
            }}
          >
            We offer:
          </h1>
          <h1 className="topHeadingStyle mt-4">
            {" "}
            <span className="headdingGradientText">VFX</span>
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            Visual effects (VFX) are used to create stunning imagery that can’t
            be captured through traditional filming. Whether it's transforming a
            simple scene into a magical landscape or adding realistic digital
            effects, VFX helps tell stories in a way that captivates your
            audience. At TOJO Global, we provide high-quality VFX services that
            bring your ideas to life.
          </p>
        </div>
        <div data-aos="fade-down">
          {/* VFX Video Section */}
          <VfxVideo videoUrl={VfxVideoUrl} />
        </div>

        <div className="vfx_how_it_works_text_div" data-aos="fade-up">
          <h1 className="smallHeadingStyle mt-1">How It Works</h1>
          <p
            className="paraStyle mt-2"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            Our VFX team works closely with you to understand your vision. Once
            we know what you want, we use cutting-edge software to create the
            effects. Whether it's animation, CGI, or compositing, we handle
            everything from start to finish. After completing the effects, we
            review and make sure they fit perfectly into your video or film.
          </p>
        </div>
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle mt-4 mt-md-5">
            Why Choose TOJO Global for VFX Services?
          </h1>
          <p
            className="paraStyle pt-1"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            More than 80% of small businesses use social media, but many of them
            struggle to stand out. One big reason is that they don’t use the
            right graphic designs. With our social media design package, we
            create all the graphics your business needs.
          </p>
        </div>
        <div className="videoEditing_vfx_service_main_div mt-4 mt-md-1">
          {/* 01 Top-Notch Quality */}
          <div
            className="videoEditing_vfx_service_div"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            <div className="videoEditing_vfx_services_svg_div">
              <svg
                viewBox="0 0 147 146"
                fill="none"
                id="videoEditing_vfx_services_svg"
              >
                <g>
                  <ellipse cx="73.5" cy="73" rx="73.5" ry="73" fill="#060044" />
                  <g className="videoEditing_vfx_services_svg_middle_graddint">
                    {/* Default Circle (hidden on hover) */}
                    <g className="circle_default">
                      <circle
                        cx="57"
                        cy="57"
                        r="56.5"
                        fill="#18C8FF"
                        fillOpacity="0.15"
                        stroke="url(#paint0_linear_938_4655)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4655"
                          x1="79.9611"
                          y1="-3.25598"
                          x2="130.643"
                          y2="62.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>

                    {/* Circle that shows on hover */}
                    <g className="circle_hover">
                      <circle
                        cx="56"
                        cy="56"
                        r="56"
                        fill="url(#paint0_linear_938_4649)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4649"
                          x1="78.9611"
                          y1="-4.25598"
                          x2="129.643"
                          y2="61.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>
                  </g>
                  <image
                    href="/Images/ServicesImage/videoEditing/vfx-Topnotch.svg"
                    className="videoEditing_vfx_services_svg_middle_icon"
                  />
                </g>
              </svg>
            </div>
            <h4>Top-Notch Quality</h4>
            <p>
              Our experienced VFX artists use the latest tools and techniques to
              create stunning effects that captivate your audience.
            </p>
          </div>
          {/*02 Tailored to Your Needs */}
          <div
            className="videoEditing_vfx_service_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={2 * 200}
          >
            <div className="videoEditing_vfx_services_svg_div">
              <svg
                viewBox="0 0 147 146"
                fill="none"
                id="videoEditing_vfx_services_svg"
              >
                <g>
                  <ellipse cx="73.5" cy="73" rx="73.5" ry="73" fill="#060044" />
                  <g className="videoEditing_vfx_services_svg_middle_graddint">
                    {/* Default Circle (hidden on hover) */}
                    <g className="circle_default">
                      <circle
                        cx="57"
                        cy="57"
                        r="56.5"
                        fill="#18C8FF"
                        fillOpacity="0.15"
                        stroke="url(#paint0_linear_938_4655)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4655"
                          x1="79.9611"
                          y1="-3.25598"
                          x2="130.643"
                          y2="62.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>

                    {/* Circle that shows on hover */}
                    <g className="circle_hover">
                      <circle
                        cx="56"
                        cy="56"
                        r="56"
                        fill="url(#paint0_linear_938_4649)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4649"
                          x1="78.9611"
                          y1="-4.25598"
                          x2="129.643"
                          y2="61.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>
                  </g>
                  <image
                    href="/Images/ServicesImage/videoEditing/vfx_tailored.svg"
                    className="videoEditing_vfx_services_svg_middle_icon"
                  />
                </g>
              </svg>
            </div>
            <h4>Tailored to Your Needs</h4>
            <p>
              We listen to your ideas and turn them into reality. Our VFX
              services are customized to match your style and goals.
            </p>
          </div>
          {/*03 Seamless Integration */}
          <div
            className="videoEditing_vfx_service_div"
            data-aos="fade-right"
            data-aos-delay={3 * 200}
          >
            <div className="videoEditing_vfx_services_svg_div">
              <svg
                viewBox="0 0 147 146"
                fill="none"
                id="videoEditing_vfx_services_svg"
              >
                <g>
                  <ellipse cx="73.5" cy="73" rx="73.5" ry="73" fill="#060044" />
                  <g className="videoEditing_vfx_services_svg_middle_graddint">
                    {/* Default Circle (hidden on hover) */}
                    <g className="circle_default">
                      <circle
                        cx="57"
                        cy="57"
                        r="56.5"
                        fill="#18C8FF"
                        fillOpacity="0.15"
                        stroke="url(#paint0_linear_938_4655)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4655"
                          x1="79.9611"
                          y1="-3.25598"
                          x2="130.643"
                          y2="62.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>

                    {/* Circle that shows on hover */}
                    <g className="circle_hover">
                      <circle
                        cx="56"
                        cy="56"
                        r="56"
                        fill="url(#paint0_linear_938_4649)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4649"
                          x1="78.9611"
                          y1="-4.25598"
                          x2="129.643"
                          y2="61.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>
                  </g>
                  <image
                    href="/Images/ServicesImage/videoEditing/vfxintegration.svg"
                    className="videoEditing_vfx_services_svg_middle_icon"
                  />
                </g>
              </svg>
            </div>
            <h4>Seamless Integration</h4>
            <p>
              We ensure that the visual effects blend seamlessly with your
              existing content, creating a flawless final product.
            </p>
          </div>
          {/*04 On-Time Delivery */}
          <div
            className="videoEditing_vfx_service_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={4 * 200}
          >
            <div className="videoEditing_vfx_services_svg_div">
              <svg
                viewBox="0 0 147 146"
                fill="none"
                id="videoEditing_vfx_services_svg"
              >
                <g>
                  <ellipse cx="73.5" cy="73" rx="73.5" ry="73" fill="#060044" />
                  <g className="videoEditing_vfx_services_svg_middle_graddint">
                    {/* Default Circle (hidden on hover) */}
                    <g className="circle_default">
                      <circle
                        cx="57"
                        cy="57"
                        r="56.5"
                        fill="#18C8FF"
                        fillOpacity="0.15"
                        stroke="url(#paint0_linear_938_4655)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4655"
                          x1="79.9611"
                          y1="-3.25598"
                          x2="130.643"
                          y2="62.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>

                    {/* Circle that shows on hover */}
                    <g className="circle_hover">
                      <circle
                        cx="56"
                        cy="56"
                        r="56"
                        fill="url(#paint0_linear_938_4649)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_938_4649"
                          x1="78.9611"
                          y1="-4.25598"
                          x2="129.643"
                          y2="61.6682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18C8FF" />
                          <stop offset="1" stopColor="#C608FF" />
                        </linearGradient>
                      </defs>
                    </g>
                  </g>
                  <image
                    href="/Images/ServicesImage/videoEditing/vfxdelevery.svg"
                    className="videoEditing_vfx_services_svg_middle_icon"
                  />
                </g>
              </svg>
            </div>
            <h4>On-Time Delivery</h4>
            <p>
              We respect your deadlines and always deliver on time without
              compromising quality.
            </p>
          </div>
        </div>
      </section>

      {/*Youtube video  section */}
      <section className="container">
        {/*  YouTube Video*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle mt-5 mt-md-5">
            {" "}
            <span className="headdingGradientText">YouTube</span> Video
          </h1>
          <p
            className="paraStyle mt-1 mt-md-4"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            YouTube is a powerful platform to share your message, grow your
            brand, and connect with your audience. But creating professional
            videos takes time and skill. That’s where our YouTube video editing
            services come in.
          </p>
        </div>
        {/* intro video */}

        {/* Youtube Video Section */}
        <div data-aos="fade-down">
          <VfxVideo videoUrl={youtbeVideoUrl} />
        </div>

        {/* What is YouTube Video Editing? */}
        <div className="vfx_how_it_works_text_div" data-aos="fade-up">
          <h1 className="smallHeadingStyle mt-1 mt-md-5">
            What is YouTube Video Editing?
          </h1>
          <p
            className="paraStyle mt-1 mt-md-3"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            YouTube video editing is the process of turning raw video footage
            into a polished, engaging video. It involves cutting unnecessary
            parts, adding effects, transitions, and improving the overall look
            and feel of the video.
          </p>
        </div>
        {/* How Does It Work? */}
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle mt-4 mt-md-5">How Does It Work?</h1>
        </div>
        {/* How Does It Work process */}
        <div className="youtube_video_editing_services_main_div mt-2">
          {/* 01 Send Us Your Footage  */}
          <div
            className="youtube_video_editing_services_div"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <img
              src="/Images/ServicesImage/videoEditing/youtubeVideoWork1.svg"
              alt=""
            />
            <div className="youtube_video_editing_services_text_div">
              <h4>Send Us Your Footage</h4>
              <p>You provide us with your raw video files.</p>
            </div>
          </div>
          {/*02 We Edit It for You  */}
          <div
            className="youtube_video_editing_services_div"
            data-aos="fade-up"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/videoEditing/youtuberVideoWork2.svg"
              alt=""
            />
            <div className="youtube_video_editing_services_text_div">
              <h4>We Edit It for You</h4>
              <p>Our Expert editors refine your video for visual appeal.</p>
            </div>
          </div>
          {/*03 Get the Final Video */}
          <div
            className="youtube_video_editing_services_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/videoEditing/youtuberVideoWork3.svg"
              alt=""
            />
            <div className="youtube_video_editing_services_text_div">
              <h4>Get the Final Video</h4>
              <p>Receive a polished, upload-ready video for YouTube.</p>
            </div>
          </div>
        </div>
        {/* Why Choose TOJO Global? */}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle mt-4 mt-md-5">
            Why Choose TOJO Global?{" "}
          </h1>
        </div>
        {/* why choose the youtube video editor */}
        <div
          className="whyChoose_youtube_video_editor_main_div"
          style={{
            ...(isMobileView && {
              paddingTop: "0px",
              marginTop: "-15px",
              rowGap: "0px",
            }),
          }}
        >
          {/*01 Professional Editing */}
          <div
            className="whyChoose_youtube_video_editor_div"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            <div className="whyChoose_youtube_video_editor_imageAndText_div">
              <div className="whyChoose_youtube_video_editor_imageAndgradientSvg_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="whychooser_youtebe_video_editor_svg"
                  viewBox="0 0 233 233"
                  fill="none"
                >
                  <g filter="url(#filter0_f_1282_4475)">
                    <circle
                      cx="116.5"
                      cy="116.5"
                      r="46.5"
                      fill="url(#paint0_linear_1282_4475)"
                    />
                  </g>
                  <circle
                    cx="116.5"
                    cy="116.5"
                    r="46.5"
                    fill="url(#paint1_linear_1282_4475)"
                  />
                  <defs>
                    <filter
                      id="filter0_f_1282_4475"
                      x="0"
                      y="0"
                      width="233"
                      height="233"
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
                        stdDeviation="35"
                        result="effect1_foregroundBlur_1282_4475"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <img
                  src="/Images/ServicesImage/videoEditing/ytEditing1.svg"
                  alt="youtube video editor "
                />
              </div>
              <div className="whyChoose_youtube_video_editor_Text_div">
                <h4
                  className="smallHeadingStyle"
                  style={{
                    ...(isMobileView && {
                      fontSize: "18px",
                      lineHeight: "125%",
                    }),
                  }}
                >
                  Professional Editing
                </h4>
                <p
                  className="video_paraStyle"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We have a skilled team of editors who make your videos look
                  top-notch.
                </p>
              </div>
            </div>
          </div>

          {/*02 Tailored to Your Style  */}
          <div
            className="whyChoose_youtube_video_editor_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={2 * 200}
          >
            <div className="whyChoose_youtube_video_editor_imageAndText_div">
              <div className="whyChoose_youtube_video_editor_imageAndgradientSvg_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="whychooser_youtebe_video_editor_svg"
                  viewBox="0 0 233 233"
                  fill="none"
                >
                  <g filter="url(#filter0_f_1282_4475)">
                    <circle
                      cx="116.5"
                      cy="116.5"
                      r="46.5"
                      fill="url(#paint0_linear_1282_4475)"
                    />
                  </g>
                  <circle
                    cx="116.5"
                    cy="116.5"
                    r="46.5"
                    fill="url(#paint1_linear_1282_4475)"
                  />
                  <defs>
                    <filter
                      id="filter0_f_1282_4475"
                      x="0"
                      y="0"
                      width="233"
                      height="233"
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
                        stdDeviation="35"
                        result="effect1_foregroundBlur_1282_4475"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <img
                  src="/Images/ServicesImage/videoEditing/ytStyle2.svg"
                  alt="youtube video editor "
                />
              </div>
              <div className="whyChoose_youtube_video_editor_Text_div">
                <h4
                  className="smallHeadingStyle"
                  style={{
                    ...(isMobileView && {
                      fontSize: "18px",
                      lineHeight: "125%",
                    }),
                  }}
                >
                  Tailored to Your Style
                </h4>
                <p
                  className="video_paraStyle"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We follow your guidelines to ensure the video matches your
                  brand's style and tone.
                </p>
              </div>
            </div>
          </div>
          {/*03 Fast Turnaround */}
          <div
            className="whyChoose_youtube_video_editor_div"
            data-aos="fade-right"
            data-aos-delay={3 * 200}
          >
            <div className="whyChoose_youtube_video_editor_imageAndText_div">
              <div className="whyChoose_youtube_video_editor_imageAndgradientSvg_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="whychooser_youtebe_video_editor_svg"
                  viewBox="0 0 233 233"
                  fill="none"
                >
                  <g filter="url(#filter0_f_1282_4475)">
                    <circle
                      cx="116.5"
                      cy="116.5"
                      r="46.5"
                      fill="url(#paint0_linear_1282_4475)"
                    />
                  </g>
                  <circle
                    cx="116.5"
                    cy="116.5"
                    r="46.5"
                    fill="url(#paint1_linear_1282_4475)"
                  />
                  <defs>
                    <filter
                      id="filter0_f_1282_4475"
                      x="0"
                      y="0"
                      width="233"
                      height="233"
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
                        stdDeviation="35"
                        result="effect1_foregroundBlur_1282_4475"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <img
                  src="/Images/ServicesImage/videoEditing/ytfAST 3.svg"
                  alt="youtube video editor "
                />
              </div>
              <div className="whyChoose_youtube_video_editor_Text_div">
                <h4
                  className="smallHeadingStyle"
                  style={{
                    ...(isMobileView && {
                      fontSize: "18px",
                      lineHeight: "125%",
                    }),
                  }}
                >
                  Fast Turnaround
                </h4>
                <p
                  className="video_paraStyle"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  We deliver high-quality edited videos quickly, so you never
                  miss a deadline.
                </p>
              </div>
            </div>
          </div>
          {/*04 Affordable Pricing */}
          <div
            className="whyChoose_youtube_video_editor_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={4 * 200}
          >
            <div className="whyChoose_youtube_video_editor_imageAndText_div">
              <div className="whyChoose_youtube_video_editor_imageAndgradientSvg_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="whychooser_youtebe_video_editor_svg"
                  viewBox="0 0 233 233"
                  fill="none"
                >
                  <g filter="url(#filter0_f_1282_4475)">
                    <circle
                      cx="116.5"
                      cy="116.5"
                      r="46.5"
                      fill="url(#paint0_linear_1282_4475)"
                    />
                  </g>
                  <circle
                    cx="116.5"
                    cy="116.5"
                    r="46.5"
                    fill="url(#paint1_linear_1282_4475)"
                  />
                  <defs>
                    <filter
                      id="filter0_f_1282_4475"
                      x="0"
                      y="0"
                      width="233"
                      height="233"
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
                        stdDeviation="35"
                        result="effect1_foregroundBlur_1282_4475"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1282_4475"
                      x1="135.566"
                      y1="66.466"
                      x2="177.65"
                      y2="121.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <img
                  src="/Images/ServicesImage/videoEditing/ytPricing4.svg"
                  alt="youtube video editor "
                />
              </div>
              <div className="whyChoose_youtube_video_editor_Text_div">
                <h4
                  className="smallHeadingStyle"
                  style={{
                    ...(isMobileView && {
                      fontSize: "18px",
                      lineHeight: "125%",
                    }),
                  }}
                >
                  Affordable Pricing
                </h4>
                <p
                  className="video_paraStyle"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Our services are budget-friendly without compromising on
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brand vidoe  */}
      <section className="container">
        {/*  brand into Video text*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "-19px",
              }),
            }}
          >
            <span className="headdingGradientText">Brand</span> Video 
          </h1>
          <p
            className="paraStyle mt-1 mt-md-4"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            Brand video editing is the process of turning raw video footage into
            a professional video that tells your brand’s story. It helps your
            audience connect with your brand, products, or services by creating
            a strong and clear message.
          </p>
        </div>
        {/* brand vidoe  intro video */}
        <div data-aos="fade-down">
          <VfxVideo videoUrl={brandVideoUrl} />
        </div>
        {/*  How It Works Video Editing */}
        <div className="vfx_how_it_works_text_div" data-aos="fade-up">
          <h1 className="smallHeadingStyle mt-2 mt-md-5">How It Works</h1>
          <p
            className="paraStyle mt-1"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            our talented video editors work with your raw footage and follow
            your brand’s guidelines to create a video that meets your goals. We
            focus on details like transitions, sound, and special effects to
            make your brand video polished and professional.
          </p>
        </div>
        <section className="brand_video_editing_offer_main_section">
          {/* What We Offer brand video editing */}
          <div className="sectionTopTextstyle" data-aos="fade-down">
            <h1 className="topHeadingStyle mt-2 md-mt-5">What We Offer </h1>
          </div>
          {/* What We Offer brand video editing */}
          <div className="brand_video_editing_offer_main_div">
            {/*01 High Quality */}
            <div
              className="brand_video_editing_offer_div"
              data-aos="fade-right"
              data-aos-delay={1 * 200}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="185"
                  height="162"
                  viewBox="0 0 185 162"
                  fill="none"
                >
                  <g>
                    <path
                      d="M119.272 0H62.7287C51.8988 0 41.9096 5.83697 36.5929 15.2719L8.219 65.6233C3.11048 74.6887 3.06446 85.7539 8.09741 94.8615L36.639 146.51C41.9203 156.067 51.9773 162 62.8965 162H119.101C129.658 162 139.438 156.451 144.853 147.389L175.713 95.7492C181.425 86.1915 181.373 74.2566 175.579 64.7487L144.89 14.3887C139.445 5.45274 129.737 0 119.272 0Z"
                      fill="url(#paint0_linear_1874_4853)"
                    />
                    <path
                      d="M109.908 18H72.8897C62.0952 18 52.1329 23.7992 46.8025 33.1859L28.3309 65.714C23.1579 74.8234 23.1114 85.9715 28.2081 95.1238L46.8479 128.596C52.1433 138.105 62.1737 144 73.0579 144H109.737C120.257 144 130.009 138.489 135.436 129.477L155.588 96.0132C161.37 86.412 161.318 74.3885 155.453 64.8378L135.472 32.3011C130.016 23.415 120.336 18 109.908 18Z"
                      fill="#060044"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1874_4853"
                      x1="130.427"
                      y1="-6.15598"
                      x2="200.709"
                      y2="98.2422"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                  <image
                    className="brand_video_editing_offer_div_icon"
                    height="200"
                    width="300"
                    href="/Images/ServicesImage/videoEditing/brandVideoEditinghigh-quality.png"
                  />
                </svg>
              </div>
              <div className="brand_video_editing_offer_text_Main_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="578"
                  height="146"
                  viewBox="0 0 578 146"
                  fill="none"
                >
                  <path
                    d="M1.39819 14.5359C-1.98789 7.88296 2.84524 0 10.3103 0H519.533C522.657 0 525.602 1.46022 527.493 3.9472L575.398 66.9472C578.117 70.5241 578.117 75.4759 575.398 79.0528L527.537 141.995C525.621 144.515 522.626 145.978 519.461 145.941L10.7758 140.026C3.20149 139.938 -1.52869 131.788 2.1519 125.168L28.568 77.6517C30.1847 74.7437 30.2492 71.222 28.74 68.2568L1.39819 14.5359Z"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                </svg>
                <div className="brand_video_editing_offer_text_div">
                  <h4>Customization</h4>
                  <p>
                    We offer customizable brand video editing solutions to suit
                    your brand's needs and goals.
                  </p>
                </div>
              </div>
            </div>
            {/*02 Custom-Made*/}
            <div
              className="brand_video_editing_offer_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
              data-aos-delay={2 * 200}
            >
              <div className="brand_video_editing_offer_text_Main_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="578"
                  height="146"
                  viewBox="0 0 578 146"
                  fill="none"
                >
                  <path
                    d="M576.602 14.5359C579.988 7.88296 575.155 0 567.69 0H58.4672C55.3428 0 52.3981 1.46022 50.507 3.9472L2.60248 66.9472C-0.117371 70.5241 -0.117371 75.4759 2.60248 79.0528L50.463 141.995C52.3789 144.515 55.3745 145.978 58.5394 145.941L567.224 140.026C574.799 139.938 579.529 131.788 575.848 125.168L549.432 77.6517C547.815 74.7437 547.751 71.222 549.26 68.2568L576.602 14.5359Z"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                </svg>
                <div className="brand_video_editing_offer_text_div brand_video_editing_offer_text_right_div">
                  <h4>Custom-Made</h4>
                  <p>
                    Each video is edited based on your vision and needs,
                    ensuring it matches your brand style and goals.
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="185"
                  height="162"
                  viewBox="0 0 185 162"
                  fill="none"
                >
                  <g>
                    <path
                      d="M119.272 0H62.7287C51.8988 0 41.9096 5.83697 36.5929 15.2719L8.219 65.6233C3.11048 74.6887 3.06446 85.7539 8.09741 94.8615L36.639 146.51C41.9203 156.067 51.9773 162 62.8965 162H119.101C129.658 162 139.438 156.451 144.853 147.389L175.713 95.7492C181.425 86.1915 181.373 74.2566 175.579 64.7487L144.89 14.3887C139.445 5.45274 129.737 0 119.272 0Z"
                      fill="url(#paint0_linear_1874_4853)"
                    />
                    <path
                      d="M109.908 18H72.8897C62.0952 18 52.1329 23.7992 46.8025 33.1859L28.3309 65.714C23.1579 74.8234 23.1114 85.9715 28.2081 95.1238L46.8479 128.596C52.1433 138.105 62.1737 144 73.0579 144H109.737C120.257 144 130.009 138.489 135.436 129.477L155.588 96.0132C161.37 86.412 161.318 74.3885 155.453 64.8378L135.472 32.3011C130.016 23.415 120.336 18 109.908 18Z"
                      fill="#060044"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1874_4853"
                      x1="130.427"
                      y1="-6.15598"
                      x2="200.709"
                      y2="98.2422"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                  <image
                    className="brand_video_editing_offer_div_icon"
                    height="200"
                    width="300"
                    href="/Images/ServicesImage/videoEditing/brandVideoEditinCustom-made2.png"
                  />
                </svg>
              </div>
            </div>
            {/*03 Quick Turnaround */}
            <div
              className="brand_video_editing_offer_div"
              data-aos="fade-right"
              data-aos-delay={3 * 200}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="185"
                  height="162"
                  viewBox="0 0 185 162"
                  fill="none"
                >
                  <g>
                    <path
                      d="M119.272 0H62.7287C51.8988 0 41.9096 5.83697 36.5929 15.2719L8.219 65.6233C3.11048 74.6887 3.06446 85.7539 8.09741 94.8615L36.639 146.51C41.9203 156.067 51.9773 162 62.8965 162H119.101C129.658 162 139.438 156.451 144.853 147.389L175.713 95.7492C181.425 86.1915 181.373 74.2566 175.579 64.7487L144.89 14.3887C139.445 5.45274 129.737 0 119.272 0Z"
                      fill="url(#paint0_linear_1874_4853)"
                    />
                    <path
                      d="M109.908 18H72.8897C62.0952 18 52.1329 23.7992 46.8025 33.1859L28.3309 65.714C23.1579 74.8234 23.1114 85.9715 28.2081 95.1238L46.8479 128.596C52.1433 138.105 62.1737 144 73.0579 144H109.737C120.257 144 130.009 138.489 135.436 129.477L155.588 96.0132C161.37 86.412 161.318 74.3885 155.453 64.8378L135.472 32.3011C130.016 23.415 120.336 18 109.908 18Z"
                      fill="#060044"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1874_4853"
                      x1="130.427"
                      y1="-6.15598"
                      x2="200.709"
                      y2="98.2422"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                  <image
                    className="brand_video_editing_offer_div_icon"
                    height="200"
                    width="300"
                    href="/Images/ServicesImage/videoEditing/brandVideoEditinQuick-Turnaround3.png"
                  />
                </svg>
              </div>
              <div className="brand_video_editing_offer_text_Main_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="578"
                  height="146"
                  viewBox="0 0 578 146"
                  fill="none"
                >
                  <path
                    d="M1.39819 14.5359C-1.98789 7.88296 2.84524 0 10.3103 0H519.533C522.657 0 525.602 1.46022 527.493 3.9472L575.398 66.9472C578.117 70.5241 578.117 75.4759 575.398 79.0528L527.537 141.995C525.621 144.515 522.626 145.978 519.461 145.941L10.7758 140.026C3.20149 139.938 -1.52869 131.788 2.1519 125.168L28.568 77.6517C30.1847 74.7437 30.2492 71.222 28.74 68.2568L1.39819 14.5359Z"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                </svg>
                <div className="brand_video_editing_offer_text_div">
                  <h4>Quick Turnaround</h4>
                  <p>
                    We understand the importance of time, so we deliver your
                    edited videos quickly without compromising on quality.
                  </p>
                </div>
              </div>
            </div>
            {/*04 SEO-Optimized Videos*/}
            <div
              className="brand_video_editing_offer_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
              data-aos-delay={1 * 200}
            >
              <div className="brand_video_editing_offer_text_Main_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="578"
                  height="146"
                  viewBox="0 0 578 146"
                  fill="none"
                >
                  <path
                    d="M576.602 14.5359C579.988 7.88296 575.155 0 567.69 0H58.4672C55.3428 0 52.3981 1.46022 50.507 3.9472L2.60248 66.9472C-0.117371 70.5241 -0.117371 75.4759 2.60248 79.0528L50.463 141.995C52.3789 144.515 55.3745 145.978 58.5394 145.941L567.224 140.026C574.799 139.938 579.529 131.788 575.848 125.168L549.432 77.6517C547.815 74.7437 547.751 71.222 549.26 68.2568L576.602 14.5359Z"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                </svg>
                <div className="brand_video_editing_offer_text_div brand_video_editing_offer_text_right_div">
                  <h4>SEO-Optimized Videos</h4>
                  <p>
                    Our team can optimize your video content for SEO, helping
                    your brand reach a wider audience on search engines and
                    social platforms.
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="185"
                  height="162"
                  viewBox="0 0 185 162"
                  fill="none"
                >
                  <g>
                    <path
                      d="M119.272 0H62.7287C51.8988 0 41.9096 5.83697 36.5929 15.2719L8.219 65.6233C3.11048 74.6887 3.06446 85.7539 8.09741 94.8615L36.639 146.51C41.9203 156.067 51.9773 162 62.8965 162H119.101C129.658 162 139.438 156.451 144.853 147.389L175.713 95.7492C181.425 86.1915 181.373 74.2566 175.579 64.7487L144.89 14.3887C139.445 5.45274 129.737 0 119.272 0Z"
                      fill="url(#paint0_linear_1874_4853)"
                    />
                    <path
                      d="M109.908 18H72.8897C62.0952 18 52.1329 23.7992 46.8025 33.1859L28.3309 65.714C23.1579 74.8234 23.1114 85.9715 28.2081 95.1238L46.8479 128.596C52.1433 138.105 62.1737 144 73.0579 144H109.737C120.257 144 130.009 138.489 135.436 129.477L155.588 96.0132C161.37 86.412 161.318 74.3885 155.453 64.8378L135.472 32.3011C130.016 23.415 120.336 18 109.908 18Z"
                      fill="#060044"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1874_4853"
                      x1="130.427"
                      y1="-6.15598"
                      x2="200.709"
                      y2="98.2422"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                  <image
                    className="brand_video_editing_offer_div_icon"
                    height="200"
                    width="300"
                    href="/Images/ServicesImage/videoEditing/brandVideoEditinVideo-seo4.png"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us? */}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle mt-4">Why Choose Us? </h1>
        </div>
        {/*  Why Choose Us brand video editing */}
        <div className="brand_video_editing_choose_main_div">
          {/*01 Demand Generation */}
          <div
            className="brand_video_editing_choose_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="brand_video_editing_choose_text_icon_div">
              <img
                src="/Images/ServicesImage/videoEditing/brand_video_editing_choose_demand1svg.svg"
                alt="brand_video_editing_choose_demandsvg"
              />
              <h4>Demand Generation</h4>
              <p
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Grow your brand awareness and market share with strategic
                demand-generation methods.
              </p>
            </div>
          </div>
          {/* 02 LinkedIn Lead Generation*/}
          <div
            className="brand_video_editing_choose_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="brand_video_editing_choose_text_icon_div">
              <img
                src="/Images/ServicesImage/videoEditing/brand_video_editing_choose_text_icon_divLinkdin2.svg"
                alt="brand_video_editing_choose_demandsvg"
              />
              <h4>LinkedIn Lead Generation</h4>
              <p>
                Use LinkedIn to connect with more prospects and build interest
                in your brand.
              </p>
            </div>
          </div>
          {/* 03 IT Lead Generation*/}
          <div
            className="brand_video_editing_choose_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="brand_video_editing_choose_text_icon_div">
              <img
                src="/Images/ServicesImage/videoEditing/brand_video_editing_choose_text_icon_divIt.svg"
                alt="brand_video_editing_choose_demandsvg"
              />
              <h4>IT Lead Generation</h4>
              <p>
                Grow your brand awareness and market share with strategic
                demand-generation methods.
              </p>
            </div>
          </div>
          {/*04 Analytics & Reporting*/}
          <div
            className="brand_video_editing_choose_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="brand_video_editing_choose_text_icon_div">
              <img
                src="/Images/ServicesImage/videoEditing/brand_video_editing_choose_text_icon_divAnalysis.svg"
                alt="brand_video_editing_choose_demandsvg"
              />
              <h4>Analytics & Reporting</h4>
              <p className="whatIs_uiuxDesign_services_text_subHeading ">
                Use LinkedIn to connect with more prospects and build interest
                in your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* prodcast video editing */}
      <section className="container prodcast_video_editing_section">
        {/*  prodcast into Video text*/}
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle mt-5">
            {" "}
            <span className="headdingGradientText">Podcast</span> Video
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            Podcast video editing is an essential step in creating engaging and
            professional video content for your audience. It enhances the
            overall quality of your podcast, making it look polished and
            captivating.  TOJO Global offer podcast video editing services that
            simplify the process, saving you time and effort.
          </p>
        </div>
        {/*01 prodcast video editing image div */}
        <div
          className="prodCast_videoEditing_main_div"
          data-aos="fade-up"
          data-aos-delay={1 * 200}
        >
          <img
            src="/Images/ServicesImage/videoEditing/podcast-video-editing-is-the-process-of-cleaning-u 2.png"
            alt="prodcast video editing image"
          />
          {/*  prodcast video div */}
          <div className="prodCast_videoEditing_div">
            <h4>What Is Podcast Video Editing?</h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              Podcast video editing is the process of cleaning up raw
              recordings, adding visual elements, and ensuring smooth
              transitions between scenes. This helps your podcast look more
              professional, keeping your audience engaged from start to finish.
            </p>
          </div>
          <div className="prodCast_videoEditing_gradient_div"></div>
        </div>
        {/* make a section  */}
        <section className="brand_video_editing_offer_main_section">
          {/*  prodcast How It Works */}
          <div className="sectionTopTextstyle" data-aos="fade-up">
            <h1 className="topHeadingStyle mt-5">How It Works</h1>
            <p className="paraStyle">
              Our podcast video editing service follows a simple process
            </p>
          </div>
          {/* prodcast video processing step */}
          <div className="prodcast_video_editing_process_main_div">
            {/* process 01 Submit Your Raw Footage */}
            <div
              className="prodcast_video_editing_process_div"
              data-aos="fade-down"
              data-aos-delay={1 * 200}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 169 184"
                fill="none"
                className="prodcast_video_editing_process_SvgElement"
              >
                <g>
                  <path
                    d="M168.202 84.6053C168.202 95.6125 166.034 106.512 161.822 116.681C157.61 126.85 151.436 136.09 143.653 143.874C135.869 151.657 126.629 157.831 116.46 162.043C106.291 166.256 95.3913 168.424 84.3841 168.424C73.377 168.424 62.4776 166.255 52.3083 162.043C42.139 157.831 32.8989 151.657 25.1157 143.874C17.3325 136.09 11.1585 126.85 6.9462 116.681C2.73394 106.512 0.565917 95.6125 0.565918 84.6053H13.3137C13.3137 93.9384 15.152 103.18 18.7236 111.803C22.2952 120.425 27.5302 128.26 34.1297 134.86C40.7292 141.459 48.564 146.694 57.1866 150.266C65.8093 153.837 75.051 155.676 84.3841 155.676C93.7172 155.676 102.959 153.837 111.582 150.266C120.204 146.694 128.039 141.459 134.639 134.86C141.238 128.26 146.473 120.425 150.045 111.803C153.616 103.18 155.455 93.9384 155.455 84.6053H168.202Z"
                    fill="url(#paint0_linear_1123_5872)"
                  />
                  <circle
                    cx="84.681"
                    cy="84.319"
                    r="71.319"
                    transform="rotate(90 84.681 84.319)"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                  <circle
                    cx="84.752"
                    cy="156.292"
                    r="27.5718"
                    transform="rotate(90 84.752 156.292)"
                    fill="url(#paint1_linear_1123_5872)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1123_5872"
                      x1="118.751"
                      y1="-5.58305"
                      x2="194.61"
                      y2="93.0892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1123_5872"
                      x1="68.1428"
                      y1="182.018"
                      x2="61.4903"
                      y2="141.621"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="prodcast_videoEditing_process_svg_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVideoProcessRaw1.svg" />
                </g>

                <g className="prodcast_videoEditing_process_svg_number">
                  <image href="/Images/ServicesImage/videoEditing/prodCastProcessStep01.svg" />
                </g>
                <g className="prodcast_videoEditing_process_svg_top_ployline">
                  <image href="/Images/ServicesImage/videoEditing/procastVideoEditing_TopPloyLineVector.svg" />
                </g>
              </svg>
              <div className="prodcast_video_editing_process_top_text_div">
                <h4 className="elementHeadingText">Submit Your Raw Footage</h4>
                <p className="elementParaText">
                  Send us your podcast recordings and any additional materials
                  you want to include.
                </p>
              </div>
            </div>
            {/* process  02 Customization*/}
            <div
              className="prodcast_video_editing_process_div"
              data-aos="fade-up"
              data-aos-delay={2 * 200}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 169 184"
                fill="none"
                className="prodcast_video_editing_process_SvgElement"
              >
                <g>
                  <path
                    d="M0.831353 100.049C0.831352 89.0418 2.99937 78.1424 7.21163 67.9732C11.4239 57.8039 17.5979 48.5638 25.3811 40.7806C33.1644 32.9973 42.4044 26.8233 52.5737 22.6111C62.743 18.3988 73.6424 16.2308 84.6496 16.2308C95.6567 16.2308 106.556 18.3988 116.725 22.6111C126.895 26.8233 136.135 32.9973 143.918 40.7806C151.701 48.5638 157.875 57.8039 162.087 67.9731C166.3 78.1424 168.468 89.0418 168.468 100.049L155.72 100.049C155.72 90.7159 153.882 81.4742 150.31 72.8515C146.738 64.2288 141.503 56.3941 134.904 49.7946C128.304 43.1951 120.47 37.9601 111.847 34.3884C103.224 30.8168 93.9827 28.9785 84.6496 28.9785C75.3165 28.9785 66.0747 30.8168 57.4521 34.3885C48.8294 37.9601 40.9947 43.1951 34.3952 49.7946C27.7957 56.3941 22.5606 64.2288 18.989 72.8515C15.4174 81.4742 13.5791 90.7159 13.5791 100.049L0.831353 100.049Z"
                    fill="url(#paint0_linear_1123_5873)"
                  />
                  <circle
                    cx="84.319"
                    cy="100.683"
                    r="71.319"
                    transform="rotate(-90 84.319 100.683)"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                  <circle
                    cx="84.2817"
                    cy="28.3618"
                    r="27.5718"
                    transform="rotate(-90 84.2817 28.3618)"
                    fill="url(#paint1_linear_1123_5873)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1123_5873"
                      x1="50.2825"
                      y1="190.237"
                      x2="-25.5759"
                      y2="91.5652"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1123_5873"
                      x1="67.0968"
                      y1="53.5774"
                      x2="61.4179"
                      y2="13.0318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="prodcast_videoEditing_process_bottom_svg_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVideoProcessCustomaization2.svg" />
                </g>

                <g className="prodcast_videoEditing_process_bottom_svg_number">
                  <image href="/Images/ServicesImage/videoEditing/prodCastProcessStep02.svg" />
                </g>
                <g className="prodcast_videoEditing_process_svg_bottom_ployline">
                  <image href="/Images/ServicesImage/videoEditing/procastVideoEditing_TopPloyLineVector.svg" />
                </g>
              </svg>
              <div className="prodcast_video_editing_process_bottom_text_div">
                <h4 className="elementHeadingText">Customization</h4>
                <p className="elementParaText">
                  Let us know your preferences, such as specific transitions,
                  visual effects, or brand elements you want.
                </p>
              </div>
            </div>
            {/* process 03 Editing */}
            <div
              className="prodcast_video_editing_process_div"
              data-aos="fade-down"
              data-aos-delay={1 * 200}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 169 184"
                fill="none"
                className="prodcast_video_editing_process_SvgElement"
              >
                <g>
                  <path
                    d="M168.202 84.6053C168.202 95.6125 166.034 106.512 161.822 116.681C157.61 126.85 151.436 136.09 143.653 143.874C135.869 151.657 126.629 157.831 116.46 162.043C106.291 166.256 95.3913 168.424 84.3841 168.424C73.377 168.424 62.4776 166.255 52.3083 162.043C42.139 157.831 32.8989 151.657 25.1157 143.874C17.3325 136.09 11.1585 126.85 6.9462 116.681C2.73394 106.512 0.565917 95.6125 0.565918 84.6053H13.3137C13.3137 93.9384 15.152 103.18 18.7236 111.803C22.2952 120.425 27.5302 128.26 34.1297 134.86C40.7292 141.459 48.564 146.694 57.1866 150.266C65.8093 153.837 75.051 155.676 84.3841 155.676C93.7172 155.676 102.959 153.837 111.582 150.266C120.204 146.694 128.039 141.459 134.639 134.86C141.238 128.26 146.473 120.425 150.045 111.803C153.616 103.18 155.455 93.9384 155.455 84.6053H168.202Z"
                    fill="url(#paint0_linear_1123_5872)"
                  />
                  <circle
                    cx="84.681"
                    cy="84.319"
                    r="71.319"
                    transform="rotate(90 84.681 84.319)"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                  <circle
                    cx="84.752"
                    cy="156.292"
                    r="27.5718"
                    transform="rotate(90 84.752 156.292)"
                    fill="url(#paint1_linear_1123_5872)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1123_5872"
                      x1="118.751"
                      y1="-5.58305"
                      x2="194.61"
                      y2="93.0892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1123_5872"
                      x1="68.1428"
                      y1="182.018"
                      x2="61.4903"
                      y2="141.621"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="prodcast_videoEditing_process_svg_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVideoProcessEditing.svg" />
                </g>

                <g className="prodcast_videoEditing_process_svg_number">
                  <image href="/Images/ServicesImage/videoEditing/prodCastProcessStep03.svg" />
                </g>
                <g className="prodcast_videoEditing_process_svg_top_ployline">
                  <image href="/Images/ServicesImage/videoEditing/procastVideoEditing_TopPloyLineVector.svg" />
                </g>
              </svg>
              <div className="prodcast_video_editing_process_top_text_div">
                <h4 className="elementHeadingText">Editing</h4>
                <p className="elementParaText">
                  Our experienced editors will work on your podcast, removing
                  unwanted parts, adding visuals, and refining the overall look.
                </p>
              </div>
            </div>
            {/* process 04  Final Delivery */}
            <div
              className="prodcast_video_editing_process_div"
              data-aos="fade-up"
              data-aos-delay={1 * 200}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 169 184"
                fill="none"
                className="prodcast_video_editing_process_SvgElement"
              >
                <g>
                  <path
                    d="M0.831353 100.049C0.831352 89.0418 2.99937 78.1424 7.21163 67.9732C11.4239 57.8039 17.5979 48.5638 25.3811 40.7806C33.1644 32.9973 42.4044 26.8233 52.5737 22.6111C62.743 18.3988 73.6424 16.2308 84.6496 16.2308C95.6567 16.2308 106.556 18.3988 116.725 22.6111C126.895 26.8233 136.135 32.9973 143.918 40.7806C151.701 48.5638 157.875 57.8039 162.087 67.9731C166.3 78.1424 168.468 89.0418 168.468 100.049L155.72 100.049C155.72 90.7159 153.882 81.4742 150.31 72.8515C146.738 64.2288 141.503 56.3941 134.904 49.7946C128.304 43.1951 120.47 37.9601 111.847 34.3884C103.224 30.8168 93.9827 28.9785 84.6496 28.9785C75.3165 28.9785 66.0747 30.8168 57.4521 34.3885C48.8294 37.9601 40.9947 43.1951 34.3952 49.7946C27.7957 56.3941 22.5606 64.2288 18.989 72.8515C15.4174 81.4742 13.5791 90.7159 13.5791 100.049L0.831353 100.049Z"
                    fill="url(#paint0_linear_1123_5873)"
                  />
                  <circle
                    cx="84.319"
                    cy="100.683"
                    r="71.319"
                    transform="rotate(-90 84.319 100.683)"
                    fill="#18C8FF"
                    fill-opacity="0.15"
                  />
                  <circle
                    cx="84.2817"
                    cy="28.3618"
                    r="27.5718"
                    transform="rotate(-90 84.2817 28.3618)"
                    fill="url(#paint1_linear_1123_5873)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1123_5873"
                      x1="50.2825"
                      y1="190.237"
                      x2="-25.5759"
                      y2="91.5652"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1123_5873"
                      x1="67.0968"
                      y1="53.5774"
                      x2="61.4179"
                      y2="13.0318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="prodcast_videoEditing_process_bottom_svg_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVideoProcessDelevery.svg" />
                </g>

                <g className="prodcast_videoEditing_process_bottom_svg_number">
                  <image href="/Images/ServicesImage/videoEditing/prodCastProcessStep04.svg" />
                </g>
                <g className="prodcast_videoEditing_process_svg_bottom_ployline">
                  <image href="/Images/ServicesImage/videoEditing/procastVideoEditing_TopPloyLineVector.svg" />
                </g>
              </svg>
              <div className="prodcast_video_editing_process_bottom_text_div">
                <h4 className="elementHeadingText">Final Delivery</h4>
                <p className="elementParaText">
                   We provide you with a polished video, ready to be uploaded
                  and shared with your audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  Why choose ? prodcast Video editor in TOJO Gloabl*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "20px",
              }),
            }}
          >
            Why Choose TOJO Global?
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            we focus on making podcast video editing easy and stress-free.
            Here’s why we stand out:
          </p>
        </div>
        {/*  Why choose ? prodcast Video editor in TOJO Gloabl step */}
        <div className="whyChoose_prodcast_video_editor_main_div">
          {/* step 1 */}
          <div
            className="whyChoose_prodcast_video_editor_div"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
              >
                <g>
                  <circle
                    cx="46"
                    cy="46"
                    r="46"
                    fill="url(#paint0_linear_1159_6154)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1159_6154"
                      x1="64.8609"
                      y1="-3.49599"
                      x2="106.492"
                      y2="50.656"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="whyChoose_prodcast_video_editor_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVidoeEditingWhyexpert-editors.png" />
                </g>
              </svg>
            </div>
            <div className="whyChoose_prodcast_video_editorText_div">
              <h4 className="elementHeadingText">Expert Editors</h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our skilled editors have the experience needed to create
                high-quality, visually appealing podcast videos.
              </p>
            </div>
          </div>
          {/* step 2*/}
          <div
            className="whyChoose_prodcast_video_editor_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={2 * 200}
          >
            <div className="whyChoose_prodcast_video_editorLeftText_div">
              <h4 className="elementHeadingText">Tailored to Your Brand</h4>
              <p className="elementParaText">
                We ensure the final video matches your brand’s style, making it
                unique and professional.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
              >
                <g>
                  <circle
                    cx="46"
                    cy="46"
                    r="46"
                    fill="url(#paint0_linear_1159_6154)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1159_6154"
                      x1="64.8609"
                      y1="-3.49599"
                      x2="106.492"
                      y2="50.656"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="whyChoose_prodcast_video_editor_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVidoeEditingWhyChooseEtailored-to-your-brand 2.png " />
                </g>
              </svg>
            </div>
          </div>
          {/* step 3 */}
          <div
            className="whyChoose_prodcast_video_editor_div"
            data-aos="fade-right"
            data-aos-delay={3 * 200}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
              >
                <g>
                  <circle
                    cx="46"
                    cy="46"
                    r="46"
                    fill="url(#paint0_linear_1159_6154)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1159_6154"
                      x1="64.8609"
                      y1="-3.49599"
                      x2="106.492"
                      y2="50.656"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="whyChoose_prodcast_video_editor_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVidoeEditingWhyChoosefAST3.svg" />
                </g>
              </svg>
            </div>
            <div className="whyChoose_prodcast_video_editorText_div">
              <h4 className="elementHeadingText">Fast Turnaround</h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                  }),
                }}
              >
                We understand that time is valuable. Our team delivers edited
                videos quickly without compromising on quality.
              </p>
            </div>
          </div>
          {/* step 4 */}
          <div
            className="whyChoose_prodcast_video_editor_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={4 * 200}
          >
            <div className="whyChoose_prodcast_video_editorLeftText_div">
              <h4 className="elementHeadingText">Affordable Pricing</h4>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our services are cost-effective, providing you with high-quality
                results that fit your budget.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
              >
                <g>
                  <circle
                    cx="46"
                    cy="46"
                    r="46"
                    fill="url(#paint0_linear_1159_6154)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1159_6154"
                      x1="64.8609"
                      y1="-3.49599"
                      x2="106.492"
                      y2="50.656"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18C8FF" />
                      <stop offset="1" stopColor="#C608FF" />
                    </linearGradient>
                  </defs>
                </g>
                <g className="whyChoose_prodcast_video_editor_icon">
                  <image href="/Images/ServicesImage/videoEditing/prodcastVidoeEditingWhyChooseAffordable-Pricing4.png" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/*   Explainer video editiing*/}
      <section className="container">
        {/*  Explainer into Video text*/}
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle mt-5">
            {" "}
            <span className="headdingGradientText">Explainer</span> video
          </h1>
          <p
            className="paraStyle mt-2 mt-md-4"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            An explainer video is a short, engaging video that helps explain a
            product, service, or idea. It uses visuals, voice overs, and
            animations to communicate complex information in a simple and fun
            way. Explainer videos are great for grabbing attention and
            increasing understanding.
          </p>
        </div>
        {/*  How Our Explainer Video Editing Works */}
        <div className="vfx_how_it_works_text_div" data-aos="fade-up">
          <h1 className="smallHeadingStyle mt-4 mt-md-2">
            How Our Explainer Video Editing Works
          </h1>
          <p
            className="paraStyle mt-2 mt-md-3"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            we take your raw video content and transform it into a professional,
            polished explainer video. Our team will:
          </p>
        </div>
        {/*  Explainer video editiing process*/}
        <div className="explainer_video_editing_process_main_div">
          {/* process 1 */}
          <div
            className="explainer_video_editing_process_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="244"
              viewBox="0 0 244 244"
              fill="none"
            >
              <g>
                <circle
                  cx="121.524"
                  cy="121.524"
                  r="120.524"
                  transform="rotate(90 121.524 121.524)"
                  stroke="url(#paint0_linear_1159_6216)"
                  stroke-width="2"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="122.043"
                  cy="122.044"
                  r="105.96"
                  fill="#18C8FF"
                  fill-opacity="0.15"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1159_6216"
                    x1="171.351"
                    y1="-9.23581"
                    x2="281.335"
                    y2="133.824"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </g>
            </svg>
            {/*explainer_video_editing_process_leftPloyline_svg*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="12"
              viewBox="0 0 29 12"
              fill="none"
              className="explainer_video_editing_process_leftPloyline_svg"
            >
              <path
                d="M28.5775 6.0957L18.5775 0.3222V11.8692L28.5775 6.0957ZM0.195312 7.0957H1.9692V5.0957H0.195312V7.0957ZM5.51698 7.0957H9.06475V5.0957H5.51698V7.0957ZM12.6125 7.0957H16.1603V5.0957H12.6125V7.0957ZM19.7081 7.0957H23.2559V5.0957H19.7081V7.0957Z"
                fill="url(#paint0_linear_1159_6233)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1159_6233"
                  x1="20.205"
                  y1="6.0577"
                  x2="20.2304"
                  y2="6.99352"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#18C8FF" />
                  <stop offset="1" stopColor="#C608FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="explainer_video_editing_process_Text_div">
              <h2>01</h2>
              <p>Edit the video clips for smooth flow.</p>
            </div>
          </div>
          {/* process 2 */}
          <div
            className="explainer_video_editing_process_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="244"
              viewBox="0 0 244 244"
              fill="none"
            >
              <g>
                <circle
                  cx="121.524"
                  cy="121.524"
                  r="120.524"
                  transform="rotate(90 121.524 121.524)"
                  stroke="url(#paint0_linear_1159_6216)"
                  stroke-width="2"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="122.043"
                  cy="122.044"
                  r="105.96"
                  fill="#18C8FF"
                  fill-opacity="0.15"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1159_6216"
                    x1="171.351"
                    y1="-9.23581"
                    x2="281.335"
                    y2="133.824"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </g>
            </svg>
            {/*explainer_video_editing_process_leftPloyline_svg*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="12"
              viewBox="0 0 29 12"
              fill="none"
              className="explainer_video_editing_process_leftPloyline_svg"
            >
              <path
                d="M28.5775 6.0957L18.5775 0.3222V11.8692L28.5775 6.0957ZM0.195312 7.0957H1.9692V5.0957H0.195312V7.0957ZM5.51698 7.0957H9.06475V5.0957H5.51698V7.0957ZM12.6125 7.0957H16.1603V5.0957H12.6125V7.0957ZM19.7081 7.0957H23.2559V5.0957H19.7081V7.0957Z"
                fill="url(#paint0_linear_1159_6233)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1159_6233"
                  x1="20.205"
                  y1="6.0577"
                  x2="20.2304"
                  y2="6.99352"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#18C8FF" />
                  <stop offset="1" stopColor="#C608FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="explainer_video_editing_process_Text_div">
              <h2>02</h2>
              <p>Add voiceovers or subtitles if needed.</p>
            </div>
          </div>
          {/* process 3 */}
          <div
            className="explainer_video_editing_process_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="244"
              viewBox="0 0 244 244"
              fill="none"
            >
              <g>
                <circle
                  cx="121.524"
                  cy="121.524"
                  r="120.524"
                  transform="rotate(90 121.524 121.524)"
                  stroke="url(#paint0_linear_1159_6216)"
                  stroke-width="2"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="122.043"
                  cy="122.044"
                  r="105.96"
                  fill="#18C8FF"
                  fill-opacity="0.15"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1159_6216"
                    x1="171.351"
                    y1="-9.23581"
                    x2="281.335"
                    y2="133.824"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </g>
            </svg>
            {/*explainer_video_editing_process_leftPloyline_svg*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="12"
              viewBox="0 0 29 12"
              fill="none"
              className="explainer_video_editing_process_leftPloyline_svg"
            >
              <path
                d="M28.5775 6.0957L18.5775 0.3222V11.8692L28.5775 6.0957ZM0.195312 7.0957H1.9692V5.0957H0.195312V7.0957ZM5.51698 7.0957H9.06475V5.0957H5.51698V7.0957ZM12.6125 7.0957H16.1603V5.0957H12.6125V7.0957ZM19.7081 7.0957H23.2559V5.0957H19.7081V7.0957Z"
                fill="url(#paint0_linear_1159_6233)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1159_6233"
                  x1="20.205"
                  y1="6.0577"
                  x2="20.2304"
                  y2="6.99352"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#18C8FF" />
                  <stop offset="1" stopColor="#C608FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="explainer_video_editing_process_Text_div">
              <h2>03</h2>
              <p>Use animations or graphics for clearer communication</p>
            </div>
          </div>
          {/* process 4 */}
          <div
            className="explainer_video_editing_process_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="244"
              viewBox="0 0 244 244"
              fill="none"
            >
              <g>
                <circle
                  cx="121.524"
                  cy="121.524"
                  r="120.524"
                  transform="rotate(90 121.524 121.524)"
                  stroke="url(#paint0_linear_1159_6216)"
                  stroke-width="2"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="122.043"
                  cy="122.044"
                  r="105.96"
                  fill="#18C8FF"
                  fill-opacity="0.15"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1159_6216"
                    x1="171.351"
                    y1="-9.23581"
                    x2="281.335"
                    y2="133.824"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C8FF" />
                    <stop offset="1" stopColor="#C608FF" />
                  </linearGradient>
                </defs>
              </g>
            </svg>

            <div className="explainer_video_editing_process_Text_div">
              <h2>04</h2>
              <p>Align video style with your brand message perfectly</p>
            </div>
          </div>
        </div>
        <section className="brand_video_editing_offer_main_section">
          {/*  Explainer into Video text*/}
          <div className="sectionTopTextstyle" data-aos="fade-up">
            <h1 className="topHeadingStyle"> Why Choose TOJO Global?</h1>
          </div>
          {/* explainer_video_editing_whyChooseIcon svg*/}
          <div
            className="explainer_video_editing_whyChooseIcon_main_div"
            data-aos="fade-down"
          >
            <div className="explainer_video_editing_whyChooseIcon_div">
              <ExplainerVideoEditingWhyChooseIcon />
              {/* skilled_Editors */}
              <div className="explainer_video_editing_skilled_Editors_text_div">
                <h5 className="elementHeadingText">Skilled Editors</h5>
                <p className="elementParaText">
                  Our experienced editors understand how to turn complex ideas
                  into easy-to-follow videos.
                </p>
              </div>
              {/* Custom_Tailored_Videos*/}
              <div className="explainer_video_editing_Custom_Tailored_Videos_text_div">
                <h5 className="elementHeadingText">Custom-Tailored Videos</h5>
                <p className="elementParaText">
                  We work closely with you to make sure the video matches your
                  brand's voice and goals.
                </p>
              </div>
              {/*Optimized for Every Platform*/}
              <div className="explainer_video_editing_optimized_Platform_text_div">
                <h5 className="elementHeadingText">
                  Optimized for Every Platform
                </h5>
                <p className="elementParaText">
                  Whether you’re sharing on your website, social media, or
                  email, we ensure your video is optimized for maximum
                  engagement.
                </p>
              </div>
              {/* 100% Unique Content*/}
              <div className="explainer_video_editing_Unique_content_text_div">
                <h5 className="elementHeadingText">100% Unique Content</h5>
                <p className="elementParaText">
                  Your explainer video will be unique and created to fit your
                  specific needs, helping you stand out from competitors.
                </p>
              </div>
              {/* Fast Delivery*/}
              <div className="explainer_video_editing_fast_delivery_text_div">
                <h5 className="elementHeadingText">Fast Delivery</h5>
                <p className="elementParaText">
                  We offer quick turnaround times without compromising quality,
                  so you can publish on time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/*  Documentary video */}
      <section className="container">
        {/*   Documentary  into Video text*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle mt-3">
            {" "}
            <span className="headdingGradientText">Documentary</span> video
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "12px",
                lineHeight: "120%",
              }),
            }}
          >
            Documentary video editing is all about telling a story through real
            events, interviews, and visuals. Our documentary video editing
            service at TOJO Global turns raw footage into a polished, engaging
            final product. We help you highlight the important moments, enhance
            the visuals, and bring your story to life.
          </p>
        </div>
        {/*  Documentary into video  */}
        <div className="Documentary_into_video_editing_main_div">
          {/* text  */}
          <div
            className="documentary_into_video_editing_text_div"
            data-aos="fade-right"
            style={{
              ...(isMobileView && {
                width: "100%",
              }),
            }}
          >
            <h2>What Is Documentary Video Editing?</h2>
            <p
              className="elementParaText"
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  fontSize: "12px",
                  lineHeight: "120%",
                }),
              }}
            >
              Documentary video editing involves taking hours of footage and
              cutting it down to tell a clear, compelling story. We remove
              unnecessary parts, add transitions, and include background music
              or narration to make the video flow smoothly. The goal is to
              create a film that keeps your audience engaged while staying true
              to the facts.
            </p>
          </div>
          {/* polyline */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 224"
            fill="none"
            className="documentary_into_video_editing_centerPloyline_div"
          >
            <path
              d="M1 0L1.00001 224"
              stroke="url(#paint0_linear_1159_6314)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1159_6314"
                x1="1.70501"
                y1="-8.51197"
                x2="2.92311"
                y2="-8.50489"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#18C8FF" />
                <stop offset="1" stopColor="#C608FF" />
              </linearGradient>
            </defs>
          </svg>
          {/* intro video div */}
          <div
            className="documentary_into_video_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
          >
            {/* play button svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="189"
              height="189"
              viewBox="0 0 189 189"
              fill="none"
            >
              <g>
                <circle
                  cx="94.4998"
                  cy="94.5606"
                  r="94.3614"
                  fill="#18C8FF"
                  fill-opacity="0.05"
                />
                <circle
                  cx="94.5"
                  cy="94.5591"
                  r="74.231"
                  fill="#18C8FF"
                  fill-opacity="0.05"
                />
                <circle cx="94.4998" cy="94.5608" r="51.5842" fill="white" />
                <path
                  d="M118.405 94.5611L82.5477 115.263L82.5477 73.8589L118.405 94.5611Z"
                  fill="#060044"
                />
              </g>
            </svg>
          </div>
        </div>
        {/*  Documentary  How It Works  text*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">How It Works:</h1>
        </div>
        {/*documentary video editing process  */}
        <div className="documentary_video_editing_process_main_div">
          {/* process 01 */}
          <div
            className="documentary_video_editing_process_div"
            data-aos="fade-right"
            data-aos-delay={1 * 200}
          >
            <DocumentaryVideoEditingProcesSvg />
            {/* porcess number */}
            <div className="explainer_video_editing_process_number">
              <span>01</span>
            </div>
            {/* 1. Upload Your Footage*/}
            <div className="explainer_video_editing_Text_div">
              <h2>Upload Your Footage</h2>
              <p>Send us your raw video files, and we'll take it from there.</p>
            </div>
          </div>

          {/* process 02 */}
          <div
            className="documentary_video_editing_process_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={2 * 200}
          >
            <DocumentaryVideoEditingProcesSvg />
            {/* porcess number */}
            <div className="explainer_video_editing_process_number">
              <span>02</span>
            </div>
            {/* 2. Editing Process*/}
            <div className="explainer_video_editing_Text_div">
              <h2>Editing Process</h2>
              <p>
                We review your footage, cut out the best parts, and organize
                them into a meaningful sequence.
              </p>
            </div>
          </div>
          {/* process 03 */}
          <div
            className="documentary_video_editing_process_div"
            data-aos="fade-right"
            data-aos-delay={3 * 200}
          >
            <DocumentaryVideoEditingProcesSvg />
            {/* porcess number */}
            <div className="explainer_video_editing_process_number">
              <span>03</span>
            </div>
            {/* 3. Add Effects*/}
            <div className="explainer_video_editing_Text_div">
              <h2>Add Effects</h2>
              <p>
                We can add music, voiceovers, and titles to give your
                documentary a professional touch.
              </p>
            </div>
          </div>
          {/* process 04 */}
          <div
            className="documentary_video_editing_process_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={4 * 200}
          >
            <DocumentaryVideoEditingProcesSvg />
            {/* porcess number */}
            <div className="explainer_video_editing_process_number">
              <span>04</span>
            </div>
            {/* 1. Final Review*/}
            <div className="explainer_video_editing_Text_div">
              <h2>Final Review</h2>
              <p>
                You'll have the chance to review the edited video and request
                any changes.
              </p>
            </div>
          </div>
        </div>
        {/*  Documentary  Why Choose TOJO Global?  text*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "35px",
                marginBottom: "-2px",
              }),
            }}
          >
            How It Works:
          </h1>
        </div>
        {/*documentary video editing whyChoose  */}
        <div className="documentary_video_editing_whyChoose_main_div">
          {/* process 01 */}
          <div
            className="documentary_video_editing_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <DocumentaryVideoEditingWhyChooseSvg />
            {/* porcess icon  */}
            <div className="explainer_video_editing_WhyChoose_icon">
              <img
                src="/Images/ServicesImage/videoEditing/documentary_video_editing_whyChooseExpert-Team1.svg"
                alt=""
              />
            </div>
            {/* 1. Experienced Editors*/}

            <div className="explainer_video_editing_whyChoose_Text_div">
              <h2 className="elementHeadingText">Experienced Editors</h2>
              <p className="elementParaText">
                Our team knows how to create compelling documentaries that
                captivate viewers.
              </p>
            </div>
          </div>
          {/* process 02 */}
          <div
            className="documentary_video_editing_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <DocumentaryVideoEditingWhyChooseSvg />
            {/* porcess icon  */}
            <div className="explainer_video_editing_WhyChoose_icon">
              <img
                src="/Images/ServicesImage/videoEditing/documentary_video_editing_whyChooseCustomaization2.svg"
                alt=""
              />
            </div>
            {/* 2. Customized to Your Needs*/}
            <div className="explainer_video_editing_whyChoose_Text_div">
              <h2 className="elementHeadingText">Customized to Your Needs</h2>
              <p className="elementParaText">
                We tailor the editing process to match your vision and goals.
              </p>
            </div>
          </div>
          {/* process 03 */}
          <div
            className="documentary_video_editing_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <DocumentaryVideoEditingWhyChooseSvg />
            {/* porcess icon  */}
            <div className="explainer_video_editing_WhyChoose_icon">
              <img
                src="/Images/ServicesImage/videoEditing/documentary_video_editing_whyChooseHigh_quality3.svg"
                alt=""
              />
            </div>
            {/* 4. High-Quality Output*/}
            <div className="explainer_video_editing_whyChoose_Text_div">
              <h2 className="elementHeadingText">High-Quality Output</h2>
              <p className="elementParaText">
                We ensure that the final video is smooth, engaging, and visually
                appealing.
              </p>
            </div>
          </div>
          {/* process 04 */}
          <div
            className="documentary_video_editing_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <DocumentaryVideoEditingWhyChooseSvg />
            {/* porcess icon  */}
            <div className="explainer_video_editing_WhyChoose_icon">
              <img
                src="/Images/ServicesImage/videoEditing/documentary_video_editing_whyChooseDelevery4.svg"
                alt=""
              />
            </div>
            {/* 4. Timely Delivery*/}
            <div className="explainer_video_editing_whyChoose_Text_div">
              <h2 className="elementHeadingText">Timely Delivery</h2>
              <p className="elementParaText">
                We work efficiently to get your project done on time, without
                sacrificing quality.
              </p>
            </div>
          </div>
        </div>
        {/*  Documentary  best features  text*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "0.9rem",
                marginBottom: "-0.9rem",
              }),
            }}
          >
            SOME OF OUR BEST FEATURES{" "}
          </h1>
        </div>
        {/* documentary vidoe editon best features*/}
        <div className="documentary_video_editing_best_features_main_div">
          {/* process 01 */}
          <div
            className="documentary_video_editing_best_features_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <DocumentaryVideoEditingBestFeatureSvg />
            <div className="documentary_video_editing_best_features_number">
              <span>01</span>
            </div>
            <div className="documentary_video_editing_best_features_text_div">
              <h2 className="elementHeadingText">Professional Editing</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Our expert editors make your documentary smooth, engaging, and
                visually appealing, with seamless transitions and clear
                storytelling to create a polished and captivating final product.
              </p>
            </div>
          </div>
          {/*02 Free Stock Video & Music */}
          <div
            className="documentary_video_editing_best_features_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <DocumentaryVideoEditingBestFeatureSvg />
            <div className="documentary_video_editing_best_features_number">
              <span>02</span>
            </div>
            <div className="documentary_video_editing_best_features_text_div">
              <h2 className="elementHeadingText">Free Stock Video & Music</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Every plan comes with free stock video and music. Just tell your
                editor what you want, and they’ll include it in your edits to
                make your videos even better.
              </p>
            </div>
          </div>
          {/*  03 Quick and Friendly Support */}
          <div
            className="documentary_video_editing_best_features_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <DocumentaryVideoEditingBestFeatureSvg />
            <div className="documentary_video_editing_best_features_number">
              <span>03</span>
            </div>
            <div className="documentary_video_editing_best_features_text_div">
              <h2 className="elementHeadingText">Quick and Friendly Support</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                We’re here to support you! Our goal is to help you focus on
                creating videos and growing your business. We’ll work hard to
                make sure you’re happy with our service.
              </p>
            </div>
          </div>
          {/* 04 Fast Turnaround Time */}
          <div
            className="documentary_video_editing_best_features_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <DocumentaryVideoEditingBestFeatureSvg />
            <div className="documentary_video_editing_best_features_number">
              <span>04</span>
            </div>
            <div className="documentary_video_editing_best_features_text_div">
              <h2 className="elementHeadingText">Fast Turnaround Time</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                You won’t wait weeks for your edits. We offer a quick turnaround
                time of just 2 days. If you need changes, just ask! Revisions
                take only 1 day, and complex edits may take a bit longer.
              </p>
            </div>
          </div>

          {/* 05 Expert Video Advice Included */}
          <div
            className="documentary_video_editing_best_features_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <DocumentaryVideoEditingBestFeatureSvg />
            <div className="documentary_video_editing_best_features_number">
              <span>05</span>
            </div>
            <div className="documentary_video_editing_best_features_text_div">
              <h2 className="elementHeadingText">
                Expert Video Advice Included
              </h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                We’re not just editors; we’re here to help you improve. When you
                sign up, you can schedule a call with our team. We’ll learn
                about your style and give you tips to create even better
                content.
              </p>
            </div>
          </div>
          {/*  06 High-Quality Videos Delivered */}
          <div
            className="documentary_video_editing_best_features_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <DocumentaryVideoEditingBestFeatureSvg />
            <div className="documentary_video_editing_best_features_number">
              <span>06</span>
            </div>
            <div className="documentary_video_editing_best_features_text_div">
              <h2 className="elementHeadingText">
                High-Quality Videos Delivered
              </h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                With TOJO GLOBAL, you’ll not only get editing help, but the
                quality of your videos will also improve. We’ll help you become
                an authority in your field.
              </p>
            </div>
          </div>
        </div>
        {/*  Documentary SOME OF OUR BEST FEATURES*/}
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "-1rem",
                marginBottom: "-0.2rem",
              }),
            }}
          >
            SOME OF OUR BEST FEATURES{" "}
          </h1>
        </div>
        {/* documentary vidoe Why You Need the Best Video Editing Service*/}
        <div className="documentary_video_editing_why_you_need_main_div">
          {/* 01  */}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard01.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Customization</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                We offer a wide range of customization options to fit your
                project’s needs. From the type of editing you need (cutting,
                trimming, or adding music) to the specific elements you want to
                include, we’re here to help.
              </p>
            </div>
          </div>
          {/* 02  */}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard02.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Saves Time</h2>
              <p
                className="elementParaText 2298"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Editing videos takes a lot of time. With a professional service,
                you can focus on your main tasks while experts handle the
                editing.
              </p>
            </div>
          </div>

          {/* 03  */}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard03.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Creative Ideas</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Experienced editors bring fresh and creative ideas. They know
                how to make your videos more engaging.
              </p>
            </div>
          </div>

          {/* 04 Technical Skills*/}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard04.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Technical Skills</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Video editing requires special skills and software.
                Professionals have the right tools and knowledge to get the best
                results.
              </p>
            </div>
          </div>

          {/* 05  Brand Consistency */}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard05.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Brand Consistency</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                A good editing service understands your brand. They ensure your
                videos reflect your brand’s style and message.
              </p>
            </div>
          </div>
          {/* 06 Improved Engagement  */}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard06.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Improved Engagement</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Well-edited videos attract more viewers. They keep your audience
                interested and encourage them to watch till the end.
              </p>
            </div>
          </div>
          {/* 07 Storytelling*/}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard07.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Storytelling</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                A great video tells a story. Editors help structure your content
                to deliver a clear and powerful message.
              </p>
            </div>
          </div>
          {/* 08 Quick Turnaround */}
          <div
            className="documentary_video_editing_why_you_need_div"
            data-aos="fade-down"
            data-aos-delay={8 * 200}
          >
            <DocumentaryVideoEditingWhyYouNeedSvg
              imgeUrl={"documentary_video_editing_whyYouNeedArtboard08.svg"}
            />
            <div className="documentary_video_editing_why_you_need_text_div">
              <h2 className="elementHeadingText">Quick Turnaround</h2>
              <p
                className="elementParaText"
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    fontSize: "12px",
                    lineHeight: "120%",
                    width: "100%",
                  }),
                }}
              >
                Professionals can edit your videos faster. This means you can
                share your content sooner and stay relevant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoEditting;
