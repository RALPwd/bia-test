"use client"

import { useEffect, useState } from 'react';

const useCountryData = (countryCode) => {
  const [countryData, setCountryData] = useState(null);
  const [nativeNames, setNativeNames] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      const countryData = await data.json();
      setCountryData(countryData);
      setNativeNames(Object.entries(countryData[0].name.nativeName));
    };

    fetchCountryData();
  }, [countryCode]);

  return { countryData, nativeNames };
};

export default useCountryData;