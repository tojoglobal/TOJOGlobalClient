import PropTypes from "prop-types";
const HeroText = (props) => {
  // props
  const { text1, text2, description } = props.heroText;
  return (
    <>
      <div className="text-center univarsal_text_div" data-aos="fade-down">
        <h1>
          {" "}
          <span className="headdingGradientText">{text1} </span>
          {text2}
        </h1>
        <p className="topPeraDesText">{description}</p>
      </div>
    </>
  );
};

HeroText.propTypes = {
  heroText: PropTypes.shape({
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroText;
