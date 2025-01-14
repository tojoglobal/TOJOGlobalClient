import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SetTime from "./FomatedTime/SetTime";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ArticalColum = ({ articalInfo }) => {
  const { apiUrl } = useContext(AppContext);
  // props
  const { i, imgName, title, Author, TimeStampData } = articalInfo;

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 blog_col_section" key={i}>
        <Link
          to={title ? `/blog/${title.replaceAll(/ /g, "-")}` : "/fallback-url"}
        >
          <div className="blog_col_div_style card">
            <div className="blog_col_image_style">
              <img
                src={`${apiUrl}/Images/${imgName}`}
                alt="blog1imge"
                className="blog_img_style"
              />
            </div>
            <div className="blog_div_text_style card-body">
              <h4>{title}</h4>
            </div>
            <div className="frist_blog_owner_text_style articalCardOwndeDiv card-footer ">
              <div className="artical_colum_author_img">
                <img
                  src="/Images/profileImage/Shima-rani-das.jpeg"
                  alt="blog write author name "
                />
                <p className="blog_ownwer">{Author} </p>
              </div>
              <p className="blog_time">
                <SetTime time={TimeStampData} />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

ArticalColum.propTypes = {
  articalInfo: PropTypes.shape({
    imgName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDes: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticalColum;
