import React from 'react'

export default function AddressBar({route}) {
  return (
    <div className='flex items-center justify-between w-full h-8 cardAndTableBorder bg-customGrey px-1'>
        <p className='w-fit pr-2 '>Address</p>
        <p className='bg-white address-bar px-2 w-full items-center py-[1.5px] '>C:\{route}</p>
    </div>
  )
}
