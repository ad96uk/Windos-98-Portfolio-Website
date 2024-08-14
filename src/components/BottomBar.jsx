"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import MouseClick from "./soundComponents/MouseClick";
import { useSound } from "./soundComponents/SoundProvider";
import BottomBarChild from "./BottomBarChild";

export default function BottomMenu({ showMenu, startAnimation, cvVisible, showPortfolio, aboutMeVisible }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const {isSoundOn, toggleSound} = useSound();

  useEffect(() => {
    setIsClient(true);

    const updateTime = () => {
      setCurrentTime(new Date());
    };
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={`${startAnimation ? 'fade-in-loading-icon-6' : ''} flex flex-row h-[50px] bg-[#cfd0cf] cardAndTableBorder box-shadow py-1 px-1 justify-between`}>
      <div className="flex flex-row">
      <div className="flex flex-row gap-[4px]">
          <MouseClick className={'inline-flex'}>
          <button
            onClick={showMenu}
            className='flex flex-row gap-2 items-center cardAndTableBorder btn-box-shadow py-4 px-6 cursor-pointer font-bold text-lg bg-[#cfd0cf] leading-3'
          >
            <Image
              src={"/windows-0.png"}
              width={30}
              height={30}
              alt="windosLogo"
            />
            Menu
          </button>
          </MouseClick>
        <div className="bar-divider"></div>
      </div>
      <div className="flex flex-row justify-start items-center">
        {cvVisible ? <BottomBarChild icon={"/notepad-1.png"} appName={"cv.txt"} /> : null}
        {showPortfolio ? <BottomBarChild icon={"/directory_closed-3.png"} appName={"Portfolio"} /> : null}
        {aboutMeVisible ? <BottomBarChild icon={"/user.png"} appName={"About me"} /> : null}
      </div>
      </div>
      <div className="flex flex-row pr-4">
        <div className="bar-divider"></div>
        <div className="flex items-center gap-2 pl-4">
            <button onClick={toggleSound}>
              <Image
                src={isSoundOn ? "/speaker.png" : "/speaker_muted.png"}
                width={25}
                height={25}
                alt="speaker"
              />
            </button>
          <p 
          className='text-lg'
          >{formatTime(currentTime)}</p>
        </div>
      </div>
    </div>
  );
}
