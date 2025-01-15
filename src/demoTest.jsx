import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import axios from "axios";
import LoadingSvg from "../BlogPage/BlogSvg/LoddingSvg";
import ArticalColum from "../BlogPage/ArticalColum";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LatestBlogPost = () => {
  const { apiUrl, getCategoryName, isLargeMobileView } = useContext(AppContext);

  // States
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogpost, setBlogpost] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const itemsToShow = 3;

  // Fetch blog data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${apiUrl}/api/admin/blogpost`)
      .then((result) => {
        if (result.data.Status) {
          setBlogpost(result.data.Result);
        } else {
          setErrorMessage(result.data.Error || "No data available");
        }
      })
      .catch(() => {
        setErrorMessage("Error fetching data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiUrl]);

  // Handle Previous Button Click
  const handlePreviousBlog = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogpost.length - 1 : prevIndex - 1
    );
  };

  // Handle Next Button Click
  const handleNextBlog = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogpost.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the items to display
  const getVisibleItems = () => {
    if (blogpost.length < itemsToShow) return blogpost;
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % blogpost.length;
      visibleItems.push(blogpost[index]);
    }
    return visibleItems;
  };

  const latestBlogsettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      {/* Product Description */}
      <div
        className="homePageSectionHeroTextstyle text-white"
        data-aos="fade-down"
      >
        <h1>
          Our Latest  <span className="headdingGradientText">articles</span>
        </h1>
        <p className="text-white">
          We can help your businesses to go skyrocket! With our premier digital
          marketing and web design and development services, We are able to
          market your businesses to the millions of prospects. Grab our web
          design/SEO/Graphics or software solutions to take your business to the
          next level of success.
        </p>
      </div>

      <div className="homePage_latestBlog_container">
        <Slider {...latestBlogsettings}>
          {isLoading ? (
            <LoadingSvg />
          ) : blogpost.length > 0 ? (
            isLargeMobileView ? (
              <>
                {getVisibleItems().map((blog, i) => (
                  <div className="row">
                    <Slider {...latestBlogsettings}>
                      <ArticalColum
                        articalInfo={{
                          key: { i },
                          imgName: blog.blogImg,
                          title: blog.blogtitle,
                          shortDes: blog.description,
                          Author: blog.authorName,
                          TimeStampData: blog.timestamp_column,
                        }}
                      />
                    </Slider>
                  </div>
                ))}
              </>
            ) : (
              <>
                {getVisibleItems().map((blog, i) => (
                  <div className="homePage_latestBlog_card" key={i}>
                    <img
                      src={`/Images/homePage/HomePageLatestBlogCardBgImage.png`}
                      className="HomePageLatestBlogCardBgImage"
                    />
                    <div className="homePage_latestBlog_card_container">
                      <h2 className="blogCatagoryItems">
                        {getCategoryName(blog.category_id)}
                      </h2>
                      <img
                        src={`${apiUrl}/Images/${blog?.blogImg}`}
                        alt={blog?.blogImg}
                        className="latestBlogImage"
                      />
                      <h1 className="latestBlogTitle">{blog?.blogtitle}</h1>
                      <div className="homePage_latestBlog_card_view">
                        <h5 className="ReadLatestBlogText">Read article</h5>
                        <div>
                          <Link
                            to={
                              blog?.blogtitle
                                ? `/blog/${blog?.blogtitle.replaceAll(
                                    / /g,
                                    "-"
                                  )}`
                                : "/fallback-url"
                            }
                          >
                            <img
                              src="/Images/homePage/latestArticalreadArrowIcon.svg"
                              alt="ScrollingBtnBackArrow.svg"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )
          ) : (
            <p className="text-white">No data available</p>
          )}
        </Slider>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="latestBlogScrollingBtn">
        <button
          className="clientReviewScrollingBtnStyle"
          id="latestBlogbackArrow"
          onClick={handlePreviousBlog}
        >
          <img
            src="/Images/homePage/ScrollingBtnBackArrow.svg"
            alt="ScrollingBtnBackArrow.svg"
          />
        </button>
        <button
          className="clientReviewScrollingBtnStyle"
          id="latestBlogrightArrow"
          onClick={handleNextBlog}
        >
          <img
            src="/Images/homePage/ScrollingBtnRightArrow.svg"
            alt="ScrollingBtnRightArrow.svg"
          />
        </button>
      </div> */}
    </div>
  );
};
