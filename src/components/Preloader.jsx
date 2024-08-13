import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [info, setInfo] = useState({});
  const [fadeInElements, setFadeInElements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const browserInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    const screenInfo = {
      width: window.screen.width,
      height: window.screen.height,
      colorDepth: window.screen.colorDepth,
    };

    const memoryInfo = {
      deviceMemory: navigator.deviceMemory || 'Not available',
    };

    const cpuInfo = {
      hardwareConcurrency: navigator.hardwareConcurrency || 'Not available',
    };

    setInfo({
      ...browserInfo,
      ...screenInfo,
      ...memoryInfo,
      ...cpuInfo,
    });

    const elements = [
      "Copyright © 2024 Anton Dvaravenka",
      `User Agent: ${navigator.userAgent}`,
      `Platform: ${navigator.platform}`,
      `Screen Width: ${window.screen.width} x ${window.screen.height} px`,
      `Color Depth: ${window.screen.colorDepth}-bit`,
      `Device Memory: ${navigator.deviceMemory || 'Not available'} GB`,
      `CPU Cores: ${navigator.hardwareConcurrency || 'Not available'}`,
    ];

    setFadeInElements(elements);

    const firstElementDelay = 500;
    const subsequentElementsDelay = 1000;

    elements.forEach((_, index) => {
      const delay = firstElementDelay + index * subsequentElementsDelay;

      setTimeout(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    });

  }, []);

  return (
    <div className='fixed inset-0 flex flex-col bg-black z-50 text-white text-3xl p-10 gap-3'>
      {fadeInElements.map((text, index) => (
        <React.Fragment key={index}>
          <p className={`fade-in ${index < currentIndex ? 'visible' : 'hidden'}`}>{text}</p>
        </React.Fragment>
      ))}
      {currentIndex < fadeInElements.length && (
        <div className='dash-horizontal'></div>
      )}
    </div>
  );
}
