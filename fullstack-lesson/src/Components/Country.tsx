import { CountryInfo } from "../types";

export default function Country({ country }: { country: CountryInfo }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
      </div>
      <p>
        <strong>languages:</strong>
      </p>
      <ul>
        {Object.entries(country.languages).map((language) => (
          <li key={language[0]}>{language[1]}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={`flag of ${country.name.common}`}
        height="150"
        width="150"
      />
    </div>
  );
}
