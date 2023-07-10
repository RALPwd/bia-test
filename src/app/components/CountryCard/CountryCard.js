import Link from "next/link";
import React from "react";
import "./CountryCard.scss";
import { useTheme } from "@/app/context/ThemeContext";

const CountryCard = ({ country }) => {
  const { theme } = useTheme()

  return (
    <div className={`countrycard countrycard--${theme}`}>
      <Link href={`/countries/${country.name.common}`}>
        <div style={{maxWidth: "400px"}}>
          <div className={`flag flag--${theme}`}>
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className={`infocontainer`}>
            <h3>{country.name.common}</h3>
            <p><span>Population:</span> {country.population.toLocaleString()}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard