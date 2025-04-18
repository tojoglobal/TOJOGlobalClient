import React from "react";

const BlockchainDevelopmentServiceSvg = ({
  blockchainDevelopmentCardSvgImage,
}) => {
  return (
    <>
      <svg
        width="250"
        height="168"
        viewBox="0 0 250 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="crptyyyy">
          <g id="Frame 38723">
            <mask id="path-1-inside-1_2354_4635" fill="white">
              <path d="M0 58C0 52.4772 4.47715 48 10 48H240C245.523 48 250 52.4772 250 58V158C250 163.523 245.523 168 240 168H10C4.47716 168 0 163.523 0 158V58Z" />
            </mask>
            <path
              d="M0 58C0 52.4772 4.47715 48 10 48H240C245.523 48 250 52.4772 250 58V158C250 163.523 245.523 168 240 168H10C4.47716 168 0 163.523 0 158V58Z"
              fill="#18C8FF"
              fill-opacity="0.15"
            />
            <path
              d="M0 58C0 49.7157 6.71573 43 15 43H235C243.284 43 250 49.7157 250 58C250 55.2386 245.523 53 240 53H10C4.47715 53 0 55.2386 0 58ZM250 168H0H250ZM0 168V48V168ZM250 48V168V48Z"
              fill="url(#paint0_linear_2354_4635)"
              mask="url(#path-1-inside-1_2354_4635)"
            />
          </g>
          <circle
            id="Ellipse 261"
            cx="124.5"
            cy="35.5"
            r="33"
            fill="url(#paint1_linear_2354_4635)"
            stroke="#060044"
            stroke-width="5"
          />

          <g className="blockchainDevelopment_card_image">
            <image
              href={`/Images/ServicesImage/development/${blockchainDevelopmentCardSvgImage}`}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2354_4635"
            x1="202.206"
            y1="60.7941"
            x2="135.771"
            y2="199.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18C8FF" />
            <stop offset="1" stopColor="#C608FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2354_4635"
            x1="146.426"
            y1="7.56985"
            x2="96.0478"
            y2="57.9485"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18C8FF" />
            <stop offset="1" stopColor="#C608FF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default BlockchainDevelopmentServiceSvg;
