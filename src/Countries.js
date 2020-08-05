import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Countries() {
  const FETCH_COUNTRIES = gql`
    {
      Country {
        name
        capital
        area
        population
      }
    }
  `;
  const { loading, error, data } = useQuery(FETCH_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error} :( </p>;
  return data.Country.map( (country) => (
    <div key={country.name}>
      <li>
        {country.name} : {country.capital}
      </li>
    </div>
  ));
}
