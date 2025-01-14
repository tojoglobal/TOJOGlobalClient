import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import BlogRoundGradient from "../../UniversalComponent/BlogRoundGradient/BlogRoundGradient";
import { AppContext } from "../../../AppContext";
import TopRight from "../TopPart/TopRight";
import SetTime from "../FomatedTime/SetTime";
import { useFormik } from "formik";
import * as yup from "yup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Artical = () => {
  const { apiUrl } = useContext(AppContext);
  const { title } = useParams();
  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogpost, setBlogpost] = useState([]);
  const [post, setPost] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);
  const [submiteMessage, setSubmiteMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  // blog data
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/api/admin/blogpost`)
      .then((result) => {
        if (result.data.Status) {
          setBlogpost(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // Data filter
  useEffect(() => {
    const permalink = title.replaceAll(/-/g, " ");
    const matchItems = blogpost.filter(
      (art) => art.blogtitle.toLowerCase() === permalink.toLowerCase()
    );
    setPost(matchItems);
  }, [blogpost, title]);

  useEffect(() => {
    // Shuffle the articles array
    const shuffledArticles = blogpost.sort(() => 0.5 - Math.random());

    // Get the first 3 articles
    const selectedArticles = shuffledArticles.slice(0, 2);

    setRandomArticles(selectedArticles);
  }, [blogpost]);

  // Check if post[0] exists before accessing its properties
  const postTitle = post[0]?.blogtitle;
  const image = post[0]?.blogImg;
  const summary = post[0]?.description;
  const author = post[0]?.authorName;
  const publishedAt = post[0]?.timestamp_column;

  // use fromik method
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: yup.object({
      message: yup
        .string()
        .min(10, "Comment must be at least 10 characters")
        .max(250, "Max characters 250")
        .required("Comment is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      try {
        const response = await axios.post(
          `${apiUrl}/api/admin/comment/submited`,
          values
        );
        if (response.data.Status) {
          setErrorMessage(null);
          setSubmiteMessage("Comment submit successfull");
          setFormVisible(false);
        }
      } catch (error) {
        setErrorMessage(`${error}`);
        setSubmiteMessage("");
      }

      resetForm();
    },
  });

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : post ? (
        <>
          <div className="univarsal_div blog_section">
            <div className="container">
              <div className="blog_details_container">
                <div className="job-details_content">
                  <div>
                    <div className="artical_left_card">
                      <div className="frist_part_blog_col_div_style">
                        <div className="artical_heading_part">
                          <h1>{postTitle}</h1>
                          <div className="artical_part_content_info">
                            <div className="artical_author_div">
                              <div className="artical_rounde">
                                <img
                                  src="/Images/profileImage/Shima-rani-das.jpeg"
                                  alt="blog write author name "
                                  className="author_img"
                                />
                              </div>

                              <div className="blog_ownwer">
                                <span className="text-white me-2">By</span>
                                {author}
                              </div>
                            </div>
                            <div className="ps-5">
                              <span className="blog_time">
                                <SetTime time={publishedAt} />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="frist_part_blog_col_image_style">
                          <img
                            src={`${apiUrl}/Images/${image}`}
                            alt={image}
                            class="frist_part_img_style img-fluid"
                          />
                        </div>

                        <div className="artical_post">
                          <div
                            className="postSummary"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(summary),
                            }}
                          ></div>
                          {errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                          )}
                          {submiteMessage && (
                            <p className="success-message">{submiteMessage}</p>
                          )}

                          {formVisible && (
                            <form
                              onSubmit={formik.handleSubmit}
                              encType="multipart/form-data"
                            >
                              {formik.touched.message &&
                                formik.errors.message && (
                                  <span className="error-message">
                                    {formik.errors.message}
                                  </span>
                                )}
                              <br />
                              <textarea
                                name="message"
                                className="artical_comment_area"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                required
                                placeholder="add comments"
                              />

                              <button
                                type="submit"
                                className="artical_submit_btn"
                              >
                                <span className="mt-2">Submit</span>
                              </button>
                            </form>
                          )}
                        </div>

                        <br />
                      </div>
                    </div>
                  </div>
                  <div>
                    <TopRight Blog={blogpost && blogpost}></TopRight>
                    <div className="row">
                      {randomArticles.map((article, index) => (
                        <div className="col-12 blog_col_section">
                          <Link
                            to={
                              article.blogtitle
                                ? `/blog/${article.blogtitle.replaceAll(
                                    / /g,
                                    "-"
                                  )}`
                                : "/fallback-url"
                            }
                          >
                            <div className="blog_col_div_style card">
                              <div className="blog_col_image_style">
                                <img
                                  src={`${apiUrl}/Images/${article.blogImg}`}
                                  alt="blog1imge"
                                  className="blog_img_style"
                                />
                              </div>
                              <div className="blog_div_text_style card-body">
                                <h4>{article.blogtitle}</h4>
                              </div>
                              <div className="frist_blog_owner_text_style articalCardOwndeDiv card-footer ">
                                <div className="artical_colum_author_img">
                                  <img
                                    src="/Images/profileImage/Shima-rani-das.jpeg"
                                    alt="blog write author name "
                                  />
                                  <p className="blog_ownwer">
                                    {article.authorName}{" "}
                                  </p>
                                </div>
                                <p className="blog_time">
                                  <SetTime time={article.timestamp_column} />
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* gradinet  */}

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
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Artical;
