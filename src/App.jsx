import React from 'react';
import styles from './styles';
import { useState, useEffect } from 'react';

import { Home, Navbar, About, Projects, Skills, Contact, Footer, Themes, Loader} from './components';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },5000)
  }, []);
  return (
    <main className="w-full dark:bg-[#131a32]">
      {
        loading ?

      <Loader 
      loading={loading}
      />
        :
    <>
      <div className='main'>
        <div className='gradient' />
      </div>

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
      </>
      }
    </main>
  )
}

export default App
