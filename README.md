# Countries API

This project is a web application that displays information about countries using the [REST Countries API](https://restcountries.com/). The application is built using React with Next.js and Sass.

## Architecture

The project follows a component-based architecture, where the application is broken down into smaller, reusable components. The `components` folder contains the following components:

- `ActionBar`: A component that displays the search bar and filter dropdown.
- `Countries`: A component that displays a list of countries.
- `Country`: A component that displays detailed information about a specific country.
- `CountryCard`: A component that displays a summary of a country's information.
- `Header`: A component that displays the application header.
- `RenderCountries`: A component that renders the `CountryCard` component for each country.

The `context` folder contains the React context providers for managing the application state. The `hooks` folder contains custom hooks for fetching and filtering data.

The `countries` folder contains dynamic pages for each country, which are generated at build time using Next.js's static site generation feature.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/countries-api.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Testing

The project includes unit tests for the custom hooks and components using Jest. To run the tests, follow these steps:

1. Install dependencies: `npm install`
2. Run the tests: `npm run test`


## Live Demo

You can view a live demo of the project at [https://bia-test-chi.vercel.app/](https://bia-test-chi.vercel.app/).

## Contributing

This project is for demonstration purposes only and is not open for contributions.

## License

This project is free and open-source.
