import React from "react";
import MouseClick from "./soundComponent/MouseClick";


export default function BottomMenu({openCv, openPortfolio, openAboutMe, openNotification}) {
  return (
    <div className="flex flex-row bg-customGrey fixed bottom-[52px] left-[2px] h-[338px] w-[250px] cardAndTableBorder box-shadow">
      <div className="relative flex items-end justify-center w-10 bg-gradient-menu h-full text-lg whitespace-nowrap overflow-hidden">
        <p className="text-white transform -rotate-90 absolute bottom-[125px] right-0 origin-bottom-right">Website menu</p>
      </div>
      <div className="flex flex-col justify-start items-start text-white gap-2 p-1 w-full">
      <MouseClick className={'w-full'}>
        <button className="flex flex-row gap-2 p-2 w-full items-center text-black hover:bg-customGrey25" 
        onClick={openPortfolio}
        ><img src="/directory_closed-3.png" alt="Portfolio"
        />Portfolio</button>
        </MouseClick>
        <MouseClick className={'w-full'}>
        <button className="flex flex-row gap-2 p-2 w-full items-center text-black hover:bg-customGrey25" 
        onClick={openCv}>
          <img src="/file_lines-0.png" alt="CV" 
        />CV</button>
        </MouseClick>
        <MouseClick className={'w-full'}>
        <button
        onClick={openAboutMe}
        className="flex flex-row gap-2 p-2 w-full items-center text-black hover:bg-customGrey25">
        <img src="/user.png" alt="About-me" />About me</button>
        </MouseClick>
        <button
        onClick={openNotification}
        className="flex flex-row gap-2 p-2 w-full items-center text-black hover:bg-customGrey25"><img src="/envelope_closed.png" alt="Contact" 
        />Contacts</button>
        <button 
        onClick={openNotification}
        className="flex flex-row gap-2 p-2 w-full items-center text-black hover:bg-customGrey25"><img src="/system.png" alt="SystemInfo" 
        />About website</button>
        <button
        onClick={openNotification}
        className="flex flex-row gap-2 p-2 w-full items-center text-black hover:bg-customGrey25"><img src="/restart.png" alt="Portfolio" 
        />Restart</button>
      </div>
    </div>
  );
}
