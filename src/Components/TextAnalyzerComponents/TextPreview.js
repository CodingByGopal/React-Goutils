import React from "react";

const TextPreview = ({ text }) => {
  return (
    <div className="  md:mt-10 mt-5">
      <h1 className=" text-2xl mb-4 font-bold">Preview</h1>
      <div className="bg-slate-100 p-5  border-2 rounded">
        <p className=" text-sm ">{text}</p>
      </div>
    </div>
  );
};

export default TextPreview;
