import React from 'react'

const Contact = () => {
  return (
    <section  className="w-full px-6 flex flex-col justify-between items-center h-[50vh]" id="contact">
      <div className="mt-20 flex justify-center items-center">
        <h2 className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100">Contact</h2>
      </div>

      <div class="contact-grid">
        <p className="font-poppins max-w-[880px] my-10 dark:text-slate-100">
            Please feel free to contact me by email or schedule a free consultation.
              I look forward to hearing from you and discussing how we can work together to bring your ideas to life.
        </p>
        <a href="mailto:emmanuelpascua@gmail.com" target="_blank" >
        <button className="button" type='submit'>
          emmanuelpascua.ph@gmail.com
        </button>
        </a>
        </div>
    </section>
  )
}

export default Contact
