"use client"

import { useEffect, useState } from 'react';

const useCountryData = (country) => {
  const [countryData, setCountryData] = useState(null);
  const [nativeNames, setNativeNames] = useState(null);
  const [borderCodes, setBorderCodes] = useState('');


  useEffect(() => {
    const fetchCountryData = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const countryData = await data.json();
      setCountryData(countryData);
      countryData[0].name.nativeName && setNativeNames(Object.entries(countryData[0].name.nativeName));
      countryData[0].borders && setBorderCodes(countryData[0].borders.join(','));      
    };

    fetchCountryData();
  }, [country]);

  return { countryData, nativeNames, borderCodes };
};

export default useCountryData;