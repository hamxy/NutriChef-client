import PropTypes from "prop-types";

const Image = ({ styles, src, alt }) => {
  return (
    <img
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...styles,
      }}
      src={src}
      alt={alt}
    />
  );
};

Image.propTypes = {
  styles: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  styles: {},
};

export default Image;
