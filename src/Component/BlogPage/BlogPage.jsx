import ArticalColum from "./ArticalColum";
import Pagination from "./Pagination";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../../AppContext";
import BlogRoundGradient from "../UniversalComponent/BlogRoundGradient/BlogRoundGradient";
import TopLeft from "./TopPart/TopLeft";
import TopRight from "./TopPart/TopRight";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

// Loading SVG Component (you can import your own)

const BlogPage = () => {
  const { apiUrl } = useContext(AppContext);

  // States
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogpost, setBlogpost] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const itemsPerPage = 6;

  // Fetch blog data
  useEffect(() => {
    setIsLoading(true); // Start loading
    axios
      .get(`${apiUrl}/api/admin/blogpost`)
      .then((result) => {
        if (result.data.Status) {
          setBlogpost(result.data.Result);
          setPaginatedData(result.data.Result.slice(0, itemsPerPage));
        } else {
          setErrorMessage(result.data.Error || "No data available");
        }
      })
      .catch(() => {
        setErrorMessage("Error fetching data");
      })
      .finally(() => {
        setIsLoading(false); // End loading
      });
  }, [apiUrl]);

  // Paginate data when current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(blogpost.slice(startIndex, endIndex));
  }, [currentPage, blogpost]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>TOJO Global - Blog</title>
      </Helmet>
      <div className="univarsal_div blog_section">
        <div className="container">
          {/* first part */}
          <div className="blog_details_container">
            <div className="job-details_content">
              {isLoading ? (
                <LoadingSpinner />
              ) : blogpost.length > 0 ? (
                <>
                  <TopLeft firstBlog={blogpost && blogpost[0]} />
                  <TopRight Blog={blogpost && blogpost} />
                </>
              ) : (
                <p className="text-white">No data available</p>
              )}
            </div>
          </div>

          {/* second part || blog text */}
          <div className="row">
            {isLoading ? (
              <LoadingSpinner />
            ) : paginatedData.length > 0 ? (
              paginatedData.map((d, i) => (
                <ArticalColum
                  key={i}
                  articalInfo={{
                    imgName: d.blogImg,
                    title: d.blogtitle,
                    shortDes: d.description,
                    Author: d.authorName,
                    TimeStampData: d.timestamp_column,
                  }}
                />
              ))
            ) : (
              <p className="text-white">No data available</p>
            )}
          </div>

          <Pagination
            totalItems={blogpost.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Blog round gradient */}
        <div className="topLeftGradientRoundedDiv">
          <BlogRoundGradient />
        </div>
        <div className="leftcentergradientRoundedDiv">
          <BlogRoundGradient />
        </div>
        <div className="RightBottomgradientRoundedDiv">
          <BlogRoundGradient />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
