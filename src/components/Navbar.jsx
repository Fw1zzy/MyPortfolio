import React from 'react'
import { useState } from 'react';
import { menu, close } from '../assets';
import { navLinks } from '../constant';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full py-6 flex justify-between items-center">
      <div className="flex flex-row items-center">
          <ul className="flex justify-start items-center gap-1">
            <a target="_blank " href="https://www.instagram.com/call_me.emman/" aria-label="source code " className="text-[1.6rem] text-[#444] social_icon dark:text-slate-100">
                  <i aria-hidden="true" class="fab fa-instagram"></i>
              </a>
              <a target="_blank " href="https://www.facebook.com/emmanuel.pascua.161/" aria-label="source code " className="text-[1.6rem] text-[#444] social_icon dark:text-slate-100">
                  <i aria-hidden="true" class="fab fa-facebook"></i>
              </a>
              <a target="_blank " href="https://github.com/Fw1zzy" aria-label="source code " className="text-[1.6rem] text-[#444] social_icon dark:text-slate-100">
                  <i aria-hidden="true" class="fab fa-github"></i>
              </a>
              <a target="_blank " href="https://www.linkedin.com/in/emmanuelpascua/" aria-label="source code " className="text-[1.6rem] text-[#444] social_icon dark:text-slate-100">
                  <i aria-hidden="true" class="fab fa-linkedin"></i>
              </a>
          </ul>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-semibold cursor-pointer text=[18px] dark:text-slate-100 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} textcolor1`}
        >
          <a href={nav.id} className="nav-icon">
            {nav.title}
          </a>
        </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[99]">
        <img src={toggle ? close : menu} 
          alt="menu"
          className="w-[30px] h-[30px] object-contain "
          onClick={() => setToggle((prev => !prev))}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} absolute top-0 right-0 left-0 p-7 my-2 min-w-[140px] bg-slate-100 dark:bg-[#131a32] rounded-md sidebar flex-col z-[10]
      `}> 
        <ul className="list-none flex flex-col justify-center items-center mt-[3rem]">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text=[18px] dark:text-slate-100 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} textcolor1`}
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
