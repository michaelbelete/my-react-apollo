import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
