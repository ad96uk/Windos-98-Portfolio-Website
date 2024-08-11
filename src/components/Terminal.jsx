import React, { useState, useEffect } from 'react';
import WindowTitleBar from './WindowTitleBar';
import Draggable from 'react-draggable';

export default function Terminal({ onClose }) {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    
    const text = `
    C:\ > Hey👋, I’m Anton—a web wizard 🧙 focused on creating seamless and engaging online adventures.`;

    
    const typingSpeed = 150; // Speed in milliseconds
    const delayBetweenWords = 1000; // Delay between words in milliseconds

    // Split text into words
    const words = text.split(' ');

    useEffect(() => {
        if (wordIndex < words.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => `${prev} ${words[wordIndex]}`);
                setWordIndex(wordIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timer);
        }
    }, [wordIndex]);

    useEffect(() => {
        // Set a delay before the first word
        if (wordIndex === 0) {
            const delayTimer = setTimeout(() => {
                setWordIndex(1);
            }, delayBetweenWords);

            return () => clearTimeout(delayTimer);
        }
    }, [wordIndex]);

    return (
        <Draggable bounds="parent">
            <div className='absolute notepad-window flex flex-col w-[550px] h-fit cardAndTableBorder box-shadow bg-customGrey p-1'>
                <WindowTitleBar icon={'/console_prompt-0.png'} folderName={'About me - Terminal'} onClose={onClose}/>
                <div className='flex flex-row gap-4 p-1'>
                    {["File", "Edit", "Format", "View", "Help"].map((items, index) => (
                        <p key={index} className='cursor-not-allowed'>{items}</p>
                    ))}
                </div>
                <div className="flex flex-col bg-black text-green-500 w-full h-full p-2 text-lg gap-3">
                    <div className="text">
                        <div className="content">{displayedText}</div>
                        <div className="dash"></div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}
