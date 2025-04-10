import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const HomeServersWeOfferCatagoryItemsBtn = ({
  btnText,
  isActive,
  onClick,
  index,
  isOpen,
}) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      aria-expanded={isOpen}
      className="HomeServersWeOfferCatagoryItemsBtnDiv"
    >
      {isActive ? (
        <svg
          className="HomeServersWeOfferCatagoryItemsBtnStyle"
          viewBox="0 0 446 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g filter="url(#filter0_bd_2991_4698)">
            <rect
              x="6"
              y="2"
              width="434"
              height="62"
              rx="15"
              fill="url(#gradientBackground)"
              fill-opacity="0.4"
              shapeRendering="crispEdges"
            />
            <rect
              x="5"
              y="1"
              width="436"
              height="64"
              rx="16"
              stroke="url(#paint0_linear_2991_4698)"
              stroke-width="2"
              shapeRendering="crispEdges"
            />
            <g>
              <text className="HomeservericesCatagoryItemsBtn" x="50%" y="50%">
                {btnText}
              </text>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_bd_2991_4698"
              x="-46"
              y="-50"
              width="538"
              height="166"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2991_4698"
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
                in2="effect1_backgroundBlur_2991_4698"
                result="effect2_dropShadow_2991_4698"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2991_4698"
                result="shape"
              />
            </filter>
            <pattern
              id="pattern0_2991_4698"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2991_4698"
                transform="matrix(0.000625 0 0 0.004375 0 -3)"
              />
            </pattern>

            {/* <!-- Gradient Background Definition --> */}
            <linearGradient
              id="gradientBackground"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#C608FF" />
              <stop offset="50%" stopColor="#060044" />
              <stop offset="100%" stopColor="#18C8FF" />
            </linearGradient>
            {/* <!-- Gradient stock Definition --> */}
            <linearGradient
              id="paint0_linear_2991_4698"
              x1="357.029"
              y1="8.61029"
              x2="344.711"
              y2="94.8359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18C8FF" />
              <stop offset="0.425" stopColor="#060044" sstopOpacity="0" />
              <stop offset="0.71" stopColor="#060044" sstopOpacity="0" />
              <stop offset="1" stopColor="#C608FF" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          className="HomeServersWeOfferCatagoryItemsBtnStyle"
          viewBox="0 0 442 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bd_2991_4686)">
            <rect
              x="4"
              width="434"
              height="62"
              rx="15"
              fill="#060044"
              fill-opacity="0.4"
              shapeRendering="crispEdges"
            />
            <rect
              x="4.5"
              y="0.5"
              width="433"
              height="61"
              rx="14.5"
              stroke="url(#paint0_linear_2991_4686)"
              stroke-opacity="0.65"
              shapeRendering="crispEdges"
            />
            <g>
              <text className="HomeservericesCatagoryItemsBtn" x="50%" y="50%">
                {btnText}
              </text>
            </g>
          </g>

          <defs>
            <filter
              id="filter0_bd_2991_4686"
              x="-46"
              y="-50"
              width="534"
              height="162"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2991_4686"
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
                in2="effect1_backgroundBlur_2991_4686"
                result="effect2_dropShadow_2991_4686"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2991_4686"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2991_4686"
              x1="15.1184"
              y1="2.9774"
              x2="86.3179"
              y2="193.456"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.175" stopColor="#E0E0E0" sstopOpacity="0.21" />
              <stop offset="0.5" stopColor="#CDCDCD" sstopOpacity="0" />
              <stop offset="0.725" stopColor="#DDDDDD" sstopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};
