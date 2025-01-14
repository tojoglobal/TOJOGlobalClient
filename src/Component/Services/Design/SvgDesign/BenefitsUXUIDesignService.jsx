import React from "react";

const BenefitsUXUIDesignService = ({ imgeUrl }) => {
  return (
    <div>
      <svg
        id="benefitsUXUIDesignService"
        viewBox="0 0 336 429"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Shape */}
        <path
          d="M18 121.103L165.956 33.8467L316.947 121.103V296.374L165.956 377.56L18 296.374V121.103Z"
          fill="#18C8FF"
          fillOpacity="0.15"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2109 121.859C7.49139 126.542 0 137.239 0 149.684V316.473C0 327.148 5.60853 337.039 14.7698 342.519L150.558 423.745C160.069 429.434 171.925 429.487 181.486 423.883L320.365 342.477C329.658 337.03 335.367 327.066 335.367 316.294V149.684C335.367 137.239 327.877 126.544 317.158 121.86V296.397L166.167 377.583L18.2109 296.397V121.859Z"
          fill="url(#paint0_linear_2694_4667)"
        />

        {/* Background Circle */}
        <circle
          cx="169.056"
          cy="67.0564"
          r="61.0564"
          fill="#D9D9D9"
          fillOpacity="0.15"
        />

        {/* Inner Circle with Gradient */}
        <g filter="url(#filter0_f_2694_4667)">
          <circle
            cx="169.058"
            cy="67.0568"
            r="50.1535"
            fill="url(#paint1_linear_2694_4667)"
          />
        </g>

        {/* Image on top of circles */}
        <g>
          <image
            className="benefits_UX_UI_Design_centered_icon"
            href={`/Images/ServicesImage/Design/${imgeUrl}`}
          />
        </g>

        {/* Gradient Definitions */}
        <defs>
          <filter
            id="filter0_f_2694_4667"
            x="102.55"
            y="0.548925"
            width="133.015"
            height="133.015"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.1772"
              result="effect1_foregroundBlur_2694_4667"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2694_4667"
            x1="310.444"
            y1="148.427"
            x2="343.388"
            y2="380.805"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18C8FF" />
            <stop offset="1" stopColor="#C608FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2694_4667"
            x1="189.622"
            y1="13.0917"
            x2="235.012"
            y2="72.1332"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18C8FF" />
            <stop offset="1" stopColor="#C608FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BenefitsUXUIDesignService;
