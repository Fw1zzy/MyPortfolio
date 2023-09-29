import React from 'react'
import { myProjects } from '../constant'

const Projects = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center" id="projects">
       <div className="mt-5 flex justify-center items-center">
        <h2 className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">Projects</h2>
      </div>
      <div className="project-grid flex justify-center items-center">
        {myProjects.map((project, index) => (
            <div className="project icon">
              <h5 className="text-[1.3rem] font-poppins font-bold textcolor1 dark:text-slate-100">{project.title}</h5>
              <p className="font-poppins textcolor2 dark:text-slate-100">{project.context}</p>
              <ul className="flex justify-around items-center my-4">
              <li className="font-poppins font-semibold textcolor1 dark:text-slate-100">{project.language1}</li>
              <li className="font-poppins font-semibold textcolor1 dark:text-slate-100">{project.language2}</li>
              <li className="font-poppins font-semibold textcolor1 dark:text-slate-100">{project.language3}</li>
              </ul>
              <ul className="flex justify-start items-center gap-5">
              <a target="_blank " href={project.link1} aria-label="source code " className="text-[2rem] icon dark:text-sky-400">
                    <i aria-hidden="true" class="fab fa-github"></i>
                </a>
              <a target="_blank " href={project.link2} aria-label="live preview " className="text-[1.8rem] icon dark:text-sky-400">
                    <i aria-hidden="true" class="fas fa-external-link-alt "></i>
                </a>
              </ul>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
