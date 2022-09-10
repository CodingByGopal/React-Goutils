import React, { useEffect } from "react";
import useImageLoad from "../Hooks/use-imageLoad";
import useElementOnScreen from "../Hooks/useElementOnScreen";
import dev from "../images/dev.jpg";

const Developer = ({ setProgress }) => {
  const { givenSource, bgLoading } = useImageLoad(dev);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0,
  });

  useEffect(() => {
    if (bgLoading) {
      setProgress(40);
    } else {
      setProgress(100);
    }
  }, [bgLoading, setProgress]);

  const socialData = [
    {
      link: "https://www.linkedin.com/in/gopal-ji-470753218/",
      icon: <i title="linkedin" className="  fa-brands fa-linkedin"></i>,
    },
    {
      link: "https://www.instagram.com/_matarpaneer/",
      icon: <i title="instagram" className="  fa-brands fa-instagram"></i>,
    },
    {
      link: "https://github.com/CodingByGopal",
      icon: <i title="github" className="  fa-brands fa-github"></i>,
    },
    {
      link: "https://codepen.io/CodingByGopal",
      icon: <i title="codepen" className="  fa-brands fa-codepen"></i>,
    },
  ];

  return (
    <div className=" max-w-screen-2xl mx-auto  ">
      <div className="  max-w-5xl mx-auto md:py-36 py-24 px-5  ">
        <div
          ref={containerRef}
          className={` section ${
            isVisible ? "" : "section--hidden"
          } rounded-xl overflow-hidden shadow-2xl`}
        >
          <div className="   grid md:grid-cols-6 grid-cols-1  ">
            <div className=" md:col-start-1 md:col-end-3    bg-[#eee]">
              <div
                className={` ${
                  bgLoading ? "skeleton-box-full " : ""
                } bg-cover md:h-full h-auto bg-no-repeat bg-top md:pt-[160%] sm:pt-[85%] pt-[100%] `}
                style={{ backgroundImage: `url(${givenSource})` }}
              ></div>
            </div>

            <div className=" text-brown-500  bg-white  md:col-start-3 md:col-end-7 md:p-10 p-5">
              <h1 className="mb-5 md:text-7xl text-4xl font-semibold ">
                Hello
              </h1>
              <p className="    md:text-lg text-base md:mb-10 mb-5">
                My name is Gopal Ji, I'm a front-end web developer. I created
                GoUtils to help students and professionals who are working on
                projects and assignments and struggling in create notes online
                while learning or formatting and analysis of text also in the
                multiplication table. GoUtils provide a complete solution for
                such problems and it's absolutely free hence no login or sign-up
                required to use. If you have any further queries, get in touch
                with me on these social links.
              </p>

              <div className="  flex gap-7 pb-6 md:justify-start justify-evenly ">
                {socialData?.map((item, index) => {
                  return (
                    <a
                      key={index}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={item?.link}
                    >
                      <div className=" hover:-translate-y-3 hover:text-brown-600 transition duration-300 md:text-4xl text-3xl">
                        {item?.icon}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
