import React, { useState } from "react";
import { SearchEngineMarketingWhoWeHelpData } from "../../UniversalComponent/JSON/SearchEngineMarketingWhoWeHelpData";

const SearchEngineMarketingWhoWeHelpDeskTop = () => {
  const [selectedItem, setSelectedItem] = useState(
    SearchEngineMarketingWhoWeHelpData[0]
  );

  const handleItemClick = (data) => {
    setSelectedItem(data); // Update the selected item
  };

  const { title, description, image } = selectedItem;

  return (
    <div className="searchEngineMarketing_whoHelp_main_div container">
      {/* All services items */}
      <div className="searchEngineMarketing_whoHelp_items_div">
        {SearchEngineMarketingWhoWeHelpData.map((data, index) => (
          <div
            key={data.id}
            className={`searchEngineMarketing_whoHelp_item ${
              selectedItem.id === data.id ? "active" : ""
            }`}
            // data-aos="fade-left"
            data-aos-delay={(index + 1) * 200}
            onClick={() => handleItemClick(data)}
          >
            <span>{data.title}</span>
          </div>
        ))}
      </div>

      {/* Service-related text */}
      <div
        className="searchEngineMarketing_whoHelp_para_div"
        data-aos="fade-down"
      >
        <p>{description}</p>
      </div>

      {/* Service-related image */}
      <div className="searchEngineMarketing_whoHelp_image_div">
        <div className="searchEngineMarketing_whoHelp_service_image_gradinet"></div>
        <img
          data-aos="fade-up"
          src={image}
          alt={title}
          className="searchEngineMarketing_whoHelp_image"
        />
      </div>
    </div>
  );
};

export default SearchEngineMarketingWhoWeHelpDeskTop;
