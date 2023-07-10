'use client'

import React, { createContext, useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const cachedTheme = Cookies.get('theme')
    return cachedTheme ? cachedTheme : 'light'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    Cookies.set('theme', newTheme)
  }

  useEffect(() => {
    const cachedTheme = Cookies.get('theme')
    if (cachedTheme && cachedTheme !== theme) {
      setTheme(cachedTheme)
    }
  }, [theme])

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