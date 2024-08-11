import React from "react";
import Draggable from "react-draggable";
import Icon from "./Icon";
import AddressBar from "./AddressBar";
import WindowTitleBar from "./WindowTitleBar";

export default function FolderWindow({ onClose, openVdNotepad, onClick, style }) {
  const [isFolderOpen, setIsFolderOpen] = React.useState(false);

  function toggleFolder() {
    setIsFolderOpen(!isFolderOpen);
  }

  return (
    <Draggable bounds="parent">
      <div
        className="portfolio-window flex flex-col w-[600px] h-96 cardAndTableBorder box-shadow bg-customGrey p-1"
        onClick={onClick}
        style={style}
      >
        <WindowTitleBar icon={'/portfolio.png'} folderName={'Portfolio'} onClose={onClose} />
        <AddressBar route={isFolderOpen ? 'Portfolio\\vdphoto' : 'Portfolio'} />
        <div className='p-4'>
          {isFolderOpen ? (
                <Icon text={'vdphoto.txt'} image='/note.png' className='text-black' handleClick={openVdNotepad} />
          ) : (
            <div className="flex flex-row gap-2">
                <Icon text={'vd_photo'} image='/portfolio.png' className='text-black' handleClick={toggleFolder} />
                <Icon text={'coming soon'} image='/help_sheet-0.png' className="text-black cursor-not-allowed-important"/> 
            </div>
          )}
        </div>
      </div>
    </Draggable>
  );
}
