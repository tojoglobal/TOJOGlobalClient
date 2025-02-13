import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { SearchEngineMarketingWhoWeHelpData } from "../../UniversalComponent/JSON/SearchEngineMarketingWhoWeHelpData";

const SearchEngineMarketingWhoWeHelpCard = (data) => {
  const { title, image, description } = data;
  const { isLargeMobileView, isMobileView } = useContext(AppContext);
  return (
    <>
      {/* <div className="blog_col_section"> */}
      <div className="blog_col_div_style">
        <div className="blog_col_image_style">
          <img
            src={`${image}`}
            alt={image}
            className="blog_img_style"
            style={{
              ...(isMobileView && {
                height: "14rem",
              }),
            }}
          />
        </div>
        <div className="searchEngineMarketingWhoWeHelpCard_text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

const SearchEngineMarketingWhoWeHelp = () => {
  return (
    <>
      {/* Main Content */}
      <div className="searchEngineMarketing_whoHelp_main_div">
        {/* Items List */}
        <div className="searchEngineMarketing_whoHelp_items_div">
          {SearchEngineMarketingWhoWeHelpData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              data-aos="fade-up"
            >
              {SearchEngineMarketingWhoWeHelpCard(item)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchEngineMarketingWhoWeHelp;
