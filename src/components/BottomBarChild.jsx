import React from 'react'
import Image from 'next/image'

export default function BottomBarChild({icon, appName, action}) {
  return (
    <button
    onClick={action}
    className='flex flex-row p-[5px] w-[200px] justify-start items-center gap-1 cardAndTableBorder box-shadow ml-1 cursor-pointer'>
        <Image src={icon} width={20} height={20} alt="app-icon"/> 
        <p className='text-black'>{appName}</p>
    </button>
  )
}