export const textUpperCase = (inputValue) => {
  let newText = inputValue?.toUpperCase();
  return newText;
};
export const textLowerCase = (inputValue) => {
  let newText = inputValue?.toLowerCase();
  return newText;
};

export const firstCap = (inputValue) => {
  let tempText = inputValue?.toLowerCase()?.split(/[  ]+/);

  let newText = "";

  tempText.forEach((e) => {
    e = e?.charAt(0)?.toUpperCase() + e?.slice(1);
    newText = newText + e + " ";
  });

  return newText;
};

export const firstCapAfterPeriod = (inputValue) => {
  // removing extra spaces
  const text = inputValue?.replace(/\s{2,}/g, " ")?.trim();

  // firstCapAfterPeriod function
  let newText = text
    .split(". ")
    .map((word) => word[0]?.toUpperCase() + word?.slice(1)?.toLowerCase() + ".")
    .join(" ");
  newText = newText?.slice(0, newText?.length - 1);

  return newText;
};

export const removeSpaces = (inputValue) => {
  const newText = inputValue?.replace(/\s{2,}/g, " ").trim();

  return newText;
};

export const handleCopy = (textValue) => {
  let text = textValue;

  text?.select();
  return navigator.clipboard.writeText(text?.value);
};

export const clearText = () => {
  let newText = "";
  return newText;
};
