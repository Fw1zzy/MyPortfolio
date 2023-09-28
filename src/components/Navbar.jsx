import React from 'react'
import { useState } from 'react';
import { menu, close } from '../assets';
import { navLinks, socialMedia } from '../constant';
import Themes from './Themes';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full py-6 flex justify-between items-center">
      <div className="flex flex-row items-center">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[25px] h-[25px] object-contain cursor-pointer icon text-color1 ${
              index !== socialMedia.length - 1 ? "mr-1" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

      <ul className="list-none md:flex hidden justify-end items-center flex-1 mr-10">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-semibold cursor-pointer text=[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} textcolor1`}
        >
          <a href={nav.id} className="nav-icon dark:text-slate-100">
            {nav.title}
          </a>
        </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center z-[99]">
        <img src={toggle ? close : menu} 
          alt="menu"
          className="w-[30px] h-[30px] object-contain "
          onClick={() => setToggle((prev => !prev))}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} 
      bg-slate-200 absolute top-0 right-0 left-0 p-7 my-2 min-w-[140px] rounded-md sidebar flex-col z-[10]
      `}> 
        <ul className="list-none flex flex-col justify-center items-center mt-[3rem]">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text=[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} textcolor1`}
                >
                  <a href={nav.id} className="nav-icon">
                    {nav.title}
                  </a>
                </li>
              ))}
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
