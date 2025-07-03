import HeroText from "../UniversalComponent/HeroText/HeroText";
import { MdMarkEmailRead, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { Helmet } from "react-helmet-async";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { ContactUsForm } from "./ContactUsFrom";

const ContactUS = () => {
  return (
    <div>
      <Helmet>
        <title>TOJO Global - Contact Us</title>
      </Helmet>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "", text2: "Get In Touch", description: "" }}
          />

          {/* other text contactus*/}
          <div className="contactus_text_section">
            <div className="row">
              <div className="col-sm-12 col-md-6 contactus_text_div">
                <h2 className="contactus_text_heading">
                  Ready to Turn Your Vision into Reality?
                </h2>
                <p className="contactus_text_para">
                  Want to blast your business off like a rocket? Tojo
                  Global&#39;s got a secret weapon for you: an amazing custom
                  Marketing, Management , Design, Development & Crypto listing
                  plan which will turn heads and grow your business faster than
                  ever. Don&#39;t wait! Call or email Tojo Global and watch your
                  success soar!
                </p>
                <div className="contactus_Services">
                  <div className="contactus_Services_icon_div">
                    <div className="contactus_Services_icon">
                      <MdCall className="contactus_icon" />
                    </div>
                    <div className="contactus_Services_icon">
                      <MdMarkEmailRead className="contactus_icon" />
                    </div>

                    <div className="contactus_Services_icon">
                      <FaLocationDot className="contactus_icon" />
                    </div>
                  </div>
                  <div className="contactus_Services_text_div">
                    <div className="contactus_Services_text">
                      <p>+880 1333-411624</p>
                    </div>
                    <div className="contactus_Services_text">
                      <p>hello@tojoglobal.com</p>
                    </div>
                    <div className="contactus_Services_text">
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="footer_social_media">
                  <a
                    className="footer_social_media_link"
                    href="https://www.facebook.com/TOJOGlobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="bx bxl-twitter footer_icon" />
                  </a>
                  <a
                    className="footer_social_media_link"
                    href="https://x.com/TOJOGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="bx bxl-twitter footer_icon" />
                  </a>
                  <a
                    className="footer_social_media_link"
                    href="https://www.linkedin.com/company/tojo-global/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="bx footer_icon" />
                  </a>
                  <a
                    className="footer_social_media_link"
                    href="https://t.me/TOJO_Global"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane className="bx footer_icon" />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 contactus_input_fild_div">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
