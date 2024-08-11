import React from 'react'
import Image from 'next/image'

export default function Icon({image, text, handleClick, className=''}) {
  return (
    <div onClick={handleClick} className={`flex flex-col cursor-pointer items-center w-20 h-20 ${className}`}>
        <Image src={image} alt="portfolio" width="40" height="40"/>
        <p className='text-center leading-4 pt-3'>{text}</p>
    </div>
  )
}
