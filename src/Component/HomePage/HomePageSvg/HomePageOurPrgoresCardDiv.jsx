import React, { useEffect, useState } from "react";

export const HomePageOurPrgoresCardDiv = ({
  OurProgressNumber,
  OurProgressText,
  isInView,
}) => {
  const [currentNumber, setCurrentNumber] = useState(null);

  const formatNumber = (number) => {
    if (number === null) return "";

    const prefix = OurProgressNumber.match(/^[^\d.-]+/)?.[0] || "";
    const suffix = OurProgressNumber.match(/[KMB]+$/)?.[0] || "";
    const numericValue = parseFloat(number);

    if (isNaN(numericValue)) {
      return `${prefix}${suffix}+`;
    }

    let formattedNumber;
    if (numericValue >= 1_000_000) {
      formattedNumber = (numericValue / 1_000_000).toFixed(1) + "M";
    } else if (numericValue >= 1_000) {
      formattedNumber = (numericValue / 1_000).toFixed(1) + "K";
    } else {
      formattedNumber = numericValue.toString();
    }

    // Combine the prefix, formatted number, and suffix, and add a "+" sign
    return `${prefix}${formattedNumber}${suffix}+`;
  };

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(OurProgressNumber.replace(/[^\d.-]/g, ""));

      const duration = 5000; // 10 seconds
      const increment = Math.ceil(end / (duration / 25));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCurrentNumber(end);
          clearInterval(counter);
        } else {
          setCurrentNumber(start);
        }
      }, 25);
    }
  }, [isInView, OurProgressNumber]);

  return (
    <div className="progress_card_image_container">
      <div className="progress_card_text">
        <span>{OurProgressText}</span>
      </div>
      <svg
        // width="223"
        // height="158"
        viewBox="0 0 223 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_2820_5337)">
          <path
            d="M3.99976 23.0004C3.99976 10.2978 14.2972 0.000366211 26.9998 0.000366211H195.552C208.254 0.000366211 218.552 10.2978 218.552 23.0004V127C218.552 139.703 208.254 150 195.552 150H26.9998C14.2972 150 3.99976 139.703 3.99976 127V23.0004Z"
            fill="#060044"
            fill-opacity="0.43"
            shape-rendering="crispEdges"
          />
          <path
            d="M4.49976 23.0004C4.49976 10.574 14.5733 0.500366 26.9998 0.500366H195.552C207.978 0.500366 218.052 10.574 218.052 23.0004V127C218.052 139.427 207.978 149.5 195.552 149.5H26.9998C14.5734 149.5 4.49976 139.427 4.49976 127V23.0004Z"
            stroke="url(#paint0_linear_2820_5337)"
            stroke-opacity="0.65"
            shape-rendering="crispEdges"
          />
          <g>
            <text
              x="50%"
              y="40%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FFF"
              fontFamily="Poppins, sans-serif"
              fontWeight="600"
              className="progress_currentNumber"
            >
              {formatNumber(currentNumber)}
            </text>
          </g>
          ;
        </g>
        <defs>
          <filter
            id="filter0_bd_2820_5337"
            x="-46.0002"
            y="-49.9996"
            width="314.552"
            height="250"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2820_5337"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_2820_5337"
              result="effect2_dropShadow_2820_5337"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2820_5337"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2820_5337"
            x1="9.49623"
            y1="7.20375"
            x2="230.553"
            y2="128.045"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.175" stop-color="#E0E0E0" stop-opacity="0.21" />
            <stop offset="0.5" stop-color="#CDCDCD" stop-opacity="0" />
            <stop offset="0.725" stop-color="#DDDDDD" stop-opacity="0" />
            <stop offset="1" stop-color="white" />
          </linearGradient>

          <linearGradient id="textGradient" gradientTransform="rotate(223)">
            <stop offset="14%" stop-color="#C9AEFF" />
            <stop offset="87%" stop-color="#FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
