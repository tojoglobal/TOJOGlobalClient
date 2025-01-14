import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import SetTime from "../FomatedTime/SetTime";
import { AppContext } from "../../../AppContext";
import axios from "axios";

// Function to shuffle the array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TopRight = ({ Blog }) => {
  const { apiUrl, getCategoryName } = useContext(AppContext);

  // State variables
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  // Filter blogs based on search query
  useEffect(() => {
    if (searchQuery) {
      const results = Blog.filter((blog) =>
        blog.blogtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(results);
    } else {
      setFilteredBlogs([]);
    }
  }, [searchQuery, Blog]);

  // Shuffle the blogs and pick random items for recommended content and images
  useEffect(() => {
    if (Blog.length > 0) {
      const shuffledBlogs = shuffleArray([...Blog]);

      // Get 3 random blog posts for content
      setRandomPosts(shuffledBlogs.slice(0, 3));

      // Get 2 random blog posts for images
      setRandomImages(shuffledBlogs.slice(3, 4));
    }
  }, [Blog]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blog_recommended_card">
      <div className="recommended_basics-benefits">
        <form onSubmit={handleSearchSubmit} className="search-container">
          <input
            placeholder="Search Article/Blog"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            id="searchInput"
          />
          <button type="submit" className="search-icon">
            <FaSearch />
          </button>
        </form>

        <div className="recommended_basics_benefits_content text-white">
          <span>Recommended</span>
        </div>
      </div>

      {/* Show search results or the recommended content */}
      {searchQuery && filteredBlogs.length > 0 ? (
        <div className="recommended_basics_content_items">
          {filteredBlogs.map((blog, index) => (
            <Link
              to={
                blog.blogtitle
                  ? `/blog/${blog.blogtitle.replaceAll(/ /g, "-")}`
                  : "/fallback-url"
              }
              className="text-decoration-none"
              key={index}
            >
              <div className="recommended_basics_content_item">
                <div className="recommended_content_basics_image">
                  <img
                    src={`${apiUrl}/Images/${blog.blogImg}`}
                    alt={blog.blogtitle}
                  />
                </div>
                <div className="recommended_content_basics_text">
                  <div className="recommended_content_basics_text_top">
                    <span>{getCategoryName(blog.category_id)}</span>{" "}
                    {/* Get Category Name */}
                    <span>
                      <SetTime time={blog.timestamp_column} />
                    </span>
                  </div>
                  <h5>{blog.blogtitle}</h5>
                </div>
              </div>
              <div className="bottom_border"></div>
            </Link>
          ))}
        </div>
      ) : (
        <>
          {/* Random images */}
          {randomImages.map((blog, index) => (
            <Link
              to={
                blog.blogtitle
                  ? `/blog/${blog.blogtitle.replaceAll(/ /g, "-")}`
                  : "/fallback-url"
              }
              key={index}
              className="text-decoration-none"
            >
              <div className="recommended_content_image">
                <img
                  src={`${apiUrl}/Images/${blog.blogImg}`}
                  alt="recommended_content_image"
                />
              </div>
            </Link>
          ))}

          {/* Random articles */}
          <div className="recommended_basics_content_items">
            {randomPosts.map((blog, index) => (
              <Link
                to={
                  blog.blogtitle
                    ? `/blog/${blog.blogtitle.replaceAll(/ /g, "-")}`
                    : "/fallback-url"
                }
                key={index}
                className="text-decoration-none"
              >
                <div className="recommended_basics_content_item">
                  <div className="recommended_content_basics_image">
                    <img
                      src={`${apiUrl}/Images/${blog.blogImg}`}
                      alt={blog.blogtitle}
                    />
                  </div>
                  <div className="recommended_content_basics_text">
                    <div className="recommended_content_basics_text_top">
                      <span>{getCategoryName(blog.category_id)}</span>{" "}
                      {/* Get Category Name */}
                      <span>
                        <SetTime time={blog.timestamp_column} />
                      </span>
                    </div>
                    <h5>{blog.blogtitle}</h5>
                  </div>
                </div>
                <div className="bottom_border"></div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

TopRight.propTypes = {
  Blog: PropTypes.arrayOf(
    PropTypes.shape({
      blogImg: PropTypes.string.isRequired,
      blogtitle: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      timestamp_column: PropTypes.string,
      category_id: PropTypes.number.isRequired, // Ensure category_id is required
    })
  ).isRequired,
};

export default TopRight;
