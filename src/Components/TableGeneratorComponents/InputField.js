const InputField = ({ onChangeHandler }) => {
  return (
    <div className=" mt-10 flex flex-col">
      <label className="md:text-base text-sm mb-2" htmlFor="input-field">
        Enter A Number
      </label>
      <input
        placeholder="Eg. 1, 2, 3"
        onChange={onChangeHandler}
        className=" p-3 px-4 outline-none focus:outline-none  rounded text-black text-sm   bg-slate-100"
        type="number"
        id="input-field"
      />
    </div>
  );
};

export default InputField;
