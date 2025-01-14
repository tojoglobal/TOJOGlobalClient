import { useContext } from "react";
import { AppContext } from "../../AppContext";

const OurValue = () => {
  const { isMobileView } = useContext(AppContext);
  return (
    <>
      {/* ==========================================
                  Our Value section 
=============================================*/}
      <div className="Our-Value-section-image">
        <div className="container">
          <div className="row about_row_style">
            <div
              className="col-sm-12 col-md-6 about_col_text_style"
              data-aos="fade-down"
            >
              <div
                className={`ourValue_text_div text-white`}
                style={{ textAlign: isMobileView ? "center" : "left" }}
              >
                <span>OUR</span>{" "}
                <span className="headdingGradientText"> VALUE</span>
              </div>
              <h2 className="Our_Value_text_heading text-white">
                A melting pot for the best idea
              </h2>
              {/* Our_Value_Services part  */}
              <div className="homePage_our_value_services">
                <div className="homePageOurValueServicesImagesBorder"></div>
                <div className="Our_Value_Services_div">
                  <div>
                    <div className="Our_Value_Services_image">
                      <img
                        src="/Images/homePage/OurValueServicesIcon01.svg"
                        alt="Group2.png"
                      />
                    </div>
                  </div>
                  <div className="Our_Value_Services_text_div">
                    <h6>Integrity</h6>
                    <p>We hold ourself to a strong ethical and moral code</p>
                  </div>
                </div>
                <div className="Our_Value_Services_div">
                  <div>
                    <div className="Our_Value_Services_image">
                      <img
                        src="/Images/homePage/OurValueServicesIcon02.svg"
                        alt="Group2.png"
                      />
                    </div>
                  </div>

                  <div className="Our_Value_Services_text_div">
                    <h6>Trust</h6>
                    <p>
                      We are dependable loyal and hard working to archive the
                      same goal.
                    </p>
                  </div>
                </div>

                <div className="Our_Value_Services_div">
                  <div>
                    <div className="Our_Value_Services_image">
                      <img
                        src="/Images/homePage/OurValueServicesIcon03.svg"
                        alt="Group2.png"
                      />
                    </div>
                  </div>

                  <div className="Our_Value_Services_text_div">
                    <h6>Excellence</h6>
                    <p>
                      We consistently strive to do high-quality work and give no
                      room for error
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6  col_image_style Our_Value_image_style "
              data-aos="fade-up"
            >
              <img
                src="https://i.ibb.co.com/F7w8c3Y/Home-Page-Our-Value-Services.png"
                alt="banner_img4.png"
                className="OurValueBannerImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValue;
