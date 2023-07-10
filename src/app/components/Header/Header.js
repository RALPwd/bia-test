'use client'

import React, { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import './header.scss'
import { BsSun,  BsMoonFill } from 'react-icons/bs'

const header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={`header header-${theme}`}>
      <h1>Where in the world?</h1>

      <button onClick={toggleTheme} className={`header__button header__button-${theme}`}>{
        theme === 'light' ? <><BsSun/> &nbsp; Dark Mode</> : <><BsMoonFill/> &nbsp; Light Mode</>
      }</button>
    </header>
  )
}

export default header