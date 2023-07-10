'use client'

import React, { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider }