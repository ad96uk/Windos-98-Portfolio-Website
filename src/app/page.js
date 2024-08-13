'use client'
import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import BottomMenu from '@/components/BottomMenu';
import BottomBar from '@/components/BottomBar';
import HomeScreen from '@/components/HomeScreen';
import Cv from '@/components/Cv';
import AboutMe from '@/components/AboutMe';
import Notification from '@/components/Notification';
import { SoundProvider } from '@/components/soundComponent/SoundProvider';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  function toggleNotification() {
    setNotificationVisible(!notificationVisible);
  }

  function toggleAboutMe() {
    setAboutMeVisible(!aboutMeVisible);
  }

  function toggleCv() {
    setCvVisible(!cvVisible);
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
              />
            )}
            <BottomBar 
            startAnimation={startAnimation}
            menuIsVisible={menuIsVisible} showMenu={showMenu} />
            {cvVisible && <Cv onClose={toggleCv} />}
            {aboutMeVisible && <AboutMe onClose={toggleAboutMe} />}
            {notificationVisible && (
              <Notification onClick={toggleNotification} />
            )}
          </main>
        </SoundProvider>
      )}
    </>
  );
}
