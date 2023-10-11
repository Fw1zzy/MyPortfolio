import React from 'react'
import { mySkills } from '../constant'


const Skills = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center mb-20" id="skills">

 {/*  <div className="mt-5 flex justify-center items-center">
         <h2 className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">Skills</h2>
     </div> */}
      <div className="mt-[4rem] mb-4 flex justify-center items-center">
         <h4 className="font-poppins text-[2rem] font-bold color_blue dark:text-sky-400">TECH STACK</h4>
      </div>

      <div className="w-auto h-auto">
          <ul className="grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2 text-center py-3 px-6">
            {mySkills.map(( skill ) => (
              <li className="flex flex-row justify-center items-center icon cursor-pointer mx-5 my-1 max-md:flex-col icon_container max-ss:w-[150px]">
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
