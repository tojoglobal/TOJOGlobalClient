import React, { useEffect, useRef, useState } from "react";
import { HomeServersWeOfferCatagoryItemsBtn } from "./HomePageSvg/HomeServersWeOfferCatagoryItemsBtn";
import { Link } from "react-router-dom";
import { categoryData } from "./CategoryData";

const Services = () => {
  const btnRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(
    categoryData[1].categoryName
  );
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // Update layout based on screen size
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (category, index) => {
    setActiveCategory(category);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container home_servers_weOffer_section" ref={btnRef}>
      <div className="homePageSectionTopTextstyle" data-aos="fade-down">
        <h1 className="topHeadingStyle">
          <span className="headdingGradientText mobile_homePage_tustedClient">
            Services
          </span>{" "}
          We Offer
        </h1>
        <p className="paraStyle">
          TOJO GLOBAL offers crypto solutions, targeted marketing, impactful
          design, custom development, and professional video editing to elevate
          your brand.
        </p>
      </div>

      {/* Services card items dektop */}
      <div className="home_servers_weOffer_mainCardDiv" data-aos="fade-down">
        <div className="home_servers_weOffer_CardImages">
          <img
            src="/Images/homePage/homeServersWeOfferMainCardDivSvg.png"
            alt="homeServersWeOfferMainCardDivSvg"
          />
        </div>
        <div
          className={
            isMobileView
              ? "home_servers_weOffer_mobileCatagoryMainDiv"
              : "home_servers_weOffer_catagoryMainDiv"
          }
        >
          {/* Category Buttons */}
          <div className="home_servers_weOffer_catagoryItems">
            {categoryData.map((category, index) => (
              <div key={category.categoryName}>
                <HomeServersWeOfferCatagoryItemsBtn
                  btnText={category.categoryName}
                  isActive={activeCategory === category.categoryName}
                  onClick={() =>
                    handleCategoryClick(category.categoryName, index)
                  }
                />
                {/* Mobile-specific content rendering */}
                {isMobileView && openIndex === index && (
                  <div className="home_servers_weOffer_mobileCategoryData">
                    <div className="home_servers_weOffer_catagoryItemsMaindiv">
                      {category.items.map((item, idx) => (
                        <Link to={item.serviceLink} key={idx}>
                          <div className="home_servers_weOffer_catagoryItemDivbtn">
                            <span>{item.serviceName}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop-specific content rendering */}
          {!isMobileView && (
            <div className="home_servers_weOffer_catagoryRightItemsChange">
              <img
                src={
                  categoryData.find(
                    (cat) => cat.categoryName === activeCategory
                  )?.categoryImage
                }
                alt={activeCategory}
                className="category-image"
              />
              <div className="home_servers_weOffer_catagoryItemsMaindiv">
                {categoryData
                  .find((cat) => cat.categoryName === activeCategory)
                  ?.items.map((item, index) => (
                    <Link to={item.serviceLink} key={index}>
                      <div className="home_servers_weOffer_catagoryItemDivbtn">
                        <span>{item.serviceName}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
