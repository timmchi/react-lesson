import axios from "axios";
import { CountryInfo } from "./types";
import { useState, useEffect } from "react";

const API_LINK = "https://studies.cs.helsinki.fi/restcountries/";
const ALL_COUNTRIES = "/api/all";
const SINGLE_COUNTRY = "/api/name/";

const CountryData = () => {
  const [countrySearch, setCountrySearch] = useState<string>("");
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  // this will set the search input to be the country name, which will result in only one country showing, so the country data will expand
  const showCountry = (countryName: string) => setCountrySearch(countryName);

  const handleCountrySearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountrySearch(e.target.value);
  };

  // to be continued
  // we're gonna have everything coded in the same component, then we're gonna refactor
  // and then, we're also gonna refactor another big component

  return <>Hello World</>;
};

export default CountryData;
