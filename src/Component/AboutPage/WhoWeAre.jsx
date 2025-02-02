import { useEffect } from "react";

const WhoWeAre = () => {
  return (
    <>
      {/* =================================================
                  Who We Are section 
========================================================*/}
      <div className="Who-We-Are-section-image text-white">
        <div className="container">
          <div className="row about_row_style">
            <div
              className="col-sm-12 col-md-6 about_col_image_style col_image_style"
              data-aos="fade-up"
            >
              <img
                src="Images/banner/AboutusPageWhoWeAreSection.png"
                alt="banner_img4.png"
                className=""
              />
            </div>
            <div
              className="col-sm-12 col-md-6 about_col_text_style col_text_style"
              data-aos="fade-down"
            >
              <div className="Who_We_Are_text_div">
                <div className="Who_We_Are_border_style"></div>{" "}
                <span className="headdingGradientText">WHO WE ARE</span>
              </div>

              <h2 className="Who_We_Are_text_heading">
                Innovative Solutions for Business Growth
              </h2>

              <p className="about_second_para">
                Tojo Global is a successful company that specialises in custom
                services and is exceptionally skilled at marketing, management,
                design, and development. We help businesses grow by coming up
                with new ideas, being experts in our field, and always trying to
                be the best. We focus on cryptocurrency, blockchain, fintech,
                startups, small businesses, B2B, and much more. Welcome to a
                journey that will change you, where your goals will become our
                mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
