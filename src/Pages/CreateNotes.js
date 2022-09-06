import React, { useState, useEffect } from "react";
import HeaderAndButtons from "../Components/CreateNotesComponents/HeaderAndButtons";
import NoteForm from "../Components/CreateNotesComponents/NoteForm";
import NotesArea from "../Components/CreateNotesComponents/NotesArea";
import Card from "../Components/LayoutComponents/Card";
import GeneralModal from "../Components/LayoutComponents/GeneralModal";

const CreateNotes = ({ setProgress }) => {
  const [modal, setModal] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [notesColor, setNotesColor] = useState("bg-cyan-200");
  const [inputData, setInputdata] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  useEffect(() => {
    // using arr and useEffect to fetch data from local storage

    let arr = localStorage.getItem("notesList");

    // check if data isin local storage

    if (arr) {
      // parsing data into json

      let obj = JSON.parse(arr);

      setInputdata(obj);
    }

    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [setProgress]);

  const addNotesOnClickHandler = () => {
    const timestamp = Date.now(); // This would be the timestamp you want to format
    const time = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp);

    const inputs = {
      title: titleText,
      description: descriptionText,
      notesColorValue: notesColor,
      id: Math.random()?.toString(),
      time: time,
    };
    const inputDataText = [inputs, ...inputData];

    localStorage.setItem("notesList", JSON.stringify(inputDataText));

    setInputdata(inputDataText);
    setTitleText("");
    setDescriptionText("");
    setModal(false);
    setNotesColor("bg-cyan-200");
  };

  const setSelectedColor = (color) => {
    setNotesColor(color);
  };

  const copyText = (text) => {
    //text came thru Props from NoteCard.js
    navigator.clipboard.writeText(text);
    setAlertMsg("Copied");
    setTimeout(() => {
      setAlertMsg("");
    }, 700);
  };

  const deleteNoteById = (id) => {
    //id came thru Props from NoteCard.js

    setInputdata((prevNotes) => {
      const updatedNotes = prevNotes.filter((item) => item?.id !== id);
      localStorage.setItem("notesList", JSON.stringify(updatedNotes));
      return updatedNotes;
    });

    setAlertMsg("Deleted");
    setTimeout(() => {
      setAlertMsg("");
    }, 700);
  };

  return (
    <div className="md:pt-32 pt-20 pb-8 ">
      <Card>
        <HeaderAndButtons onClickHandlerProps={() => setModal(true)} />
        <NotesArea
          copyText={copyText}
          deleteNoteById={deleteNoteById}
          notes={inputData}
        />
      </Card>
      <span className=" block  py-6"></span>

      {modal && (
        <GeneralModal
          modalCloseHandler={() => {
            setModal(false);
            setTitleText("");
            setDescriptionText("");
            setNotesColor("bg-cyan-200");
          }}
        >
          <NoteForm
            titleText={titleText}
            descriptionText={descriptionText}
            setSelectedColor={setSelectedColor}
            addNotesOnClick={addNotesOnClickHandler}
            titleOnChange={(e) => setTitleText(e.target.value)}
            descriptionOnChange={(e) => setDescriptionText(e.target.value)}
            onClickProps={() => {
              setModal(false);
              setTitleText("");
              setDescriptionText("");
              setNotesColor("bg-cyan-200");
            }}
          />
        </GeneralModal>
      )}

      <div
        className={`${
          alertMsg
            ? "  opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }  bg-green-500  shadow-2xl rounded-full   px-3 py-1 fixed  top-[12%] right-[5%]`}
      >
        <p className="  text-xs   text-white font-semibold">{alertMsg}</p>
      </div>
    </div>
  );
};

export default CreateNotes;
