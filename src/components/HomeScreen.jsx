import React, { useState } from "react";
import Icon from "./Icon";
import FolderWindow from "./FolderWindow";
import Notepad from "./Notepad";
import MouseClick from "./soundComponent/MouseClick";

export default function HomeScreen({ hideMenu, openCv, openPortfolio, showPortfolio, openAboutMe}) {
  const [activeElement, setActiveElement] = useState(null);
  const [showVdNotePad, setShowVdNotepad] = useState(false);

  
  function toggleVdNotepad() {
    setShowVdNotepad(!showVdNotePad);
  }

  function handleClick(index) {
    if (activeElement !== index) {
      setActiveElement(index);
    }
  }

  return (
    <div
      onClick={hideMenu}
      className="flex flex-col items-start p-3 gap-4 home-screen-height  bg-[#3a6ea5]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          openPortfolio();
        }}
      >
        <MouseClick>
        <Icon
          image="/directory_closed-3.png"
          text="Portfolio"
          className="text-white"
          handleClick={openPortfolio}
        />
        </MouseClick>
      </div>
      <MouseClick>
      <Icon image="/file_lines-0.png" text="CV.txt" className="text-white" handleClick={openCv}/>
      </MouseClick>
      <MouseClick>
      <Icon image="/user.png" text="About me" className="text-white" handleClick={openAboutMe}/>
      </MouseClick>
      <Icon
        image="/envelope_closed.png"
        text="Contacts"
        className="text-white"
      />
      {showPortfolio && (
        <FolderWindow onClose={openPortfolio} openVdNotepad={toggleVdNotepad} onClick={() => handleClick(1)}
        style={{ zIndex: activeElement === 1 ? 1 : 0}}/>
      )}
      {showVdNotePad && <Notepad onClose={toggleVdNotepad} 
      onClick={() => handleClick(2)}
      style={{ zIndex: activeElement === 2 ? 1 : 0}}/>}
    </div>
  );
}
