import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContext } from "../../../AppContext";
import SetTime from "../FomatedTime/SetTime";

const TopLeft = ({ firstBlog }) => {
  const { apiUrl, getCategoryName } = useContext(AppContext);

  // Safely destructure with default values
  const { authorName, blogImg, blogtitle, timestamp_column, category_id } =
    firstBlog || {};

  return (
    <div>
      <div className="fist_blog_card">
        <Link
          className="blog_card_link"
          to={
            blogtitle
              ? `/blog/${blogtitle.replaceAll(/ /g, "-")}`
              : "/fallback-url"
          }
        >
          <div className="frist_part_blog_col_div_style">
            <div className="frist_part_blog_col_image_style">
              <img
                src={`${apiUrl}/Images/${blogImg}`}
                alt="blog1imge"
                className="frist_part_img_style"
              />
            </div>
            <div className="frist_blog_div_text_style">
              <span className="frist_blog_span_text_style">
                {getCategoryName(category_id)}
              </span>
              <h3>{blogtitle}</h3>
              <div className="frist_blog_owner_text_style">
                <p className="blog_ownwer">{authorName}</p>
                <p className="blog_time">
                  <SetTime time={timestamp_column} />
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

TopLeft.propTypes = {
  firstBlog: PropTypes.shape({
    blogImg: PropTypes.string.isRequired,
    blogtitle: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    timestamp_column: PropTypes.string,
  }),
};

export default TopLeft;
