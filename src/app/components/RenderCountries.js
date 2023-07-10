import React from 'react'
import { CountriesProvider } from '../context/CountriesContext'
import Countries from './Countries/Countries'

const renderCountries = () => {

  return (
    <CountriesProvider>
      <Countries />
    </CountriesProvider>
  )

}

export default renderCountries