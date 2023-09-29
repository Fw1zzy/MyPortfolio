import React from 'react'
import { socialMedia } from '../constant'

const Footer = () => {
  return (
    <section className=" w-full mt-[10rem] flex flex-col">
      <div className="flex flex-row items-center justify-center">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] object-contain cursor-pointer icon ${
              index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <div className="mb-20 mt-2">
      <a href=" " className="text-center">
          <p className="font-poppins dark:text-slate-100">
          © 2023 Emmanuel Pascua. All Rights Reserved.
          </p>
      </a>
      </div>
    </section>
  )
}

export default Footer
