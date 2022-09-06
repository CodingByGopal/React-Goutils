import React from "react";

const PageHeader = ({ title, text }) => {
  return (
    <>
      <h1 className=" mb-4 lg:text-4xl text-2xl font-bold  ">{title}</h1>
      <p className=" md:text-base text-sm">{text}</p>
    </>
  );
};

export default PageHeader;
