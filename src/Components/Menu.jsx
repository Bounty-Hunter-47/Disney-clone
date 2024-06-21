import React from 'react'

const Menu = ({ name, Icon }) => {
  return (
    <div className='flex gap-x-2 items-center group cursor-pointer'>
      <Icon fill='white' size={17} />
      <h2 className='font-bold text-[0.8rem] text-white group-hover:underline underline-offset-8'>{name}</h2>
    </div>
  )
}

export default Menu
