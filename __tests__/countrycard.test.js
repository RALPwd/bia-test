import { render, screen } from '@testing-library/react';
import CountryCard from '@/app/components/CountryCard/CountryCard';
import { ThemeProvider } from '@/app/context/ThemeContext';

test('renders countryCard correctly', () => {

  const country = {
    name: {"common": 'Brazil'},
    flags: {"png": 'https://restcountries.com/data/bra.png', "alt": 'Brazil Flag'},
    population: 206135893,
    region: 'Americas',
    capital: 'Brasília',
  };

  render(
    <ThemeProvider>
      <CountryCard country={country} />
    </ThemeProvider>
  );
  const countryName = screen.getByText(/Brazil/i);
  const countryPopulation = screen.getByText(/206.135.893/i);
  const countryRegion = screen.getByText(/Americas/i);
  const countryCapital = screen.getByText(/Brasília/i);

  expect(countryName).toBeInTheDocument();
  expect(countryPopulation).toBeInTheDocument();
  expect(countryRegion).toBeInTheDocument();
  expect(countryCapital).toBeInTheDocument();

});
