import { useEffect } from "react";
import PropTypes from "prop-types";

const ServicesComponent = (props) => {
  // props
  const { img, title1, title2, text } = props.services;
  useEffect(() => {
    const container = document.querySelector(
      ".servicesComponent_section_image"
    );
    const image = container.querySelector("img");
    //   mousemove event handler
    const handleMouseMove = (e) => {
      const x = (e.clientX - container.offsetLeft) / container.offsetWidth;
      const y = (e.clientY - container.offsetTop) / container.offsetHeight;

      const moveX = (x - 0.5) * 30; // Adjust the multiplier for desired movement range
      const moveY = (y - 0.5) * 30; // Adjust the multiplier for desired movement range

      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "none"; // Reset image position when mouse leaves the container
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="servicesComponent_section_image">
        <div>
          <div className="row about_row_style">
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src={`/Images/banner/${img}`}
                alt="banner_img4.png"
                className=""
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
            <h2 className="servicesComponent_text_heading">{`${title1} ${title2}`}</h2>
              <p className="servicesComponent_text_para">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ServicesComponent.propTypes = {
  services: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesComponent;
