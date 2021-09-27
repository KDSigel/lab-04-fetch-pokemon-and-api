import React, { Component } from 'react';
import './App.css';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';
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
      path="/pokemon" 
      exact
      render={(routerProps) => <SearchPage {...routerProps} />} 
    />        
  <Route 
      path="/pokemon/:pokeid" 
      exact
      render={(routerProps) => <DetailPage {...routerProps} />} 
    />                  
  </Switch>
</Router>
    )
  }
}


