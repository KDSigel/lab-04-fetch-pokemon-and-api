import React, { Component } from 'react';
import './App.css';
import SearchPage from './SearchPage';
import PokemonDetail from './PokemonDetail';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (

<Router>
  <Switch>
  <Route 
      path="/" 
      exact
      render={(routerProps) => <HomePage {...routerProps} />} 
    />
  <Route 
      path="/Pokemon" 
      exact
      render={(routerProps) => <SearchPage {...routerProps} />} 
    />        
  <Route 
      path="/Pokemon/:_id"
      exact
      render={(routerProps) => <PokemonDetail {...routerProps} />} 
    />                  
  </Switch>
</Router>
    )
  }
}


