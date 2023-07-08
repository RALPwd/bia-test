'use client'

import React from "react";
import { useCountries } from "../context/CountriesContext";
import CountryCard from "./CountryCard";

const Countries = () => {
  const countries = useCountries()

  return (
    <div>
      {countries.map((country, index) => {
        return <CountryCard key={index} country={country} />
      })}
    </div>
  )
}

export default Countries