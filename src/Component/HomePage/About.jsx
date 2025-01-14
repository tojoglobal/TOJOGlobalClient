import { useEffect } from "react";
// import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <>
      {/* ================================================================================
                  about section 
=========================================================================== */}
      <div className="about_div animation-image">
        <div className="container">
          <div className="row gap-3 about_row_style">
            <div className="col-sm-12 col-lg-6 about_col_image_style col_image_style mt-4 mt-md-1">
              <img
                src="/Images/banner/aboutUsHero.png"
                alt="banner_img4.png"
                data-aos="fade-left"
              />
            </div>

            <div className=" col-sm-12 col-lg-6 about_col_text_style col_text_style">
              <div className="about_page_strongText" data-aos="fade-right">
                <h2>
                  About <span className="headdingGradientText">Tojo</span>{" "}
                  Global
                </h2>
              </div>
              <p className="about_second_para" data-aos="fade-right">
                We redefine excellence in business solution at TOJO Global. Our
                unique services in marketing, management, design, development,
                and listing enables us to support industries in the blockchain,
                fintech, cryptocurrency, small company, and B2B sectors.
                Discover success, efficiency, and innovation with TOJO
                Global—where your goals become our mission. Welcome to a new era
                of business transformation.
              </p>

              {/* Package services dynamically listed */}
              <div className="about-basics-benefits-content about_col_list_items">
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={1 * 200}
                >
                  <span>Industry Expert Staff</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={2 * 200}
                >
                  <span>Client-Centric Focus</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={3 * 200}
                >
                  <span>Partner rather than Vendor</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={4 * 200}
                >
                  <span>Solutions geared to improve Productivity</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={5 * 200}
                >
                  <span>Collaborative Approach throughout the process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
