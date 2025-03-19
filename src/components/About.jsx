import React from 'react'
import { profile2, CV } from '../assets'
import { aboutMe } from '../constant'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center " id="about">
      <div className="mt-10 flex justify-center items-center">
        <motion.h2 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.3, duration: 1 }}            
        className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">About me</motion.h2>
      </div>

      <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-row justify-center items-center max-w-full m-auto pt-5 max-lg:flex-col">
        <div className="flex max-w-full mx-auto max-ss:hidden">
        <img src={profile2} className="max-w-lg mx-auto my-10 flex justify-center items-center rounded-[2rem] " />
        </div>

        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center mt-10 max-w-full mx-auto">
          <p className="font-poppins textcolor2 text-justify ml-10 max-w-full m-auto max-xs:text-[14px] dark:text-slate-100 max-lg:ml-0">
          Highly motivated Software Developer based in the Philippines. Exploring the field drives me to constantly seek new opportunities to grow and maximize my skills. I am particularly interested in building challenging web applications for businesses and entities and am committed to delivering high-quality solutions and experience to my clients.
          </p>

          <ul className="list-none flex flex-row justify-center items-center gap-5 mt-10 text-center">
            {aboutMe.map(( about ) => (
              <li className={`font-poppins font-semiboldflex flex-col justify-center items-center text=[18px] textcolor1`} >
                <h2 className="font-poppins text-[2.8rem] max-xs:text-[2.4rem] font-bold color_blue dark:text-sky-400">{about.title}</h2>
                <p className='dark:text-slate-100'>{about.context}</p>
              </li>
            ))}
          </ul>
          
          <a href={CV} target="_blank" >
          <button className="button mb-20 mt-10 max-xs:items items-start">
            Download CV
          </button>
        </a>
          
        </motion.div>

      </motion.div>

      

    </section>
  )
}

export default About
