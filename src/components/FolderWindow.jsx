import React from "react";
import Draggable from "react-draggable";
import Icon from "./Icon";
import AddressBar from "./AddressBar";
import WindowTitleBar from "./WindowTitleBar";
import MouseClick from "./soundComponents/MouseClick";
import ExplorerMenu from "./ExplorerMenu";

export default function FolderWindow({
  onClose,
  openVdNotepad,
  openDatacraft,
  onClick,
  style,
}) {
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
        <WindowTitleBar
          icon={"/portfolio.png"}
          folderName={"Portfolio"}
          onClose={onClose}
        />
        <ExplorerMenu />
        <AddressBar route={"Portfolio"} />
        <div className="p-4 flex flex-row gap-5">
          <MouseClick>
            <Icon
              text={"vd_photo.txt"}
              image="/note.png"
              className="text-black"
              handleClick={openVdNotepad}
            />
          </MouseClick>
          <MouseClick>
            <Icon
              text={"datacraft.txt"}
              image="/note.png"
              className="text-black"
              handleClick={openDatacraft}
            />
          </MouseClick>
          <MouseClick>
            <Icon
              text={"coming soon"}
              image="/help_sheet-0.png"
              className="text-black cursor-not-allowed-important"
            />{" "}
          </MouseClick>
        </div>
      </div>
    </Draggable>
  );
}
