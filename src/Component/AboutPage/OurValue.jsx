import { useEffect } from "react";

import bannerImg from "../Images/homePage/HomePageOurValueServices.png";

function OurValueBannerImage() {
  return (
    <img
      src={bannerImg}
      alt="banner_img4.png"
      className="OurValueBannerImage"
    />
  );
}

const OurValue = () => {
  return (
    <>
      {/* ================================================================================
                  Our Value section 
=========================================================================== */}
      <div className="about_div Our-Value-section-image">
        <div className="container">
          <div className="row about_row_style">
            <div
              className="col-sm-12 col-md-6 about_col_text_style"
              data-aos="fade-left"
            >
              <div className="Who_We_Are_text_div">
                <span>OUR VALUE</span>
                <div className="border_style mt-3"></div>
              </div>
              <h2 className="Our_Value_text_heading">
                A melting pot for the best idea
              </h2>
              {/* Our_Value_Services part  */}
              <div className="Our_Value_Services">
                <div className="Our_Value_Services_images_border"></div>
                <div className="Our_Value_Services_div">
                  <div>
                    <div className="Our_Value_Services_image">
                      <img
                        src="/Images/smallicons/Group.png"
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
                        src="/Images/smallicons/Group1.png"
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
                        src="/Images/smallicons/Group2.png"
                        alt="Group2.png"
                      />
                    </div>
                  </div>

                  <div className="Our_Value_Services_text_div">
                    <h6>Excellence</h6>
                    <p>
                      We consistenly strive to do high-quality work and give no
                      room for errore
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 about_col_image_style col_image_style Our_Value_image_style "
              data-aos="fade-right"
            >
              {/* <img
                src="Images/banner/Tojo-images-02.png"
                alt="banner_img4.png"
                className="bannerImage"
              /> */}
              {OurValueBannerImage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValue;
