import React from "react";
import ButtonFilled from "../LayoutComponents/ButtonFilled";
import LazyBg from "../LoadingPlceholders/LazyBg";
import hero from "../../images/hero.jpg";
import { useNavigate } from "react-router-dom";
const Hero = ({ sectionRef }) => {
  const navigate = useNavigate();
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className=" grid md:grid-cols-9 grid-cols-1  gap-5">
      <div className=" md:col-start-1 md:col-end-7">
        <h1 className=" md:mt-4  mt-0 font-bold  lg:text-4xl text-2xl mb-5">
          GoUtils : An Online Create Notes , Text Analyzer And Multiplication
          Table Generator Tool
        </h1>
        <p className="  font-thin  text-sm md:text-base mb-5 ">
          GoUtils is multifunctional utility web app that helps you to create
          and save notes in your browser while working online, Help in analysing
          and formatting your text by manipulating it the way you want , and
          generate multiplication tables of any number. These tools has been
          designed to help students and professionals in their daily life to
          make their work easy.
        </p>

        <div className=" text-xs sm:flex-row flex-col flex gap-4">
          <ButtonFilled
            onClickHandler={() => navigate(`/create-notes`)}
            className=" hover:bg-brown-600 bg-brown-500 text-white"
            btnName="Let's Get Started"
          />
          <ButtonFilled
            onClickHandler={() => scrollToSection(sectionRef)}
            className="hover:bg-white  hover:border-gray-600 bg-zinc-100 border-transparent border"
            btnName="Learn More"
          />
        </div>
      </div>

      <div className="md:mt-0 mt-5 md:col-start-7 md:col-end-10">
        <LazyBg src={hero} className="pt-96  rounded shadow-2xl  bg-[#eee]" />
      </div>
    </div>
  );
};

export default Hero;
