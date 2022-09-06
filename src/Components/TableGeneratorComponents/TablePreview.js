const TablePreview = ({ userInputValue }) => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" md:mt-10 mt-6">
      <table className="table-auto shadow-2xl  bg-slate-100  flex flex-col md:mt-10 mt-5 ">
        <thead>
          <tr className="px-4  flex justify-center  text-white py-2 bg-slate-300 border-2 border-slate-300 ">
            <th>Table Of {userInputValue}</th>
          </tr>
        </thead>
        <tbody>
          {num?.map((item, index) => {
            return (
              <tr
                key={index}
                className="  flex justify-center cursor-pointer md:text-sm text-xs transition-all duration-300 border-b-2 border-l-2 border-r-2 border-slate-200 hover:bg-slate-200  px-4 py-2 "
              >
                <td>
                  {userInputValue} x {item} = {userInputValue * item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePreview;
