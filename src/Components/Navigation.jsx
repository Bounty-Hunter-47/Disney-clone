import React, { useState } from 'react'
import logo from "./../../public/Assets/Images/logo.png"
import profile from "./../../public/Assets/Images/profile.png"
import Menu from './Menu';
import { BsThreeDotsVertical } from "react-icons/bs";
import menuDetails from '../Static Data/menuData.js';

const Navigation = () => {

  const [showExtraMenu, setShowExtraMenu] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between px-4 py-4'>
        <div className='flex gap-x-4' >
          <img className='w-[110px] cursor-pointer' src={logo} alt="" />

          {/* show in large device hide in small devices */}
          <div className='hidden lg:flex items-center gap-x-8'>
            {
              menuDetails.map((menu, index) => (
                <Menu key={index} name={menu.name.toUpperCase()} Icon={menu.Icon} />
              ))
            }
          </div>

          {/* show in medium device hide in small and large devices */}
          <div className='hidden lg:hidden md:flex items-center gap-x-8'>
            {
              menuDetails.map((menu, index) => (
                <Menu key={index} name={''} Icon={menu.Icon} />
              ))
            }
          </div>

          {/* show in small device hide in medium and large devices */}
          <div className='md:hidden flex items-center gap-x-4 z-50'>
            {
              menuDetails.map((menu, index) => index < 3 && (
                <Menu key={index} name={''} Icon={menu.Icon} />
              ))
            }
            <div className='relative'>
              <BsThreeDotsVertical className=' cursor-pointer' onClick={() => {
                setShowExtraMenu((prev) => !prev)
              }} fill='white' size={17} />
              {
                showExtraMenu && <div className=' absolute top-10 left-0 bg-secondary px-5 py-5 flex flex-col gap-y-2 border-gray-500 border-[1px] rounded-[5px]'>
                  {
                    menuDetails.map((menu, index) => index > 2 && (
                      <Menu key={index} name={menu.name.toUpperCase()} Icon={menu.Icon} />
                    ))
                  }
                </div>
              }
            </div>
          </div>

        </div>
        <img src={profile} alt="profile" className='w-[40px] cursor-pointer' />
      </nav >
    </>
  )
}

export default Navigation
