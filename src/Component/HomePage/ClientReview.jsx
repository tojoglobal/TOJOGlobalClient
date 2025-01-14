import React, { useEffect, useState } from "react";

export const ClientReview = () => {
  // Client review data
  const clientReviews = [
    {
      clientReviewText:
        "Working with TOJO GLOBAL has been a game-changer for our brand. Their marketing expertise helped us reach our ideal audience effortlessly. Within weeks, we saw a boost in engagement and conversions.",
      clientImage: "/Images/homePage/ReviewClientImage/ClientsImge.svg",
      clientName: "Sebastian Horn",
      clientStatus: "CEO & Founder",
    },
    {
      clientReviewText:
        "TOJO GLOBAL's strategic insights and customized approach have significantly improved our online presence. Their team is dedicated and results-driven. We’ve seen a noticeable increase in client engagement.",
      clientImage: "/Images/homePage/ReviewClientImage/ClientsImge.svg",
      clientName: "Emily Clarkson",
      clientStatus: "Marketing Director",
    },
    {
      clientReviewText:
        "We are thrilled with the results from TOJO GLOBAL’s marketing services. They’ve helped us connect with the right clients and grow our business rapidly. Their expertise and support are unmatched.",
      clientImage: "/Images/homePage/ReviewClientImage/ClientsImge.svg",
      clientName: "James Williams",
      clientStatus: "Business Owner",
    },
    {
      clientReviewText:
        "The TOJO GLOBAL team is fantastic to work with. Their creative marketing solutions and dedication have brought our company great success. I highly recommend their services.",
      clientImage: "/Images/homePage/ReviewClientImage/ClientsImge.svg",
      clientName: "Sophia Brown",
      clientStatus: "Head of Sales",
    },
    {
      clientReviewText:
        "TOJO GLOBAL's ability to understand our needs and deliver targeted results has been exceptional. We’ve experienced increased brand visibility and client satisfaction thanks to their efforts.",
      clientImage: "/Images/homePage/ReviewClientImage/ClientsImge.svg",
      clientName: "Liam Johnson",
      clientStatus: "Chief Marketing Officer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scrolling every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navigate to the next review
  const handleNextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientReviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Navigate to the previous review
  const handlePreviousReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientReviews.length - 1 : prevIndex - 1
    );
  };

  const { clientReviewText, clientImage, clientName, clientStatus } =
    clientReviews[currentIndex];

  return (
    <div className="text-white home_clinetReview_mainDiv">
      <div className="container home_clinetReview_div">
        <div className="home_clinetReview_mainCardDiv">
          <img
            src="/Images/homePage/ClientReviewCardBg.png"
            alt="ClientReviewCardsvg"
          />
        </div>
        <div className="client_review_div">
          <div className="client_reviewHeddingText_div">
            <h1 className="homePage_trustedClient_heading_text">
              {"Our "}
              <span className="headdingGradientText">Clients,</span> In Their
              Own Words
            </h1>
          </div>
          {/* Add your client reviews here */}
          <div className={`client-review-card`} data-aos="fade-down">
            <div className="client_reviewText">
              <p>"{clientReviewText}"</p>
            </div>
            <div className="client_review_content_div">
              <div className="client_review_image_div">
                <img src={clientImage} alt={`${clientName}`} />
                <div className="reviewOwner">
                  <h3>{clientName}</h3>
                  <p>{clientStatus}</p>
                </div>
              </div>

              <div className="clientReviewScrollingBtn">
                <button
                  className="clientReviewScrollingBtnStyle"
                  id="backArrow"
                  onClick={handlePreviousReview}
                >
                  <img
                    src="/Images/homePage/ScrollingBtnBackArrow.svg"
                    alt="ScrollingBtnBackArrow.svg"
                  />
                </button>
                <button
                  className="clientReviewScrollingBtnStyle"
                  id="rightArrow"
                  onClick={handleNextReview}
                >
                  <img
                    src="/Images/homePage/ScrollingBtnRightArrow.svg"
                    alt="ScrollingBtnBackArrow.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
