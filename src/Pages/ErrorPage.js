import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyImg from "../Components/HelperComponents/LazyImg";
import errorPlc from "../images/errorPlc.png";
import errorImg from "../images/ErrorImg.gif";
import ButtonFilled from "../Components/LayoutComponents/ButtonFilled";

const ErrorPage = ({ setProgress }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [setProgress]);
  return (
    <div className=" md:pt-28 pt-32 ">
      <div className="  flex justify-center ">
        <LazyImg
          alt="Page not found"
          placeholderSrc={errorPlc}
          src={errorImg}
          errorImg={errorPlc}
        />
      </div>
      <p className=" text-center mb-10">
        Sorry we couldn't find the page you're looking for
      </p>
      <div className="  flex justify-center mb-20">
        <ButtonFilled
          className="bg-brown-500 hover:bg-brown-600 text-white text-xs md:text-sm"
          btnName="Back To Homepage"
          onClickHandler={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
