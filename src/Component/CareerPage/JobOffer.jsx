import PropTypes from "prop-types";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

const JobOffer = (props) => {
  const job = props.JobOfferCardItem;

  // Function to determine the image source based on job type
  const getImageSrc = (type) => {
    switch (type) {
      case "engineering":
        return `/Images/smallicons/software.png`;
      case "marketing":
        return `/Images/smallicons/image.png`;
      case "design":
        return "/Images/smallicons/pen-tool.png";
      default:
        return `https://img.icons8.com/color/96/services--v1.png`;
    }
  };
  return (
    <div className="row card_gradient_radius gap-5">
      {job.map((jobType, index) => {
        const imageSrc = getImageSrc(jobType.jobCategory?.toLowerCase());
        return (
          <div
            key={index}
            className="job_oppening gradient_border_mask col-4 card"
          >
            <div className="card_radius card-body">
              <div className="job_oppening_image">
                <div className="job_oppening_icon_div">
                  <img
                    src={imageSrc}
                    alt={`${jobType.jobCategory} icon`}
                    className="job_oppening_icon_image"
                  />
                </div>
                <div>
                  <div className="job_oppening_position">
                    <span className="job_oppening_position_text">
                      {jobType.jobCategory}
                    </span>
                    <div
                      className="job_oppening_position_icon_div"
                      onClick={() => {
                        // Share functionality
                        if (navigator.share) {
                          navigator
                            .share({
                              title: jobType.jobName,
                              url: `/job/${jobType.ID}/${
                                jobType.jobName
                                  ? jobType.jobName
                                      .replaceAll(/ /g, "-") // Replace spaces with hyphens
                                      .replaceAll(/\//g, "") // Remove slashes
                                      .replaceAll(/--/g, "-") // Remove double hyphens
                                  : "unknown-job" // Fallback in case jobName is undefined
                              }`,
                            })
                            .then(() =>
                              console.log("Job link shared successfully")
                            )
                            .catch((error) =>
                              console.error("Error sharing job link", error)
                            );
                        } else {
                          // Fallback for browsers that don't support the share API
                          alert(`Share this link: ${shareLink}`);
                        }
                      }}
                    >
                      <IoMdShare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job">
              <h3 className="job_title">{jobType.jobName}</h3>
              <div className="opening-meta">
                <span>{jobType.jobType}</span>
                <span className="opening-meta-separator"></span>
                <span>{jobType.jobTime}</span>
              </div>
            </div>
            <div className="salary">
              <h5 className="salary_baget">
                &#2547;{jobType.salaryStart}- &#2547;{jobType.salaryEnd}
                <span className="salary_time">/Month</span>
              </h5>
            </div>

            <Link
              to={`/job/${jobType.ID}/${
                jobType.jobName
                  ? jobType.jobName
                      .replaceAll(/ /g, "-") // Replace spaces with hyphens
                      .replaceAll(/\//g, "") // Remove slashes
                      .replaceAll(/--/g, "-") // Remove double hyphens
                  : "unknown-job" // Fallback in case jobName is undefined
              }`}
            >
              <button className="job_apply_btn">Apply</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

JobOffer.propTypes = {
  JobOfferCardItem: PropTypes.arrayOf(
    PropTypes.shape({
      jobCategory: PropTypes.string.isRequired,
      jobName: PropTypes.string.isRequired,
      jobType: PropTypes.string.isRequired,
      jobTime: PropTypes.string.isRequired,
      salaryStart: PropTypes.string.isRequired,
      salaryEnd: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JobOffer;
