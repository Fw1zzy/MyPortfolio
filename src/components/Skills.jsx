import React from 'react'
import { mySkills } from '../constant'

const Skills = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center mb-20" id="skills">
       <div className="mt-20 flex justify-center items-center">
          <h2 className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">Skills</h2>
        </div>
        <div className="mt-[4rem] mb-4 flex justify-center items-center">
          <h4 className="font-poppins text-[2rem] font-bold color_blue dark:text-sky-400">TECH STACK</h4>
        </div>
      <div className="w-auto h-auto border-solid border-4 rounded-xl border-sky-500">
        <ul className="grid grid-cols-3 gap-3 text-center py-4 px-8">
          {mySkills.map(( skill ) => (
            <li className="flex flex-row justify-start items-center icon cursor-pointer mx-8 my-1 max-sm:flex-col">
              <img
                src={skill.icon}
                className="w-14 h-14 m-4"
              />
              <p className="font-poppins font-semibold textcolor1 dark:text-slate-100">{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  )
}

export default Skills
