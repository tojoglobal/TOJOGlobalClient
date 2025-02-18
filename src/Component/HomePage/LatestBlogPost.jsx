import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import axios from "axios";
import LoadingSvg from "../BlogPage/BlogSvg/LoddingSvg";
import ArticalColum from "../BlogPage/ArticalColum";

export const LatestBlogPost = () => {
  const { apiUrl, getCategoryName, isLargeMobileView } = useContext(AppContext);

  // States
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogpost, setBlogpost] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const itemsToShow = isLargeMobileView ? 1 : 3;

  // Fetch blog data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${apiUrl}/api/admin/blogpost`)
      .then((result) => {
        if (result.data.Status) {
          const blogData = result.data.Result.slice(0, 6);
          setBlogpost(blogData);
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

  // Auto-scrolling feature
  // useEffect(() => {
  //   const autoScroll = setInterval(() => {
  //     handleNextBlog();
  //   }, 5000);

  //   return () => clearInterval(autoScroll);
  // }, [currentIndex]);

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

  return (
    <div className="container">
      {/* Product Description */}
      <div
        className="homePageSectionHeroTextstyle homepageLatestBlogSection text-white"
        data-aos="fade-down"
      >
        <h1 className="topHeadingStyle homePageOurProgresssText">
          Our Latest  <span className="headdingGradientText">articles</span>
        </h1>
        <p className="paraStyle text-white">
          We can help your businesses to go skyrocket! With our premier digital
          marketing and web design and development services, We are able to
          market your businesses to the millions of prospects. Grab our web
          design/SEO/Graphics or software solutions to take your business to the
          next level of success.
        </p>
      </div>

      <div className="homePage_latestBlog_container">
        {isLoading ? (
          <LoadingSvg />
        ) : blogpost.length > 0 ? (
          isLargeMobileView ? (
            // small device
            <>
              {getVisibleItems().map(
                (blog, i) => (
                  (
                    <div className="row">
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
                    </div>
                  )
                  // </div>
                )
              )}
            </>
          ) : (
            <>
              {/* large device  */}
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
                              ? `/blog/${blog?.blogtitle.replaceAll(/ /g, "-")}`
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
      </div>

      {/* Navigation Buttons */}
      <div className="latestBlogScrollingBtn">
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
      </div>
    </div>
  );
};
