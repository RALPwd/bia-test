import React from 'react'
import styles from './page.module.css'
import Header from './components/header'
import ActionBar from './components/actionBar'
import RenderCountries from './components/renderCountries'
import Country from './components/Country'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <ActionBar></ActionBar>
      <RenderCountries></RenderCountries>
    </main>
  )
}
