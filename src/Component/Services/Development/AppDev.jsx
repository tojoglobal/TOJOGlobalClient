import { Link } from "react-router-dom";
import AppDevServiceWhyChooseSvg from "./SVGDev/AppDevServiceWhyChooseSvg";
import AppDevPartner from "./SVGDev/AppDevPartnering";
import "../../../../src/Style/ServicesPageStyle/Development/AppDev.Style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqItem from "../../UniversalComponent/FaqItems/FaqItem";
import { useContext, useState } from "react";
import { AppContext } from "../../../AppContext";
gsap.registerPlugin(ScrollTrigger);
const AppDev = () => {
  const { isLargeMobileView } = useContext(AppContext);
  // state
  const [openIndex, setOpenIndex] = useState(null);

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

  const appDeveFaqData = [
    {
      id: 1,
      answer:
        " The timeline is influenced by factors like app complexity, the range of features, and the platform choice. A basic app can take between 2-4 months, while more complex solutions may require 6 months or more.",
      question: "What determines the app development timeline?",
    },
    {
      id: 2,
      answer:
        "Yes, we offer cross-platform development for smooth performance on both iOS and Android, as well as native app development for businesses that prefer platform-specific solutions.",
      question: "Can you develop apps for both iOS and Android?",
    },
    {
      id: 3,
      answer:
        "We offer continuous post-launch support, including monitoring, regular updates, bug fixes, and enhancements to keep your app competitive and functioning smoothly.",
      question:
        "What kind of support do you provide after the app is launched?",
    },
    {
      id: 4,
      answer:
        "We use advanced encryption, secure API integration, and conduct regular security audits to safeguard your app. Our methods align with and often surpass industry security standards.",
      question: "How do you ensure the app’s security?",
    },
    {
      id: 5,
      answer:
        "Absolutely. We can integrate various third-party services like payment systems, CRMs, and cloud services to extend the app’s capabilities.",
      question: "Is it possible to integrate third-party services in the app?",
    },
  ];

  // Toggle function
  const toggleFaq = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };
  return (
    <main className="maindiv">
      {/* Turn your Ideas into Reality with TOJO Globals  Custom App Development Service */}
      <section className="socailMediaMarketing_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            <h1>
              Turn your Ideas into Reality with TOJO Globals  Custom App
              Development Service
            </h1>
            <p>
              TOJO Global offers personalized app solutions to improve user
              engagement, enhance efficiency, and support growth on iOS,
              Android, or both platforms.
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
      {/* app dev Why Choose TOJO Global */}
      <section className="container">
        <div className="sectionTopTextstyle mb-4 mb-md-0" data-aos="fade-up">
          <h1 className="topHeadingStyle"> Why Choose TOJO Global?</h1>
        </div>
        <div className="appDevService_whyChoose_main_div">
          {/* 01 */}
          <div
            className="appDevService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <AppDevServiceWhyChooseSvg />
            <div className="appDevService_whyChoose_text_div">
              <h2 className="elementHeadingText">Custom Solutions</h2>
              <p>
                We create apps that are tailored to fit your unique business
                needs, ensuring a personalized user experience that aligns with
                your goals and resonates with your audience.
              </p>
            </div>
          </div>
          {/* 02 Experienced Development Team*/}
          <div
            className="appDevService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <AppDevServiceWhyChooseSvg />
            <div className="appDevService_whyChoose_text_div">
              <h2 className="elementHeadingText">
                Experienced Development Team
              </h2>
              <p>
                Our developers stay updated on the latest trends and best
                practices in app development, allowing us to build intuitive,
                scalable, and future-proof apps that evolve with your business.
              </p>
            </div>
          </div>
          {/* 03 Comprehensive Lifecycle Suppor*/}
          <div
            className="appDevService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <AppDevServiceWhyChooseSvg />
            <div className="appDevService_whyChoose_text_div">
              <h2 className="elementHeadingText">
                Comprehensive Lifecycle Suppor
              </h2>
              <p>
                 From the initial concept through development, launch, and
                beyond, we provide end-to-end support to ensure the smooth
                functioning and long-term success of your app.
              </p>
            </div>
          </div>
          {/* 04 Security-First Approach */}
          <div
            className="appDevService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <AppDevServiceWhyChooseSvg />
            <div className="appDevService_whyChoose_text_div">
              <h2 className="elementHeadingText">Security-First Approach</h2>
              <p>
                We prioritize security throughout the development process,
                implementing strong protocols and compliance measures to protect
                your data and your users' information.
              </p>
            </div>
          </div>
          {/* 05   Cross-Platform Development*/}
          <div
            className="appDevService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <AppDevServiceWhyChooseSvg />
            <div className="appDevService_whyChoose_text_div">
              <h2 className="elementHeadingText">
                 Cross-Platform Development
              </h2>
              <p>
                TOJO Global offers expertise in building apps for both iOS and
                Android platforms, ensuring seamless performance and a
                consistent user experience across all devices.
              </p>
            </div>
          </div>
          {/* 06  Innovative Design Approach*/}
          <div
            className="appDevService_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <AppDevServiceWhyChooseSvg />
            <div className="appDevService_whyChoose_text_div">
              <h2 className="elementHeadingText">
                 Innovative Design Approach
              </h2>
              <p>
                We create user-friendly and attractive designs that improve
                usability, ensuring your app delivers a seamless and engaging
                experience for all users.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* app dev Our Services TOJO Global */}
      <section className="appDevService_Our_Services_section">
        <div className="sectionTopTextstyle container" data-aos="fade-down">
          <h1 className="topHeadingStyle"> Our Services</h1>
        </div>
        <div className="appDevService_Our_Services_belowGrandinet_div"></div>
        <div className="appDevService_Our_Services_main_div">
          <div className="container appDevService_ourServices_card_div">
            {/* 01 */}
            <div
              className="appDevService_ourServices_card"
              data-aos="fade-up"
              data-aos-delay={1 * 200}
            >
              <div className="appDevService_ourServices_card_icon_text">
                <img
                  src="/Images/ServicesImage/development/appDevOurServieIdeaSharing01.svg"
                  alt="appDevService_OurServices_icon1"
                />

                <h2 className="appDevService_ourServices_card_heading">
                  Custom App Development
                </h2>
                <p>
                  Develop custom iOS, Android, and cross-platform apps that meet
                  your business needs, ensuring a seamless user experience and
                  strong brand relevance.
                </p>
              </div>
            </div>
            {/* 02 UI/UX Design*/}
            <div
              className="appDevService_ourServices_card"
              data-aos="fade-up"
              data-aos-delay={2 * 200}
            >
              <div className="appDevService_ourServices_card_icon_text">
                <img
                  src="/Images/ServicesImage/development/appDevOurServieIdeaSharing02.svg"
                  alt="appDevService_OurServices_icon1"
                />

                <h2 className="appDevService_ourServices_card_heading">
                  UI/UX Design
                </h2>
                <p>
                  Our design team focuses on creating intuitive, visually
                  appealing interfaces that enhance the user experience,
                  ensuring smooth and enjoyable interactions.
                </p>
              </div>
            </div>
            {/* 03 On-Demand Apps*/}
            <div
              className="appDevService_ourServices_card"
              data-aos="fade-up"
              data-aos-delay={3 * 200}
            >
              <div className="appDevService_ourServices_card_icon_text">
                <img
                  src="/Images/ServicesImage/development/appDevOurServieIdeaSharing03.svg"
                  alt="appDevService_OurServices_icon1"
                />

                <h2 className="appDevService_ourServices_card_heading">
                  On-Demand Apps
                </h2>
                <p>
                  Whether it’s for food delivery or ride-sharing, we build
                  dynamic, real-time apps that allow businesses to connect with
                  users instantly.
                </p>
              </div>
            </div>
            {/* 04 Enterprise Solutions */}
            <div
              className="appDevService_ourServices_card"
              data-aos="fade-up"
              data-aos-delay={4 * 200}
            >
              <div className="appDevService_ourServices_card_icon_text">
                <img
                  src="/Images/ServicesImage/development/appDevOurServieIdeaSharing04.svg"
                  alt="appDevService_OurServices_icon1"
                />

                <h2 className="appDevService_ourServices_card_heading">
                  Enterprise Solutions
                </h2>
                <p>
                  We develop secure, large-scale applications that help
                  businesses streamline operations, improve communication, and
                  scale as needed.
                </p>
              </div>
            </div>
            {/* 05 App Maintenance & Support */}
            <div
              className="appDevService_ourServices_card"
              data-aos="fade-up"
              data-aos-delay={5 * 200}
            >
              <div className="appDevService_ourServices_card_icon_text">
                <img
                  src="/Images/ServicesImage/development/appDevOurServieIdeaSharing05.svg"
                  alt="appDevService_OurServices_icon1"
                />

                <h2 className="appDevService_ourServices_card_heading">
                  App Maintenance & Support
                </h2>
                <p>
                  Our support doesn't stop at launch. We offer ongoing
                  maintenance services to keep your app updated and functioning
                  optimally in a constantly changing digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* app dev Industries We Serve TOJO Global */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle"> Industries We Serve</h1>
        </div>
        <div className="appDev_industries_services_main_div">
          {/* 01 Travel */}
          <div className="appDev_industries_services_div">
            {/* text part */}
            <div
              className="appDev_industries_services_text_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <h2 className="appDev_industries_services_heading">Travel</h2>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Search Tools:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Facilitate easy booking of flights, accommodations, and
                  activities.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Itinerary Management:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Provide instant updates on travel changes or offers.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Real-Time Notifications:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Provide instant updates on travel changes or offers.
                </p>
              </div>
            </div>
            {/* img part */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos="fade-right"
            >
              <img
                src="/Images/ServicesImage/development/appDev_industries_servicesTravels-all-facilities-flight.png"
                alt="appDev_industries_services_img"
              />
            </div>
          </div>
          {/* 02 Entertainment*/}
          <div className="appDev_industries_services_div">
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/appDev_industries_servicesStreaming-services---integrate-multimedia-like-mus2.png"
                alt="appDev_industries_services_img"
              />
            </div>
            {/* text */}
            <div
              className="appDev_industries_services_text_div"
              data-aos="fade-right"
            >
              <h2 className="appDev_industries_services_heading">
                Entertainment
              </h2>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Streaming Services:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Integrate multimedia like music, movies, and gaming into one
                  unified platform.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Interactive Features:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Boost user engagement with social sharing and personalized
                  content recommendations.
                </p>
              </div>
            </div>
          </div>
          {/* 03 E-Learning*/}
          <div className="appDev_industries_services_div">
            {/* text */}
            <div
              className="appDev_industries_services_text_div"
              data-aos="fade-right"
            >
              <h2 className="appDev_industries_services_heading">E-Learning</h2>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Video Conferencing:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Enable real-time virtual interactions for an effective
                  learning experience.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Interactive Quizzes:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Enhance learning with assessments designed to measure
                  understanding and improve knowledge retention.
                </p>
              </div>
            </div>
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/appDev_industries_servicesVideo-conferencing3.png"
                alt="appDev_industries_services_img"
              />
            </div>
          </div>
          {/* 04 Healthcare*/}
          <div className="appDev_industries_services_div">
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/appDev_industries_servicesHealth-care04.png"
                alt="appDev_industries_services_img"
              />
            </div>
            {/* text */}
            <div
              className="appDev_industries_services_text_div"
              data-aos="fade-right"
            >
              <h2 className="appDev_industries_services_heading">Healthcare</h2>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Patient Engagement:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Improve communication between patients and providers through
                  seamless, user-friendly interactions.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Telehealth Services:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Simplify booking healthcare appointments for both patients and
                  providers.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Appointment Scheduling:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Simplify booking healthcare appointments for both patients and
                  providers.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Secure Patient Records:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Manage medical data safely with secure, compliant systems.
                </p>
              </div>
            </div>
          </div>
          {/* 05 Shopping*/}
          <div className="appDev_industries_services_div">
            {/* text */}
            <div
              className="appDev_industries_services_text_div"
              data-aos="fade-right"
            >
              <h2 className="appDev_industries_services_heading">Shopping</h2>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  User-Friendly Design:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Create a streamlined, enjoyable shopping experience.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Personalized Recommendations:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Tailor product suggestions based on user preferences.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Effortless Checkout:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Ensure a smooth, intuitive purchasing process.
                </p>
              </div>
              <div>
                <h4 className="appDev_industries_services_subHeading">
                  Inventory Management:
                </h4>
                <p className="appDev_industries_services_paraText">
                  Help businesses track and manage stock levels efficiently.
                </p>
              </div>
            </div>
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/appDev_industries_servicesShopping05.png"
                alt="appDev_industries_services_img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* app dev Benefits of Partnering  TOJO Global */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1 className="topHeadingStyle">
            Benefits of Partnering with TOJO Global
          </h1>
        </div>
        <div className="appDev_Partnering_services_main_div">
          {/* 01 */}
          <div
            className="appDev_Partnering_services_div"
            data-aos="fade-up"
            data-aos-delay={1 * 200}
          >
            <AppDevPartner
              svgImage={"appDevPartneringBenefitsServicesSvg01.svg"}
            />
            <div className="appDev_Partnering_services_text_div">
              <h4 className="mb-3">Improved User Engagement</h4>
              <p>
                Our apps are designed to encourage users to keep coming back,
                maximizing retention and engagement.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="appDev_Partnering_services_div"
            data-aos="fade-up"
            data-aos-delay={2 * 200}
          >
            <AppDevPartner
              svgImage={"appDevPartneringBenefitsServicesSvg02.svg"}
            />
            <div className="appDev_Partnering_services_text_div">
              <h4 className="mb-3">Affordable Solutions</h4>
              <p>
                We provide top-quality app development within your budget,
                delivering excellent results every time.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="appDev_Partnering_services_div"
            data-aos="fade-up"
            data-aos-delay={3 * 200}
          >
            <AppDevPartner
              svgImage={"appDevPartneringBenefitsServicesSvg03.svg"}
            />
            <div className="appDev_Partnering_services_text_div">
              <h4 className="mb-3">Scalable Architecture</h4>
              <p>
                We build apps with scalability in mind, ensuring they can handle
                increased traffic and added features as your business grows.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="appDev_Partnering_services_div"
            data-aos="fade-up"
            data-aos-delay={4 * 200}
          >
            <AppDevPartner
              svgImage={"appDevPartneringBenefitsServicesSvg04.svg"}
            />
            <div className="appDev_Partnering_services_text_div">
              <h4 className="mb-3">Continuous Post-Launch Support</h4>
              <p>
                We offer updates, bug fixes, and new features to keep your app
                competitive and user friendly.
              </p>
            </div>
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
              Ready to Get Started?
            </h1>
            <p className="professionalModeration_service_offers_para">
              Bring your app ideas to life with TOJO Global. Whether you’re
              developing a brand-new app or enhancing an existing one, our team
              is ready to help you succeed.
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

      {/* app dev faq  TOJO Global */}
      <section className="container faq_row_style">
        <div className="sectionTopTextstyle">
          <h1 className="topHeadingStyle">FAQs</h1>
        </div>
        {/* faq data  */}
        <div className="faq_row_main_div">
          {appDeveFaqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleFaq={toggleFaq}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AppDev;
