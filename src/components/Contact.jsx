import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-between items-center" id="contact">
      <div className="mt-10 flex justify-center items-center">
        <motion.h2 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.3, duration: 1 }}          
        className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">Contact</motion.h2>
      </div>

      <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center text-center">
        <p className="font-poppins max-w-[880px] my-10 dark:text-slate-100">
            Please feel free to contact me by email or schedule a free consultation.
              I look forward to hearing from you and discussing how we can work together to bring your ideas to life.
        </p>
        <a href="mailto:emmanuelpascua@gmail.com" target="_blank" >
        <button className="button max-xs:text-[14px]" type='submit'>
          emmanuelpascua.ph@gmail.com
        </button>
        </a>
        </motion.div>
    </section>
  )
}

export default Contact
