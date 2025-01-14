import PropTypes from "prop-types";

const ClinetImage = ({ clientInfoImg }) => {
  // props
  const { imgName, imageUrl, index } = clientInfoImg;
  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 client_item">
        <img
          src={`${imageUrl}`}
          alt={imgName}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        />
      </div>
    </>
  );
};

ClinetImage.propTypes = {
  clientInfoImg: PropTypes.shape({
    imgName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClinetImage;
