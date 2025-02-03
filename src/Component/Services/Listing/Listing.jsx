import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListingClientList } from "../../UniversalComponent/JSON/TrustedClientList";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../AppContext";

const Listing = () => {
  const { isMobileView } = useContext(AppContext);
  const email = "hello@tojoglobal.com";
  const subject = "Proposal Request";
  const body = "Hello, I would like to request a proposal.";

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const pathName = location.pathname;
  useEffect(() => {
    const aboutDiv = document.querySelector(".about_col_text_style");
    if (pathName === "/services/listing" && aboutDiv) {
      aboutDiv.style.paddingTop = "0rem";
    }
  }, [pathName]);

  return (
    <div className="univarsal_div">
      <div className="container">
        <div className="univarsal_text_div" data-aos="fade-down">
          <h1 className="text-center mb-md-5">
            <span className="headdingGradientText me-3">Services</span>
            Listing
          </h1>
        </div>

        {/* listing services */}
        <div className="Who-We-Are-section-image text-white">
          <div className="container">
            <div className="row about_row_style">
              {!isMobileView && (
                <div
                  className="col-sm-12 col-md-6 about_col_image_style col_image_style listing_img_div"
                  data-aos="fade-up"
                >
                  <img
                    src="https://i.ibb.co.com/F7w8c3Y/Home-Page-Our-Value-Services.png"
                    alt="banner_img4.png"
                  />
                </div>
              )}

              {/* Show listing_keypoint only on mobile view */}
              {isMobileView && (
                <div className="about-basics-benefits-content about_col_list_items listing_keypoint">
                  <div
                    className="about_basics_benefits_item"
                    data-aos="fade-up"
                    data-aos-delay={1 * 200}
                  >
                    <span>Cheapest prices for single or package listings.</span>
                  </div>
                  <div
                    className="about_basics_benefits_item"
                    data-aos="fade-up"
                    data-aos-delay={2 * 200}
                  >
                    <span>Minimize Delays, Maximize Speed!</span>
                  </div>
                  <div
                    className="about_basics_benefits_item"
                    data-aos="fade-up"
                    data-aos-delay={3 * 200}
                  >
                    <span>Positioning in queue ahead of others.</span>
                  </div>
                  <div
                    className="about_basics_benefits_item"
                    data-aos="fade-up"
                    data-aos-delay={4 * 200}
                  >
                    <span>No extra charges for promotion and marketing.</span>
                  </div>
                </div>
              )}

              <div
                className="col-sm-12 col-md-6 about_col_text_style col_text_style"
                data-aos="fade-down"
              >
                <p className="about_second_para mb-4">
                  At Tojo Global, we have a dedicated team that specializes in
                  listing services. We know that getting a project listed on big
                  exchanges can be hard and take a lot of time. We know how to
                  deal with these problems and get your project listed quickly
                  and easily because our team has done it before. We keep in
                  close touch with exchange providers and follow their rules and
                  requirements. We also help and guide you through the whole
                  selling process, from getting the paperwork ready to handling
                  the listing fee. Our help will help your project meet more
                  people and get more trades, which can eventually lead to more
                  adoption and success.
                </p>

                {/* Show listing_keypoint only on mobile view */}
                {isMobileView == false && (
                  <div className="about-basics-benefits-content about_col_list_items listing_keypoint">
                    <div
                      className="about_basics_benefits_item"
                      data-aos="fade-up"
                      data-aos-delay={1 * 200}
                    >
                      <span>
                        Cheapest prices for single or package listings.
                      </span>
                    </div>
                    <div
                      className="about_basics_benefits_item"
                      data-aos="fade-up"
                      data-aos-delay={2 * 200}
                    >
                      <span>Minimize Delays, Maximize Speed!</span>
                    </div>
                    <div
                      className="about_basics_benefits_item"
                      data-aos="fade-up"
                      data-aos-delay={3 * 200}
                    >
                      <span>Positioning in queue ahead of others.</span>
                    </div>
                    <div
                      className="about_basics_benefits_item"
                      data-aos="fade-up"
                      data-aos-delay={4 * 200}
                    >
                      <span>No extra charges for promotion and marketing.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* our listing client */}
        <div className="OurTrustedClient_card_image_container OurTrustedListing_card_image_container">
          <div className="logo-slider">
            <Slider {...settings}>
              {ListingClientList.map((logo, index) => (
                <div key={index} className="slide">
                  <img
                    src={logo.logo}
                    alt={`Logo ${index + 1}`}
                    className="listing-client-logo custom-listing-client-logo"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="hero_btn_style d-flex justify-content-center">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
          >
            <button className="custombtn hero_btn2">GET A PROPOSAL</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Listing;
