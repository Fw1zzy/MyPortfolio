import React from 'react'
import { profile2 } from '../assets'
import { aboutMe } from '../constant'

const About = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center " id="about">
      <div className="mt-10 flex justify-center items-center">
        <h2 className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">About me</h2>
      </div>

      <div className="flex flex-row justify-center items-center mt-5 max-md:flex-col">
        <div className="flex mr-10 max-ss:hidden">
        <img src={profile2} className="w-full h-full my-10 flex justify-center items-center rounded-[2rem] " />
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <p className="font-poppins textcolor2 text-justify max-w-[100rem] dark:text-slate-100">
          Highly motivated 18-year-old software developer based in the Philippines. Exploring the field drives me to constantly seek new opportunities to grow and maximize my skills. I am particularly interested in building challenging web applications for businesses and entities and am committed to delivering high-quality solutions and experience to my clients.
          </p>

          <ul className="list-none flex flex-row justify-center items-center gap-5 mt-10 text-center">
            {aboutMe.map((about ) => (
              <li className={`font-poppins font-semibold cursor-pointer flex flex-col justify-center items-center text=[18px] textcolor1`} >
                <h2 className="font-poppins text-[2.8rem] font-bold color_blue dark:text-sky-400">{about.title}</h2>
                <p className='dark:text-slate-100'>{about.context}</p>
              </li>
            ))}
          </ul>
          
          <a href="https://drive.google.com/u/0/uc?id=1Mn2kTJ_Q8c_xTdnPHXqQxGKzvyojEyyD&export=download" download="Resume of Emmanuel Pascua.pdf" target="_blank" >
          <button className="button mb-20 mt-10 max-xs:items items-start">
            Download CV
          </button>
        </a>
          
        </div>

      </div>

      

    </section>
  )
}

export default About
