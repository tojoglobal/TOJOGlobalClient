import { useEffect, useState, useContext } from "react";
import HeroText from "../UniversalComponent/HeroText/HeroText";
import JobOffer from "./JobOffer";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../../AppContext";

const CareerPage = () => {
  const { apiUrl } = useContext(AppContext);

  // State for storing job data and error messages
  const [errorMessage, setErrorMessage] = useState(null);
  const [Job, setJob] = useState([]);

  // Fetch data from API
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
      .catch((err) => {
        setErrorMessage("An error occurred while fetching data.");
      });
  }, [apiUrl]);

  return (
    <>
      <Helmet>
        <title>TOJO Global - Career</title>
      </Helmet>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            className="Career"
            heroText={{
              // text1: "Career:",
              text1: "Build Your Future with Us",
              text2: "",
              description:
                "TOJO Global is a leading digital solutions provider, offering a comprehensive suite of services in Management, Marketing, Development, Design, and Listing. We're a passionate team of experts dedicated to helping businesses thrive in the digital age.",
            }}
          />

          {/* Other content */}
          <div className="row about_row_style">
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src="Images/banner/TojoGloanlCareerePageImage.png"
                alt="banner_img4.png"
                className=""
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <h2 className="Who_We_Are_text_heading text-white">
                Why Join Us?
              </h2>

              <p className="career_para_text">
                Grow with us! Learn, innovate, and make a real impact.
                Collaborative environment, competitive benefits, and exciting
                opportunities await.
              </p>
              <ul className="text-white">
                <li>Continuous Learning Opportunities </li>
                <li>Mentorship and Collaboration </li>
                <li>Work on Meaningful Projects </li>
                <li>Be at the Forefront of Innovation </li>
                <li>Collaborative and Fun Work Environment </li>
                <li>Competitive Benefits Package</li>
              </ul>
            </div>
          </div>

          {/* Conditionally render the Job section only if job data is available */}
          {Job.length > 0 ? (
            <div className="job_section">
              <JobOffer JobOfferCardItem={Job} />
            </div>
          ) : (
            <p className="text-white mt-5 text-center">
              No job openings available at the moment.
            </p>
          )}

          {/* Optionally, you can display an error message if there's an issue */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default CareerPage;
