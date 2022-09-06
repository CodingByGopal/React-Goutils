import React from "react";

const ResultsAfterAnalysis = ({ withSpace, withoutSpace, words, avgTime }) => {
  const tableText = [
    {
      srNo: "1",
      text: "Number of characters (including spaces)",
      value: withSpace,
    },
    {
      srNo: "2",
      text: "Number of characters (without spaces)",
      value: withoutSpace,
    },
    {
      srNo: "3",
      text: "Number of words",
      value: words,
    },
    {
      srNo: "4",
      text: "Average time to read (in mins)",
      value: avgTime,
    },
  ];
  return (
    <table className="table-auto text-center bg-slate-100  flex flex-col md:mt-10 mt-5 ">
      <thead>
        <tr className="px-4  py-2 border-2 border-slate-200 flex  justify-between gap-5">
          <th className="md:text-base text-sm">S.No</th>
          <th className="md:text-base text-sm">Text Summary</th>
          <th className="md:text-base text-sm">Count</th>
        </tr>
      </thead>
      <tbody>
        {tableText?.map((item, index) => {
          return (
            <tr
              key={index}
              className=" cursor-pointer md:text-sm text-xs transition-all duration-300 border-b-2 border-l-2 border-r-2 border-slate-200 hover:bg-slate-200  px-4 py-2 flex  justify-between  gap-5"
            >
              <td>{item?.srNo}</td>
              <td>{item?.text}</td>
              <td>{item?.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsAfterAnalysis;
