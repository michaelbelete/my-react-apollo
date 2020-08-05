import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Container } from 'react-bootstrap';

import Header from './includes/Header';
import Countries from "./Countries";
import Languages from "./Languages";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/">
              <Countries />
            </Route>          
            <Route path="/languages">
              <Languages />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}