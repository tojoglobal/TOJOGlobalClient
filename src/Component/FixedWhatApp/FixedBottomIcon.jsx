import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const FixedBottomIcon = () => {
  return (
    <>
      <div className="footer_social_media">
        <a
          className="footer_social_media_link"
          href="https://wa.me/8801333411624?text= sir, how can i help you?"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            right: "15px",
            bottom: "15px",
            zIndex: "1000",
          }}
        >
          <FaSquareWhatsapp className="bx footer_icon" />
        </a>
      </div>
      <div className="footer_social_media">
        <a
          className="footer_social_media_link"
          href="https://t.me/TOJO_Global"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            right: "15px",
            bottom: "70px",
            zIndex: "1000",
          }}
        >
          <FaTelegramPlane className="bx footer_icon" />
        </a>
      </div>
    </>
  );
};

export default FixedBottomIcon;
