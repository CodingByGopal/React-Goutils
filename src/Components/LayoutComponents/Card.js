import React from "react";
import useElementOnScreen from "../../Hooks/useElementOnScreen";

const Card = ({ children }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0,
  });
  return (
    <div
      ref={containerRef}
      className={` ${
        isVisible ? "" : "section--hidden"
      }  section max-w-screen-xl mx-auto `}
    >
      <div className="  bg-white xl:p-20  lg:p-16 md:p-14 sm:p-10 p-6 rounded shadow-2xl   md:mx-10 sm:mx-5 mx-3">
        {children}
      </div>
    </div>
  );
};

export default Card;
