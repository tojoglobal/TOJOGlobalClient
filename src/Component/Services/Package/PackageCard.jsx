import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const PackageCard = ({ Package }) => {
  return (
    <>
      <div
        className="col-sm-12 col-md-6 col-lg-4 package_col_style"
        data-aos="fade-up"
      >
        <div className="package_col_div_style">
          <div className="package_col_text_style">
            {/* Display package name dynamically */}
            <p className="plan_text_div">Popular</p>
            <h2 className="section_hour">{Package.packageName}</h2>

            {/* Display package info dynamically */}
            <p className="section_txt">{Package.packageInfo}</p>

            {/* Display package price dynamically */}
            <p className="section_price">
              <span>&#65284; </span>
              <span>{Package.packageBudget}</span>
              <span>/Month</span>
            </p>

            {/* Button */}
            <a
              href="https://wa.me/8801333411624"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="contactBtn packageCard_btn">
                <span className="multiple_text">Get Started</span>
              </button>
            </a>

            {/* Package services dynamically listed */}
            <div className="package-basics-benefits-content">
              {Package.packageService &&
                Package.packageService.map((service, index) => (
                  <div key={index} className="package_basics_benefits_item">
                    <FaCheckCircle className="package_basics_item_icon" />
                    <span>{service}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PackageCard.propTypes = {
  Package: PropTypes.shape({
    packageName: PropTypes.string.isRequired,
    packageInfo: PropTypes.string.isRequired,
    packageBudget: PropTypes.string.isRequired,
    packageService: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PackageCard;
