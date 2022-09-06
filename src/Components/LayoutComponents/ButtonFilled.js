import React from "react";

const ButtonFilled = ({
  disableRequired,
  btnName,
  onClickHandler,
  className,
  titleOfBtn,
}) => {
  return (
    <button
      title={titleOfBtn}
      disabled={disableRequired}
      onClick={onClickHandler}
      className={`${className} shadow-lg transition-all duration-300 px-4 py-2  rounded`}
    >
      {btnName}
    </button>
  );
};

export default ButtonFilled;
