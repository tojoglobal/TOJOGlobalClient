import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { AppContext } from "../../AppContext";
import "react-phone-input-2/lib/style.css";

export const ContactUsForm = () => {
  const { apiUrl } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // Comprehensive country to currency mapping
  const countryToCurrency = {
    us: "USD", // United States
    gb: "GBP", // United Kingdom
    in: "INR", // India
    bd: "BDT", // Bangladesh
    pk: "PKR", // Pakistan
    ae: "AED", // UAE/Dubai
    sa: "SAR", // Saudi Arabia
    ca: "CAD", // Canada
    au: "AUD", // Australia
    jp: "JPY", // Japan
    cn: "CNY", // China
    eu: "EUR", // Eurozone
    sg: "SGD", // Singapore
    my: "MYR", // Malaysia
    id: "IDR", // Indonesia
    ph: "PHP", // Philippines
    th: "THB", // Thailand
    vn: "VND", // Vietnam
    kr: "KRW", // South Korea
    ru: "RUB", // Russia
    za: "ZAR", // South Africa
    ng: "NGN", // Nigeria
    eg: "EGP", // Egypt
    br: "BRL", // Brazil
    mx: "MXN", // Mexico
    ar: "ARS", // Argentina
    // Add more as needed
  };

  // Popular currencies with symbols and names
  const popularCurrencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
    { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
    { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
    { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
    { code: "AUD", symbol: "AU$", name: "Australian Dollar" },
    { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
    { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  ];

  // Service options
  const serviceOptions = [
    "I need a website",
    "I need a WordPress website",
    "I want to design & develop my website.",
    "I need Page moderation service",
    "I need social media marketing services.",
  ];

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      websiteLink: "",
      budget: "",
      currency: "USD", // Default to USD
      service: "",
      note: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/admin/message/submitted`,
          values
        );
        if (response.data.Status) {
          setErrorMessage(null);
          setSubmitMessage("Your request has been submitted successfully.");
        }
      } catch (error) {
        setErrorMessage(
          error?.response?.data?.Error || "Something went wrong."
        );
        setSubmitMessage("");
      }
      resetForm();
    },
  });

  // When country changes, update default currency
  const handlePhoneChange = (phone, countryData) => {
    formik.setFieldValue("phoneNumber", phone);

    if (countryData?.countryCode) {
      const countryCode = countryData.countryCode.toLowerCase();
      const defaultCurrency = countryToCurrency[countryCode] || "USD";
      formik.setFieldValue("currency", defaultCurrency);
    }
  };

  // Get current currency symbol
  const getCurrencySymbol = () => {
    const currency = popularCurrencies.find(
      (c) => c.code === formik.values.currency
    );
    return currency?.symbol || "$";
  };

  // Get current currency name
  const getCurrencyName = () => {
    const currency = popularCurrencies.find(
      (c) => c.code === formik.values.currency
    );
    return currency?.name || "US Dollar";
  };

  // Custom handler for Budget input to only allow numbers
  const handleBudgetChange = (e) => {
    const val = e.target.value.replace(/[^\d.]/g, "");
    formik.setFieldValue("budget", val);
  };

  return (
    <>
      <div className="contactUsCenterGradientRoundedPosition">
        <div className="gradientRoundedDiv"></div>
      </div>
      <div className="contactus_input_section">
        <h3 className="text-center">Book a Free Consultation</h3>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {submitMessage && !errorMessage && (
          <p className="success-message">{submitMessage}</p>
        )}
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Full Name *"
            className="contactus_input_fild"
            required
          />

          <PhoneInput
            country={"us"}
            value={formik.values.phoneNumber}
            onChange={handlePhoneChange}
            enableSearch={true}
            inputProps={{
              name: "phoneNumber",
              required: true,
              autoFocus: false,
            }}
            className="contactus_input_fild"
          />

          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Work Email"
            className="contactus_input_fild"
          />

          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            onChange={formik.handleChange}
            value={formik.values.websiteLink}
            placeholder="Page/Website Link"
            className="contactus_input_fild"
          />

          <select
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
            className="contactus_input_fild"
            required
          >
            <option value="">Select Service *</option>
            {serviceOptions.map((service, idx) => (
              <option value={service} key={idx}>
                {service}
              </option>
            ))}
          </select>

          {/* Budget Input with currency selection */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "1.1rem" }}>
            <div style={{ position: "relative", flex: 1 }}>
              <input
                type="text"
                id="budget"
                name="budget"
                onChange={handleBudgetChange}
                value={formik.values.budget}
                placeholder={`Budget in ${getCurrencyName()}`}
                className="contactus_input_fild"
                style={{ paddingRight: "40px" }}
                autoComplete="off"
              />
              <span
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontWeight: 600,
                  color: "#00dbde",
                  fontSize: "1.07rem",
                  pointerEvents: "none",
                }}
              >
                {getCurrencySymbol()}
              </span>
            </div>

            <select
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              className="contactus_input_fild"
              style={{ width: "150px" }}
            >
              {popularCurrencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="note"
            onChange={formik.handleChange}
            value={formik.values.note}
            placeholder="Note"
            className="contactus_input_fild"
            rows={3}
          />

          <button type="submit" className="meassageSentbtn">
            <span className="pt-1">Submit</span>
            <img
              src="/Images/ContactUsPage/meassageSent.svg"
              alt="Submit Icon"
            />
          </button>
        </form>
      </div>
    </>
  );
};
