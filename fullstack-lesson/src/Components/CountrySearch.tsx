import axios from "axios";
import { useState, useEffect } from "react";
import { CountryInfo } from "../types";
import CountryList from "./CountryList";

const API_LINK = "https://studies.cs.helsinki.fi/restcountries";
const ALL_COUNTRIES = "/api/all";

export default function CountrySearch() {
  const [countrySearchValue, setCountrySearchValue] = useState("");
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  useEffect(() => {
    axios
      .get(`${API_LINK}${ALL_COUNTRIES}`)
      .then((response) => setCountries(response.data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(countrySearchValue.toLowerCase())
  );

  const showCountry = (countryName: string) => {
    setCountrySearchValue(countryName);
  };

  return (
    <div>
      find countries{" "}
      <input
        value={countrySearchValue}
        onChange={(e) => setCountrySearchValue(e.target.value)}
      />
      {countrySearchValue.length !== 0 && (
        <CountryList countries={filteredCountries} showCountry={showCountry} />
      )}
    </div>
  );
}
