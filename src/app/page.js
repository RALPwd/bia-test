'use client'

import React from 'react'
import './page.scss'
import Header from './components/Header/Header'
import RenderCountries from './components/RenderCountries'
import { useTheme } from './context/ThemeContext'

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className={`main main-${theme}`}>
      <Header></Header>
      <RenderCountries></RenderCountries>
    </main>
  )
}
