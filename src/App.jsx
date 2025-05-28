import React from 'react';
import styles from './styles';
import { useState, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";


import { Home, Navbar, About, Projects, Skills, Contact, Footer, Themes, Loader} from './components';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, []);

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("floatingButton", {"calLink":"emmanuel-pascua-cbvi5s/15min","buttonColor":"#38bdf8"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

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
