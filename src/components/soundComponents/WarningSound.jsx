import React from "react";

export default function WarningSound({ children, onClick }) {
    const playSound = () => {
        const audio = new Audio("/warning-sound.wav");
        audio.volume = 0.1;
        audio.play();
     };

  const handleClick = (e) => {
    playSound();
    if (onClick) {
      onClick(e);
    }
  };

  return <span onClick={handleClick}>{children}</span>;
}
