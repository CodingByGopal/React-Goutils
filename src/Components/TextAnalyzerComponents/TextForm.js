import React from "react";

const TextForm = ({ refProps, onChangeHandler, valueOfText }) => {
  return (
    <div className=" flex flex-col ">
      <label className=" mb-2   md:text-base text-sm" htmlFor="text-form">
        Enter Your Text Here To Analyze
      </label>
      <textarea
        ref={refProps}
        value={valueOfText}
        onChange={onChangeHandler}
        className=" md:text-sm text-xs text-black outline-none focus:outline-none  rounded bg-slate-100 p-5 "
        id="text-form"
        cols="30"
        rows="10"
      />
    </div>
  );
};

export default TextForm;
