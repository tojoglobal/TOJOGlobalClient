// Data for each item
const whoWeHelpData = [
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "More people are shopping online than ever before, making competition fierce. Our SEM strategies focus on reaching your target audience with the right message, quality visuals, and optimized product feeds to drive sales.",
    image: "/Images/ServicesImage/banner_images/E-commerce 1.png",
  },
  {
    id: "small-businesses",
    title: "Small Businesses",
    description:
      "Small businesses benefit from targeted local SEM campaigns to increase visibility in their area and attract loyal customers.",
    image: "/Images/ServicesImage/banner_images/E-commerce 1.png",
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "For startups, we create cost-effective SEM strategies to build awareness and attract early adopters in your niche.",
    image: "/Images/ServicesImage/banner_images/E-commerce 1.png",
  },
  {
    id: "local-businesses",
    title: "Local Businesses",
    description:
      "We help local businesses dominate their area with hyper-local SEM campaigns tailored to your community.",
    image: "/Images/ServicesImage/banner_images/E-commerce 1.png",
  },
  {
    id: "b2b",
    title: "B2B",
    description:
      "For B2B companies, our SEM campaigns focus on reaching decision-makers and generating high-quality leads.",
    image: "/Images/ServicesImage/banner_images/E-commerce 1.png",
  },
  {
    id: "retail-chains",
    title: "Retail Chains",
    description:
      "Retail chains benefit from our extensive SEM strategies designed to increase both online and in-store traffic.",
    image: "/Images/ServicesImage/banner_images/E-commerce 1.png",
  },
];

const SearchEngineMarketingWhoWeHelpCard = (data) => {
  const { title, image, description } = data;
  return (
    <>
      {/* <div className="blog_col_section"> */}
      <div className="blog_col_div_style">
        <div className="blog_col_image_style">
          <img src={`${image}`} alt={image} className="blog_img_style" />
        </div>
        <div className="searchEngineMarketingWhoWeHelpCard_text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      {/* </div> */}
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
          {whoWeHelpData.map((item) => (
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
