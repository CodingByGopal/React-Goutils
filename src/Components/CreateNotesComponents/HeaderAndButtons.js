import React from "react";
import PageHeader from "../HelperComponents/PageHeader";
import ButtonFilled from "../LayoutComponents/ButtonFilled";

const HeaderAndButtons = ({ onClickHandlerProps }) => {
  return (
    <>
      <PageHeader
        text="GoUtils provides a free create notes utility in your web browser without login. With Create Notes you can create ideas, a to-do list, links, copy descriptions to a clipboard, or any other plain text that you would like to write just in a web browser online. Your text is stored in your web browser only (on your device only). This online notes service does not have text formatting hence if you want to format your text, use Text Analyzer which is another great GoUtils feature. Note: Your notes will be autosaved once you click on add note button. Avoid using create notes with Incognito/Private window, or your notes will not be saved to the browser's cache! The note's text might be deleted when you delete your browsing history/cache or run a disk-cleaning application."
        title="Create Notes"
      />
      <span className=" block py-4"></span>
      <ButtonFilled
        onClickHandler={onClickHandlerProps}
        btnName="+ New Note"
        className=" text-sm text-white bg-brown-500 hover:bg-brown-600"
      />
      <span className=" block py-4"></span>
    </>
  );
};

export default HeaderAndButtons;
