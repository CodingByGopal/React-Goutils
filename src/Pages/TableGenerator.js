import React, { useState, useEffect } from "react";
import PageHeader from "../Components/HelperComponents/PageHeader";
import Card from "../Components/LayoutComponents/Card";
import InputField from "../Components/TableGeneratorComponents/InputField";
import TablePreview from "../Components/TableGeneratorComponents/TablePreview";

const TableGenerator = ({ setProgress }) => {
  const [userInput, setUserInput] = useState(0);
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
          title="Multiplication Table Generator"
          text="Are you looking for a Multiplication table from 1 to 10, 2 to 20, 1 to 50, 1 to 100, 2 to 25? Do you feel that Table of 13, Table of 17, Table of 19, or any table is complicated? Are you having trouble with the Multiplication table? Well, whatever the problem is with the table or पहाड़ा. GoUtils got a complete solution for you. Just type the number in the box and get the table of that number."
        />
        <InputField onChangeHandler={(e) => setUserInput(+e.target.value)} />
        <TablePreview userInputValue={userInput} />
      </Card>
    </div>
  );
};

export default TableGenerator;
