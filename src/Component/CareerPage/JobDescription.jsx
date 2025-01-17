import { useEffect } from "react";
import { PiHandshakeThin, PiGift, PiHandHeart } from "react-icons/pi";
import { RiTwitterXLine, RiLinkedinFill, RiFacebookFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

export default function JobDescription() {
  const { jobId } = useParams();
  const { apiUrl } = useContext(AppContext);
  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [Job, setJob] = useState([]);
  const [jObDesctiption, setJObDesctiption] = useState([]);

  // fetch data
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/admin/jobpost`)
      .then((result) => {
        if (result.data.Status) {
          setJob(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [apiUrl]);

  // Data filter
  useEffect(() => {
    // const permalink = jobId.replaceAll(/-/g, " ");
    const matchItems = Job.filter((art) => art.ID === Number(jobId));
    setJObDesctiption(matchItems);
  }, [Job, jobId]);

  useEffect(() => {
    const mediaPlatforms = document.querySelectorAll(
      '.social-share-buttons a[data-type]:not([data-type=""])'
    );

    const handlePost = (media) => {
      const pageURL = window.location.href;
      switch (media) {
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${pageURL}`,
            "MsgWindow",
            "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
          );
          break;

        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?text=${pageURL}`,
            "sharer",
            "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
          );
          break;
        case "linkedin":
          window.open(
            "http://www.linkedin.com/shareArticle?mini=true&url=" + pageURL,
            "MsgWindow",
            "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
          );
          break;
        case "youtube":
          break;
        case "dribbble":
          break;

        default:
          break;
      }
    };

    mediaPlatforms.forEach((media) => {
      media.addEventListener("click", (e) => {
        e.preventDefault();
        handlePost(media.getAttribute("data-type"));
      });
    });

    return () => {
      mediaPlatforms.forEach((media) => {
        media.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div>
      <div className="job_description">
        <div className="job_container">
          <span className="team-name">{jObDesctiption[0]?.jobCategory}</span>
          <h1 className="job-details__top-title">
            {jObDesctiption[0]?.jobName}
            <span></span>
          </h1>
          <h2 className="heading4 job-salary">
            {jObDesctiption[0]?.salaryStart} - {jObDesctiption[0]?.salaryEnd}
            <span className="tiny">BDT/Month</span>
          </h2>
          <div className="job-details__top-quick-info">
            <div className="job-details__top-quick-info--item">
              <h3>Location</h3>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="job-details__top-quick-info--item">
              <h3>Job Type</h3>
              <span> {jObDesctiption[0]?.jobType} </span>
            </div>
            <div className="job-details__top-quick-info--item">
              <h3>Experience</h3>
              <span>
                {jObDesctiption[0]?.experience === "Any"
                  ? jObDesctiption[0]?.experience
                  : jObDesctiption[0]?.experience + "+ year"}
              </span>
            </div>
          </div>
          <Link
            to={`/job/${jObDesctiption[0]?.ID}/${jObDesctiption[0]?.jobName
              .replaceAll(/ /g, "-")
              .replaceAll(/\//g, "")
              .replaceAll(/--/g, "-")}/apply`}
            className="apply_btn"
          >
            <button className="applyBtn">
              Apply now at TOJO Global
              <div className="applyBtn_div">
                <FaArrowRight className="right_erro_icon" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="job_details_container">
        <div className="job-details__content">
          <div className="job-details__content-desc">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jObDesctiption[0]?.jobSummary),
              }}
            ></div>
          </div>
          <div className="job-details__content-requirements">
            <div className="basics-benefits">
              <h3>Basics &amp; Benefits</h3>

              <div className="basics-benefits-content">
                <div className="basics-benefits__item">
                  <PiHandshakeThin />
                  <span>Exceptional work culture and environment</span>
                </div>
                <div className="basics-benefits__item">
                  <PiGift />
                  <span>Two festival bonuses</span>
                </div>
                <div className="basics-benefits__item">
                  <PiHandHeart />
                  <span>Loyalty bonus</span>
                </div>
              </div>
            </div>
            <div className="share-job social-share-buttons">
              <span>Share</span>
              <a href="javascript:void(0);" data-type="twitter">
                <RiTwitterXLine />
              </a>
              <a href="javascript:void(0);" data-type="linkedin">
                <RiLinkedinFill />
              </a>
              <a href="javascript:void(0);" data-type="facebook">
                <RiFacebookFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
