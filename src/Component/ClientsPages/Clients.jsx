import HeroText from "../UniversalComponent/HeroText/HeroText";
import ClinetImage from "./ClinetImage";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrustedClientList } from "../UniversalComponent/JSON/TrustedClientList";

const Clients = () => {
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
  return (
    <>
      <Helmet>
        <title>TOJO Global - Clients</title>
      </Helmet>
      <div className="univarsal_div">
        <div className="container">
          <div className="univarsal_text_div" data-aos="fade-down">
            <h1 className="text-center mb-md-4">
              {" "}
              <span className="headdingGradientText me-3">Happy</span>
              Clients
            </h1>
            {/* blog text &#39; */}
            <div className="clients_services_text_div">
              <p className="clients_services_PeraDesText">
                Your one-stop digital place. We provide a full range of
                services, including marketing, management, development, design,
                listing, and customizable packages, to empower your business for
                success in the digital age.
              </p>
            </div>
          </div>

          {/* trusted client  */}

          <div className="OurTrustedClient_card_image_container">
            <div className="logo-slider ">
              <Slider {...settings}>
                {TrustedClientList.map((logo, index) => (
                  <div key={index} className="slide">
                    <img
                      src={logo.logo}
                      alt={`Logo ${index + 1}`}
                      className="trusted-client-logo"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
