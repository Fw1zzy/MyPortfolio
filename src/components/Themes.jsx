import React from 'react'

const Themes = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('class', 'dark')
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('class', 'light')
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode()
  }

  return (
    <div>
      <label for="theme" class="theme">
        <span class="theme__toggle-wrap">
          <input 
            id="theme"
            class="theme__toggle" 
            type="checkbox" 
            onChange={toggleTheme}
           />
          <span class="theme__fill"></span>
          <span class="theme__icon">
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
          </span>
        </span>
      </label>
    </div>
  )
}

export default Themes
