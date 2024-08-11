'use client'

import React, {useState} from "react";
import BottomMenu from "@/components/BottomMenu";
import BottomBar from "@/components/BottomBar";
import HomeScreen from "@/components/HomeScreen";
import Cv from "@/components/Cv";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [terminalVisible, setTerminalVisible] =useState(false);

  function toggleTerminal(){
    setTerminalVisible(!terminalVisible)
  }

  function toggleCv(){
    setCvVisible(!cvVisible)
  }

  function togglePortfolio() {
    setShowPortfolio(!showPortfolio);
  }

  function showMenu(){
    setMenuIsVisible(!menuIsVisible)
  }

  function hideMenu(){
    if (menuIsVisible){
      setMenuIsVisible(!menuIsVisible)
    } else return 
  }

  return (
    <main className="flex flex-col min-wvh h-lvh p-[1px] ">
      <HomeScreen hideMenu={hideMenu} 
      openCv={toggleCv} 
      openPortfolio={togglePortfolio} 
      showPortfolio={showPortfolio}
      openTerminal={toggleTerminal}/>
      {menuIsVisible && <BottomMenu 
      openCv={toggleCv}
      openPortfolio={togglePortfolio}
      openTerminal={toggleTerminal}
      />}
      <BottomBar 
      menuIsVisible={menuIsVisible}
      showMenu={showMenu}
      />
      {cvVisible ? <Cv onClose={toggleCv}/> : null}
      {terminalVisible ? <Terminal onClose={toggleTerminal}/> : null}
      </main>
  );
}
