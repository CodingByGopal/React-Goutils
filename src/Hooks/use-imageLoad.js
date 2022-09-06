import { useState, useEffect } from "react";
const useImageLoad = (src) => {
  const [source, setSource] = useState({
    givenSource: "",
    bgLoading: true,
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setSource({
        givenSource: src,
        bgLoading: false,
      });
    };
  }, [src]);
  const { givenSource, bgLoading } = source;
  return { givenSource, bgLoading };
};
export default useImageLoad;
