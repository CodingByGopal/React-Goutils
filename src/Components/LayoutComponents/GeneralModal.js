const GeneralModal = ({ modalCloseHandler, children }) => {
  return (
    <div className=" px-2 h-screen fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
      <div className="absolute  bg-black opacity-80 inset-0 z-0"></div>
      <div className=" moveTopAnimationModal bg-white w-full max-w-5xl    relative mx-auto my-auto  shadow-lg   ">
        <div
          onClick={modalCloseHandler}
          className=" cursor-pointer hover:text-brown-600 transition-all duration-300 absolute lg:-top-3 lg:-right-2 -top-3 -right-2 text-2xl  "
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GeneralModal;
