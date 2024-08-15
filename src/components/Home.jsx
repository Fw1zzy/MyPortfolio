import React from 'react';
import { profile1 } from '../assets';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ staggerChildren: 0.3, duration: 1.5 }}
    className="w-full px-6 flex justify-between items-center max-lg:flex-col" id="home">
      <div className="flex flex-col mt-20 max-w-full mx-auto">
        <h1 className="font-poppins text-[3.8rem] font-bold color_blue leading-[4rem] max-xs:leading-[3rem] max-xs:text-[3rem] dark:text-sky-400 ">Emmanuel Pascua.</h1>
        <p className="font-poppins textcolor2 dark:text-slate-100">Web Developer | Passionate about Innovative Solutions</p>
        <br/>
        <p className="font-poppins textcolor2 text-justify max-xs:text-[14px] dark:text-slate-100">
            I'm a dedicated Web Developer with a passion for creating impactful solutions. I thrive in collaborative environments and excel at problem-solving. Seeking opportunities to learn, grow, and contribute to real-world projects. Let's connect and build innovative software together.
        </p>
        <div>
        <a href="mailto:emmanuelpascua@gmail.com" target="_blank" >
        <button className="button my-10 " type="button">
          Get in touch
        </button>
        </a>
        
        </div>
      </div>

      <div className="max-w-full w-auto max-ss:hidden">
        <img src={profile1} className="max-w-lg py-10 px-10 home-img" />
      </div>
    </motion.section>
  )
}

export default Home
