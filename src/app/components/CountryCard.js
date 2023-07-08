import Link from "next/link";
import React from "react";

const CountryCard = ({ country }) => {
  return (
    <Link href={`/countries/${country.cca3}`}>
      <div style={{maxWidth: "400px"}}>
        <img src={country.flags.svg} alt={country.flags.alt} style={{width: "100%"}}/>
        <h3>{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </Link>
  )
}

export default CountryCard