import React from 'react'
import styles from './styles'

import { Home, Navbar, About, Projects, Skills, Contact, Footer, Themes} from './components';

const App = () => {
  return (
    <div className="body-color w-full dark:bg-[#131a32]">
      <div className={`${styles.marginX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
          <Navbar />
          <Themes />
        </div>
      </div>

      <div className={`${styles.marginX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`${styles.marginX} ${styles.flexCenter} flex-col`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default App
