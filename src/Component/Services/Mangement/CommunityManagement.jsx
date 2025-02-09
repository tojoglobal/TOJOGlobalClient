import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/Management/CommunityManagementPage.css";
import ServiceContactUs from "../ContactUsServiceSection/ServiceContactUs";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";

const CommunityManagement = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);

  return (
    <main className="maindiv">
      {/* service management top part  */}
      <section>
        <div className="communityManagement_top_part">
          <div
            className="communityManagement_hero_part"
            style={{
              ...(isMobileView && {
                paddingTop: "6.8rem",
              }),
            }}
          >
            <div className="communityManagement_hero_part_div container">
              <div
                className="communityManagement_hero_text_div"
                data-aos="fade-left"
              >
                <h1
                  style={{
                    ...(isMobileView && {
                      textAlign: "center",
                      fontSize: "1.6rem",
                    }),
                  }}
                >
                  Enhance your crypto community with Expert{" "}
                  <span className="headdingGradientText">
                    Telegram & discord{" "}
                  </span>
                  management.
                </h1>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      wordSpacing: "-1px",
                    }),
                  }}
                >
                  Tojo Global helps you grow & engage your community on Discord
                  & telegram ensuring your crypto project connects with the
                  audience in a meaningful way.
                </p>
                <div className="hero_btn_style communityManagement_hero_btn ">
                  <Link to="/contact">
                    <button className="custombtn hero_btn2 fristBtn">
                      <span>Book a Intro Call</span>
                    </button>
                  </Link>
                  <Link to="/package">
                    <button className="custombtn hero_btn1 secondBtn">
                      <span>Check Packages</span>
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className={`communityManagement_hero_part_image_div`}
                data-aos="fade-right"
                style={
                  isMobileView ? { display: "none" } : { display: "block" }
                }
              >
                <img
                  src="/Images/ServicesImage/banner_images/communityManagement_hero_part_div_Image.png"
                  alt="communityManagement_hero_part_div_Image.png"
                />
              </div>
            </div>
          </div>
          {/*
           *communityManagement_second_part
           */}
          <div className="container">
            <div
              className="communityManagement_second_part_div"
              data-aos="fade-down"
            >
              <div className="communityManagement_second_part_image_div">
                <img
                  src="\Images\ServicesImage\banner_images\communityManagement_second_part_image.jpeg"
                  alt="communityManagement_hero_part_div_Image.png"
                  className="img-fluid"
                />
              </div>
              <div className="communityManagement_second_text_div">
                <h4
                  style={{
                    ...(isMobileView && {
                      paddingTop: "6.8rem",
                    }),
                  }}
                >
                  How Our Telegram & discord Management Services can elevate
                  your crypto project 
                </h4>
                <p>
                  Our Telegram and Discord Management Service can significantly
                  enhance your Crypto project. We assist you in building a
                  strong and amazing community by fostering engagement and
                  encouraging discussions. Our expert team will manage your
                  channels, ensuring timely responses to questions, comments,
                  and feedback, which keeps your audience active and involved.
                  With regular updates and content sharing, we keep your
                  community informed and excited about your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Why Telegram and Discord community management is essential for*/}
      <div className="univarsal_service_padding communityManagement_Crypto_project">
        <div className="univarsal_service_padding_second_div communityManagement_Crypto_project_div container">
          <h1 data-aos={isLargeMobileView ? "fade-up" : "fade-left"}>
            Why Telegram and Discord community management is essential for
            Crypto project :
          </h1>
          <div className="communityManagement_Crypto_project_Card">
            <div data-aos="zoom-in-up">
              <p>
                Discord is a renowned messaging platform for Gamers. But
                nowadays it has become widely used in the crypto world. It's an
                amazing way to connect with your audience, share updates, and
                encourage teamwork.
              </p>
            </div>
            <div data-aos="zoom-in-up">
              <p>
                Telegram is another well-liked platform for building a Crypto
                community. Around 99% of Crypto communities are in Telegram. It
                provides safe communication and offers many features that help
                create an active community.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* It will Helps you to Build. */}
      <div className="univarsal_service_padding communityManagement_features">
        {isLargeMobileView ? (
          <>
            {/* TOJO GLOBAL community mangement key fetcher  Services */}
            <section className="community_management_key_fetcher communityManagement_service_section">
              <div className="searchEngineMarketing_WhoHelp_top_text_div">
                <div data-aos="fade-up">
                  <h1>It will Helps you to Build.</h1>
                </div>
              </div>
              <div className="communityManagemtn_keyfetcher_main_div">
                {/*01 Direct communication */}
                <div
                  className="searchEngineMarketing_leadGenaration_card_div"
                  data-aos="fade-down"
                  data-aos-delay={1 * 100}
                >
                  <div className="searchEngineMarketing_leadGenaration_card_div_img">
                    <img
                      src="/Images/ServicesImage/Allicons/Communication.png"
                      alt="communication image"
                    />
                  </div>
                  <h4
                    style={{
                      ...(isMobileView && {
                        fontFamily: "var(--font-poppins)",
                      }),
                    }}
                  >
                    Direct communication
                  </h4>
                  <p
                    style={{
                      ...(isMobileView && {
                        fontSize: "14px",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    It allows for regular updates and new sharing with your
                    community
                  </p>
                </div>
                {/*02 Engagement*/}
                <div
                  className="searchEngineMarketing_leadGenaration_card_div"
                  data-aos="fade-down"
                  data-aos-delay={2 * 100}
                >
                  <div className="searchEngineMarketing_leadGenaration_card_div_img">
                    <img src="/Images/ServicesImage/Allicons/Collaborating-In-Circle.png" />
                  </div>
                  <h4
                    style={{
                      ...(isMobileView && {
                        fontFamily: "var(--font-poppins)",
                      }),
                    }}
                  >
                    Engagement
                  </h4>
                  <p
                    style={{
                      ...(isMobileView && {
                        fontSize: "14px",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    Engaging community management keeps members active and
                    encourages their participation
                  </p>
                </div>
                {/*03 Building trust*/}
                <div
                  className="searchEngineMarketing_leadGenaration_card_div"
                  data-aos="fade-down"
                  data-aos-delay={3 * 100}
                >
                  <div className="searchEngineMarketing_leadGenaration_card_div_img">
                    <img
                      src="/Images/ServicesImage/Allicons/Handshake Heart.png"
                      alt=""
                    />
                  </div>
                  <h4
                    style={{
                      ...(isMobileView && {
                        fontFamily: "var(--font-poppins)",
                      }),
                    }}
                  >
                    Building trust
                  </h4>
                  <p
                    style={{
                      ...(isMobileView && {
                        fontSize: "14px",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    Regular support builds trust with your audience
                  </p>
                </div>
                {/*04 Feedback loop */}
                <div
                  className="searchEngineMarketing_leadGenaration_card_div"
                  data-aos="fade-down"
                  data-aos-delay={4 * 100}
                >
                  <div className="searchEngineMarketing_leadGenaration_card_div_img">
                    <img src="/Images/ServicesImage/Allicons/Popular.png" />
                  </div>
                  <h4
                    style={{
                      ...(isMobileView && {
                        fontFamily: "var(--font-poppins)",
                      }),
                    }}
                  >
                    Feedback loop
                  </h4>
                  <p
                    style={{
                      ...(isMobileView && {
                        fontSize: "14px",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    Collecting feedback allows you to improve your project
                  </p>
                </div>
                {/*05 Crisis management */}
                <div
                  className="searchEngineMarketing_leadGenaration_card_div"
                  data-aos="fade-down"
                  data-aos-delay={5 * 100}
                >
                  <div className="searchEngineMarketing_leadGenaration_card_div_img">
                    <img
                      src="/Images/ServicesImage/management/Crisismanagement05.svg"
                      alt="Images/ServicesImage/management/Crisismanagement05.svg"
                    />
                  </div>
                  <h4
                    style={{
                      ...(isMobileView && {
                        fontFamily: "var(--font-poppins)",
                      }),
                    }}
                  >
                    Crisis management
                  </h4>
                  <p
                    style={{
                      ...(isMobileView && {
                        fontSize: "14px",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    Quick response to problems helps to maintain a positive
                    image
                  </p>
                </div>
                {/*06 Community growth*/}
                <div
                  className="searchEngineMarketing_leadGenaration_card_div"
                  data-aos="fade-down"
                  data-aos-delay={6 * 100}
                >
                  <div className="searchEngineMarketing_leadGenaration_card_div_img">
                    <img src="/Images/ServicesImage/Allicons/Positive Dynamic.png" />
                  </div>
                  <h4
                    style={{
                      ...(isMobileView && {
                        fontFamily: "var(--font-poppins)",
                      }),
                    }}
                  >
                    Community growth
                  </h4>
                  <p
                    style={{
                      ...(isMobileView && {
                        fontSize: "14px",
                        lineHeight: "125%",
                      }),
                    }}
                  >
                    A well-managed community attracts more members and makes
                    your project more visible
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="univarsal_service_padding_second_div communityManagement_features_div">
              {/* leftSide */}
              <div className="left_sideFeatcher">
                {/*01 left top features */}
                <div
                  className="features_div"
                  data-aos="zoom-in-up"
                  data-aos-delay={1 * 200}
                >
                  <div className="features_text_div topBottom_text_left_div_outline">
                    <h6>Direct communication</h6>
                    <p>
                      It allows for regular updates and new sharing with your
                      community
                    </p>
                  </div>
                  <div className="center_text_left_center_div_outline">
                    <div className="center_text_left_center_frist_outline"></div>
                    <div className="left_text_top_bottom_second_outline"></div>
                  </div>
                  <div className="features_small_circel topBottom_left_cirecel">
                    <img
                      src="/Images/ServicesImage/Allicons/Communication.png"
                      alt="communication image"
                    />
                  </div>
                </div>
                {/*02 left center features */}
                <div
                  className="features_div"
                  data-aos="zoom-in-up"
                  data-aos-delay={2 * 200}
                >
                  <div className="features_text_div center_text_left_div_outline">
                    <h6>Engagement</h6>
                    <p>
                      Engaging community management keeps members active and
                      encourages their participation
                    </p>
                  </div>
                  <div className="center_text_left_center_div_outline">
                    <div className="center_text_left_center_frist_outline"></div>
                    <div className="center_text_left_center_second_outline"></div>
                  </div>
                  <div className="features_small_circel">
                    <img src="/Images/ServicesImage/Allicons/Collaborating-In-Circle.png" />
                  </div>
                </div>
                {/*03 left bottom features */}
                <div
                  className="features_div"
                  data-aos="zoom-in-up"
                  data-aos-delay={3 * 200}
                >
                  <div className="features_text_div topBottom_text_left_div_outline">
                    <h6>Building trust</h6>
                    <p>Regular support builds trust with your audience</p>
                  </div>
                  <div className="center_text_left_center_div_outline">
                    <div className="center_text_left_center_frist_outline"></div>
                    <div className="left_text_top_bottom_second_outline"></div>
                  </div>
                  <div className="features_small_circel topBottom_left_cirecel">
                    <img
                      src="/Images/ServicesImage/Allicons/Handshake Heart.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* middel circel  */}
              <div className="features_circel_div">
                <div className="features_cirecle">
                  <p>It will Helps you to Build.</p>
                </div>
                <div className="features_middle_cirecle"></div>
              </div>

              {/* right side  */}
              <div className="right_sideFeatcher">
                {/* right center  */}
                {/*04 right top features */}
                <div
                  className="features_div"
                  data-aos="zoom-in-up"
                  data-aos-delay={4 * 200}
                >
                  <div className="features_small_circel topBottom_right_cirecel">
                    <img src="/Images/ServicesImage/Allicons/Popular.png" />
                  </div>
                  <div className="center_text_left_center_div_outline">
                    <div className="right_text_top_bottom_second_outline"></div>
                    <div className="center_text_left_center_frist_outline"></div>
                  </div>
                  <div className="features_right_text_div topBottom_text_right_div_outline">
                    <h6>Feedback loop</h6>
                    <p>
                      Collecting feedback allows you to improve your project
                    </p>
                  </div>
                </div>
                {/* 05 right center features */}
                <div
                  className="features_div"
                  data-aos="zoom-in-up"
                  data-aos-delay={5 * 200}
                >
                  <div className="features_small_circel">
                    <img
                      src="/Images/ServicesImage/management/Crisismanagement05.svg"
                      alt="Images/ServicesImage/management/Crisismanagement05.svg"
                    />
                  </div>
                  <div className="center_text_left_center_div_outline">
                    <div className="center_text_left_center_frist_outline"></div>
                    <div className="center_text_right_center_second_outline"></div>
                  </div>
                  <div className="features_right_text_div center_text_right_div_outline">
                    <h6>Crisis management</h6>
                    <p>
                      Quick response to problems helps to maintain a positive
                      image
                    </p>
                  </div>
                </div>
                {/*06 right bottom features */}
                <div
                  className="features_div"
                  data-aos="zoom-in-up"
                  data-aos-delay={6 * 200}
                >
                  <div className="features_small_circel topBottom_right_cirecel">
                    <img src="/Images/ServicesImage/Allicons/Positive Dynamic.png" />
                  </div>
                  <div className="center_text_left_center_div_outline">
                    <div className="right_text_top_bottom_second_outline"></div>
                    <div className="center_text_left_center_frist_outline"></div>
                  </div>
                  <div className="features_right_text_div topBottom_text_right_div_outline">
                    <h6>Community growth</h6>
                    <p>
                      A well-managed community attracts more members and makes
                      your project more visible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/*service offers   */}
      <section className="univarsal_service_padding">
        <h1
          className="communityManagement_service_offers_heading"
          style={{
            ...(isMobileView && {
              paddingTop: "1rem",
            }),
          }}
        >
          TOJO GLOBAL offers you
        </h1>
        <div className="univarsal_service_padding_second_div communityManagement_service_offers container">
          {/*01 Group Creation */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img
                src="/Images/ServicesImage/Allicons/Group creation -01 1.svg"
                alt="sevces offers icons"
              />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Group Creation
              </h4>
              <p>
                We help to set up your Discord or Telegram group, create
                channels, and regulate rules
              </p>
            </div>
          </div>
          {/*02 24/7 Community Management */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img
                src="/Images/ServicesImage/Allicons/247 Community Management-01.svg"
                alt="sevces offers icons"
              />
            </div>
            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                24/7 Community Management
              </h4>
              <p>
                Our team is always available to ensure your community remains
                active and engaged around the clock
              </p>
            </div>
          </div>
          {/* 03 Content Creation */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img
                src="/Images/ServicesImage/Allicons/content creation -01.svg"
                alt="sevces offers icons"
              />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Content Creation
              </h4>
              <p>
                We create valuable content including announcements updates and
                Guides to keep your members informed and connected
              </p>
            </div>
          </div>
          {/* 04 Event planning & execution*/}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img src="/Images/ServicesImage/Allicons/Event planning & execution-01.svg" />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Event planning & execution
              </h4>
              <p>
                we assist in organizing events like webinars and AMAs giving
                your team a chance to connect with members
              </p>
            </div>
          </div>

          {/* 05 Growth Management */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img
                src="/Images/ServicesImage/Allicons/Positive Dynamic.png"
                alt="sevces offers icons"
                className="GrowthManagement_img"
              />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Growth Management
              </h4>
              <p>
                We work to attract new members and expand your community reach
                across platforms
              </p>
            </div>
          </div>
          {/*06 Crisis Management */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img
                src="/Images/ServicesImage/Allicons/Crisis-01.svg"
                alt="sevces offers icons"
              />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Crisis Management
              </h4>
              <p>
                We work to attract new members and expand your community reach
                across platforms
              </p>
            </div>
          </div>
          {/*07 Post Management */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={7 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img
                src="https://i.ibb.co.com/nMRLHYtz/Post-Management-01-1.png"
                alt="sevces offers icons"
              />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Post Management
              </h4>
              <p>
                We handle scheduling and regular posting to ensure regular
                updates that keep your community engage
              </p>
            </div>
          </div>

          {/*08 Regular Updates */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={8 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img src="/Images/ServicesImage/Allicons/Regulat Updates-01.svg" />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Regular Updates
              </h4>
              <p>
                We provide consistent updates to keep your community informed
                and excited about your project
              </p>
            </div>
          </div>
          {/*09 Feedback Collection & Analysis */}
          <div
            className="communityManagement_service_offers_div"
            data-aos="fade-down"
            data-aos-delay={9 * 200}
          >
            <div className="communityManagement_service_offers_img_div">
              <img src="/Images/ServicesImage/Allicons/Feedback Collection & Analysis-01.svg" />
            </div>

            <div>
              <h4
                style={{
                  ...(isMobileView && {
                    fontFamily: "var(--font-poppins)",
                    fontSize: "20px",
                    lineHeight: "125%",
                  }),
                }}
              >
                Feedback Collection & Analysis
              </h4>
              <p>
                We collect and analyze feedback from your community to improve
                your project based on user needs 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* management service help  */}
      <section
        className="univarsal_service_padding"
        style={{
          ...(isMobileView && {
            paddingBottom: "1.5rem",
          }),
        }}
      >
        <div className="univarsal_service_padding_second_div managementHelp">
          <div
            className="managementHelp_image_div"
            data-aos="zoom-in-down"
            style={isMobileView ? { display: "none" } : { display: "block" }}
          >
            <img
              src="/Images/ServicesImage/banner_images/4--people-in-a-buble-like-chat--and-telegram-and-d.png"
              alt="managementHelp_image"
              style={isMobileView ? { display: "none" } : { display: "block" }}
            />
          </div>
          <div className="managementHelp_text_div" data-aos="fade-down">
            <h2>
              If you are searching for such a strong Telegram and Discord
              management service, we are here to help you.
            </h2>
            <p>
              Many crypto projects around the world fail due to weak community
              management, which can lead to a lack of trust and engagement.
              Without proper support and communication, building loyalty becomes
              difficult. That's why you need TOJO Global's community management
              services to ensure your project thrives and connects meaningfully
              with its audience. Let us help you create a strong, engaged
              community for lasting success.
            </p>
            <div className="hero_btn_style">
              <Link to="/packages">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Check Our Packages</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* contact us featcher  */}
      <ServiceContactUs />
    </main>
  );
};

export default CommunityManagement;
