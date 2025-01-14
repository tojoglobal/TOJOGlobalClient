const AppDevPartner = ({ svgImage }) => {
  return (
    <>
      <svg
        width="261"
        height="407"
        viewBox="0 0 261 407"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="mannnn">
          <g id="Rectangle 31793">
            <mask id="path-1-inside-1_2370_4651" fill="white">
              <path d="M0 187.468C0 115.511 58.3328 57.1777 130.29 57.1777C202.247 57.1777 260.58 115.511 260.58 187.468V275.781C260.58 347.739 202.247 406.072 130.29 406.072C58.3328 406.072 0 347.739 0 275.782V187.468Z" />
            </mask>
            <path
              d="M0 187.468C0 115.511 58.3328 57.1777 130.29 57.1777C202.247 57.1777 260.58 115.511 260.58 187.468V275.781C260.58 347.739 202.247 406.072 130.29 406.072C58.3328 406.072 0 347.739 0 275.782V187.468Z"
              fill="#1F387C"
            />
            <path
              d="M0 57.1777H260.58H0ZM260.58 288.782C260.58 360.739 202.247 419.072 130.29 419.072C58.3328 419.072 0 360.739 0 288.782V275.782C0 340.559 58.3328 393.072 130.29 393.072C202.247 393.072 260.58 340.559 260.58 275.782V288.782ZM0 406.072V57.1777V406.072ZM260.58 57.1777V406.072V57.1777Z"
              fill="url(#paint0_linear_2370_4651)"
              mask="url(#path-1-inside-1_2370_4651)"
            />
          </g>

          <circle
            id="Ellipse 223"
            cx="130.835"
            cy="66.9841"
            r="61.0564"
            fill="#D9D9D9"
            fill-opacity="0.15"
          />

          <g id="Ellipse 224" filter="url(#filter0_f_2370_4651)">
            <circle
              cx="130.835"
              cy="66.9845"
              r="50.1535"
              fill="url(#paint1_linear_2370_4651)"
            />
          </g>
          <g
            id="appDevBenfitPatnerSvgIcon"
            style={{
              transform: "translate(94px, 30px)",
              transformOrigin: "center",
              transformBox: "fill-box",
            }}
          >
            <image href={`/Images/ServicesImage/development/${svgImage}`} />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_2370_4651"
            x="64.3272"
            y="0.47666"
            width="133.016"
            height="133.015"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.1772"
              result="effect1_foregroundBlur_2370_4651"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2370_4651"
            x1="183.711"
            y1="43.9198"
            x2="347.013"
            y2="202.566"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18C8FF" />
            <stop offset="1" stop-color="#C608FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2370_4651"
            x1="151.399"
            y1="13.0194"
            x2="196.79"
            y2="72.0609"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18C8FF" />
            <stop offset="1" stop-color="#C608FF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
export default AppDevPartner;
