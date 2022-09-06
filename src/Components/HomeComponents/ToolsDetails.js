import notesImg from "../../images/notes.png";
import textImg from "../../images/text.png";
import tableImg from "../../images/table.png";
import ButtonFilled from "../LayoutComponents/ButtonFilled";
import { useNavigate } from "react-router-dom";

const ToolsDetails = ({ sectionRef }) => {
  const navigate = useNavigate();

  const toolsData = [
    {
      img: notesImg,
      altText: "Notes",
      heading: "Create Notes Tool",
      description: `  Don't you have copy to write on? Are you studying online and want to
      takes notes in parallel tab? Here is the complete solution. This
      free online tool allows you to create notes in a web browser. No
      sign up required.`,
      path: "/create-notes",
    },
    {
      img: textImg,
      altText: "Text Analyzer Tool",
      heading: "Text Analyzer Tool",
      description: ` Text analyzer provides you multiple options for your text analysis and formattig. For example : change your text to uppercase , lowercase , counts number of words, number of characters with and without space and so on.`,
      path: "/text-analyzer",
    },
    {
      img: tableImg,
      altText: "Multiplication Table Tool",
      heading: "Multiplication Table Tool",
      description: `  Are you stuck in multiplication table? You feel that Table of 13, Table of 17, Table of 19 or any table is complicated?. GoUtils provide multiplication table generator. Just type the number in box.`,
      path: "/table-generator",
    },
  ];
  return (
    <div ref={sectionRef} className=" mt-16 ">
      <h1 className=" md:text-start text-center lg:mb-8 mb-4 lg:text-4xl text-2xl font-bold  ">
        GoUtils Porvide Three Demanding Tools
      </h1>

      <div className="   flex  gap-4   xl:flex-row flex-col justify-center items-center ">
        {toolsData?.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded   bg-slate-100 shadow-2xl shadow-slate-300  p-5 flex flex-col justify-center items-center"
            >
              <img
                src={item?.img}
                alt={item?.altText}
                className="  bg-white mx-auto w-24 p-4 mb-2 rounded-full"
              />
              <h2 className=" text-center md:text-xl text-lg font-semibold mb-2">
                {item?.heading}
              </h2>
              <p className=" mb-4 text-sm  text-center">{item?.description}</p>

              <ButtonFilled
                className="  shadow-xl text-white text-xs bg-brown-500 hover:bg-brown-600"
                onClickHandler={() => navigate(item?.path)}
                btnName="Learn More"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsDetails;
