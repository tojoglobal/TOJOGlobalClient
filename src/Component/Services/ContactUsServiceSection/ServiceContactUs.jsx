import React from "react";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { AppContext } from "../../../AppContext";
import "react-phone-input-2/lib/style.css";

const ServiceContactUs = () => {
  const { apiUrl, isTabView, isMobileView } = useContext(AppContext);

  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [submiteMessage, setSubmiteMessage] = useState("");

  // use fromik method
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/admin/message/submited`,
          values
        );
        if (response.data.Status) {
          setErrorMessage(null);
          setSubmiteMessage("free consultation requset successfull");
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
      {/* contact us featcher  */}
      <section className="container">
        <div className="univarsal_service_padding_second_div mb-1 mb-md-5">
          {/* other text contactus*/}
          <div className="contactus_text_section">
            <div className="row">
              <div
                className="col-sm-12 col-md-6 services_contactus_text_div"
                // data-aos="fade-left"
                data-aos={isTabView ? "fade-up" : "fade-left"}
              >
                <h4 className="service_contact_us">Contact Us</h4>
                <h2 className="service_contactus_text_heading">
                  Ready to engage your audience?
                </h2>
                <p className="service_contactus_text_para">
                  We look forward to showing you how our unmatched industry
                  expertise, 24/7 presence and global reach can protect, engage,
                  and grow your online brand communities.
                </p>
                <div className="service_contactus_bottom_text_div">
                  <h4>After Submit this form</h4>
                  <div className="service_contactus_bottom_para_div">
                    <p>Expect to hear from our growth team in 24 hours.</p>
                    <p>
                      We’ll book a discovery call to identify your brand’s
                      online business challenges.
                    </p>
                    <p>
                      Once partnered, our team begins our 4-step onboarding
                      process to build a custom program addressed to your
                      specific needs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 contactus_input_fild_div"
                data-aos="fade-right"
              >
                <div className="contactUsCenterGradientRoundedPosition">
                  <div className="gradientRoundedDiv"></div>
                </div>

                <div
                  className="contactus_input_section"
                  style={{
                    ...(isMobileView && {
                      paddingBottom: "0.5rem",
                    }),
                  }}
                >
                  <h3 className="text-center">Book a Free Consultation</h3>
                  {errorMessage && errorMessage ? (
                    <p className="error-message">{errorMessage}</p>
                  ) : (
                    <p className="success-message">{submiteMessage}</p>
                  )}
                  <form
                    onSubmit={formik.handleSubmit}
                    encType="multipart/form-data"
                  >
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      placeholder="Full Name *"
                      className="contactus_input_fild"
                    />
                    <PhoneInput
                      country={"us"}
                      value={formik.values.phoneNumber}
                      onChange={(phone) =>
                        formik.setFieldValue("phoneNumber", phone)
                      }
                      enableSearch={true}
                      inputProps={{
                        name: "phoneNumber",
                        required: true,
                        // autoFocus: true,
                      }}
                      className="contactus_input_fild"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                      placeholder="Work Email *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="text"
                      id="emailSubject"
                      name="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      required
                      placeholder="Subject"
                      className="contactus_input_fild"
                    />
                    <textarea
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      required
                      placeholder="Message"
                    />

                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceContactUs;
