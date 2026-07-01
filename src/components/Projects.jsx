import React, { useCallback, useEffect, useRef, useState } from 'react'
import { myProjects } from '../constant'
import { motion } from 'framer-motion'
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

  return (
    <section className="w-full px-6 flex flex-col justify-between items-center" id="projects">
      {/* Section Heading */}
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

      {/* Carousel Wrapper */}
      <motion.div
        className="projects-carousel-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Embla Viewport */}
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
                  {/* Image */}
                  <div className="project-img-wrapper">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={1280}
                      height={720}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      className="project-img"
                    />
                    {/* Overlay on hover */}
                    <div className="project-img-overlay" aria-hidden="true" />
                  </div>

                  {/* Card Content */}
                  <div className="project-card-body">
                    <h5 className="project-card-title font-poppins">{project.title}</h5>
                    <p className="project-card-desc font-poppins">{project.context}</p>

                    {/* Tech badges */}
                    <ul className="project-card-tags" aria-label="Technologies used">
                      {[project.language1, project.language2, project.language3]
                        .filter(Boolean)
                        .filter(t => t.trim())
                        .map((tech, i) => (
                          <li key={i} className="project-tag font-poppins">{tech}</li>
                        ))}
                    </ul>

                    {/* Links */}
                    <ul className="project-card-links" aria-label="Project links">
                      {project.link1 && (
                        <li>
                          <a
                            href={project.link1}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.title} on GitHub`}
                            className="project-link-btn icon"
                          >
                            <i aria-hidden="true" className={project.icon1}></i>
                            <span className="project-link-label font-poppins">Code</span>
                          </a>
                        </li>
                      )}
                      {project.link2 && (
                        <li>
                          <a
                            href={project.link2}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live preview of ${project.title}`}
                            className="project-link-btn icon"
                          >
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

        {/* Arrow navigation */}
        <button
          id="carousel-prev-btn"
          className="carousel-btn carousel-btn--prev"
          onClick={scrollPrev}
          aria-label="Previous project"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          id="carousel-next-btn"
          className="carousel-btn carousel-btn--next"
          onClick={scrollNext}
          aria-label="Next project"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dot indicators */}
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
  )
}

export default Projects
