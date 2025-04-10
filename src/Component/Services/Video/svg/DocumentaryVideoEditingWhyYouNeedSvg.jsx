import React from "react";

const DocumentaryVideoEditingWhyYouNeedSvg = ({ imgeUrl }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="107"
        height="107"
        viewBox="0 0 107 107"
        fill="none"
        className="documentary_video_editing_why_you_need_div_svg"
      >
        <g>
          <circle
            cx="53.0558"
            cy="53.0558"
            r="53.0558"
            fill="url(#paint0_linear_1159_6470)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1159_6470"
              x1="74.8097"
              y1="-4.03222"
              x2="122.827"
              y2="58.426"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18C8FF" />
              <stop offset="1" stopColor="#C608FF" />
            </linearGradient>
          </defs>
        </g>
        <g>
          <image
            href={`/Images/ServicesImage/videoEditing/${imgeUrl}`}
            className="documentary_video_editing_why_you_need_icon"
          />
        </g>
      </svg>
    </>
  );
};

export default DocumentaryVideoEditingWhyYouNeedSvg;
