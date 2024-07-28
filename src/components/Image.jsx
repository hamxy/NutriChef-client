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
    ></img>
  );
};

export default Image;
