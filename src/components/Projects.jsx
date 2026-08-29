import React, { useCallback, useEffect, useRef, useState } from 'react'
import { myProjects } from '../constant'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Projects = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 820px)': { slidesToScroll: 1 },
      },
    },
    [autoplayRef.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [activeProject, setActiveProject] = useState(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo  = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi])

  const onInit = useCallback((api) => setScrollSnaps(api.scrollSnapList()), [])
  const onSelect = useCallback((api) => setSelectedIndex(api.selectedScrollSnap()), [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setActiveProject(null) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  const tags = (p) =>
    [p.language1, p.language2, p.language3].filter(Boolean).filter(t => t.trim())

  return (
    <>
      <section className="w-full px-6 flex flex-col justify-between items-center" id="projects">
        <div className="mt-[7rem] flex justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.3, duration: 1 }}
            className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100"
          >
            Projects
          </motion.h2>
        </div>

        <motion.div
          className="projects-carousel-wrapper"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="embla" ref={emblaRef} aria-label="Projects carousel">
            <div className="embla__container">
              {myProjects.map((project, index) => (
                <div
                  key={index}
                  className="embla__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Project ${index + 1} of ${myProjects.length}: ${project.title}`}
                >
                  <div className="project-card">
                    <div
                      className="project-img-wrapper project-img-clickable"
                      onClick={() => setActiveProject(project)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Expand ${project.title}`}
                      onKeyDown={(e) => e.key === 'Enter' && setActiveProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        width={1280}
                        height={720}
                        loading={index < 2 ? 'eager' : 'lazy'}
                        className="project-img"
                      />
                      <div className="project-img-overlay" aria-hidden="true" />
                      <div className="project-expand-hint" aria-hidden="true">
                        <i className="fas fa-expand-alt" />
                      </div>
                    </div>

                    <div className="project-card-body">
                      <h5 className="project-card-title font-poppins">{project.title}</h5>
                      <p className="project-card-desc font-poppins">{project.context}</p>
                      <ul className="project-card-tags" aria-label="Technologies used">
                        {tags(project).map((tech, i) => (
                          <li key={i} className="project-tag font-poppins">{tech}</li>
                        ))}
                      </ul>
                      <ul className="project-card-links" aria-label="Project links">
                        {project.link1 && (
                          <li>
                            <a href={project.link1} target="_blank" rel="noopener noreferrer"
                              aria-label={`Source code for ${project.title}`}
                              className="project-link-btn icon">
                              <i aria-hidden="true" className={project.icon1}></i>
                              <span className="project-link-label font-poppins">Code</span>
                            </a>
                          </li>
                        )}
                        {project.link2 && (
                          <li>
                            <a href={project.link2} target="_blank" rel="noopener noreferrer"
                              aria-label={`Live preview of ${project.title}`}
                              className="project-link-btn icon">
                              <i aria-hidden="true" className={project.icon2}></i>
                              <span className="project-link-label font-poppins">Live</span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button id="carousel-prev-btn" className="carousel-btn carousel-btn--prev" onClick={scrollPrev} aria-label="Previous project">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button id="carousel-next-btn" className="carousel-btn carousel-btn--next" onClick={scrollNext} aria-label="Next project">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                id={`carousel-dot-${i}`}
                role="tab"
                aria-selected={i === selectedIndex}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`carousel-dot${i === selectedIndex ? ' carousel-dot--active' : ''}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Expanded Project Panel ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveProject(null)}
            aria-hidden="true"
          >
            {/* The panel itself — stopPropagation so clicking it doesn't close */}
            <motion.div
              className="panel-container"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={`Expanded view of ${activeProject.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="panel-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close expanded view"
              >
                <i className="fas fa-times" />
              </button>

              {/* Left — image */}
              <div className="panel-img-col">
                <img
                  src={activeProject.image}
                  alt={`Screenshot of ${activeProject.title}`}
                  className="panel-img"
                />
              </div>

              {/* Right — details */}
              <div className="panel-info-col">
                {/* Meta row */}
                <div className="panel-meta font-poppins">
                  {activeProject.details?.role && (
                    <span className="panel-meta-item">
                      <i className="fas fa-user-tie" aria-hidden="true" />
                      {activeProject.details.role}
                    </span>
                  )}
                  {activeProject.details?.year && (
                    <span className="panel-meta-item">
                      <i className="fas fa-calendar-alt" aria-hidden="true" />
                      {activeProject.details.year}
                    </span>
                  )}
                </div>

                <h2 className="panel-title font-poppins">{activeProject.title}</h2>

                <p className="panel-long-desc font-poppins">
                  {activeProject.details?.longDesc || activeProject.context}
                </p>

                {/* Highlights */}
                {activeProject.details?.highlights?.length > 0 && (
                  <ul className="panel-highlights">
                    {activeProject.details.highlights.map((h, i) => (
                      <li key={i} className="panel-highlight-item font-poppins">
                        <span className="panel-highlight-dot" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                <ul className="project-card-tags panel-tags" aria-label="Technologies used">
                  {tags(activeProject).map((tech, i) => (
                    <li key={i} className="project-tag font-poppins">{tech}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="panel-links">
                  {activeProject.link1 && (
                    <a href={activeProject.link1} target="_blank" rel="noopener noreferrer"
                      className="project-link-btn icon font-poppins">
                      <i aria-hidden="true" className={activeProject.icon1}></i>
                      <span className="project-link-label">Code</span>
                    </a>
                  )}
                  {activeProject.link2 && (
                    <a href={activeProject.link2} target="_blank" rel="noopener noreferrer"
                      className="project-link-btn icon font-poppins">
                      <i aria-hidden="true" className={activeProject.icon2}></i>
                      <span className="project-link-label">Live Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects
