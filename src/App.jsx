import React from 'react'
import styles from './styles'

import { Home, Navbar, About, Projects, Skills, Contact, Footer, Themes} from './components';

const App = () => {
  return (
    <div className="body-color w-fullr">
      <div className={`${styles.marginX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex justify-center items-center`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.marginX} flex flex-col justify-center items-center`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`${styles.marginX} flex flex-col justify-center items-center`}>
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