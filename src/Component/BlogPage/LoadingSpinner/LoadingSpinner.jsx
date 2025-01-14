import React from "react";
import "../../../Style/LoadingSpinner/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner maindiv text-white mt-5">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-white">Loading... Please wait</p>
    </div>
  );
};

export default LoadingSpinner;
