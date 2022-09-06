import { useState, useEffect } from "react";

const LazyImg = ({
  alt,
  placeholderSrc,
  src,
  otherClasses,
  errorImg,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  const replaceAltImage = (e) => {
    e.currentTarget.src = { errorImg };
  };
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading  " : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      onError={replaceAltImage}
      {...{ src: imgSrc, ...props }}
      alt={props.alt || " posters"}
      className={`${otherClasses} ${customClass}`}
    />
  );
};

export default LazyImg;
