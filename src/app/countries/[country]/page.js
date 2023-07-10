"use client"

import React, { useEffect } from 'react'
import '../../page.scss'
import Country from "@/app/components/Country/Country";
import Header from '@/app/components/Header/Header';
import ActionBar from '@/app/components/ActionBar/ActionBar';
import { useTheme } from '@/app/context/ThemeContext'

const Countries = ({ params }) => {
  const { theme } = useTheme()

  return (
    <main className={`main main-${theme}`}>
      <Header></Header>
      <ActionBar mode={'back'} />
      <Country country={params.country} />
    </main>
  )
}

export default Countries