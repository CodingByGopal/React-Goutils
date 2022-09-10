import React, { useEffect } from "react";
import PageHeader from "../Components/HelperComponents/PageHeader";
import Card from "../Components/LayoutComponents/Card";
import TextDataHandler from "../Components/TextAnalyzerComponents/TextDataHandler";

const TextAnalyzer = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [setProgress]);
  return (
    <div className="md:pt-32 pt-20 pb-8">
      <Card>
        <PageHeader
          title="Text Analyzer"
          text="GoUtils provide a text analyzer utility that allows you to manipulate your text the way you want. For example, you can change your text to uppercase, or lowercase and counts the number of words, and the number of characters with and without space. One of the key features is to remove extra unwanted spaces between words, which can be very helpful in formatting your text document. You can also capitalize the first letter of your word, capitalize the first letter of your word after a full stop, or even capitalize every word in your sentence too, which can be very time-saving. It supports copy to clipboard hence you don't have to worry about selecting and copying your text. Just press copy to clipboard."
        />
        <span className=" mt-10 block"></span>
        <TextDataHandler />
      </Card>
    </div>
  );
};

export default TextAnalyzer;
