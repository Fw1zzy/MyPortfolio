

const Footer = () => {
  return (
    <section className=" w-full mt-[10rem] flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <ul className="flex justify-start items-center gap-5">
              <a target="_blank " href="https://www.instagram.com/call_me.emman/" aria-label="source code " className="text-[1.8rem] text-[#444] social_icon dark:text-slate-100">
                    <i aria-hidden="true" class="fab fa-instagram"></i>
                </a>
                <a target="_blank " href="https://www.facebook.com/emmanuel.pascua.161/" aria-label="source code " className="text-[1.8rem] text-[#444] social_icon dark:text-slate-100">
                    <i aria-hidden="true" class="fab fa-facebook"></i>
                </a>
                <a target="_blank " href="https://github.com/Fw1zzy" aria-label="source code " className="text-[1.8rem] text-[#444] social_icon dark:text-slate-100">
                    <i aria-hidden="true" class="fab fa-github"></i>
                </a>
                <a target="_blank " href="https://www.linkedin.com/in/emmanuelpascua/" aria-label="source code " className="text-[1.8rem] text-[#444] social_icon dark:text-slate-100">
                    <i aria-hidden="true" class="fab fa-linkedin"></i>
                </a>
            </ul>
      </div>
      <div className="mb-20 mt-2">
      <a href=" " className="text-center">
          <p className="font-poppins dark:text-slate-100">
          © 2023 Emmanuel Pascua. All Rights Reserved.
          </p>
      </a>
      </div>
    </section>
  )
}

export default Footer
