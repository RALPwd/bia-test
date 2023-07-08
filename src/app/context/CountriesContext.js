'use client'

import React, { useState, useEffect, createContext } from "react";

const CountriesContext = createContext()

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch('https://restcountries.com/v3.1/all')
      const countries = await data.json()
      setCountries(countries)
    }

    fetchCountries()
  }, [])

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  )
}

const useCountries = () => {
  const context = React.useContext(CountriesContext)
  if (context === undefined) {
    throw new Error('useCountries must be used within a CountriesProvider')
  }
  return context
}

export { CountriesContext, CountriesProvider, useCountries }