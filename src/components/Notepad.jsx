import React from 'react'
import WindowTitleBar from './WindowTitleBar'
import Draggable from 'react-draggable'
import Image from 'next/image'
import ExplorerMenu from './ExplorerMenu'

export default function Notepad({onClose, onClick, style}) {
    
    return (
    <Draggable bounds="parent">
    <div className='absolute notepad-window flex flex-col w-[850px] h-[500px] cardAndTableBorder box-shadow bg-customGrey p-1 '
            onClick={onClick}
            style={style}>
        <WindowTitleBar icon={'/notepad-1.png'} folderName={'vdphoto.co.uk - Notepad'} onClose={onClose}/>
        <ExplorerMenu />
        <div className='flex flex-col bg-white w-full h-full p-2 text-lg gap-3 overflow-scroll'>
            <p className='text-slate-700'><b className='text-black'>Project Objective: </b>Convert a Figma design into a responsive WordPress website. Implement custom CSS and JavaScript to ensure design accuracy and functionality. Optimise the website for performance and SEO, maintaining strong attention to detail and a keen eye for design.
            </p>
            <p><b>Website link: </b><a target="_blank" rel="noopener noreferrer" className='text-blue-500' href='https://vdphoto.co.uk/'>vdphoto.co.uk</a></p>
            <b>Tech stack:</b>
            <Image src={'/vd_stack.png'} width={226} height={113} alt='logo' />
            <b>Results:</b>
            <Image src={'/vd_screen.png'} width={800} height={100} alt='logo' />
        </div>
    </div>
    </Draggable>
  )
}
