'use client'

import React, { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import './header.scss'
import { BsSun,  BsMoonFill } from 'react-icons/bs'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={`header header-${theme}`}>
      <h1>Where in the world?</h1>

      <button onClick={toggleTheme} className={`header__button header__button-${theme}`}>{
        theme === 'dark' ? <><BsSun/> &nbsp; Light Mode</> : <><BsMoonFill/> &nbsp; Dark Mode</>
      }</button>
    </header>
  )
}

export default Header