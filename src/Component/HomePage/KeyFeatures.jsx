import React, { useEffect, useState } from "react";
const KeyFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.querySelector(".key_features_main_div");
      const bounding = servicesSection.getBoundingClientRect();

      // Check if the section is partially visible
      if (
        bounding.top < window.innerHeight &&
        bounding.bottom > 0 &&
        !isVisible
      ) {
        setIsVisible(true); // Trigger animation when section is partially visible
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <>
      {/* ================================================================================
                  Key Features section 
=========================================================================== */}
      <div
        className={`key_features_main_div  ${
          isVisible ? "fade-in-animation" : ""
        }`}
      >
        <div className="container">
          <div className="key_features_text_div">
            <div className="key_features_box_div" data-aos="fade-right">
              <div>Key Features</div>
            </div>
            {/* features  */}
            <div className="toltip_group">
              {/* frist tool tip */}
              <div className="key_features_toltip_group tooltips_frist_last fade-in-text">
                <div className="key_col_image_style">
                  <div className="key_col_image_circle_style">
                    <img
                      src="Images/smallicons/Vector-5.png"
                      alt="keyVector1"
                    />
                  </div>
                  <div className="key_col_image_DownGradinet"></div>
                </div>

                <div className="key_features_group_btn toltip">
                  <span>Blockchain expertise</span>
                  <div className="toltipcard tooltipTopArrow tooltipTopArrow1">
                    <p>
                      we are always ready to provide specialized solutions for
                      using the blockchain technology, including development,
                      marketing, design, and management services to make deals
                      more efficient and clear.
                    </p>
                  </div>
                </div>
              </div>
              {/* second tool tip */}
              <div className="key_features_toltip_group tooltips_second_five">
                <div className="key_col_image_style">
                  <div className="key_col_image_circle_style">
                    <img
                      src="Images/smallicons/Vector-2.png"
                      alt="keyVector1"
                    />
                  </div>
                </div>
                <div className="key_features_group_btn toltip">
                  <span>Small Business Support</span>
                  <div className="toltipcard tooltipTopArrow tooltipTopArrow2 ">
                    <p>
                      Development, marketing, design, and management solutions
                      that are made to the needs of small companies. This helps
                      them grow and stay strong in tough market conditions.
                    </p>
                  </div>
                </div>
              </div>
              {/* third tool tip */}
              <div className="key_features_toltip_group tooltips_third_fourth">
                <div className="key_col_image_style">
                  <div className="key_col_image_circle_style">
                    <img
                      src="Images/smallicons/Vector-3.png"
                      alt="keyVector1"
                    />
                  </div>
                </div>
                <div className="key_features_group_btn toltip">
                  <span>Crypto Solutions</span>
                  <div className="toltipcard tooltipTopArrow tooltipTopArrow3">
                    <p>
                      Full range of services including development, marketing,
                      design, and management as well as cryptocurrency listing
                      that are specially made to help you handle the constantly
                      changing world of cryptocurrency. We make sure you stay
                      legal, safe, and succeed in the market.
                    </p>
                  </div>
                </div>
              </div>
              {/* fouth tool tip */}
              <div className="key_features_toltip_group tooltips_third_fourth">
                <div className="key_col_image_style">
                  <div className="key_col_image_circle_style">
                    <img src="Images/smallicons/Vector.png" alt="keyVector1" />
                  </div>
                </div>
                <div className="key_features_group_btn toltip">
                  <span>Startup business</span>
                  <div className="toltipcard tooltipTopArrow tooltipTopArrow4 ">
                    <p>
                      This service helps startups grow quickly by giving them
                      strategic advice and all-around support. We do this by
                      providing development, marketing, design, and management
                      skills to help them get investors and take over the
                      market.
                    </p>
                  </div>
                </div>
              </div>
              {/* five tool tip */}
              <div className="key_features_toltip_group tooltips_second_five">
                <div className="key_col_image_style">
                  <div className="key_col_image_circle_style">
                    <img
                      src="Images/smallicons/Vector-4.png"
                      alt="keyVector1"
                    />
                  </div>
                </div>
                <div className="key_features_group_btn toltip">
                  <span>B2B Integration</span>
                  <div className="toltipcard tooltipTopArrow tooltipTopArrow5">
                    <p>
                      We offer planned services and help to make sure that B2B
                      interactions go smoothly. We use our expertise to improve
                      teamwork and promote growth for both companies.
                    </p>
                  </div>
                </div>
              </div>
              {/* last tool tip */}
              <div className="key_features_toltip_group tooltips_frist_last">
                <div className="key_col_image_style">
                  <div className="key_col_image_circle_style">
                    <img
                      src="Images/smallicons/Vector-1.png"
                      alt="keyVector1"
                    />
                  </div>
                </div>
                <div className="key_features_group_btn toltip">
                  <span>Fintech Innovation</span>
                  <div className="toltipcard tooltipTopArrow tooltipTopArrow6">
                    <p>
                      Advanced fintech development, marketing, design, and
                      management services are available to change your world.
                      Just grab them and increase your business growth in this
                      changing digital world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="keyDownGradinet"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
