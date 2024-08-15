"use client";
import React, { useState } from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import MouseClick from "./soundComponents/MouseClick";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <MouseClick className={isActive ? 'z-[2]' : null}>
    <button onClick={onClick} className={`py-1 px-3 tabs-styling tabs-shadow bg-customGrey`}>
      {label}
    </button>
    </MouseClick>
  );
};

const TabContent1 = () => {
    return <div className="flex flex-col gap-2 h-[250px] justify-center">
        <Image src="/admin-photo.png" width={130} height={130} alt="admin-photo"/>
        <p>Anton Dvaravenka</p>
        <h3 className="text-xl">Front-end Web Developer</h3>
        <a href="https://maps.app.goo.gl/w43yxw3eqLjFfx6d9" className="flex flex-row gap-1 text-blue-600" target="blank">Widnes, UK</a>
    </div>;
  };
  
  const TabContent2 = () => {
    return (
      <div className="flex flex-col justify-start h-[250px] gap-1">
        <h3 className="text-xl pb-2">Tech Stack I've Developed With
        </h3>
        <p className="text-slate-700"><b className="text-black">Front-end:</b> HTML, CSS, TailwindCSS, Bootstrap, JavaScript; </p>
        <p className="text-slate-700"><b className="text-black">Back-end:</b> PHP, Wordpress Core, WooCommerce, MySQL;</p>
        <p className="text-slate-700"><b className="text-black">Project management:</b> Git, Jira, ClickUp;</p>
        <p className="text-slate-700"><b className="text-black">Testing:</b> Python + Selenium;</p>
      </div>
    );
  };
  
  const TabContent3 = () => {
    return (
      <div className="flex flex-col justify-start h-[250px] gap-2">
        <h3 className="text-xl pb-2">Social:</h3>
        <a href="https://www.linkedin.com/in/anton-dvaravenka/" className="text-blue-600 font-bold">Linkedin</a>
        <a href="https://github.com/ad98974771" className="text-blue-600 font-bold">GitHub</a>
        <a href="" className="text-blue-600 font-bold">anton.dvaravenka@outlook.com</a>
      </div>
    );
  };

export default function AboutMe({onClose}){
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { label: "Hey", content: <TabContent1 /> },
      { label: "Skills", content: <TabContent2 /> },
      { label: "Links", content: <TabContent3 /> },
    ];
  
    return (
    <Draggable bounds="parent" >
      <div className="absolute notepad-window flex flex-col w-[375px] cardAndTableBorder box-shadow bg-customGrey p-1">
        <div className="flex justify-between w-full h-8 title-bar cursor-grab mb-2">
          <div className="flex flex-row items-center justify-center gap-2 p-1 ">
            <p className="text-white">About me</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-1 pr-1">
            <div className="flex items-end pb-1 justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-not-allowed">
              <Image src="/min.svg" alt="min-icon" width={10} height={10} />
            </div>
            <div className="flex items-center justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-not-allowed">
              <Image src="/max.svg" alt="max-icon" width={10} height={11} />
            </div>
            <MouseClick>
            <div className="flex items-center justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-pointer"
            onClick={onClose}
            >
              <Image
                src="/close-icon.png"
                alt="close-icon"
                width={10}
                height={11}
              />
            </div>
            </MouseClick>
          </div>
        </div>
        <div className="flex flex-col mx-2">
        <div className="flex">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>      
        <div className="p-4 tabs-styling tabs-content -mt-1 bg-customGrey">{tabs[activeTab].content}</div>
        </div>
        <div className="flex flex-row gap-2 justify-end m-2">
        <MouseClick>
          <button onClick={onClose} className="px-6 py-[2px] cardAndTableBorder box-shadow">OK</button>
          </MouseClick>
          <MouseClick>
          <button onClick={onClose} className="px-6 py-[2px] cardAndTableBorder box-shadow">Cancel</button>
          </MouseClick>
        </div>
      </div>
      </Draggable>
    );
  };
  