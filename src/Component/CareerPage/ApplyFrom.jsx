import axios from "axios";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import * as yup from "yup";
import { CgAttachment } from "react-icons/cg";
import { City } from "country-state-city"; // Make sure you have installed and imported this
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";

const ApplyForm = () => {
  const { jobId } = useParams();
  const { apiUrl } = useContext(AppContext);
  const cities = City.getCitiesOfCountry("BD"); // Use this variable as the list of cities

  const [errorMessage, setErrorMessage] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [resumeName, setResumeName] = useState("Upload your resume/cv");
  const [formVisible, setFormVisible] = useState(true);
  const [Job, setJob] = useState([]);
  const [jObDesctiption, setJObDesctiption] = useState([]);

  const [filteredCities, setFilteredCities] = useState(cities); // Filtered cities for the search
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch job data
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

  // Filter job data
  useEffect(() => {
    const matchItems = Job.filter((art) => art.ID === Number(jobId));
    setJObDesctiption(matchItems);
  }, [Job, jobId]);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      linkedin: "",
      portfolio: "",
      website: "",
      city: "",
      phone: "",
      resume: null,
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      city: yup.string().required("City is required"),
      phone: yup
        .string()
        .matches(
          /^(\d{1,3}[- ]?)?\d{10}$/,
          "Phone number is not valid. It should be 10 digits."
        )
        .required("Phone number is required"),
      linkedin: yup
        .string()
        .url("LinkedIn URL is not valid")
        .required("LinkedIn URL is required"),
      portfolio: yup
        .string()
        .url("Portfolio URL is not valid")
        .required("Portfolio URL is required"),
      website: yup.string().url("Website URL is not valid").nullable(),
      resume: yup
        .mixed()
        .required("Resume is required")
        .test(
          "fileSize",
          "File size too large",
          (value) => value && value.size <= 5 * 1024 * 1024
        ) // 5MB
        .test(
          "fileFormat",
          "Unsupported format",
          (value) =>
            value &&
            [
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              "text/plain",
            ].includes(value.type)
        ),
    }),
    onSubmit: async (values, { resetForm }) => {

      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("linkedin", values.linkedin);
      formData.append("portfolio", values.portfolio);
      formData.append("website", values.website);
      formData.append("city", values.city);
      formData.append("phone", values.phone);
      formData.append("resume", values.resume); // Add the file

      try {
        const response = await axios.post(
          `${apiUrl}/api/admin/applyfrom/submited`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data.Status) {
          setErrorMessage(null);
          setSubmitMessage("Application submitted successfully!");
          setFormVisible(false); // Hide form on success
        }
      } catch (error) {
        setErrorMessage(`${error}`);
        setSubmitMessage("");
      }

      resetForm();
      setResumeName("Upload your resume/cv");
    },
  });

  // Handle resume upload
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeName(file.name);
      formik.setFieldValue("resume", file);
    }
  };

  // Handle dropdown search
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <div className="content">
      <div className="job_apply_container">
        <div className="form__container">
          <div className="form__header">
            <h1>
              {jObDesctiption[0]?.jobName} <span></span>
            </h1>
            <div className="apply-form-location">
              <span>{jObDesctiption[0]?.jobType}</span>
              <span className="circle"></span>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="card">
            <div className="card__header">Apply</div>
            <div className="card__content">
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {submitMessage && (
                <p className="success-message">{submitMessage}</p>
              )}

              {formVisible && (
                <form
                  onSubmit={formik.handleSubmit}
                  encType="multipart/form-data"
                >
                  {/* Full Name */}
                  <label htmlFor="fullName" className="control-label">
                    Name <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <span className="error-message">
                      {formik.errors.fullName}
                    </span>
                  )}
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    placeholder="Enter your name"
                    className="contactus_input_fild job_apply_input_field"
                  />

                  {/* Email */}
                  <label htmlFor="email" className="control-label">
                    Email <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.email && formik.errors.email && (
                    <span className="error-message">{formik.errors.email}</span>
                  )}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Enter your email"
                    className="contactus_input_fild job_apply_input_field"
                  />

                  {/* Phone */}
                  <label htmlFor="phone" className="control-label">
                    Phone number <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.phone && formik.errors.phone && (
                    <span className="error-message">{formik.errors.phone}</span>
                  )}
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="Enter your contact number"
                    className="contactus_input_fild job_apply_input_field"
                  />

                  {/* City Dropdown with Search */}
                  <label htmlFor="city" className="control-label">
                    City <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.city && formik.errors.city && (
                    <span className="error-message">{formik.errors.city}</span>
                  )}
                  <div className="dropdown-container">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      onChange={(e) => {
                        formik.handleChange(e); // Formik handler
                        handleSearchChange(e); // Search filter
                      }}
                      value={searchTerm}
                      placeholder="Enter city"
                      onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
                      className="contactus_input_fild job_apply_input_field"
                    />
                    {isOpen && (
                      <div className="dropdown">
                        {filteredCities.map((city) => (
                          <div
                            key={city.id}
                            className="dropdown-item"
                            onClick={() => {
                              formik.setFieldValue("city", city.name); // Set city in formik
                              setSearchTerm(city.name); // Update search input
                              setIsOpen(false); // Close dropdown
                            }}
                          >
                            {city.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Resume */}
                  <label htmlFor="resume" className="control-label resume">
                    Upload Resume <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.resume && formik.errors.resume ? (
                    <span className="error-message">
                      {formik.errors.resume}
                    </span>
                  ) : (
                    <span>.doc, .docx, .pdf, .txt, Max size 5MB</span>
                  )}
                  <label
                    htmlFor="resume"
                    className="custom_file_input contactus_input_fild job_apply_input_field"
                  >
                    <span className="me-2">
                      <CgAttachment />
                    </span>
                    {resumeName}
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleResumeChange}
                    accept=".doc, .docx, .pdf, .txt"
                    style={{ display: "none" }}
                  />

                  {/* LinkedIn */}
                  <label htmlFor="linkedin" className="control-label">
                    LinkedIn URL <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.linkedin && formik.errors.linkedin && (
                    <span className="error-message">
                      {formik.errors.linkedin}
                    </span>
                  )}
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    onChange={formik.handleChange}
                    value={formik.values.linkedin}
                    placeholder="Enter your LinkedIn profile"
                    className="contactus_input_fild job_apply_input_field"
                  />

                  {/* Portfolio */}
                  <label htmlFor="portfolio" className="control-label">
                    Portfolio URL <span className="error-message">*</span>
                  </label>
                  <br />
                  {formik.touched.portfolio && formik.errors.portfolio && (
                    <span className="error-message">
                      {formik.errors.portfolio}
                    </span>
                  )}
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    onChange={formik.handleChange}
                    value={formik.values.portfolio}
                    placeholder="Enter your portfolio URL"
                    className="contactus_input_fild job_apply_input_field"
                  />

                  {/* Website */}
                  <label htmlFor="website" className="control-label">
                    Website (optional)
                  </label>
                  <br />
                  {formik.touched.website && formik.errors.website && (
                    <span className="error-message">
                      {formik.errors.website}
                    </span>
                  )}
                  <input
                    type="url"
                    id="website"
                    name="website"
                    onChange={formik.handleChange}
                    value={formik.values.website}
                    placeholder="Enter your website URL"
                    className="contactus_input_fild job_apply_input_field"
                  />

                  <input
                    type="submit"
                    value="Submit Application"
                    className="job_apply_btn"
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
