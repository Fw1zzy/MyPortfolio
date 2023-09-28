import React from 'react';
import { profile1 } from '../assets';

const Home = () => {
  return (
    <section className="w-full px-6 flex justify-between items-center max-md:flex-col" id="home">
      <div className="flex flex-col mt-20">
      <h1 className="font-poppins text-[3.8rem] font-bold color_blue leading-[4.5rem] dark:text-sky-400 ">Emmanuel Pascua.</h1>
        <p className="font-poppins textcolor2 dark:text-slate-100">Software Development Student | Passionate about Innovative Solutions</p>
        <br/>
        <p className="font-poppins textcolor2 dark:text-slate-100">
            I'm a dedicated software development student with a passion for creating impactful solutions.I thrive in collaborative environments and excel at problem-solving. 
            Seeking opportunities to learn, grow, and contribute to real-world projects. Let's connect and build innovative software together.
        </p>
        <div>
        <a href="mailto:emmanuelpascua@gmail.com" target="_blank" >
        <button className="button my-10 " type="button">
          Get in touch
        </button>
        </a>
        
        </div>
      </div>

      <div className="max-ss:hidden">
        <img src={profile1} className="w-[1600px] h-[550px] py-10 px-10 home-img max-md:px-20" />
      </div>
    </section>
  )
}

export default Home
