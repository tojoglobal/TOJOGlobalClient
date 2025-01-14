import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Startup from "./PackageCategory/Startup";
import Business from "./PackageCategory/Business";
import Creator from "./PackageCategory/Creator";
import Crypto from "./PackageCategory/Crypto";

const Package = () => {
  const [selectedPackage, setSelectedPackage] = useState("Startup");

  const renderPackageComponent = () => {
    switch (selectedPackage) {
      case "Startup":
        return <Startup />;
      case "Business":
        return <Business />;
      case "Creator":
        return <Creator />;
      case "Crypto":
        return <Crypto />;
      default:
        return <Startup />;
    }
  };

  return (
    <>
      <Helmet>
        <title>TOJO Global - Package</title>
      </Helmet>
      <div className="univarsal_div">
        <div className="container">
          {/* package navbar button */}
          <div className="package_navbar" data-aos="fade-up">
            <div
              onClick={() => setSelectedPackage("Startup")}
              className={`package_navbar_link ${
                selectedPackage === "Startup" ? "active" : ""
              }`}
            >
              <span>Startup</span>
            </div>
            <div
              onClick={() => setSelectedPackage("Business")}
              className={`package_navbar_link ${
                selectedPackage === "Business" ? "active" : ""
              }`}
            >
              <span>Business</span>
            </div>
            <div
              onClick={() => setSelectedPackage("Creator")}
              className={`package_navbar_link ${
                selectedPackage === "Creator" ? "active" : ""
              }`}
            >
              <span>Creator</span>
            </div>
            <div
              onClick={() => setSelectedPackage("Crypto")}
              className={`package_navbar_link ${
                selectedPackage === "Crypto" ? "active" : ""
              }`}
            >
              <span>Crypto</span>
            </div>
          </div>

          {/* Dynamically rendered package component */}
          {renderPackageComponent()}
        </div>
      </div>
    </>
  );
};

export default Package;
