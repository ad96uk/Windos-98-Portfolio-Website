import React from 'react'
import WindowTitleBar from './WindowTitleBar'
import Draggable from 'react-draggable'
import Image from 'next/image'
import ExplorerMenu from './ExplorerMenu'

export default function DatacraftTxt({onClose, onClick, style}) {
    
    return (
    <Draggable bounds="parent">
    <div className='absolute notepad-window flex flex-col w-[850px] h-[500px] cardAndTableBorder box-shadow bg-customGrey p-1 '
            onClick={onClick}
            style={style}>
        <WindowTitleBar icon={'/notepad-1.png'} folderName={'datacraft.store - Notepad'} onClose={onClose}/>
        <ExplorerMenu />
        <div className='flex flex-col bg-white w-full h-full p-2 text-lg gap-3 overflow-scroll'>
            <p className='text-slate-700'><b className='text-black'>Project Objective: </b>Transfer the design from Figma into WordPress without using child themes or page builders. Ensure that all design details and elements are accurately reflected and make the site fully responsive for mobile devices.
            </p>
            <p><b>Website link: </b><a target="_blank" rel="noopener noreferrer" className='text-blue-500' href='https://datacraft.store'>datacraft.store</a></p>
            <b>Results:</b>
            <Image src={'/datacraft.png'} width={800} height={100} alt='logo' />
        </div>
    </div>
    </Draggable>
  )
}
