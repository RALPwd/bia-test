import React, { useEffect, useState } from 'react';
import useCountryData from '../../hooks/UseCountryData';
import { useTheme } from '../../context/ThemeContext';
import './Country.scss';
import Link from 'next/link';

const Country = ({ country }) => {
  const { theme } = useTheme();
  const { countryData, nativeNames, borderCodes } = useCountryData(country);
  const [borderNames, setBorderNames] = useState(null);

  useEffect(() => {
    if (borderCodes) {
      const fetchBorderData = async () => {
        const data = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
        );
        const borderData = await data.json();
        const borderNames = borderData.map((border) => border.name.common);
        setBorderNames(borderNames);
      };

      fetchBorderData();
    }
  }, [borderCodes]);

  return (
    <div>
      {countryData && (
        <div className={`countryinformation`}>
          <div className={`flagcontainer`}>
            <img
              src={countryData[0].flags.svg}
              alt={countryData[0].flags.alt}
              style={{ width: '100%' }}
            />
          </div>
          <div className={`infocountry`}>
            <div className={`infocountry__title`}>
              <h1>{countryData[0].name.common}</h1>
            </div>
            <div>
              <p className={`infoitem`}>
                <span className='boldtitle'>Native Names:</span><br />
                {nativeNames &&
                  nativeNames.map(([languageCode, name]) => {
                    const languageName = countryData[0].languages[languageCode];
                    return (
                      <span key={languageCode}>
                        {name.common} ({languageName})
                        <br />
                      </span>
                    );
                  })}
              </p>
              <p className={`infoitem`}><span className='boldtitle'>Population:</span> {countryData[0].population.toLocaleString()}</p>
              <p className={`infoitem`}><span className='boldtitle'>Region:</span> {countryData[0].region}</p>
              <p className={`infoitem`}><span className='boldtitle'>Sub Region:</span> {countryData[0].subregion}</p>
            </div>
            <div>
              <p className={`infoitem`}><span className='boldtitle'>Capital:</span> {countryData[0].capital}</p>
              <p className={`infoitem`}><span className='boldtitle'>Top Level Domain:</span> {countryData[0].tld}</p>
              <p className={`infoitem`}><span className='boldtitle'>Currencies:</span> {Object.values(countryData[0].currencies).map(currency => currency.name).join(', ')}</p>
              <p className={`infoitem`}><span className='boldtitle'>Languages:</span> {Object.values(countryData[0].languages).join(', ')}</p>
            </div>
            <div className={`infocountry__borders`}>
              <p className={`boldtitle`}>Border Countries:</p>
              <div className={`borderlist`}>
                {borderNames ? (
                  borderNames.map((border, index) => {
                    return (
                      <Link href={`/countries/${border}`} key={index}>
                        <span className={`borderitem borderitem--${theme}`}>{border}</span>
                      </Link>
                    );
                  })
                ) : (
                  <span className={`borderitem`}>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
