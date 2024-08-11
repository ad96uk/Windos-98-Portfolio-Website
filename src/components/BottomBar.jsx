'use client'

import React, { useState, useEffect } from 'react'

export default function BottomMenu({ showMenu }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const updateTime = () => {
            setCurrentTime(new Date());
        };
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    function textTime(date) {
        const hours = date.getHours();
        return hours < 12 ? 'AM' : 'PM';
    }

    if (!isClient) {
        return null;
    }

    return (
        <div className='flex flex-row h-[60px] bg-[#cfd0cf] cardAndTableBorder box-shadow py-1 px-1 gap-4 justify-between'>
            <div className='flex flex-row gap-[4px]'>
                <button onClick={showMenu} className='cardAndTableBorder btn-box-shadow py-4 px-8 cursor-pointer font-bold text-lg bg-[#cfd0cf] leading-3'>Menu</button>
                <div className='bar-divider'></div>
            </div>
            <div></div>
            <div className='flex flex-row gap-[4px] pr-4'>
                <div className='bar-divider'></div>
                <div className='flex items-center gap-2'>
                    <p className='text-lg pl-4'>{formatTime(currentTime)}</p>
                    <p>{textTime(currentTime)}</p>
                </div>
            </div>
        </div>
    )
}
