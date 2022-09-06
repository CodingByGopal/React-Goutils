import React from "react";

const NoteCard = ({
  title,
  text,
  noteColor,
  idProps,
  time,
  deleteNoteById,
  copyText,
}) => {
  const deleteOnClickHandler = () => {
    deleteNoteById(idProps);
  };
  const copyTextHandler = () => {
    copyText(text);
  };

  return (
    <div className=" shadow-2xl text-slate-500  shadow-slate-300 rounded overflow-hidden">
      <p className={` text-white font-bold ${noteColor} p-4`}>
        <span className=" text-xs block">{time}</span>
      </p>
      <div className="p-6 bg-slate-50">
        <h1 className=" mb-3 h-8 text-sm font-semibold ">{title}</h1>

        <p
          className={`${
            text?.length > 137 ? "overflow-y-scroll" : ""
          }  h-52 w-full scrollBarCustom  text-sm`}
        >
          {text}
        </p>
      </div>

      <p
        className={` ${noteColor} p-4 flex gap-4 justify-end text-white  text-lg`}
      >
        <i
          id={idProps}
          onClick={deleteOnClickHandler}
          className="fa-solid fa-trash-can hover:text-slate-100 cursor-pointer"
          title="Delete Note"
        ></i>

        <i
          onClick={copyTextHandler}
          className="fa-solid fa-paste hover:text-slate-100 cursor-pointer"
          title="Copy Text"
        ></i>
      </p>
    </div>
  );
};

export default NoteCard;
