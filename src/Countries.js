import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Countries() {
  const FETCH_COUNTRIES = gql`
    {
      Country {
        _id
        name
        capital
        area
        population
        # check the docs for more info
      }
    }
  `;
  const { loading, error, data } = useQuery(FETCH_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error} :( </p>;
  return data.Country.map(({ currency, rate }) => (
    <div key={_id}>
      <p>
        {name} : {capital}
      </p>
    </div>
  ));
}
