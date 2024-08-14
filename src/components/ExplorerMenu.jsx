import React from 'react'

export default function ExplorerMenu() {
    const menuItems = ["File", "Edit", "Format", "View", "Help"]

    return (
    <div>
        <ul className='flex flex-row explorerMenuBorder'>
        {menuItems.map((item, index) => {
            return <li className='cursor-not-allowed px-1 cardAndTableBorderHover cardAndTableBorderExplorerMenu text-sm' key={index}>{item}</li>
        })}
        </ul>
    </div>
  )
}
