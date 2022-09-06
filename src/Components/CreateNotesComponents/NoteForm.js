import React, { useState } from "react";
import ButtonFilled from "../LayoutComponents/ButtonFilled";

const NoteForm = ({
  addNotesOnClick,
  onClickProps,
  titleOnChange,
  descriptionOnChange,
  titleText,
  descriptionText,
  setSelectedColor,
}) => {
  const [activeId, setActiveId] = useState("1");

  const color = [
    {
      color: "bg-cyan-200",
      border: "border-cyan-400",
      hover: "hover:bg-cyan-300",
      id: "1",
    },

    {
      color: "bg-lime-200",
      border: "border-lime-400",
      hover: "hover:bg-lime-300",
      id: "2",
    },
    {
      color: "bg-orange-200",
      border: "border-orange-400",
      hover: "hover:bg-orange-300",
      id: "3",
    },
    {
      color: "bg-red-200",
      border: "border-red-400",
      hover: "hover:bg-red-300",
      id: "4",
    },
    {
      color: "bg-blue-200",
      border: "border-blue-400",
      hover: "hover:bg-blue-300",
      id: "5",
    },

    {
      color: "bg-yellow-200",
      border: "border-yellow-400",
      hover: "hover:bg-yellow-300",
      id: "6",
    },
  ];

  const charCount = titleText.length === 20 ? 0 : 20 - titleText.length;

  const titleLength = titleText?.replace(/\s+/g, "")?.length;
  const textLength = descriptionText?.replace(/\s+/g, "")?.length;

  return (
    <div className=" md:px-16 px-5 md:py-8 py-5 bg-orange-50">
      <div className=" flex  gap-4 md:mb-2 mb-4 md:justify-end justify-center">
        {color?.map((item, index) => {
          const colorOnClick = () => {
            setSelectedColor(item?.color);
            setActiveId(item?.id);
          };

          return (
            <span
              id={item?.id}
              onClick={colorOnClick}
              key={index}
              className={`${item?.color} ${item?.hover} ${
                activeId === item.id ? item?.border : " border-transparent"
              }   duration-300 border-4 border-dashed transition-all cursor-pointer   p-4 rounded shadow-2xl block`}
            ></span>
          );
        })}
      </div>
      <div className=" flex flex-col gap-5">
        <div className=" flex flex-col gap-2">
          <label className=" ml-1 md:text-base text-sm" htmlFor="title-box">
            Title ({`${charCount}`} characters remaining)
          </label>
          <input
            required
            maxLength="20"
            value={titleText}
            onChange={titleOnChange}
            id="title-box"
            type="text"
            className="outline-none focus:outline-none  text-sm px-4 py-3 rounded-xl shadow-2xl"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className=" ml-1 md:text-base text-sm" htmlFor="text-box">
            Description
          </label>
          <textarea
            required
            value={descriptionText}
            onChange={descriptionOnChange}
            className=" outline-none focus:outline-none   p-4 rounded-xl text-sm shadow-2xl"
            id="text-box"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className=" mt-2 flex  justify-end gap-2">
          <ButtonFilled
            disableRequired={
              titleLength === 0 || textLength === 0 ? true : false
            }
            onClickHandler={onClickProps}
            titleOfBtn={`${
              titleLength === 0 || textLength === 0
                ? "Please add title and description both"
                : "Close"
            }`}
            btnName="Close"
            className={`${
              titleLength === 0 || textLength === 0
                ? " opacity-60 cursor-not-allowed"
                : "opacity-100"
            } md:text-sm text-xs bg-brown-500 hover:bg-brown-600 text-white`}
          />

          <ButtonFilled
            disableRequired={
              titleLength === 0 || textLength === 0 ? true : false
            }
            titleOfBtn={`${
              titleLength === 0 || textLength === 0
                ? "Please add title and description both"
                : "Add Note"
            }`}
            onClickHandler={addNotesOnClick}
            btnName="Add Notes"
            className={`${
              titleLength === 0 || textLength === 0
                ? " opacity-60 cursor-not-allowed"
                : "opacity-100"
            } md:text-sm text-xs bg-brown-500 hover:bg-brown-600 text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
