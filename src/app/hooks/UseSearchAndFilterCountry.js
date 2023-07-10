import { useState } from 'react';
import { useCountries } from '../context/CountriesContext';

const useSearchAndFilterCountry = () => {
  const countries = useCountries()
  const [query, setQuery] = useState('')
  const [regionFilter, setRegionFilter] = useState('')

  const filteredCountries = countries.filter(country => {
    if (query === '' && (regionFilter === 'all' || regionFilter === '')) return country
    if (query === '') {
      return country.region === regionFilter
    }

    const { name, capital, region } = country;
    const lowerCaseQuery = query.toLowerCase()
    return (
      name.common.toLowerCase().includes(lowerCaseQuery) ||
      capital?.[0].toLowerCase().includes(lowerCaseQuery) ||
      region?.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return [filteredCountries, query, setQuery, regionFilter, setRegionFilter];
};

export default useSearchAndFilterCountry;
