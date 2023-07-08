import React from 'react';
import useCountryData from '../hooks/UseCountryData';

const Country = ({ country }) => {
  const { countryData, nativeNames } = useCountryData(country);

  const languageDisplayNames = new Intl.DisplayNames(['en'], { type: 'language' });
  
  return (
    <div>
      {countryData && (
        <div>
          <h1>{countryData[0].name.common}</h1>
          <img
            src={countryData[0].flags.svg}
            alt={countryData[0].flags.alt}
            style={{ width: '100%' }}
          />
          <p>
            Native Name:
            {nativeNames &&
              nativeNames.map(([languageCode, name]) => {
                return (
                  <span key={languageCode}>
                  {languageDisplayNames.of(languageCode)}: {name.official}
                    <br />
                  </span>
                );
              })}
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;
