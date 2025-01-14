import React from "react";

const GlassEffectSvg = () => {
  return (
    <svg
      width="202"
      height="167"
      viewBox="0 0 202 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_b_2750_5468)">
        <mask id="path-1-inside-1_2750_5468" fill="white">
          <path d="M0 30C0 13.4315 13.4315 0 30 0H172C188.569 0 202 13.4315 202 30V137C202 153.569 188.569 167 172 167H30C13.4315 167 0 153.569 0 137V30Z" />
        </mask>
        <path
          d="M0 30C0 13.4315 13.4315 0 30 0H172C188.569 0 202 13.4315 202 30V137C202 153.569 188.569 167 172 167H30C13.4315 167 0 153.569 0 137V30Z"
          fill="url(#pattern0_2750_5468)"
          fillOpacity="0.3"
        />
        <path
          d="M0 0H202H0ZM202 137C202 154.121 188.121 168 171 168H31C13.8792 168 0 154.121 0 137C0 153.016 13.4315 166 30 166H172C188.569 166 202 153.016 202 137ZM0 167V0V167ZM202 0V167V0Z"
          fill="white"
          mask="url(#path-1-inside-1_2750_5468)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2750_5468"
          x="-100"
          y="-100"
          width="402"
          height="367"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2750_5468"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2750_5468"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_2750_5468"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            xlinkHref="/Images/your-background-image.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />
        </pattern>
      </defs>
    </svg>
  );
};

export default GlassEffectSvg;
