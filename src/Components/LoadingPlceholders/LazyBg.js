import React from "react";
import useImageLoad from "../../Hooks/use-imageLoad";

const LazyBg = ({ src, className }) => {
  const { givenSource, bgLoading } = useImageLoad(src);
  return (
    <div
      className={`${className} ${
        bgLoading ? "skeleton-box-full" : ""
      } bg-no-repeat bg-cover bg-center `}
      style={{ backgroundImage: `url(${givenSource})` }}
    ></div>
  );
};

export default LazyBg;
