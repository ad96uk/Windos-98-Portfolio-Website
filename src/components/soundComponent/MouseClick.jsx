import React from "react";
import { useSound } from "./SoundProvider";

export default function MouseClick({ children, onClick, className }) {
  const { isSoundOn } = useSound();

  const playSound = () => {
    if (isSoundOn) {
      const audio = new Audio("/mouse-click.wav");
      audio.volume = 0.2;
      audio.play();
    }
  };

  const handleClick = (e) => {
    playSound();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <span className={`inline-flex p-0 m-0 ${className}`} onClick={handleClick}>
      {children}
    </span>
  );
}
