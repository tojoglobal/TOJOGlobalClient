import React from "react";
import { ContactUsFrom } from "../ContactUsPage/ContactUsFrom";

const LetsWork = () => {
  return (
    <section className="text-white home_LetsworkStart_mainsection">
      <div className="container home_LetsworkStart_Div">
        <div className="row">
          <div
            className="col-sm-12 col-lg-6 webContentWriting_product_heading_text home_LetsworkStart_text_div "
            data-aos="fade-up"
          >
            <h1 className="contactus_text_heading">
              <span className="headdingGradientText">Let’s </span> <br /> Work
              Together
            </h1>
            <p className="contactus_text_para text-white">
              Want to blast your business off like a rocket? Tojo Global&#39;s
              got a secret weapon for you: an amazing custom Marketing,
              Management , Design, Development & Crypto listing plan which will
              turn heads and grow your business faster than ever. Don&#39;t
              wait! Call or email Tojo Global and watch your success soar!
            </p>
          </div>
          <div
            className="col-sm-12 col-lg-6 contactus_input_fild_div"
            data-aos="fade-down"
          >
            <ContactUsFrom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsWork;
