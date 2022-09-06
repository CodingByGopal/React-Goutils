import React, { useRef, useState } from "react";
import ButtonFilled from "../LayoutComponents/ButtonFilled";
import {
  clearText,
  firstCap,
  firstCapAfterPeriod,
  handleCopy,
  removeSpaces,
  textLowerCase,
  textUpperCase,
} from "./InputHandlerFunctions";
import ResultsAfterAnalysis from "./ResultsAfterAnalysis";
import TextForm from "./TextForm";
import TextPreview from "./TextPreview";

const TextDataHandler = () => {
  const [inputValue, setInputValue] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const textRef = useRef(null);

  const btnList = [
    {
      name: "Convert To Uppercase",
      newTextValue: textUpperCase(inputValue),
      alertText: "Converted To Uppercase",
    },
    {
      name: "Convert To Lowercase",
      newTextValue: textLowerCase(inputValue),
      alertText: "Converted To Lowercase",
    },
    {
      name: "First Letter Uppercase ",
      newTextValue: firstCap(inputValue),
      alertText: "Successfully Converted",
    },
    {
      name: " Uppercase After Period",
      newTextValue: firstCapAfterPeriod(inputValue),
      alertText: "Successfully Converted",
    },
    {
      name: "Remove Extra Spaces",
      newTextValue: removeSpaces(inputValue),
      alertText: "Extra Space Removed",
    },

    {
      name: "Clear Text",
      newTextValue: clearText(),
      alertText: "Cleared",
    },
  ];

  const withSpaceChar = inputValue?.length;
  const withOutSpaceChar = inputValue?.replace(/\s+/g, "")?.length;
  const noOfWords = inputValue?.split(/\s+/)?.filter((word) => {
    return word.length !== 0;
  }).length;

  let previewText =
    withSpaceChar === 0 || withOutSpaceChar === 0
      ? "Nothing to preview"
      : inputValue;

  const readingTime = +(
    0.0033 *
    inputValue?.split(/\s+/)?.filter((word) => {
      return word?.length !== 0;
    }).length
  )?.toFixed(4);

  return (
    <div>
      <TextForm
        refProps={textRef}
        valueOfText={inputValue}
        onChangeHandler={(e) => setInputValue(e.target.value)}
      />

      <div className="text-xs  mt-6">
        {btnList?.map((item, index) => {
          return (
            <ButtonFilled
              disableRequired={
                withSpaceChar === 0 || withOutSpaceChar === 0 ? true : false
              }
              onClickHandler={() => {
                setInputValue(item?.newTextValue);
                setAlertMsg(item?.alertText);
                setTimeout(() => {
                  setAlertMsg("");
                }, 700);
              }}
              key={index}
              btnName={item?.name}
              className={` ${
                withSpaceChar === 0 || withOutSpaceChar === 0
                  ? " bg-slate-300 cursor-not-allowed"
                  : "bg-slate-500 hover:bg-slate-600"
              } md:mr-3 mr-2 mb-4   text-white`}
            />
          );
        })}

        <ButtonFilled
          onClickHandler={() => {
            handleCopy(textRef.current);
            setAlertMsg("Copied");
            setTimeout(() => {
              setAlertMsg("");
            }, 700);
          }}
          disableRequired={
            withSpaceChar === 0 || withOutSpaceChar === 0 ? true : false
          }
          btnName="Copy To Clipboard"
          className={` ${
            withSpaceChar === 0 || withOutSpaceChar === 0
              ? " bg-slate-300 cursor-not-allowed"
              : "bg-slate-500 hover:bg-slate-600"
          } md:mr-3 mr-2 mb-4   text-white`}
        />
      </div>

      <ResultsAfterAnalysis
        withSpace={withSpaceChar}
        withoutSpace={withOutSpaceChar}
        words={noOfWords}
        avgTime={readingTime}
      />
      <TextPreview text={previewText} />

      <div
        className={`${
          alertMsg
            ? " opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible  pointer-events-none"
        }  bg-green-500 shadow-2xl rounded-full   px-3 py-1 fixed  top-[12%] right-[5%]`}
      >
        <p className="  text-xs   text-white font-semibold">{alertMsg}</p>
      </div>
    </div>
  );
};

export default TextDataHandler;
