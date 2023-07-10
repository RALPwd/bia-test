'use client'

import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import useSearchAndFilterCountry from "../../hooks/UseSearchAndFilterCountry";
import ActionBar from "../ActionBar/ActionBar";
import './Countries.scss'

const Countries = () => {
  const [filteredCountries, query, setQuery, regionFilter, setRegionFilter] = useSearchAndFilterCountry()

  return (
    <>
    <ActionBar mode={'queryBar'} query={query} setQuery={setQuery} regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
    <div className={`countriescontainer`}>
      {filteredCountries.map((country, index) => {
        return <CountryCard key={index} country={country} />
      })}
    </div>
    </>
  )
}

export default Countries