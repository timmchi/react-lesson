import { CountryInfo } from "../types";
import Country from "./Country";

export default function CountryList({
  countries,
  showCountry,
}: {
  countries: CountryInfo[];
  showCountry: (countryName: string) => void;
}) {
  if (countries.length > 10)
    return <p>Too many matches, please specify another filter</p>;

  if (countries.length === 1) return <Country country={countries[0]} />;

  return (
    <div>
      {countries.map((country) => (
        <div key={country.fifa}>
          {country.name.common}{" "}
          <button onClick={() => showCountry(country.name.common)}>show</button>
        </div>
      ))}
    </div>
  );
}
