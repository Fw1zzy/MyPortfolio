import React from 'react'
import { mySkills } from '../constant'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center mb-20" id="skills">

      <div className="mt-[4rem] mb-4 flex justify-center items-center">
         <motion.h4 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.3, duration: 1 }}    
         className="font-poppins text-[2rem] font-bold color_blue dark:text-sky-400">TECH STACK</motion.h4>
      </div>
       <div className="w-auto h-auto">
          <ul className="grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2 text-center py-3 px-6 max-xs:p-0">
            {mySkills.map(( skill ) => (
              <li className="flex flex-row justify-center items-center icon cursor-pointer mx-2 my-1 max-md:flex-col icon_container max-ss:w-[150px] max-xs:p-[1rem]">
                <img
                  src={skill.icon}
                  className="w-10 h-10 m-1"
                />
                <p className="font-poppins font-semibold textcolor1 dark:text-slate-100 max-ss:text-[1rem]">{skill.title}</p>
              </li>
            ))}
          </ul>
        </div>     
      
    </section>
  )
}

export default Skills
