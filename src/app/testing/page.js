"use client";
import React, { useState } from "react";
import Image from "next/image";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button onClick={onClick} className={`py-1 px-3 tabs-styling tabs-shadow bg-customGrey ${isActive ? "z-[2]" : null }`}>
      {label}
    </button>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Hey", content: <TabContent1 /> },
    { label: "Skills", content: <TabContent2 /> },
    { label: "Links", content: <TabContent3 /> },
  ];

  return (
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
          <div className="flex items-center justify-center bg-customGrey cardAndTableBorder box-shadow w-[25px] h-[25px] cursor-pointer">
            <Image
              src="/close-icon.png"
              alt="close-icon"
              width={10}
              height={11}
            />
          </div>
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
        <button className="px-6 cardAndTableBorder box-shadow">OK</button>
        <button className="px-6 cardAndTableBorder box-shadow">Cancel</button>
      </div>
    </div>
  );
};

const TabContent1 = () => {
  return <div className="h-[250px]">This is the content of Tab 1 with a custom React component.</div>;
};

const TabContent2 = () => {
  return (
    <div className="h-[250px]">
      <h2>Tab 2 Content</h2>
      <p>This is some more complex content with a heading and a paragraph.</p>
    </div>
  );
};

const TabContent3 = () => {
  return (
    <div className="h-[250px]">
      <h3>Tab 3 Component</h3>
      <button onClick={() => alert("Button in Tab 3 clicked!")}>
        Click Me!
      </button>
    </div>
  );
};

export default Tabs;
