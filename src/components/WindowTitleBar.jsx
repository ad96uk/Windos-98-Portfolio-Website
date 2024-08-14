import React from "react";
import Image from 'next/image';
import MouseClick from "./soundComponents/MouseClick";

export default function WindowTitleBar({icon, onClose, folderName}) {
  return (
    <div className="flex justify-between w-full h-8 title-bar cursor-grab">
      <div className="flex flex-row items-center justify-center gap-2 p-1">
        <Image src={icon} alt="title-icon" width={22} height={22} />
        <p className="text-white">{folderName}</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-1 pr-1">
      <MouseClick>
        <div className="flex items-end pb-1 justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-not-allowed">
          <Image src="/min.svg" alt='min-icon' width={10} height={10} />
        </div>
        </MouseClick>
        <MouseClick>
        <div className="flex items-center justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-not-allowed">
          <Image src="/max.svg" alt='max-icon' width={10} height={11} />
        </div>
        </MouseClick>
        <MouseClick>
        <div
          onClick={onClose}
          className="flex items-center justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-pointer"
        >
          <Image src="/close-icon.png" alt="close-icon" width={10} height={11} />
        </div>
        </MouseClick>
      </div>
    </div>
  );
}
