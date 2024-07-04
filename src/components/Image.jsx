const Image = ({ styles, src }) => {
  return (
    <img
      style={{
        ...styles,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      src={src}
    ></img>
  );
};

export default Image;
