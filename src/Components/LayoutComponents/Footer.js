import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const fullYear = new Date().getFullYear();
  return (
    <footer className=" pb-10 flex justify-center items-center  ">
      <p className=" text-sm ">
        &copy; {fullYear} GoUtils By{" "}
        <span
          onClick={() => navigate("/developer")}
          className=" inline-block cursor-pointer font-semibold border-b border-b-brown-500 border-transparent hover:border-b-transparent"
        >
          Gopal Ji
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
