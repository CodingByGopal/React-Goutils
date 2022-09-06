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
          text="GoUtils provide text analyzer utility which allows you to manipulate your text the way you want. For example you can change your text to uppercase , lowercase , counts number of words, number of characters with and without space. One of the key feature is to remove extra unwanted spaces in between words, which can be very helpful in formatting your text document. You can also capitalize first letter of your word, capitalize first letter of your word after full stop ,even capitalize every word in your sentence too, which can be very time saving . It supports copy to clipboard hence you don't have to worry about selecting and copying your text. Just press copy to clipboard."
        />
        <span className=" mt-10 block"></span>
        <TextDataHandler />
      </Card>
    </div>
  );
};

export default TextAnalyzer;
