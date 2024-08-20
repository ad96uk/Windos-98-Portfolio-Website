'use client'
import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import BottomMenu from '@/components/BottomMenu';
import BottomBar from '@/components/BottomBar';
import HomeScreen from '@/components/HomeScreen';
import Cv from '@/components/Cv';
import AboutMe from '@/components/AboutMe';
import AboutSystem from '@/components/AboutSystem';
import Notification from '@/components/Notification';
import { SoundProvider } from '@/components/soundComponents/SoundProvider';
import DatacraftTxt from '@/components/DatacraftTxt';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);
  const [datacraftVisible, setDatacraftVisible] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [aboutSystem, setAboutSystem] = useState(false);

  function toggleAboutSystem(){
    setAboutSystem(!aboutSystem)
  }

  function toggleNotification() {
    setNotificationVisible(!notificationVisible);
  }

  function toggleAboutMe() {
    setAboutMeVisible(!aboutMeVisible);
  }

  function toggleCv() {
    setCvVisible(!cvVisible);
  }
  function toggleDatacraft() {
    setDatacraftVisible(!datacraftVisible);
  }

  function togglePortfolio() {
    setShowPortfolio(!showPortfolio);
  }

  function showMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  function hideMenu() {
    if (menuIsVisible) {
      setMenuIsVisible(!menuIsVisible);
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setStartAnimation(true);   
    }, 4000);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <SoundProvider>
          <main className="flex flex-col min-wvh h-lvh p-[1px]">
            <HomeScreen
              hideMenu={hideMenu}
              openCv={toggleCv}
              openDatacraft={toggleDatacraft}
              openPortfolio={togglePortfolio}
              showPortfolio={showPortfolio}
              openAboutMe={toggleAboutMe}
              loading={loading}
              startAnimation={startAnimation}
            />
            {menuIsVisible && (
              <BottomMenu
                openCv={toggleCv}
                openPortfolio={togglePortfolio}
                openAboutMe={toggleAboutMe}
                openNotification={toggleNotification}
                openAboutSystem={toggleAboutSystem}
              />
            )}
            <BottomBar 
            cvVisible={cvVisible}
            showPortfolio={showPortfolio}
            startAnimation={startAnimation}
            aboutMeVisible={aboutMeVisible}
            menuIsVisible={menuIsVisible} showMenu={showMenu} />
            {cvVisible && <Cv onClose={toggleCv} />}
            {datacraftVisible && <DatacraftTxt onClose={toggleDatacraft} />}
            {aboutMeVisible && <AboutMe onClose={toggleAboutMe} />}
            {aboutSystem && <AboutSystem onClick={toggleAboutSystem} />}
            {notificationVisible && (
              <Notification onClick={toggleNotification} />
            )}
          </main>
        </SoundProvider>
      )}
    </>
  );
}
