import React from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import MouseClick from "./soundComponents/MouseClick";

export default function Notification({onClick}) {
  return (
    <Draggable bounds="parent">
      <div className="absolute notepad-window flex flex-col w-[375px] cardAndTableBorder box-shadow bg-customGrey p-1">
        <div className="flex justify-between w-full h-8 title-bar cursor-grab mb-2">
          <div className="flex flex-row items-center justify-center gap-2 p-1 ">
            <p className="text-white">Alert!</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-1 pr-1">
          <MouseClick>
            <div className="flex items-center justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-pointer"
            onClick={onClick}
            >
              <Image
                src="/close-icon.png"
                alt="close-icon"
                width={10}
                height={10}
              />
            </div>
            </MouseClick>
          </div>
        </div>
        <div className="h-[100px] flex flex-col justify-center align-middle items-center gap-2">
          <Image src={"/alert.png"} height={32} width={32} alt="alert" />
            <p className="text-center">This feature is under development and will be available soon!</p>
        </div>
        <div className="flex flex-row justify-center pb-4 pt-2">
        <MouseClick>
        <button className="px-6 py-[2px] cardAndTableBorder box-shadow"
        onClick={onClick}
        >OK</button>
        </MouseClick>
        </div>
      </div>
    </Draggable>
  );
}
